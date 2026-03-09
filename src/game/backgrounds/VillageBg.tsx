export function VillageBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="60%" stopColor="#E0F0FF" />
          <stop offset="100%" stopColor="#FFF8E7" />
        </linearGradient>
        <linearGradient id="water-v" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5BA3CF" />
          <stop offset="50%" stopColor="#7EC8E3" />
          <stop offset="100%" stopColor="#5BA3CF" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky-v)" />

      {/* Sun */}
      <circle cx="950" cy="100" r="60" fill="#FFD700" opacity="0.9">
        <animate attributeName="r" values="58;62;58" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="950" cy="100" r="75" fill="#FFD700" opacity="0.15">
        <animate attributeName="r" values="72;80;72" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Distant mountains */}
      <path d="M0 350 Q150 250 300 340 Q450 240 600 330 Q750 260 900 340 Q1050 270 1200 350 V700 H0Z" fill="#8FBC8F" opacity="0.4" />

      {/* Rice paddies - terraced */}
      <path d="M0 420 Q300 380 600 410 Q900 380 1200 420 V480 Q900 450 600 470 Q300 450 0 480Z" fill="#7CCD7C" />
      <path d="M0 470 Q300 450 600 465 Q900 445 1200 470 V520 Q900 500 600 515 Q300 500 0 520Z" fill="#6BB86B" />
      <path d="M0 510 Q300 500 600 508 Q900 495 1200 510 V560 Q900 545 600 555 Q300 545 0 560Z" fill="#5AA55A" />

      {/* Water in paddy */}
      <rect x="50" y="425" width="200" height="8" rx="4" fill="url(#water-v)" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.6;0.4" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="400" y="415" width="250" height="8" rx="4" fill="url(#water-v)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3.5s" repeatCount="indefinite" />
      </rect>

      {/* Bamboo trees */}
      {[80, 120, 1050, 1100].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="250" x2={x} y2="430" stroke="#4A7C59" strokeWidth="4" />
          <ellipse cx={x} cy="240" rx="20" ry="35" fill="#5D9B4A" opacity="0.8" />
          <ellipse cx={x - 10} cy="260" rx="18" ry="30" fill="#6BAF5A" opacity="0.7" />
          <ellipse cx={x + 12} cy="255" rx="16" ry="28" fill="#4D8B3B" opacity="0.7" />
        </g>
      ))}

      {/* Thatched huts */}
      {[
        { x: 300, y: 370, s: 1 },
        { x: 550, y: 360, s: 1.2 },
        { x: 850, y: 375, s: 0.9 },
      ].map((h, i) => (
        <g key={i} transform={`translate(${h.x}, ${h.y}) scale(${h.s})`}>
          {/* Roof */}
          <polygon points="-50,0 0,-40 50,0" fill="#C4944A" />
          <polygon points="-55,0 0,-45 55,0" fill="none" stroke="#A07838" strokeWidth="2" />
          {/* Wall */}
          <rect x="-35" y="0" width="70" height="40" fill="#DEB887" rx="2" />
          {/* Door */}
          <rect x="-8" y="12" width="16" height="28" fill="#8B6914" rx="2" />
          {/* Window */}
          <rect x="18" y="14" width="10" height="10" fill="#5C4A1E" rx="1" />
        </g>
      ))}

      {/* Clouds */}
      {[
        { x: 150, y: 80, s: 1 },
        { x: 500, y: 50, s: 1.3 },
        { x: 780, y: 90, s: 0.8 },
      ].map((c, i) => (
        <g key={i} opacity="0.7">
          <ellipse cx={c.x} cy={c.y} rx={50 * c.s} ry={20 * c.s} fill="white" />
          <ellipse cx={c.x - 25 * c.s} cy={c.y + 5} rx={30 * c.s} ry={15 * c.s} fill="white" />
          <ellipse cx={c.x + 30 * c.s} cy={c.y + 3} rx={35 * c.s} ry={17 * c.s} fill="white" />
          <animateTransform attributeName="transform" type="translate" values="0,0;15,0;0,0" dur={`${20 + i * 5}s`} repeatCount="indefinite" />
        </g>
      ))}

      {/* Birds */}
      {[200, 350, 700].map((x, i) => (
        <g key={i} opacity="0.5">
          <path d={`M${x} ${130 + i * 15} q5,-5 10,0 q5,-5 10,0`} fill="none" stroke="#333" strokeWidth="1.5" />
          <animateTransform attributeName="transform" type="translate" values="0,0;30,-5;60,0" dur={`${8 + i * 2}s`} repeatCount="indefinite" />
        </g>
      ))}

      {/* Ground */}
      <path d="M0 560 Q300 550 600 558 Q900 548 1200 560 V700 H0Z" fill="#8B7355" />
      <path d="M0 580 Q600 570 1200 580 V700 H0Z" fill="#7A6248" />
    </svg>
  );
}
