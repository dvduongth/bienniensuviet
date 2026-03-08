// Simple Event System (Pub/Sub)
class EventSystem {
  constructor() {
    this.listeners = {};
  }
  on(eventType, cb) {
    if (!this.listeners[eventType]) this.listeners[eventType] = [];
    this.listeners[eventType].push(cb);
  }
  off(eventType, cb) {
    const list = this.listeners[eventType];
    if (!list) return;
    const idx = list.indexOf(cb);
    if (idx >= 0) list.splice(idx, 1);
  }
  emit(eventType, payload) {
    const list = this.listeners[eventType];
    if (!list) return;
    for (const cb of list) { try { cb(payload); } catch (e) { /* swallow */ } }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EventSystem;
} else {
  window.EventSystem = EventSystem;
}
