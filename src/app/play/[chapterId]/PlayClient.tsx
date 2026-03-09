'use client';

import { useState } from 'react';
import { ChapterContent } from '@/lib/types';
import { VNEngine } from '@/game/VNEngine';
import { TimelineDragDrop } from '@/minigames/TimelineDragDrop';
import { loadProgress, addStars } from '@/lib/progress';
import Link from 'next/link';

interface Props {
  chapter: ChapterContent;
}

type Phase = 'story' | 'minigame' | 'complete';

export function PlayClient({ chapter }: Props) {
  const [phase, setPhase] = useState<Phase>('story');
  const [minigameScore, setMinigameScore] = useState(0);
  const progress = loadProgress();
  const savedScene = progress.currentScene[chapter.id];

  const timelineMinigame = chapter.minigames?.find((m) => m.type === 'timeline');

  const handleStoryEnd = () => {
    if (timelineMinigame) {
      setPhase('minigame');
    } else {
      setPhase('complete');
    }
  };

  const handleMinigameComplete = (score: number) => {
    setMinigameScore(score);
    const stars = Math.ceil(score / 25); // 1 star per correct event
    addStars(chapter.id, stars);
    setPhase('complete');
  };

  if (phase === 'story') {
    return <VNEngine chapter={chapter} initialSceneId={savedScene} onEnd={handleStoryEnd} />;
  }

  if (phase === 'minigame' && timelineMinigame) {
    return (
      <div className="min-h-screen bg-amber-50">
        <TimelineDragDrop
          title={timelineMinigame.title}
          events={timelineMinigame.events}
          onComplete={handleMinigameComplete}
        />
      </div>
    );
  }

  // Complete phase
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-amber-50 gap-4">
      <h2 className="text-2xl font-bold">Hoàn thành: {chapter.title}!</h2>
      {minigameScore > 0 && (
        <p className="text-amber-300 text-lg">Mini-game: {minigameScore} điểm</p>
      )}
      <div className="flex gap-4">
        <Link
          href="/chapters"
          className="bg-amber-700 hover:bg-amber-600 px-6 py-3 rounded-lg font-semibold transition"
        >
          Về danh sách chương
        </Link>
        <button
          className="bg-red-800 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
          onClick={() => {
            setPhase('story');
            setMinigameScore(0);
          }}
        >
          Đọc lại
        </button>
      </div>
    </div>
  );
}
