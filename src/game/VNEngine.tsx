'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { ChapterContent, Scene } from '@/lib/types';
import { GlossaryText } from './GlossaryText';
import { saveSceneProgress, markChapterCompleted } from '@/lib/progress';
import { AudioSettings } from '@/components/AudioSettings';
import { playSfx } from '@/lib/audio';
import { speakText, stopSpeaking, isTtsAvailable } from '@/lib/tts';

/* ── Asset mapping: scene paths → real texture files ── */
const BG_MAP: Record<string, { src: string; base?: string }> = {
  '/bg/village.png': { src: '/textures/Hung_Vuong_village.png' },
  '/bg/mountain.png': { src: '/textures/VanLang_AuLac_CoLoa_bacground.png' },
  '/bg/palace.png': { src: '/textures/VanLang_AuLac_CoLoa_bacground.png' },
  '/bg/castle.png': { src: '/textures/Au_Lac_Co_Loa_citadel.png', base: '/textures/startup_story_backround.png' },
  '/bg/battle.png': { src: '/textures/Trung_Sisters_elephants_silhouette.png', base: '/textures/startup_story_backround.png' },
  '/bg/map.png': { src: '/textures/startup_story_backround.png' },
};

const CHAR_MAP: Record<string, string> = {
  '/char/lac-long-quan.png': '/textures/lac_long_quan_character.png',
  '/char/au-co.png': '/textures/au_co_character.png',
  '/char/hung-vuong.png': '/textures/Hung_Vuong_character.png',
  '/char/thuc-phan.png': '/textures/thuc_phan_character.png',
  '/char/trung-trac.png': '/textures/trung_trac_character.png',
  '/char/trung-nhi.png': '/textures/trung_nhi_character.png',
};

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
            aria-label={ttsEnabled ? 'Tắt đọc' : 'Đọc lời dẫn chuyện'}
          >
            {ttsEnabled ? 'Đọc: BẬT' : 'Đọc: TẮT'}
          </button>
        )}
      </div>

      {/* Background */}
      <div className="absolute inset-0">
        {(() => {
          const bgInfo = currentScene.background ? BG_MAP[currentScene.background] : null;
          if (!bgInfo) {
            return <div className="w-full h-full bg-gradient-to-b from-stone-700 to-stone-900" />;
          }
          return (
            <>
              {bgInfo.base && (
                <Image
                  src={bgInfo.base}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <Image
                src={bgInfo.src}
                alt=""
                fill
                className={bgInfo.base ? 'object-contain' : 'object-cover'}
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/40" />
            </>
          );
        })()}
      </div>

      {/* Character sprites */}
      {currentScene.characterLeft && (
        <div className="absolute bottom-36 left-4 sm:left-8 w-28 sm:w-40 h-52 sm:h-72 z-10 drop-shadow-2xl">
          <Image
            src={CHAR_MAP[currentScene.characterLeft] || currentScene.characterLeft}
            alt={currentScene.characterLeft.split('/').pop()?.replace('.png', '') || ''}
            fill
            className="object-contain object-bottom"
          />
        </div>
      )}
      {currentScene.characterRight && (
        <div className="absolute bottom-36 right-4 sm:right-8 w-28 sm:w-40 h-52 sm:h-72 z-10 drop-shadow-2xl">
          <Image
            src={CHAR_MAP[currentScene.characterRight] || currentScene.characterRight}
            alt={currentScene.characterRight.split('/').pop()?.replace('.png', '') || ''}
            fill
            className="object-contain object-bottom"
          />
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
              aria-label="Đọc lại đoạn này"
            >
              Đọc lại
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
            Nhấn Space hoặc click để tiếp tục...
          </div>
        )}
      </div>
    </div>
  );
}
