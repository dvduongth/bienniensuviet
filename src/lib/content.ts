import { ChapterContent, ChapterIndex, Question, QuestionBank } from './types';

// --- Chapter Index ---
export async function getChapterIndex(): Promise<ChapterIndex> {
  const mod = await import('@/../content/index.json');
  return mod.default as ChapterIndex;
}

// --- Chapter Content ---
// Dynamic import maps for webpack/turbopack to statically analyze
const chapterLoaders: Record<string, () => Promise<{ default: ChapterContent }>> = {
  ch1: () => import('@/../content/ch1.json') as Promise<{ default: ChapterContent }>,
  ch2: () => import('@/../content/ch2.json') as Promise<{ default: ChapterContent }>,
};

export async function getChapterContent(chapterId: string): Promise<ChapterContent | null> {
  const loader = chapterLoaders[chapterId];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}

// --- Questions ---
export async function getQuestionBank(): Promise<QuestionBank> {
  const mod = await import('@/../content/questions.json');
  return mod.default as QuestionBank;
}

export function getQuestionsByTags(questions: Question[], tags: string[]): Question[] {
  return questions.filter((q) => q.tags.some((t) => tags.includes(t)));
}
