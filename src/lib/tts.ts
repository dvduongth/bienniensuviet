'use client';

let speaking = false;
let cachedViVoice: SpeechSynthesisVoice | null = null;
let voiceLoaded = false;

/**
 * Tìm voice tiếng Việt từ danh sách voices của trình duyệt.
 * Ưu tiên: vi-VN exact > bất kỳ voice có lang bắt đầu bằng "vi" > null.
 * Voices load bất đồng bộ trên Chrome, nên cần lắng nghe event voiceschanged.
 */
function findVietnameseVoice(): SpeechSynthesisVoice | null {
  if (cachedViVoice) return cachedViVoice;
  const voices = window.speechSynthesis.getVoices();
  // Ưu tiên vi-VN chính xác
  cachedViVoice =
    voices.find((v) => v.lang === 'vi-VN') ??
    voices.find((v) => v.lang.startsWith('vi')) ??
    null;
  return cachedViVoice;
}

function ensureVoicesLoaded(): Promise<void> {
  if (voiceLoaded) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      voiceLoaded = true;
      resolve();
      return;
    }
    // Chrome loads voices async
    window.speechSynthesis.addEventListener(
      'voiceschanged',
      () => {
        voiceLoaded = true;
        resolve();
      },
      { once: true },
    );
    // Timeout fallback — some browsers never fire the event
    setTimeout(() => {
      voiceLoaded = true;
      resolve();
    }, 1000);
  });
}

export function isTtsAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export async function speakText(text: string) {
  if (!isTtsAvailable()) return;
  // Remove glossary markers [[...]]
  const clean = text.replace(/\[\[([^\]]+)\]\]/g, '$1');
  stopSpeaking();

  await ensureVoicesLoaded();

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'vi-VN';

  // Gán voice tiếng Việt cụ thể (nếu có)
  const viVoice = findVietnameseVoice();
  if (viVoice) {
    utterance.voice = viVoice;
  }

  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  utterance.onstart = () => {
    speaking = true;
  };
  utterance.onend = () => {
    speaking = false;
  };
  utterance.onerror = () => {
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

/** Trả về tên voice tiếng Việt đang dùng (để hiển thị UI) */
export async function getViVoiceName(): Promise<string> {
  if (!isTtsAvailable()) return 'Không hỗ trợ';
  await ensureVoicesLoaded();
  const v = findVietnameseVoice();
  return v ? v.name : 'Không tìm thấy giọng tiếng Việt';
}
