export function MapBg() {
  return (
    <svg viewBox="0 0 1200 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="50%" stopColor="#E8D5B0" />
          <stop offset="100%" stopColor="#D4C098" />
        </linearGradient>
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>

      {/* Parchment background */}
      <rect width="1200" height="700" fill="url(#parchment)" />
      {/* Paper edges */}
      <rect x="20" y="20" width="1160" height="660" fill="none" stroke="#B8976A" strokeWidth="3" rx="5" />
      <rect x="30" y="30" width="1140" height="640" fill="none" stroke="#C9A87C" strokeWidth="1" rx="3" />

      {/* Compass rose */}
      <g transform="translate(1050, 120) scale(0.7)">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#8B6914" strokeWidth="2" />
        <path d="M0,-45 L5,0 L0,45 L-5,0Z" fill="#8B0000" opacity="0.7" />
        <path d="M-45,0 L0,-5 L45,0 L0,5Z" fill="#8B6914" opacity="0.5" />
        <text x="0" y="-52" textAnchor="middle" fill="#8B6914" fontSize="14" fontWeight="bold">B</text>
        <text x="0" y="65" textAnchor="middle" fill="#8B6914" fontSize="14" fontWeight="bold">N</text>
        <text x="55" y="5" textAnchor="middle" fill="#8B6914" fontSize="14" fontWeight="bold">D</text>
        <text x="-55" y="5" textAnchor="middle" fill="#8B6914" fontSize="14" fontWeight="bold">T</text>
      </g>

      {/* Vietnam map outline (simplified S-shape) */}
      <g transform="translate(400, 80) scale(1.1)">
        {/* Sea */}
        <ellipse cx="350" cy="300" rx="200" ry="280" fill="#B8D4E3" opacity="0.3" />

        {/* Land mass */}
        <path d="M180 50 Q200 30 230 40 Q260 50 270 80 Q290 100 280 140 Q260 170 250 200 Q240 240 230 260 Q220 290 210 310 Q195 340 190 370 Q185 400 195 430 Q210 460 230 480 Q240 500 230 520 Q210 540 190 530 Q170 510 165 480 Q155 450 150 420 Q140 390 135 360 Q130 330 140 300 Q150 270 155 240 Q160 210 165 180 Q170 150 175 120 Q178 90 180 60Z" fill="#8FBC8F" stroke="#5A7A5A" strokeWidth="2" />

        {/* Bac Bo highlight */}
        <ellipse cx="210" cy="80" rx="50" ry="35" fill="#FFD700" opacity="0.3" />
        <text x="210" y="75" textAnchor="middle" fill="#8B0000" fontSize="11" fontWeight="bold">Bac Bo</text>
        <text x="210" y="90" textAnchor="middle" fill="#8B6914" fontSize="9">Van Lang</text>

        {/* Phong Chau marker */}
        <circle cx="195" cy="105" r="5" fill="#CC0000" />
        <text x="195" y="120" textAnchor="middle" fill="#8B0000" fontSize="9">Phong Chau</text>

        {/* Co Loa marker */}
        <circle cx="230" cy="95" r="5" fill="#0066CC" />
        <text x="250" y="100" textAnchor="start" fill="#0066CC" fontSize="9">Co Loa</text>

        {/* Trung Bo */}
        <text x="220" y="240" textAnchor="middle" fill="#5A7A5A" fontSize="10">Trung Bo</text>

        {/* Sea label */}
        <text x="340" y="200" textAnchor="middle" fill="#4A7AAF" fontSize="12" fontStyle="italic">Bien Dong</text>

        {/* Rivers */}
        <path d="M190 60 Q200 80 195 100 Q188 120 195 140" fill="none" stroke="#4A90C4" strokeWidth="2" opacity="0.6" />
        <text x="175" y="130" textAnchor="end" fill="#4A90C4" fontSize="8">S. Hong</text>
      </g>

      {/* Title */}
      <text x="200" y="80" fill="#8B0000" fontSize="28" fontWeight="bold">Ban do nuoc Van Lang - Au Lac</text>
      <line x1="200" y1="90" x2="550" y2="90" stroke="#8B0000" strokeWidth="1" opacity="0.5" />

      {/* Legend */}
      <g transform="translate(80, 520)">
        <rect x="-10" y="-15" width="180" height="100" fill="#F5E6C8" stroke="#B8976A" strokeWidth="1" rx="3" />
        <text x="0" y="0" fill="#8B6914" fontSize="12" fontWeight="bold">Chu giai:</text>
        <circle cx="10" cy="20" r="5" fill="#CC0000" />
        <text x="25" y="24" fill="#5A4A3A" fontSize="10">Thu do Van Lang</text>
        <circle cx="10" cy="42" r="5" fill="#0066CC" />
        <text x="25" y="46" fill="#5A4A3A" fontSize="10">Thu do Au Lac</text>
        <rect x="5" y="57" width="12" height="8" fill="#FFD700" opacity="0.4" />
        <text x="25" y="65" fill="#5A4A3A" fontSize="10">Vung Bac Bo</text>
      </g>
    </svg>
  );
}
