// AI Programmer: End-to-end DemoTimelineScene integration
const TimelineMap = require('./TimelineMap');
const TimelineUI = require('./TimelineUI');
const EventSystem = require('./EventSystem');

cc.Class({
  extends: cc.Component,

  properties: {
    // allow injecting a prebuilt UI prefab if desired; fallback to runtime UI
  },

  onLoad() {
    // initialize managers
    this.timeline = new TimelineMap('bienniensuviet.timeline');
    this.events = new EventSystem();

    // create and attach UI
    this.timelineUI = new TimelineUI();
    this.node.addChild(this.timelineUI);

    // Hook up event propagation: listen to TIMELINE_ADD to push into timeline
    this.events.on('TIMELINE_ADD', (payload) => {
      if (payload && payload.evt) {
        this.timeline.addEvent(payload.evt);
        this._refreshUI();
        console.log('[DemoTimelineScene] TIMELINE_ADD processed', payload.evt);
      }
    });

    // Seed initial events
    this._seedDemo();

    // Keyboard input: press F5 to emit a new TIMELINE_ADD event
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
  },

  _seedDemo() {
    const now = Date.now();
    this.timeline.clear();
    this.timeline.addEvent({ type: 'LEVEL_START', timestamp: now, data: { level: 1 }, layer: 0 });
    this.timeline.addEvent({ type: 'QUEST_ACCEPTED', timestamp: now + 1000, data: { quest: 'Find the ancient village' }, layer: 0 });
    this.timeline.addEvent({ type: 'BOSS_DEFEATED', timestamp: now + 2000, data: { boss: 'Dragon' }, layer: 1 });
    this._refreshUI();
  },

  _refreshUI() {
    const events = this.timeline.getEvents();
    if (this.timelineUI && typeof this.timelineUI.update === 'function') {
      this.timelineUI.update(events);
      console.log('[DemoTimelineScene] UI refreshed with', events.length, 'events');
    }
  },

  _onKeyDown(evt) {
    // F5 adds a new event to timeline via EventSystem
    if (evt.keyCode === cc.KEY.f5) {
      const evtNew = {
        type: 'USER_ADDED',
        timestamp: Date.now(),
        data: { note: 'user-triggered' },
        layer: 0
      };
      this.events.emit('TIMELINE_ADD', { evt: evtNew });
      console.log('[DemoTimelineScene] TIMELINE_ADD emitted from keyboard', evtNew);
    }
  },

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
  }
});
