// Learner progress, stored per browser in localStorage. Every access is guarded:
// storage can be unavailable (private mode, blocked site data) and pages must still work.

const KEY = 'pea-progress-v1';

export interface ExamRecord { score: number; total: number; percent: number; passed: boolean; date: string }
export interface Progress { lessons: Record<string, string>; exams: Record<string, ExamRecord>; name: string }

export function load(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    return { lessons: raw.lessons || {}, exams: raw.exams || {}, name: raw.name || '' };
  } catch {
    return { lessons: {}, exams: {}, name: '' };
  }
}

function save(p: Progress) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage unavailable */ }
}

export function markLesson(id: string) {
  const p = load();
  if (!p.lessons[id]) p.lessons[id] = new Date().toISOString();
  save(p);
}

export function unmarkLesson(id: string) {
  const p = load();
  delete p.lessons[id];
  save(p);
}

export function isDone(id: string) { return Boolean(load().lessons[id]); }

export function doneCount(ids: string[]) {
  const p = load();
  return ids.filter((id) => p.lessons[id]).length;
}

/** Keeps the best attempt; a pass is never overwritten by a later fail. */
export function recordExam(courseId: string, rec: ExamRecord) {
  const p = load();
  const prev = p.exams[courseId];
  if (!prev || rec.percent > prev.percent || (rec.passed && !prev.passed)) p.exams[courseId] = rec;
  save(p);
}

export function getExam(courseId: string): ExamRecord | undefined { return load().exams[courseId]; }

export function setName(name: string) { const p = load(); p.name = name; save(p); }
export function getName() { return load().name; }
