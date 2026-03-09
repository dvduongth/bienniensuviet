export function PalaceBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-p" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="40%" stopColor="#FFCC80" />
          <stop offset="100%" stopColor="#FFF8E1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky-p)" />

      {/* Sun glow */}
      <circle cx="600" cy="80" r="50" fill="#FFD700" opacity="0.6">
        <animate attributeName="r" values="48;55;48" dur="5s" repeatCount="indefinite" />
      </circle>

      {/* Palace main building */}
      <g transform="translate(600, 250)">
        {/* Base platform */}
        <rect x="-250" y="120" width="500" height="30" fill="#C19A6B" rx="3" />
        <rect x="-270" y="145" width="540" height="20" fill="#A0784C" rx="3" />

        {/* Main hall */}
        <rect x="-200" y="30" width="400" height="95" fill="#DEB887" />
        {/* Pillars */}
        {[-180, -100, -20, 60, 140].map((px, i) => (
          <g key={i}>
            <rect x={px} y="30" width="18" height="95" fill="#CC0000" rx="2" />
            <rect x={px - 2} y="25" width="22" height="8" fill="#8B0000" rx="1" />
          </g>
        ))}

        {/* Roof - curved Vietnamese style */}
        <path d="M-230 30 Q-210 -20 -150 -10 L0 -50 L150 -10 Q210 -20 230 30Z" fill="#8B0000" />
        <path d="M-240 35 Q-220 -15 -150 -5 L0 -45 L150 -5 Q220 -15 240 35Z" fill="none" stroke="#FFD700" strokeWidth="3" />
        {/* Roof ridge decoration */}
        <circle cx="0" cy="-48" r="8" fill="#FFD700" />
        {/* Roof tips curl up */}
        <path d="M-230 30 Q-245 25 -250 10" fill="none" stroke="#8B0000" strokeWidth="5" />
        <path d="M230 30 Q245 25 250 10" fill="none" stroke="#8B0000" strokeWidth="5" />

        {/* Upper roof tier */}
        <path d="M-150 -10 Q-130 -55 -80 -48 L0 -75 L80 -48 Q130 -55 150 -10Z" fill="#A00000" />
        <path d="M-155 -8 Q-135 -52 -80 -45 L0 -72 L80 -45 Q135 -52 155 -8Z" fill="none" stroke="#FFD700" strokeWidth="2" />

        {/* Door */}
        <rect x="-25" y="55" width="50" height="70" fill="#5C1A00" rx="3" />
        <rect x="-20" y="60" width="40" height="60" fill="#7B2D00" rx="2" />
        <circle cx="0" cy="90" r="4" fill="#FFD700" />

        {/* Windows */}
        {[-130, 110].map((wx, i) => (
          <g key={i}>
            <rect x={wx} y="55" width="35" height="30" fill="#5C1A00" rx="2" />
            <rect x={wx + 4} y="59" width="27" height="22" fill="#FFE4B5" rx="1" />
            <line x1={wx + 17} y1="59" x2={wx + 17} y2="81" stroke="#5C1A00" strokeWidth="2" />
            <line x1={wx + 4} y1="70" x2={wx + 31} y2="70" stroke="#5C1A00" strokeWidth="2" />
          </g>
        ))}
      </g>

      {/* Courtyard */}
      <path d="M0 420 Q600 400 1200 420 V700 H0Z" fill="#D2B48C" />
      <path d="M0 460 Q600 450 1200 460 V700 H0Z" fill="#C4A882" />

      {/* Decorative lanterns */}
      {[350, 850].map((lx, i) => (
        <g key={i}>
          <line x1={lx} y1="300" x2={lx} y2="340" stroke="#8B4513" strokeWidth="2" />
          <rect x={lx - 10} y="340" width="20" height="28" fill="#FF4500" rx="4" opacity="0.9" />
          <rect x={lx - 6} y="344" width="12" height="20" fill="#FF6B00" rx="2" opacity="0.5">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
          </rect>
          <line x1={lx - 3} y1="370" x2={lx - 5} y2="378" stroke="#FFD700" strokeWidth="1" />
          <line x1={lx + 3} y1="370" x2={lx + 5} y2="378" stroke="#FFD700" strokeWidth="1" />
        </g>
      ))}

      {/* Trees on sides */}
      {[80, 150, 1050, 1120].map((x, i) => (
        <g key={i}>
          <rect x={x - 5} y="340" width="10" height="80" fill="#5C4033" />
          <circle cx={x} cy="320" r="30" fill="#2E8B57" opacity="0.8" />
          <circle cx={x - 15} cy="335" r="22" fill="#3CB371" opacity="0.7" />
          <circle cx={x + 12} cy="330" r="25" fill="#228B22" opacity="0.7" />
        </g>
      ))}

      {/* Clouds */}
      {[200, 800].map((cx, i) => (
        <g key={i} opacity="0.4">
          <ellipse cx={cx} cy={60 + i * 20} rx="50" ry="18" fill="white" />
          <ellipse cx={cx + 30} cy={65 + i * 20} rx="35" ry="14" fill="white" />
        </g>
      ))}
    </svg>
  );
}
