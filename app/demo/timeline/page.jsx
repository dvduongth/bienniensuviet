import React, { useEffect, useState } from 'react';

export default function DemoTimelinePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('bienniensuviet.timeline');
    if (raw) {
      try {
        setEvents(JSON.parse(raw));
      } catch {
        setEvents([]);
      }
    }
  }, []);

  const addDemoEvent = () => {
    const now = Date.now();
    const e = { id: 'demo_' + now, type: 'DEMO_EVENT', timestamp: now, data: { note: 'demo' }, layer: 0 };
    const next = [...events, e];
    localStorage.setItem('bienniensuviet.timeline', JSON.stringify(next));
    setEvents(next);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Demo Timeline</h1>
      <button onClick={addDemoEvent}>Add Demo Event</button>
      <ul>
        {events.slice(-20).map((ev) => (
          <li key={ev.id}>
            {new Date(ev.timestamp).toLocaleTimeString()} - {ev.type}
          </li>
        ))}
      </ul>
      <p>Timeline persisted in localStorage key: bienniensuviet.timeline</p>
    </div>
  );
}
