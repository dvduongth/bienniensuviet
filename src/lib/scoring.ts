/**
 * Battle scoring system:
 * - Correct answer: +100 base
 * - Speed bonus: 0..40 based on time remaining (out of 6s per question)
 * - Streak bonus: +10 * streak, capped at 50
 */

const BASE_SCORE = 100;
const MAX_SPEED_BONUS = 40;
const MAX_TIME_PER_QUESTION = 6; // seconds
const STREAK_MULTIPLIER = 10;
const MAX_STREAK_BONUS = 50;

export function calcQuestionScore(correct: boolean, timeSpentMs: number, streak: number): number {
  if (!correct) return 0;

  const timeSpentSec = timeSpentMs / 1000;
  const timeRemaining = Math.max(0, MAX_TIME_PER_QUESTION - timeSpentSec);
  const speedBonus = Math.round((timeRemaining / MAX_TIME_PER_QUESTION) * MAX_SPEED_BONUS);
  const streakBonus = Math.min(streak * STREAK_MULTIPLIER, MAX_STREAK_BONUS);

  return BASE_SCORE + speedBonus + streakBonus;
}

export function selectRandomQuestions<T extends { tags: string[] }>(
  questions: T[],
  tags: string[],
  count: number,
): T[] {
  const filtered = questions.filter((q) => q.tags.some((t) => tags.includes(t)));
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getWeekKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
  const week = Math.ceil((days + startOfYear.getDay() + 1) / 7);
  return `${year}-W${String(week).padStart(2, '0')}`;
}
