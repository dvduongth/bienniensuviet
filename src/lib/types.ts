// ===== Content Types =====

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  contentFile: string;
  quizTags: string[];
  minigames: string[];
}

export interface ChapterIndex {
  chapters: Chapter[];
}

export interface Scene {
  id: string;
  background?: string;
  characterLeft?: string;
  characterRight?: string;
  speaker?: string;
  text: string;
  choices?: Choice[];
  nextSceneId?: string;
}

export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface ChapterContent {
  id: string;
  title: string;
  scenes: Scene[];
  glossary: GlossaryEntry[];
  minigames: MinigameConfig[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface MinigameConfig {
  id: string;
  type: 'timeline';
  title: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  text: string;
  correctOrder: number;
}

// ===== Question Types =====

export interface Question {
  id: string;
  chapterId: string;
  tags: string[];
  difficulty: 1 | 2 | 3;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuestionBank {
  questions: Question[];
}

// ===== Game State Types =====

export interface PlayerProgress {
  chaptersCompleted: string[];
  currentScene: Record<string, string>; // chapterId -> sceneId
  stars: Record<string, number>; // chapterId -> star count
}

export interface BattleResult {
  score: number;
  correctCount: number;
  totalQuestions: number;
  answers: BattleAnswer[];
}

export interface BattleAnswer {
  questionId: string;
  selectedIndex: number;
  correct: boolean;
  timeSpent: number;
}

// ===== Leaderboard Types =====

export interface LeaderboardEntry {
  rank: number;
  userName: string;
  score: number;
  correctCount: number;
  weekKey: string;
}
