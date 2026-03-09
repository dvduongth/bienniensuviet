export function LacLongQuan() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Body - royal robe */}
      <path d="M60 160 Q50 200 45 280 Q40 340 50 380 H150 Q160 340 155 280 Q150 200 140 160Z" fill="#1B4D8C" />
      {/* Robe details - dragon pattern */}
      <path d="M80 200 Q90 190 100 200 Q110 210 120 200" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.6" />
      <path d="M75 240 Q90 230 105 240 Q120 250 130 240" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5" />
      {/* Belt */}
      <rect x="55" y="220" width="90" height="10" fill="#FFD700" rx="3" />
      <circle cx="100" cy="225" r="6" fill="#CC0000" />

      {/* Shoulders - armor pieces */}
      <ellipse cx="60" cy="165" rx="20" ry="12" fill="#2E6EB5" />
      <ellipse cx="140" cy="165" rx="20" ry="12" fill="#2E6EB5" />

      {/* Neck */}
      <rect x="88" y="130" width="24" height="30" fill="#DEB887" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="110" rx="35" ry="40" fill="#DEB887" />

      {/* Crown/headpiece - dragon king */}
      <path d="M65 90 Q70 60 85 55 Q100 50 115 55 Q130 60 135 90" fill="#FFD700" />
      <path d="M75 70 L80 55 L85 70" fill="#CC0000" />
      <path d="M95 65 L100 48 L105 65" fill="#CC0000" />
      <path d="M115 70 L120 55 L125 70" fill="#CC0000" />
      {/* Crown jewel */}
      <circle cx="100" cy="58" r="5" fill="#FF0000" />

      {/* Face */}
      {/* Eyes */}
      <ellipse cx="88" cy="105" rx="5" ry="4" fill="white" />
      <ellipse cx="112" cy="105" rx="5" ry="4" fill="white" />
      <circle cx="89" cy="105" r="2.5" fill="#2C1810" />
      <circle cx="113" cy="105" r="2.5" fill="#2C1810" />
      {/* Eyebrows - strong */}
      <path d="M80 97 Q88 93 96 97" fill="none" stroke="#2C1810" strokeWidth="2.5" />
      <path d="M104 97 Q112 93 120 97" fill="none" stroke="#2C1810" strokeWidth="2.5" />
      {/* Nose */}
      <path d="M98 108 Q100 115 102 108" fill="none" stroke="#C4996B" strokeWidth="1.5" />
      {/* Mouth - slight smile */}
      <path d="M90 122 Q100 128 110 122" fill="none" stroke="#8B5E3C" strokeWidth="2" />
      {/* Beard */}
      <path d="M85 128 Q100 145 115 128" fill="none" stroke="#2C1810" strokeWidth="1.5" />
      <path d="M88 132 Q100 150 112 132" fill="none" stroke="#2C1810" strokeWidth="1" />

      {/* Arms */}
      <path d="M55 170 Q30 220 40 270" fill="none" stroke="#1B4D8C" strokeWidth="16" strokeLinecap="round" />
      <path d="M145 170 Q170 220 160 270" fill="none" stroke="#1B4D8C" strokeWidth="16" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="40" cy="272" r="10" fill="#DEB887" />
      <circle cx="160" cy="272" r="10" fill="#DEB887" />

      {/* Dragon aura glow */}
      <ellipse cx="100" cy="200" rx="80" ry="120" fill="#4A90C4" opacity="0.08">
        <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}
