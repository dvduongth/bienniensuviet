// Timeline Map System - Skeleton
// Timeline events stored in localStorage for quick prototype
class TimelineMap {
  constructor(storageKey = 'bienniensuviet.timeline') {
    this.storageKey = storageKey;
    this.events = this._load() || [];
  }

  addEvent(evt) {
    // evt: { id, timestamp, type, data, layer }
    const e = Object.assign({ id: this._uid(), timestamp: Date.now() }, evt);
    this.events.push(e);
    this._save();
    return e;
  }

  getEvents(filterFn) {
    if (!filterFn) return this.events.slice();
    return this.events.filter(filterFn);
  }

  removeEvent(id) {
    this.events = this.events.filter(e => e.id !== id);
    this._save();
  }

  clear() {
    this.events = [];
    this._save();
  }

  // internal
  _uid() {
    return 'ev_' + Math.random().toString(36).slice(2, 9);
  }

  _load() {
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  _save() {
    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(this.events));
    } catch (e) {
      // ignore quota errors in prototype
    }
  }
}

// export for integration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TimelineMap;
} else {
  window.TimelineMap = TimelineMap;
}
