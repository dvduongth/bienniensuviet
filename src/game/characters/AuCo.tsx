export function AuCo() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Flowing dress */}
      <path d="M60 160 Q45 220 35 300 Q30 350 40 390 H160 Q170 350 165 300 Q155 220 140 160Z" fill="#FFB6C1" />
      {/* Dress pattern - floral */}
      <circle cx="80" cy="250" r="5" fill="#FF69B4" opacity="0.3" />
      <circle cx="120" cy="280" r="4" fill="#FF69B4" opacity="0.3" />
      <circle cx="90" cy="310" r="5" fill="#FF69B4" opacity="0.25" />
      {/* Sash */}
      <path d="M60 210 Q100 205 140 210" fill="none" stroke="#FF1493" strokeWidth="6" />
      <path d="M120 210 Q130 240 125 270" fill="none" stroke="#FF1493" strokeWidth="4" opacity="0.6" />

      {/* Inner robe layer */}
      <path d="M75 160 Q70 180 68 200 Q65 220 70 240" fill="none" stroke="white" strokeWidth="3" opacity="0.5" />
      <path d="M125 160 Q130 180 132 200 Q135 220 130 240" fill="none" stroke="white" strokeWidth="3" opacity="0.5" />

      {/* Neck */}
      <rect x="88" y="130" width="24" height="30" fill="#F5DEB3" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="108" rx="33" ry="38" fill="#F5DEB3" />

      {/* Hair - elegant updo */}
      <path d="M67 100 Q65 70 80 55 Q100 42 120 55 Q135 70 133 100" fill="#1A1A2E" />
      <path d="M72 95 Q70 65 85 52 Q100 40 115 52 Q130 65 128 95" fill="#2D2D4E" />
      {/* Hair bun */}
      <ellipse cx="100" cy="50" rx="20" ry="15" fill="#1A1A2E" />
      {/* Hair ornament - phoenix */}
      <path d="M100 38 L95 28 L100 32 L105 28Z" fill="#FFD700" />
      <circle cx="100" cy="40" r="4" fill="#FF6B6B" />
      {/* Dangling ornaments */}
      <line x1="75" y1="75" x2="70" y2="95" stroke="#FFD700" strokeWidth="1" />
      <circle cx="70" cy="97" r="3" fill="#FFD700" />
      <line x1="125" y1="75" x2="130" y2="95" stroke="#FFD700" strokeWidth="1" />
      <circle cx="130" cy="97" r="3" fill="#FFD700" />

      {/* Face */}
      {/* Eyes - gentle */}
      <ellipse cx="88" cy="105" rx="5" ry="4" fill="white" />
      <ellipse cx="112" cy="105" rx="5" ry="4" fill="white" />
      <circle cx="89" cy="105" r="2.5" fill="#3D2B1F" />
      <circle cx="113" cy="105" r="2.5" fill="#3D2B1F" />
      {/* Eye sparkle */}
      <circle cx="90" cy="104" r="1" fill="white" />
      <circle cx="114" cy="104" r="1" fill="white" />
      {/* Eyebrows - delicate */}
      <path d="M81 98 Q88 95 95 98" fill="none" stroke="#3D2B1F" strokeWidth="1.5" />
      <path d="M105 98 Q112 95 119 98" fill="none" stroke="#3D2B1F" strokeWidth="1.5" />
      {/* Nose */}
      <path d="M98 108 Q100 114 102 108" fill="none" stroke="#D4A574" strokeWidth="1.2" />
      {/* Mouth - gentle smile */}
      <path d="M92 120 Q100 125 108 120" fill="#E8A0A0" stroke="#C88080" strokeWidth="1" />
      {/* Blush */}
      <ellipse cx="80" cy="115" rx="7" ry="4" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="120" cy="115" rx="7" ry="4" fill="#FFB6C1" opacity="0.4" />

      {/* Arms */}
      <path d="M55 170 Q35 210 45 260" fill="none" stroke="#FFB6C1" strokeWidth="14" strokeLinecap="round" />
      <path d="M145 170 Q165 210 155 260" fill="none" stroke="#FFB6C1" strokeWidth="14" strokeLinecap="round" />
      {/* Sleeves - flowing */}
      <path d="M45 260 Q35 270 25 265 Q30 280 45 275" fill="#FFB6C1" />
      <path d="M155 260 Q165 270 175 265 Q170 280 155 275" fill="#FFB6C1" />
      {/* Hands */}
      <circle cx="45" cy="262" r="8" fill="#F5DEB3" />
      <circle cx="155" cy="262" r="8" fill="#F5DEB3" />

      {/* Fairy aura */}
      <ellipse cx="100" cy="200" rx="75" ry="110" fill="#FFB6C1" opacity="0.06">
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}
