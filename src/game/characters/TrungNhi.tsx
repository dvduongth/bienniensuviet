export function TrungNhi() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Warrior dress - lighter red */}
      <path d="M60 168 Q48 225 42 295 Q38 350 48 388 H152 Q162 350 158 295 Q152 225 140 168Z" fill="#CD5C5C" />
      {/* Light armor */}
      <path d="M70 168 Q100 158 130 168 Q130 212 100 218 Q70 212 70 168Z" fill="#DC143C" opacity="0.7" />
      <path d="M80 178 Q100 172 120 178 Q120 203 100 208 Q80 203 80 178Z" fill="#E8706A" opacity="0.7" />
      {/* Sun emblem */}
      <circle cx="100" cy="190" r="8" fill="#FFD700" opacity="0.5" />
      <circle cx="100" cy="190" r="4" fill="#FF6347" opacity="0.6" />
      {/* Belt */}
      <rect x="52" y="220" width="96" height="10" fill="#FFD700" rx="3" />

      {/* Shoulder pieces */}
      <ellipse cx="58" cy="172" rx="16" ry="9" fill="#DC143C" opacity="0.8" />
      <ellipse cx="142" cy="172" rx="16" ry="9" fill="#DC143C" opacity="0.8" />

      {/* Neck */}
      <rect x="88" y="135" width="24" height="33" fill="#F0D5A8" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="112" rx="32" ry="37" fill="#F0D5A8" />

      {/* Hair - younger, more flowing */}
      <path d="M68 108 Q66 74 84 60 Q100 50 116 60 Q134 74 132 108" fill="#0D0D0D" />
      <path d="M72 103 Q70 78 86 64 Q100 55 114 64 Q130 78 128 103" fill="#1A1A2E" />
      {/* Hair flowing down sides */}
      <path d="M68 108 Q62 140 58 170" fill="none" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      <path d="M132 108 Q138 140 142 170" fill="none" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      {/* Hair bun - smaller */}
      <ellipse cx="100" cy="53" rx="15" ry="12" fill="#0D0D0D" />
      {/* Hair ornament - simpler */}
      <circle cx="100" cy="48" r="5" fill="#FF6347" />
      <path d="M93 48 L100 40 L107 48" fill="#FFD700" />

      {/* Face - younger, brighter */}
      <ellipse cx="87" cy="108" rx="5" ry="4" fill="white" />
      <ellipse cx="113" cy="108" rx="5" ry="4" fill="white" />
      <circle cx="88" cy="108" r="2.5" fill="#1A1A1A" />
      <circle cx="114" cy="108" r="2.5" fill="#1A1A1A" />
      <circle cx="89" cy="107" r="1" fill="white" />
      <circle cx="115" cy="107" r="1" fill="white" />
      {/* Younger eyebrows */}
      <path d="M80 101 Q87 98 94 101" fill="none" stroke="#1A1A1A" strokeWidth="1.8" />
      <path d="M106 101 Q113 98 120 101" fill="none" stroke="#1A1A1A" strokeWidth="1.8" />
      <path d="M98 111 Q100 116 102 111" fill="none" stroke="#D4A574" strokeWidth="1.2" />
      {/* Energetic smile */}
      <path d="M90 122 Q100 128 110 122" fill="#E8A0A0" stroke="#C88080" strokeWidth="1" />
      {/* Blush */}
      <ellipse cx="79" cy="115" rx="6" ry="3" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="121" cy="115" rx="6" ry="3" fill="#FFB6C1" opacity="0.4" />

      {/* Arms */}
      <path d="M52 178 Q30 218 42 266" fill="none" stroke="#CD5C5C" strokeWidth="14" strokeLinecap="round" />
      <path d="M148 178 Q170 218 158 266" fill="none" stroke="#CD5C5C" strokeWidth="14" strokeLinecap="round" />
      <circle cx="42" cy="268" r="8" fill="#F0D5A8" />
      <circle cx="158" cy="268" r="8" fill="#F0D5A8" />

      {/* Spear in left hand */}
      <line x1="42" y1="200" x2="35" y2="140" stroke="#8B7355" strokeWidth="3" />
      <polygon points="32,140 35,125 38,140" fill="#C0C0C0" />

      {/* Energy aura */}
      <ellipse cx="100" cy="200" rx="75" ry="110" fill="#FF6347" opacity="0.05">
        <animate attributeName="opacity" values="0.03;0.08;0.03" dur="2.5s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}
