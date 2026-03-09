export function ThucPhan() {
  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-lg">
      {/* Armor + robe */}
      <path d="M58 165 Q46 220 42 290 Q38 350 48 385 H152 Q162 350 158 290 Q154 220 142 165Z" fill="#2F4F4F" />
      {/* Armor chest plate */}
      <path d="M70 165 Q100 155 130 165 Q130 210 100 215 Q70 210 70 165Z" fill="#708090" />
      <path d="M80 175 Q100 170 120 175 Q120 200 100 205 Q80 200 80 175Z" fill="#778899" />
      {/* Armor pattern */}
      <circle cx="100" cy="185" r="10" fill="none" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="100" cy="185" r="5" fill="#B8860B" opacity="0.5" />

      {/* Belt with sword */}
      <rect x="52" y="220" width="96" height="10" fill="#8B4513" rx="3" />
      {/* Sword sheath */}
      <rect x="135" y="215" width="8" height="60" fill="#4A3728" rx="2" transform="rotate(10, 139, 245)" />
      <rect x="133" y="210" width="12" height="8" fill="#B8860B" rx="1" transform="rotate(10, 139, 214)" />

      {/* Shoulder guards */}
      <ellipse cx="58" cy="168" rx="18" ry="10" fill="#708090" />
      <ellipse cx="142" cy="168" rx="18" ry="10" fill="#708090" />
      <path d="M42 165 Q48 158 58 162" fill="none" stroke="#B8860B" strokeWidth="1.5" />
      <path d="M158 165 Q152 158 142 162" fill="none" stroke="#B8860B" strokeWidth="1.5" />

      {/* Neck */}
      <rect x="88" y="132" width="24" height="33" fill="#D2B48C" rx="5" />

      {/* Head */}
      <ellipse cx="100" cy="110" rx="35" ry="40" fill="#D2B48C" />

      {/* Warrior helmet */}
      <path d="M65 105 Q65 60 100 50 Q135 60 135 105" fill="#708090" />
      <path d="M65 105 Q65 62 100 52 Q135 62 135 105" fill="none" stroke="#B8860B" strokeWidth="2" />
      {/* Helmet crest */}
      <path d="M100 50 L100 30 Q105 35 110 30 Q108 40 100 50" fill="#CC0000" />
      {/* Helmet face guard */}
      <rect x="67" y="100" width="66" height="6" fill="#708090" rx="2" />

      {/* Face */}
      <ellipse cx="86" cy="112" rx="5" ry="4" fill="white" />
      <ellipse cx="114" cy="112" rx="5" ry="4" fill="white" />
      <circle cx="87" cy="112" r="2.5" fill="#1A1A1A" />
      <circle cx="115" cy="112" r="2.5" fill="#1A1A1A" />
      {/* Fierce eyebrows */}
      <path d="M78 105 Q86 100 94 105" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      <path d="M106 105 Q114 100 122 105" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      <path d="M97 115 Q100 121 103 115" fill="none" stroke="#B8956A" strokeWidth="1.5" />
      {/* Determined mouth */}
      <path d="M90 128 Q100 132 110 128" fill="none" stroke="#6B4226" strokeWidth="2" />
      {/* Short beard */}
      <path d="M88 132 Q100 140 112 132" fill="none" stroke="#3A2A1A" strokeWidth="1.5" />

      {/* Arms */}
      <path d="M52 175 Q30 220 42 268" fill="none" stroke="#2F4F4F" strokeWidth="16" strokeLinecap="round" />
      <path d="M148 175 Q170 220 158 268" fill="none" stroke="#2F4F4F" strokeWidth="16" strokeLinecap="round" />
      <circle cx="42" cy="270" r="9" fill="#D2B48C" />
      <circle cx="158" cy="270" r="9" fill="#D2B48C" />

      {/* Shield in left hand */}
      <ellipse cx="38" cy="245" rx="18" ry="25" fill="#8B4513" stroke="#B8860B" strokeWidth="2" />
      <circle cx="38" cy="245" r="8" fill="#B8860B" opacity="0.5" />
    </svg>
  );
}
