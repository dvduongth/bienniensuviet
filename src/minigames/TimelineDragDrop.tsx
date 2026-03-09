'use client';

import { useState, useCallback } from 'react';
import { TimelineEvent } from '@/lib/types';

interface Props {
  title: string;
  events: TimelineEvent[];
  onComplete: (score: number) => void;
}

export function TimelineDragDrop({ title, events, onComplete }: Props) {
  // Shuffle events initially
  const [items, setItems] = useState<TimelineEvent[]>(() =>
    [...events].sort(() => Math.random() - 0.5),
  );
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const handleDragStart = (idx: number) => {
    setDragIdx(idx);
  };

  const handleDrop = useCallback(
    (targetIdx: number) => {
      if (dragIdx === null || dragIdx === targetIdx) return;
      const newItems = [...items];
      const [moved] = newItems.splice(dragIdx, 1);
      newItems.splice(targetIdx, 0, moved);
      setItems(newItems);
      setDragIdx(null);
    },
    [dragIdx, items],
  );

  // Mobile: move up/down buttons
  const moveItem = (idx: number, direction: -1 | 1) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= items.length) return;
    const newItems = [...items];
    [newItems[idx], newItems[newIdx]] = [newItems[newIdx], newItems[idx]];
    setItems(newItems);
  };

  const handleSubmit = () => {
    const correctResults = items.map((item, idx) => item.correctOrder === idx + 1);
    setResults(correctResults);
    setSubmitted(true);
    const correctCount = correctResults.filter(Boolean).length;
    const score = correctCount * 25;
    onComplete(score);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-red-800 mb-2 text-center">{title}</h2>
      <p className="text-stone-500 text-sm text-center mb-6">
        Kéo thả (hoặc dùng nút) để sắp xếp các sự kiện theo thứ tự thời gian
      </p>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={item.id}
            draggable={!submitted}
            onDragStart={() => handleDragStart(idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(idx)}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition cursor-grab active:cursor-grabbing ${
              submitted
                ? results[idx]
                  ? 'bg-green-50 border-green-400'
                  : 'bg-red-50 border-red-300'
                : dragIdx === idx
                  ? 'bg-amber-100 border-amber-400 opacity-70'
                  : 'bg-white border-stone-200 hover:border-amber-300'
            }`}
          >
            {/* Order number */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                submitted
                  ? results[idx]
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-amber-200 text-amber-800'
              }`}
            >
              {idx + 1}
            </div>

            {/* Event text */}
            <span className="flex-1 text-stone-700 font-medium">{item.text}</span>

            {/* Move buttons (mobile-friendly) */}
            {!submitted && (
              <div className="flex flex-col gap-1 shrink-0">
                <button
                  onClick={() => moveItem(idx, -1)}
                  disabled={idx === 0}
                  className="w-7 h-7 bg-stone-200 hover:bg-stone-300 rounded text-xs disabled:opacity-30 transition"
                  aria-label="Di chuyển lên"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveItem(idx, 1)}
                  disabled={idx === items.length - 1}
                  className="w-7 h-7 bg-stone-200 hover:bg-stone-300 rounded text-xs disabled:opacity-30 transition"
                  aria-label="Di chuyển xuống"
                >
                  ↓
                </button>
              </div>
            )}

            {/* Result indicator */}
            {submitted && (
              <span className="text-lg shrink-0">
                {results[idx] ? '✓' : '✗'}
              </span>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-amber-600 hover:bg-amber-500 text-white rounded-xl py-3 font-semibold text-lg transition shadow"
        >
          Kiểm tra
        </button>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-stone-700">
            Đúng {results.filter(Boolean).length}/{items.length} mốc ({results.filter(Boolean).length * 25} điểm)
          </p>
        </div>
      )}
    </div>
  );
}
