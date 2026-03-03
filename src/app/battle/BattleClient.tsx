'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Question, BattleAnswer } from '@/lib/types';
import { calcQuestionScore, selectRandomQuestions, getWeekKey } from '@/lib/scoring';
import {
  WEEKLY_TOPIC_TAG,
  BATTLE_QUESTION_COUNT,
  BATTLE_TOTAL_TIME,
  BATTLE_TIME_PER_QUESTION,
} from '@/lib/battle-config';

interface Props {
  allQuestions: Question[];
}

type Phase = 'ready' | 'playing' | 'result';

export function BattleClient({ allQuestions }: Props) {
  const [phase, setPhase] = useState<Phase>('ready');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalTimeLeft, setTotalTimeLeft] = useState(BATTLE_TOTAL_TIME);
  const [questionStartTime, setQuestionStartTime] = useState(0);
  const [answers, setAnswers] = useState<BattleAnswer[]>([]);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [usedLifeline, setUsedLifeline] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<Set<number>>(new Set());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQ = questions[currentIdx];

  // Start game
  const startBattle = useCallback(() => {
    const selected = selectRandomQuestions(allQuestions, WEEKLY_TOPIC_TAG, BATTLE_QUESTION_COUNT);
    setQuestions(selected);
    setCurrentIdx(0);
    setTotalTimeLeft(BATTLE_TOTAL_TIME);
    setQuestionStartTime(Date.now());
    setAnswers([]);
    setStreak(0);
    setScore(0);
    setUsedLifeline(false);
    setHiddenOptions(new Set());
    setPhase('playing');
  }, [allQuestions]);

  // Timer countdown
  useEffect(() => {
    if (phase !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTotalTimeLeft((prev) => {
        if (prev <= 1) {
          setPhase('result');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // Auto-advance after BATTLE_TIME_PER_QUESTION seconds per question
  useEffect(() => {
    if (phase !== 'playing' || !currentQ) return;
    const timeout = setTimeout(() => {
      handleAnswer(-1); // timeout = no answer
    }, BATTLE_TIME_PER_QUESTION * 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx, phase]);

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      if (!currentQ) return;
      const timeSpent = Date.now() - questionStartTime;
      const correct = selectedIndex === currentQ.correctIndex;
      const newStreak = correct ? streak + 1 : 0;
      const pts = calcQuestionScore(correct, timeSpent, streak);

      const answer: BattleAnswer = {
        questionId: currentQ.id,
        selectedIndex,
        correct,
        timeSpent,
      };

      setAnswers((prev) => [...prev, answer]);
      setStreak(newStreak);
      setScore((prev) => prev + pts);
      setHiddenOptions(new Set());

      if (currentIdx + 1 >= questions.length) {
        setPhase('result');
      } else {
        setCurrentIdx((prev) => prev + 1);
        setQuestionStartTime(Date.now());
      }
    },
    [currentQ, questionStartTime, streak, currentIdx, questions.length],
  );

  // 50/50 lifeline
  const useLifeline = useCallback(() => {
    if (usedLifeline || !currentQ) return;
    setUsedLifeline(true);
    const wrongIndexes = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correctIndex);
    // Remove 2 wrong options
    const toHide = wrongIndexes.sort(() => Math.random() - 0.5).slice(0, 2);
    setHiddenOptions(new Set(toHide));
  }, [usedLifeline, currentQ]);

  // READY phase
  if (phase === 'ready') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold text-red-800 mb-4">Dau nhanh</h1>
        <p className="text-stone-600 mb-2">Tra loi 10 cau hoi trong 60 giay!</p>
        <p className="text-stone-500 text-sm mb-6">
          Chu de tuan nay: <strong>Van Lang - Au Lac</strong>
        </p>
        <button
          onClick={startBattle}
          className="bg-amber-600 text-white rounded-xl px-8 py-4 text-lg font-semibold hover:bg-amber-500 transition shadow"
        >
          Bat dau!
        </button>
      </div>
    );
  }

  // RESULT phase
  if (phase === 'result') {
    const correctCount = answers.filter((a) => a.correct).length;
    return <BattleResultView score={score} correctCount={correctCount} answers={answers} questions={questions} onReplay={startBattle} />;
  }

  // PLAYING phase
  if (!currentQ) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-stone-500">
          Cau {currentIdx + 1}/{questions.length}
        </span>
        <span className={`font-bold text-lg ${totalTimeLeft <= 10 ? 'text-red-600' : 'text-stone-700'}`}>
          {totalTimeLeft}s
        </span>
        <span className="text-sm text-amber-700 font-semibold">{score} diem</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-stone-200 rounded-full mb-6">
        <div
          className="h-2 bg-amber-500 rounded-full transition-all"
          style={{ width: `${(totalTimeLeft / BATTLE_TOTAL_TIME) * 100}%` }}
        />
      </div>

      {/* Streak */}
      {streak > 1 && (
        <div className="text-center text-amber-600 font-bold text-sm mb-2">
          Streak x{streak}!
        </div>
      )}

      {/* Question */}
      <div className="bg-white rounded-xl p-6 shadow border border-amber-200 mb-4">
        <p className="text-lg font-medium text-stone-800">{currentQ.prompt}</p>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {currentQ.options.map((opt, i) => {
          if (hiddenOptions.has(i)) {
            return (
              <div key={i} className="bg-stone-100 rounded-lg p-4 text-stone-300 line-through">
                {opt}
              </div>
            );
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="bg-white hover:bg-amber-50 border-2 border-stone-200 hover:border-amber-400 rounded-lg p-4 text-left text-stone-700 font-medium transition"
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Lifeline */}
      {!usedLifeline && (
        <button
          onClick={useLifeline}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 font-semibold transition"
        >
          Phao 50/50
        </button>
      )}
    </div>
  );
}

function BattleResultView({
  score,
  correctCount,
  answers,
  questions,
  onReplay,
}: {
  score: number;
  correctCount: number;
  answers: BattleAnswer[];
  questions: Question[];
  onReplay: () => void;
}) {
  const weekKey = getWeekKey();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-800 mb-2">Ket qua</h2>
        <p className="text-4xl font-bold text-amber-600">{score} diem</p>
        <p className="text-stone-600 mt-2">
          Dung {correctCount}/{answers.length} cau | Tuan {weekKey}
        </p>
      </div>

      {/* Wrong answers review */}
      <div className="space-y-3 mb-6">
        <h3 className="font-semibold text-stone-700">Cac cau sai:</h3>
        {answers.map((a, i) => {
          if (a.correct) return null;
          const q = questions[i];
          if (!q) return null;
          return (
            <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-medium text-stone-800 mb-1">{q.prompt}</p>
              <p className="text-red-600 text-sm">
                Ban chon: {a.selectedIndex >= 0 ? q.options[a.selectedIndex] : '(het gio)'}
              </p>
              <p className="text-green-700 text-sm">
                Dap an dung: {q.options[q.correctIndex]}
              </p>
              <p className="text-stone-500 text-sm mt-1">{q.explanation}</p>
            </div>
          );
        })}
        {answers.every((a) => a.correct) && (
          <p className="text-green-700 font-semibold">Tuyet voi! Ban tra loi dung het!</p>
        )}
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={onReplay}
          className="bg-amber-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-amber-500 transition"
        >
          Choi lai
        </button>
        <a
          href="/leaderboard"
          className="bg-stone-700 text-amber-50 rounded-xl px-6 py-3 font-semibold hover:bg-stone-600 transition"
        >
          Bang xep hang
        </a>
      </div>
    </div>
  );
}
