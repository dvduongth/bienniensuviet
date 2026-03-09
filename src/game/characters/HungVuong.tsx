export function HungVuong() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Royal robe - yellow/gold */}
      <path d="M60 165 Q48 220 42 290 Q38 350 48 385 H152 Q162 350 158 290 Q152 220 140 165Z" fill="#DAA520" />
      {/* Robe patterns */}
      <path d="M70 220 Q100 210 130 220" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.4" />
      <path d="M65 260 Q100 250 135 260" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.4" />
      <path d="M62 300 Q100 290 138 300" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.4" />
      {/* Dragon emblem on chest */}
      <path d="M85 185 Q100 175 115 185 Q105 195 100 190 Q95 195 85 185Z" fill="#CC0000" opacity="0.6" />
      {/* Belt */}
      <rect x="52" y="225" width="96" height="12" fill="#CC0000" rx="3" />
      <rect x="90" y="222" width="20" height="18" fill="#FFD700" rx="2" />

      {/* Neck */}
      <rect x="88" y="132" width="24" height="33" fill="#DEB887" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="110" rx="34" ry="40" fill="#DEB887" />

      {/* King's crown - mien */}
      <rect x="68" y="68" width="64" height="15" fill="#FFD700" rx="3" />
      <rect x="65" y="62" width="70" height="10" fill="#CC0000" rx="2" />
      {/* Crown peaks */}
      {[75, 87, 100, 113, 125].map((cx, i) => (
        <path key={i} d={`M${cx - 4} 62 L${cx} 50 L${cx + 4} 62`} fill="#FFD700" />
      ))}
      {/* Crown beads hanging */}
      {[72, 82, 92, 102, 112, 122, 132].map((cx, i) => (
        <g key={i}>
          <line x1={cx} y1="83" x2={cx} y2="93" stroke="#FFD700" strokeWidth="1" />
          <circle cx={cx} cy="95" r="2" fill="#FF6B6B" opacity="0.7" />
        </g>
      ))}

      {/* Face */}
      <ellipse cx="88" cy="107" rx="5" ry="4" fill="white" />
      <ellipse cx="112" cy="107" rx="5" ry="4" fill="white" />
      <circle cx="89" cy="107" r="2.5" fill="#2C1810" />
      <circle cx="113" cy="107" r="2.5" fill="#2C1810" />
      <path d="M80 99 Q88 95 96 99" fill="none" stroke="#2C1810" strokeWidth="2" />
      <path d="M104 99 Q112 95 120 99" fill="none" stroke="#2C1810" strokeWidth="2" />
      <path d="M98 110 Q100 116 102 110" fill="none" stroke="#C4996B" strokeWidth="1.5" />
      <path d="M90 124 Q100 129 110 124" fill="none" stroke="#8B5E3C" strokeWidth="2" />
      {/* Thin beard - wise king */}
      <path d="M90 128 Q100 138 110 128" fill="none" stroke="#4A3728" strokeWidth="1.5" />

      {/* Arms holding scepter */}
      <path d="M55 175 Q35 215 50 260" fill="none" stroke="#DAA520" strokeWidth="15" strokeLinecap="round" />
      <path d="M145 175 Q165 215 150 260" fill="none" stroke="#DAA520" strokeWidth="15" strokeLinecap="round" />
      <circle cx="50" cy="262" r="9" fill="#DEB887" />
      <circle cx="150" cy="262" r="9" fill="#DEB887" />

      {/* Scepter */}
      <line x1="50" y1="200" x2="50" y2="310" stroke="#8B6914" strokeWidth="4" />
      <circle cx="50" cy="197" r="8" fill="#FFD700" />
      <circle cx="50" cy="197" r="4" fill="#CC0000" />
    </svg>
  );
}
