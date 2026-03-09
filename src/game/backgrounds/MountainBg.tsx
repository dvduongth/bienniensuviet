export function MountainBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A90C4" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#C8E6C9" />
        </linearGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky-m)" />

      {/* Far mountains */}
      <path d="M-50 450 L150 200 L300 350 L450 180 L600 320 L750 150 L900 300 L1050 220 L1250 400 V700 H-50Z" fill="#5B7F6B" opacity="0.35" />

      {/* Mid mountains */}
      <path d="M-50 500 L100 280 L250 400 L400 250 L550 380 L700 220 L850 350 L1000 280 L1200 450 V700 H-50Z" fill="#3D6B4F" opacity="0.55" />
      {/* Snow caps */}
      <path d="M400 250 L370 290 L430 290Z" fill="white" opacity="0.7" />
      <path d="M700 220 L670 260 L730 260Z" fill="white" opacity="0.7" />

      {/* Near mountains */}
      <path d="M-50 550 L150 350 L350 480 L500 320 L650 450 L800 300 L1000 420 L1250 500 V700 H-50Z" fill="#2D5A3F" opacity="0.75" />

      {/* Mist layers */}
      <rect x="0" y="380" width="1200" height="80" fill="url(#mist)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
      </rect>
      <rect x="0" y="440" width="1200" height="60" fill="url(#mist)" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
      </rect>

      {/* Waterfall */}
      <rect x="498" y="320" width="4" height="130" fill="white" opacity="0.8" rx="2">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <ellipse cx="500" cy="455" rx="12" ry="5" fill="white" opacity="0.5">
        <animate attributeName="rx" values="10;15;10" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Pine trees on near mountain */}
      {[200, 260, 340, 900, 960, 1040, 1100].map((x, i) => {
        const y = 480 + Math.sin(x) * 20;
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 30} stroke="#3A2A1A" strokeWidth="3" />
            <polygon points={`${x},${y - 25} ${x - 15},${y + 5} ${x + 15},${y + 5}`} fill="#1B4332" />
            <polygon points={`${x},${y - 40} ${x - 12},${y - 10} ${x + 12},${y - 10}`} fill="#2D6A4F" />
          </g>
        );
      })}

      {/* Clouds */}
      {[
        { x: 100, y: 60, s: 1.2 },
        { x: 450, y: 40, s: 0.9 },
        { x: 900, y: 70, s: 1.1 },
      ].map((c, i) => (
        <g key={i} opacity="0.6">
          <ellipse cx={c.x} cy={c.y} rx={45 * c.s} ry={18 * c.s} fill="white" />
          <ellipse cx={c.x + 25 * c.s} cy={c.y + 5} rx={30 * c.s} ry={14 * c.s} fill="white" />
          <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur={`${25 + i * 7}s`} repeatCount="indefinite" />
        </g>
      ))}

      {/* Forest floor */}
      <path d="M0 550 Q300 530 600 545 Q900 530 1200 550 V700 H0Z" fill="#2D5A3F" />
      <path d="M0 580 Q600 565 1200 580 V700 H0Z" fill="#1B4332" />
    </svg>
  );
}
