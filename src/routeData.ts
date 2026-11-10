// Builds a course-scoped sidebar and prev/next links for every page.
// Inside a course you only see that course's journey: overview → lessons → final exam.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { getCollection } from 'astro:content';
import { courses, tiers, catalogPath, coursePath, examPath, lessonPath } from './data/courses.mjs';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const href = (path: string) => base + path;

let titles: Map<string, string> | undefined;
async function lessonTitles() {
  if (!titles) {
    const docs = await getCollection('docs');
    titles = new Map(docs.map((d) => [d.id, (d.data.sidebar?.label as string | undefined) ?? d.data.title]));
  }
  return titles;
}

type Link = { type: 'link'; label: string; href: string; isCurrent: boolean; badge: any; attrs: Record<string, string> };
const link = (label: string, path: string, current: string, badge?: any, attrs: Record<string, string> = {}): Link => ({
  type: 'link', label, href: href(path), isCurrent: path === current, badge, attrs,
});

export const onRequest = defineRouteMiddleware(async (context) => {
  const route = context.locals.starlightRoute;
  // Current page as a base-less path with a trailing slash, ignoring the /en/ locale prefix.
  let current = context.url.pathname.slice(base.length).replace(/\/?$/, '/');
  current = current.replace(/^\/en\//, '/');
  const t = await lessonTitles();

  const course = courses.find(
    (c) => coursePath(c) === current || examPath(c) === current || c.lessons.some((l) => lessonPath(l) === current),
  );

  if (course) {
    const seq: Link[] = [
      link('ภาพรวมคอร์ส', coursePath(course), current, undefined, { 'data-step': 'home' }),
      ...course.lessons.map((l, i) =>
        link(`${i + 1}. ${t.get(l) ?? l}`, lessonPath(l), current, undefined, { 'data-lesson': l }),
      ),
      link('แบบทดสอบท้ายคอร์ส', examPath(course), current, { text: 'สอบ', variant: 'tip' }, { 'data-exam': course.id }),
    ];
    const siblings = courses.filter((c) => c.tier === course.tier && c.id !== course.id);
    route.sidebar = [
      link('← คอร์สทั้งหมด', catalogPath, current),
      { type: 'group', label: course.title, entries: seq, collapsed: false, badge: undefined },
      ...(siblings.length
        ? [{
            type: 'group' as const,
            label: `คอร์สอื่นใน ${tiers.find((x) => x.id === course.tier)!.title}`,
            entries: siblings.map((c) => link(c.title, coursePath(c), current)),
            collapsed: true,
            badge: undefined,
          }]
        : []),
    ];
    const i = seq.findIndex((s) => s.isCurrent);
    route.pagination = { prev: i > 0 ? seq[i - 1] : undefined, next: i >= 0 ? seq[i + 1] : undefined };
    return;
  }

  // Outside a course: guides + the course catalogue, one group per tier.
  route.sidebar = [
    {
      type: 'group', label: 'เริ่มต้นที่นี่', collapsed: false, badge: undefined,
      entries: [
        link('คอร์สทั้งหมด', catalogPath, current),
        link('วิธีใช้เว็บไซต์', '/guides/how-to-use/', current),
        link('แม่แบบบทเรียน (สำหรับผู้เขียน)', '/guides/lesson-template/', current),
      ],
    },
    ...tiers.map((tier) => ({
      type: 'group' as const, label: tier.title, collapsed: false, badge: undefined,
      entries: courses.filter((c) => c.tier === tier.id).map((c) => link(c.title, coursePath(c), current)),
    })),
  ];
  route.pagination = { prev: undefined, next: undefined };
});
