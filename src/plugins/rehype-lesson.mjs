// Turns the conventions used in lesson Markdown into styled, structured HTML:
//
// 1. The opening "**ระดับ:** … / **ความรู้ที่ต้องมีก่อน:** …" paragraph becomes a lesson info card,
//    with the level rendered as a badge.
// 2. The list under "## วัตถุประสงค์การเรียนรู้" gets the `objectives` class (checklist styling).
// 3. The list under "## แบบฝึกหัด" gets the `exercises` class, and every "(เฉลย: …)" answer is
//    folded into a <details> element so learners can try the problem before revealing it.
//
// Content files stay plain Markdown; only the rendered output changes.

const META_LABELS = ['ระดับ', 'ความรู้ที่ต้องมีก่อน', 'ใช้ต่อใน', 'ทบทวนจาก ม.ปลาย'];

const LEVELS = {
  Beginner: { th: 'พื้นฐาน', n: 1 },
  Intermediate: { th: 'ปานกลาง', n: 2 },
  Advanced: { th: 'ขั้นสูง', n: 3 },
};

const h = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });
const t = (value) => ({ type: 'text', value });

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function metaLabel(node) {
  if (node?.type !== 'element' || node.tagName !== 'strong') return null;
  const label = textOf(node).trim().replace(/:$/, '');
  return META_LABELS.includes(label) ? label : null;
}

function trimEdges(nodes) {
  const out = nodes.map((n) => (n.type === 'text' ? { ...n } : n));
  while (out.length && out[0].type === 'text' && !out[0].value.trim()) out.shift();
  while (out.length && out.at(-1).type === 'text' && !out.at(-1).value.trim()) out.pop();
  if (out[0]?.type === 'text') out[0].value = out[0].value.replace(/^\s+/, '');
  if (out.at(-1)?.type === 'text') out.at(-1).value = out.at(-1).value.replace(/\s+$/, '');
  return out;
}

function levelBadges(raw) {
  const names = raw.split(/[–-]/).map((s) => s.trim()).filter((s) => LEVELS[s]);
  if (!names.length) return [t(raw)];
  const max = Math.max(...names.map((n) => LEVELS[n].n));
  const dots = [1, 2, 3].map((i) => h('span', { className: ['level-dot', i <= max ? 'on' : 'off'] }));
  const label = names.map((n) => `${LEVELS[n].th} (${n})`).join(' – ');
  return [
    h('span', { className: ['level-badge', `level-${max}`] }, [
      h('span', { className: ['level-dots'], ariaHidden: 'true' }, dots),
      t(label),
    ]),
  ];
}

function buildMetaCard(p) {
  const rows = [];
  let current = null;
  for (const child of p.children) {
    const label = metaLabel(child);
    if (label) {
      current = { label, value: [] };
      rows.push(current);
    } else if (current) {
      current.value.push(child);
    }
  }
  return h(
    'div',
    { className: ['lesson-meta', 'not-content'] },
    rows.map(({ label, value }) => {
      const cleaned = trimEdges(value);
      const body = label === 'ระดับ' ? levelBadges(textOf({ children: cleaned }).trim()) : cleaned;
      return h('div', { className: ['lesson-meta-row'] }, [
        h('span', { className: ['lesson-meta-label'] }, [t(label === 'ระดับ' ? 'ระดับ' : label)]),
        h('span', { className: ['lesson-meta-value'] }, body),
      ]);
    }),
  );
}

// Heading text whether the h2 is bare or already wrapped by Starlight's anchor-link wrapper.
function headingText(node) {
  if (node?.type !== 'element') return null;
  if (node.tagName === 'h2') return textOf(node).trim();
  const inner = (node.children || []).find((c) => c.type === 'element' && c.tagName === 'h2');
  return inner ? textOf(inner).trim() : null;
}

function nextElement(siblings, i) {
  for (let j = i + 1; j < siblings.length; j++) {
    const s = siblings[j];
    if (s.type === 'element') return s;
    if (s.type === 'text' && s.value.trim()) return null;
  }
  return null;
}

function addClass(node, cls) {
  const c = node.properties.className;
  node.properties.className = Array.isArray(c) ? [...c, cls] : c ? [c, cls] : [cls];
}

// Fold "(เฉลย: …)" — or "… เฉลย: …)" inside a hint — into a <details> answer.
function foldAnswer(li) {
  // Loose lists wrap item content in <p>; unwrap so <details> is a valid child.
  if (li.children.some((c) => c.type === 'element' && c.tagName === 'p')) {
    li.children = li.children.flatMap((c) => (c.type === 'element' && c.tagName === 'p' ? c.children : [c]));
  }
  const kids = li.children;
  let start = -1, marker = '', pos = -1;
  for (let i = 0; i < kids.length && start < 0; i++) {
    if (kids[i].type !== 'text') continue;
    for (const m of ['(เฉลย:', 'เฉลย:']) {
      const k = kids[i].value.indexOf(m);
      if (k >= 0) { start = i; marker = m; pos = k; break; }
    }
  }
  if (start < 0) return;

  const before = kids.slice(0, start);
  let head = kids[start].value.slice(0, pos);
  // "(คำใบ้: … — เฉลย: …)": drop the dash that introduced the answer.
  if (marker === 'เฉลย:') head = head.replace(/\s*[—–-]\s*$/, '');
  if (head) before.push(t(head));

  // Walk forward to the ")" that closes the answer.
  const answer = [];
  let rest = [];
  let depth = 0;
  const queue = [t(kids[start].value.slice(pos + marker.length)), ...kids.slice(start + 1)];
  for (let q = 0; q < queue.length; q++) {
    const node = queue[q];
    if (node.type !== 'text') { answer.push(node); continue; }
    let cut = -1;
    for (let c = 0; c < node.value.length; c++) {
      const ch = node.value[c];
      if (ch === '(') depth++;
      if (ch === ')') { if (depth === 0) { cut = c; break; } depth--; }
    }
    if (cut < 0) { answer.push(node); continue; }
    answer.push(t(node.value.slice(0, cut)));
    // Drop the closing paren we consumed with "(เฉลย:"; keep it when it closes an outer hint.
    const tail = marker === '(เฉลย:' ? node.value.slice(cut + 1) : node.value.slice(cut);
    rest = [...(tail ? [t(tail)] : []), ...queue.slice(q + 1)];
    break;
  }

  // `not-content` opts out of Starlight's generic <details> styling.
  const details = h('details', { className: ['answer', 'not-content'] }, [
    h('summary', {}, [t('ดูเฉลย')]),
    h('span', { className: ['answer-body'] }, trimEdges(answer)),
  ]);
  // Any question text after the answer (e.g. a follow-up "why?") stays with the question.
  li.children = [...trimEdges([...before, ...rest]), details];
}

function enhance(siblings) {
  for (let i = 0; i < siblings.length; i++) {
    const node = siblings[i];
    if (node.type !== 'element') continue;

    if (node.tagName === 'p' && metaLabel(node.children.find((c) => c.type === 'element' || c.value?.trim()))) {
      siblings[i] = buildMetaCard(node);
      continue;
    }

    const title = headingText(node);
    if (title === 'วัตถุประสงค์การเรียนรู้') {
      const list = nextElement(siblings, i);
      if (list?.tagName === 'ul') addClass(list, 'objectives');
    }
    if (title === 'แบบฝึกหัด') {
      const list = nextElement(siblings, i);
      if (list?.tagName === 'ol' || list?.tagName === 'ul') {
        addClass(list, 'exercises');
        list.children.filter((c) => c.type === 'element' && c.tagName === 'li').forEach(foldAnswer);
      }
    }
  }
}

export default function rehypeLesson() {
  return (tree) => enhance(tree.children);
}
