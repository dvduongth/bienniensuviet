'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChapterContent, Scene } from '@/lib/types';
import { GlossaryText } from './GlossaryText';
import { saveSceneProgress, markChapterCompleted } from '@/lib/progress';
import { AudioSettings } from '@/components/AudioSettings';
import { playSfx } from '@/lib/audio';
import { speakText, stopSpeaking, isTtsAvailable } from '@/lib/tts';

interface Props {
  chapter: ChapterContent;
  initialSceneId?: string;
  onEnd: () => void;
}

export function VNEngine({ chapter, initialSceneId, onEnd }: Props) {
  const sceneMap = useMemo(
    () => new Map(chapter.scenes.map((s) => [s.id, s])),
    [chapter.scenes],
  );

  const [currentScene, setCurrentScene] = useState<Scene>(
    sceneMap.get(initialSceneId || chapter.scenes[0]?.id) || chapter.scenes[0],
  );
  const [textRevealed, setTextRevealed] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [ttsEnabled, setTtsEnabled] = useState(false);

  // Text reveal animation
  useEffect(() => {
    setTextRevealed(false);
    setDisplayedText('');
    let idx = 0;
    const full = currentScene.text;
    const timer = setInterval(() => {
      idx++;
      setDisplayedText(full.slice(0, idx));
      if (idx >= full.length) {
        setTextRevealed(true);
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [currentScene]);

  // Auto-TTS when text is fully revealed (only if user has enabled)
  useEffect(() => {
    if (textRevealed && ttsEnabled) {
      speakText(currentScene.text);
    }
  }, [textRevealed, ttsEnabled, currentScene.text]);

  // Cleanup TTS on unmount
  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  // Save progress
  useEffect(() => {
    saveSceneProgress(chapter.id, currentScene.id);
  }, [chapter.id, currentScene.id]);

  const goToScene = useCallback(
    (sceneId: string) => {
      stopSpeaking();
      playSfx('click');
      if (sceneId === '__end__') {
        markChapterCompleted(chapter.id);
        playSfx('complete');
        onEnd();
        return;
      }
      const next = sceneMap.get(sceneId);
      if (next) setCurrentScene(next);
    },
    [chapter.id, onEnd, sceneMap],
  );

  const handleNext = useCallback(() => {
    if (!textRevealed) {
      setDisplayedText(currentScene.text);
      setTextRevealed(true);
      return;
    }
    if (currentScene.choices && currentScene.choices.length > 0) return;
    if (currentScene.nextSceneId) {
      goToScene(currentScene.nextSceneId);
    }
  }, [textRevealed, currentScene, goToScene]);

  // Keyboard: Space/Enter to advance
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleNext]);

  return (
    <div
      className="relative w-full h-screen bg-stone-900 overflow-hidden select-none"
      onClick={handleNext}
    >
      {/* Top bar: audio controls */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <AudioSettings />
        {isTtsAvailable() && (
          <button
            onClick={() => {
              if (ttsEnabled) {
                stopSpeaking();
                setTtsEnabled(false);
              } else {
                setTtsEnabled(true);
                speakText(currentScene.text);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              ttsEnabled ? 'bg-emerald-200 text-emerald-800' : 'bg-stone-200 text-stone-500'
            }`}
            aria-label={ttsEnabled ? 'Tat doc' : 'Doc loi dan chuyen'}
          >
            {ttsEnabled ? 'Doc: BAT' : 'Doc: TAT'}
          </button>
        )}
      </div>

      {/* Background placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-b from-stone-700 to-stone-900 flex items-center justify-center">
          <span className="text-stone-600 text-sm">{currentScene.background || 'bg'}</span>
        </div>
      </div>

      {/* Character sprites placeholders */}
      {currentScene.characterLeft && (
        <div className="absolute bottom-32 left-8 w-32 h-48 bg-stone-600/50 rounded-xl flex items-center justify-center">
          <span className="text-stone-400 text-xs text-center px-1">
            {currentScene.characterLeft.split('/').pop()?.replace('.png', '')}
          </span>
        </div>
      )}
      {currentScene.characterRight && (
        <div className="absolute bottom-32 right-8 w-32 h-48 bg-stone-600/50 rounded-xl flex items-center justify-center">
          <span className="text-stone-400 text-xs text-center px-1">
            {currentScene.characterRight.split('/').pop()?.replace('.png', '')}
          </span>
        </div>
      )}

      {/* Text box */}
      <div className="absolute bottom-0 left-0 right-0 bg-stone-900/90 border-t-2 border-amber-600 p-4 min-h-[160px]">
        <div className="flex items-center gap-2 mb-2">
          {currentScene.speaker && (
            <div className="inline-block bg-amber-700 text-amber-50 px-3 py-1 rounded-t-lg text-sm font-bold -mt-8">
              {currentScene.speaker}
            </div>
          )}
          {/* Re-read button */}
          {isTtsAvailable() && textRevealed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakText(currentScene.text);
              }}
              className="ml-auto bg-stone-700 hover:bg-stone-600 text-amber-200 px-2 py-1 rounded text-xs transition"
              aria-label="Doc lai doan nay"
            >
              Doc lai
            </button>
          )}
        </div>
        <div className="text-amber-50 text-lg leading-relaxed min-h-[60px]">
          {textRevealed ? (
            <GlossaryText text={currentScene.text} glossary={chapter.glossary} />
          ) : (
            <span>{displayedText}</span>
          )}
        </div>

        {/* Choices */}
        {textRevealed && currentScene.choices && currentScene.choices.length > 0 && (
          <div className="flex flex-col gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
            {currentScene.choices.map((choice, i) => (
              <button
                key={i}
                className="bg-amber-700 hover:bg-amber-600 text-amber-50 px-4 py-2 rounded-lg text-left transition text-base font-medium focus:outline-2 focus:outline-amber-400 focus:outline-offset-2"
                onClick={() => goToScene(choice.nextSceneId)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}

        {/* Next indicator */}
        {textRevealed && !currentScene.choices?.length && currentScene.nextSceneId && (
          <div className="text-amber-400 text-sm mt-2 animate-pulse">
            Nhan Space hoac click de tiep tuc...
          </div>
        )}
      </div>
    </div>
  );
}
