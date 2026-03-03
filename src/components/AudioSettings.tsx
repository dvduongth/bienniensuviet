'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { isBgmEnabled, isSfxEnabled, setBgmEnabled, setSfxEnabled } from '@/lib/audio';

function subscribeToDummy(cb: () => void) {
  // No external subscription needed; state lives in localStorage.
  // Re-render is triggered by the toggle handler calling forceUpdate via key trick below.
  void cb;
  return () => {};
}

export function AudioSettings() {
  // Read from localStorage safely (SSR returns true)
  const bgm = useSyncExternalStore(subscribeToDummy, isBgmEnabled, () => true);
  const sfx = useSyncExternalStore(subscribeToDummy, isSfxEnabled, () => true);

  // Force re-render after toggling by using a state-free approach
  const toggleBgm = useCallback(() => {
    setBgmEnabled(!isBgmEnabled());
    // Trigger re-render by dispatching a storage event
    window.dispatchEvent(new Event('storage'));
  }, []);

  const toggleSfx = useCallback(() => {
    setSfxEnabled(!isSfxEnabled());
    window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={toggleBgm}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
          bgm ? 'bg-amber-200 text-amber-800' : 'bg-stone-200 text-stone-500'
        }`}
        aria-label={bgm ? 'Tat nhac nen' : 'Bat nhac nen'}
      >
        {bgm ? 'Nhac: BAT' : 'Nhac: TAT'}
      </button>
      <button
        onClick={toggleSfx}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
          sfx ? 'bg-amber-200 text-amber-800' : 'bg-stone-200 text-stone-500'
        }`}
        aria-label={sfx ? 'Tat am thanh' : 'Bat am thanh'}
      >
        {sfx ? 'SFX: BAT' : 'SFX: TAT'}
      </button>
    </div>
  );
}
