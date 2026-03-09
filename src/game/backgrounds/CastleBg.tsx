export function CastleBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2C3E50" />
          <stop offset="50%" stopColor="#5D6D7E" />
          <stop offset="100%" stopColor="#AEB6BF" />
        </linearGradient>
        <linearGradient id="moat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E86AB" />
          <stop offset="100%" stopColor="#1B5E7B" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky-c)" />

      {/* Moon */}
      <circle cx="200" cy="100" r="40" fill="#F5F5DC" opacity="0.8" />
      <circle cx="210" cy="95" r="35" fill="url(#sky-c)" />

      {/* Co Loa spiral walls */}
      {/* Outer wall */}
      <path d="M100 500 Q250 350 450 380 Q650 350 850 380 Q1050 350 1100 500" fill="none" stroke="#8B7355" strokeWidth="20" opacity="0.5" />
      {/* Middle wall */}
      <path d="M200 480 Q350 370 500 390 Q700 360 800 390 Q950 370 1000 480" fill="none" stroke="#A0896C" strokeWidth="18" opacity="0.6" />
      {/* Inner wall */}
      <path d="M300 460 Q450 380 600 395 Q750 375 900 460" fill="none" stroke="#B8A088" strokeWidth="16" opacity="0.7" />

      {/* Central citadel */}
      <g transform="translate(600, 320)">
        {/* Tower base */}
        <rect x="-60" y="20" width="120" height="80" fill="#C4A882" />
        {/* Tower */}
        <rect x="-45" y="-30" width="90" height="55" fill="#D2B48C" />
        {/* Roof */}
        <path d="M-55 -30 Q0 -80 55 -30Z" fill="#8B0000" />
        <path d="M-58 -28 Q0 -78 58 -28Z" fill="none" stroke="#FFD700" strokeWidth="2" />
        {/* Roof tip */}
        <line x1="0" y1="-80" x2="0" y2="-90" stroke="#FFD700" strokeWidth="3" />
        {/* Gate */}
        <path d="M-20 60 Q-20 40 0 35 Q20 40 20 60 V100 H-20Z" fill="#4A3728" />
        {/* Battlements */}
        {[-50, -30, -10, 10, 30].map((bx, i) => (
          <rect key={i} x={bx} y="-38" width="12" height="10" fill="#B8A088" />
        ))}
      </g>

      {/* Side towers */}
      {[380, 820].map((tx, i) => (
        <g key={i} transform={`translate(${tx}, 380)`}>
          <rect x="-25" y="0" width="50" height="60" fill="#C4A882" />
          <path d="M-30 0 Q0 -30 30 0Z" fill="#8B0000" />
          <rect x="-8" y="25" width="16" height="35" fill="#4A3728" rx="8" />
          {[-20, 0, 15].map((bx, j) => (
            <rect key={j} x={bx} y="-5" width="8" height="7" fill="#B8A088" />
          ))}
        </g>
      ))}

      {/* Moat water */}
      <path d="M0 520 Q300 500 600 515 Q900 500 1200 520 V560 Q900 545 600 555 Q300 545 0 560Z" fill="url(#moat)" opacity="0.7" />
      {/* Water reflections */}
      {[200, 500, 800].map((wx, i) => (
        <rect key={i} x={wx} y="530" width="60" height="3" fill="white" opacity="0.2" rx="1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${2 + i}s`} repeatCount="indefinite" />
        </rect>
      ))}

      {/* Ground */}
      <path d="M0 560 Q600 550 1200 560 V700 H0Z" fill="#4A3728" />
      <path d="M0 590 Q600 580 1200 590 V700 H0Z" fill="#3A2A1A" />

      {/* Stars */}
      {[50, 180, 350, 500, 680, 850, 1000, 1130, 90, 400, 750, 960].map((sx, i) => (
        <circle key={i} cx={sx} cy={30 + (i * 37) % 150} r={1 + (i % 2)} fill="white" opacity={0.5 + (i % 3) * 0.2}>
          <animate attributeName="opacity" values={`${0.3 + (i % 3) * 0.2};${0.7 + (i % 2) * 0.2};${0.3 + (i % 3) * 0.2}`} dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Torches on walls */}
      {[350, 600, 850].map((fx, i) => (
        <g key={i}>
          <rect x={fx - 2} y="395" width="4" height="15" fill="#8B4513" />
          <circle cx={fx} cy="390" r="5" fill="#FF6B00" opacity="0.8">
            <animate attributeName="r" values="4;6;4" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={fx} cy="390" r="8" fill="#FF6B00" opacity="0.2">
            <animate attributeName="r" values="7;10;7" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}
