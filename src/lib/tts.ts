'use client';

let speaking = false;

export function isTtsAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakText(text: string) {
  if (!isTtsAvailable()) return;
  // Remove glossary markers [[...]]
  const clean = text.replace(/\[\[([^\]]+)\]\]/g, '$1');
  stopSpeaking();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.9;
  utterance.onstart = () => {
    speaking = true;
  };
  utterance.onend = () => {
    speaking = false;
  };
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    speaking = false;
  }
}

export function isSpeaking(): boolean {
  return speaking;
}
