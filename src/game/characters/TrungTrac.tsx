export function TrungTrac() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Warrior dress - red/gold */}
      <path d="M58 168 Q46 225 40 295 Q36 350 46 388 H154 Q164 350 160 295 Q154 225 142 168Z" fill="#8B0000" />
      {/* Armor overlay */}
      <path d="M68 168 Q100 158 132 168 Q132 215 100 220 Q68 215 68 168Z" fill="#B22222" />
      <path d="M78 178 Q100 172 122 178 Q122 205 100 210 Q78 205 78 178Z" fill="#CD5C5C" />
      {/* Dragon emblem */}
      <path d="M90 188 Q100 180 110 188 Q100 198 90 188Z" fill="#FFD700" opacity="0.7" />
      {/* Belt */}
      <rect x="50" y="222" width="100" height="10" fill="#FFD700" rx="3" />
      <rect x="88" y="219" width="24" height="16" fill="#CC0000" rx="2" />

      {/* Shoulder guards - feminine warrior */}
      <ellipse cx="56" cy="172" rx="18" ry="10" fill="#B22222" />
      <ellipse cx="144" cy="172" rx="18" ry="10" fill="#B22222" />
      <path d="M40 170 Q50 160 58 165" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <path d="M160 170 Q150 160 142 165" fill="none" stroke="#FFD700" strokeWidth="1.5" />

      {/* Neck */}
      <rect x="88" y="135" width="24" height="33" fill="#F0D5A8" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="112" rx="33" ry="38" fill="#F0D5A8" />

      {/* Hair - warrior queen updo with ornaments */}
      <path d="M67 105 Q65 72 82 58 Q100 48 118 58 Q135 72 133 105" fill="#0D0D0D" />
      <path d="M72 100 Q70 75 85 62 Q100 52 115 62 Q130 75 128 100" fill="#1A1A2E" />
      {/* Hair bun - high */}
      <ellipse cx="100" cy="50" rx="18" ry="14" fill="#0D0D0D" />
      {/* Gold crown/tiara */}
      <path d="M78 68 Q80 58 90 55 Q100 52 110 55 Q120 58 122 68" fill="#FFD700" />
      <path d="M85 58 L88 48 L91 58" fill="#CC0000" />
      <path d="M97 55 L100 42 L103 55" fill="#CC0000" />
      <path d="M109 58 L112 48 L115 58" fill="#CC0000" />
      {/* Phoenix ornament */}
      <circle cx="100" cy="46" r="4" fill="#FF4500" />

      {/* Face */}
      <ellipse cx="88" cy="108" rx="5" ry="4" fill="white" />
      <ellipse cx="112" cy="108" rx="5" ry="4" fill="white" />
      <circle cx="89" cy="108" r="2.5" fill="#1A1A1A" />
      <circle cx="113" cy="108" r="2.5" fill="#1A1A1A" />
      <circle cx="90" cy="107" r="1" fill="white" />
      <circle cx="114" cy="107" r="1" fill="white" />
      {/* Strong but elegant eyebrows */}
      <path d="M80 101 Q88 97 96 101" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M104 101 Q112 97 120 101" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M98 111 Q100 117 102 111" fill="none" stroke="#D4A574" strokeWidth="1.2" />
      {/* Determined smile */}
      <path d="M91 123 Q100 127 109 123" fill="#D4908A" stroke="#B07070" strokeWidth="1" />
      {/* Blush */}
      <ellipse cx="80" cy="116" rx="6" ry="3" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="120" cy="116" rx="6" ry="3" fill="#FFB6C1" opacity="0.3" />

      {/* Arms */}
      <path d="M50 178 Q28 220 40 268" fill="none" stroke="#8B0000" strokeWidth="15" strokeLinecap="round" />
      <path d="M150 178 Q172 220 160 268" fill="none" stroke="#8B0000" strokeWidth="15" strokeLinecap="round" />
      <circle cx="40" cy="270" r="9" fill="#F0D5A8" />
      <circle cx="160" cy="270" r="9" fill="#F0D5A8" />

      {/* Sword in right hand */}
      <line x1="160" y1="230" x2="170" y2="170" stroke="#C0C0C0" strokeWidth="3" />
      <line x1="160" y1="230" x2="170" y2="170" stroke="#E8E8E8" strokeWidth="1.5" />
      <rect x="155" y="228" width="12" height="6" fill="#FFD700" rx="1" />

      {/* Hero aura */}
      <ellipse cx="100" cy="200" rx="78" ry="115" fill="#FF4500" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}
