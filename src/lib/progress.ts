import { PlayerProgress } from './types';

const STORAGE_KEY = 'bnsv-progress';

const defaultProgress: PlayerProgress = {
  chaptersCompleted: [],
  currentScene: {},
  stars: {},
};

export function loadProgress(): PlayerProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: PlayerProgress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function saveSceneProgress(chapterId: string, sceneId: string) {
  const p = loadProgress();
  p.currentScene[chapterId] = sceneId;
  saveProgress(p);
}

export function markChapterCompleted(chapterId: string) {
  const p = loadProgress();
  if (!p.chaptersCompleted.includes(chapterId)) {
    p.chaptersCompleted.push(chapterId);
  }
  saveProgress(p);
}

export function addStars(chapterId: string, stars: number) {
  const p = loadProgress();
  p.stars[chapterId] = (p.stars[chapterId] || 0) + stars;
  saveProgress(p);
}
