export function BattleBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0A0A" />
          <stop offset="40%" stopColor="#4A1A1A" />
          <stop offset="70%" stopColor="#8B3A1A" />
          <stop offset="100%" stopColor="#CC6633" />
        </linearGradient>
        <radialGradient id="fire-glow" cx="0.5" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#sky-b)" />

      {/* Fire glow on horizon */}
      <ellipse cx="600" cy="500" rx="500" ry="200" fill="url(#fire-glow)">
        <animate attributeName="rx" values="480;520;480" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {/* Smoke clouds */}
      {[150, 400, 700, 950].map((x, i) => (
        <g key={i} opacity="0.4">
          <ellipse cx={x} cy={200 + i * 20} rx={60} ry={30} fill="#333">
            <animate attributeName="cy" values={`${200 + i * 20};${180 + i * 20};${200 + i * 20}`} dur={`${4 + i}s`} repeatCount="indefinite" />
          </ellipse>
          <ellipse cx={x + 30} cy={210 + i * 20} rx={40} ry={20} fill="#444">
            <animate attributeName="cy" values={`${210 + i * 20};${190 + i * 20};${210 + i * 20}`} dur={`${5 + i}s`} repeatCount="indefinite" />
          </ellipse>
        </g>
      ))}

      {/* Battlefield ground */}
      <path d="M0 480 Q300 460 600 475 Q900 455 1200 480 V700 H0Z" fill="#3D2B1F" />
      <path d="M0 520 Q600 505 1200 520 V700 H0Z" fill="#2C1E14" />

      {/* Fire patches */}
      {[
        { x: 180, y: 460, s: 1 },
        { x: 500, y: 450, s: 1.3 },
        { x: 800, y: 465, s: 0.8 },
        { x: 1020, y: 455, s: 1.1 },
      ].map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y}) scale(${f.s})`}>
          <ellipse cx="0" cy="5" rx="15" ry="5" fill="#FF4500" opacity="0.5" />
          <path d="M0,0 Q-5,-15 -2,-25 Q0,-30 2,-25 Q5,-15 0,0" fill="#FF6B00" opacity="0.8">
            <animate attributeName="d" values="M0,0 Q-5,-15 -2,-25 Q0,-30 2,-25 Q5,-15 0,0;M0,0 Q-6,-18 -1,-28 Q0,-35 1,-28 Q6,-18 0,0;M0,0 Q-5,-15 -2,-25 Q0,-30 2,-25 Q5,-15 0,0" dur="0.8s" repeatCount="indefinite" />
          </path>
          <path d="M-3,0 Q-7,-10 -4,-18 Q-3,-22 -2,-18 Q1,-10 -3,0" fill="#FFD700" opacity="0.6">
            <animate attributeName="d" values="M-3,0 Q-7,-10 -4,-18 Q-3,-22 -2,-18 Q1,-10 -3,0;M-3,0 Q-8,-12 -3,-20 Q-3,-25 -2,-20 Q2,-12 -3,0;M-3,0 Q-7,-10 -4,-18 Q-3,-22 -2,-18 Q1,-10 -3,0" dur="0.6s" repeatCount="indefinite" />
          </path>
        </g>
      ))}

      {/* War flags */}
      {[
        { x: 300, c: '#CC0000' },
        { x: 900, c: '#FFD700' },
      ].map((fl, i) => (
        <g key={i}>
          <line x1={fl.x} y1="350" x2={fl.x} y2="490" stroke="#5C4033" strokeWidth="4" />
          <path d={`M${fl.x} 350 L${fl.x + 45} 365 L${fl.x} 380Z`} fill={fl.c} opacity="0.85">
            <animate attributeName="d" values={`M${fl.x} 350 L${fl.x + 45} 365 L${fl.x} 380Z;M${fl.x} 350 L${fl.x + 42} 362 L${fl.x} 378Z;M${fl.x} 350 L${fl.x + 45} 365 L${fl.x} 380Z`} dur="2s" repeatCount="indefinite" />
          </path>
        </g>
      ))}

      {/* Spears / weapons on ground */}
      {[100, 450, 650, 1050].map((x, i) => (
        <line key={i} x1={x} y1={470 + i * 3} x2={x + 30} y2={440 + i * 3} stroke="#8B7355" strokeWidth="2" opacity="0.5" />
      ))}

      {/* Sparks / embers floating */}
      {[80, 250, 420, 580, 750, 920, 1100].map((x, i) => (
        <circle key={i} cx={x} cy={300 + i * 15} r="2" fill="#FF6B00" opacity="0.7">
          <animate attributeName="cy" values={`${300 + i * 15};${200 + i * 10};${300 + i * 15}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
