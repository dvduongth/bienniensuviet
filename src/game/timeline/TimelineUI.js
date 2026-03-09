// Timeline UI (very lightweight) for cocos2d-js 3.x
class TimelineUI extends cc.Layer {
  ctor() {
    this._super();
    this._initUI();
    return true;
  }

  _initUI() {
    this.setPosition(0, 0);
    this.visible = true;
    this._panel = new cc.LayerColor(cc.color(0,0,0,180), 320, 200);
    this._panel.setPosition(10, 10);
    this.addChild(this._panel);

    this._title = new cc.LabelTTF('Timeline', 'Helvetica', 14);
    this._title.setPosition(160, 190);
    this.addChild(this._title);

    this._list = new cc.Node();
    this._list.setPosition(20, 170);
    this.addChild(this._list);
  }

  update(events) {
    // events: array of {id, timestamp, type, data, layer}
    this._list.removeAllChildren(true);
    const max = Math.min(events.length, 8);
    for (let i = 0; i < max; i++) {
      const e = events[events.length - 1 - i];
      const label = new cc.LabelTTF(`${new Date(e.timestamp).toLocaleTimeString()} - ${e.type}`, 'Helvetica', 12);
      label.setPosition(0, -i * 18);
      this._list.addChild(label);
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TimelineUI;
} else {
  window.TimelineUI = TimelineUI;
}
