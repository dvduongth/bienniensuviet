'use client';

const STORAGE_KEY_BGM = 'bnsv-bgm';
const STORAGE_KEY_SFX = 'bnsv-sfx';

export function isBgmEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY_BGM) !== 'off';
}

export function isSfxEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY_SFX) !== 'off';
}

export function setBgmEnabled(on: boolean) {
  localStorage.setItem(STORAGE_KEY_BGM, on ? 'on' : 'off');
}

export function setSfxEnabled(on: boolean) {
  localStorage.setItem(STORAGE_KEY_SFX, on ? 'on' : 'off');
}

// Simple SFX player (placeholder sounds)
let audioCtx: AudioContext | null = null;

function getAudioContext() {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

export function playSfx(type: 'click' | 'correct' | 'wrong' | 'complete') {
  if (!isSfxEnabled()) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = 0.15;

    const freqs: Record<string, number> = {
      click: 600,
      correct: 800,
      wrong: 300,
      complete: 1000,
    };
    osc.frequency.value = freqs[type] || 440;
    osc.type = type === 'wrong' ? 'sawtooth' : 'sine';
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch {
    // Audio not available
  }
}
