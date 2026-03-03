'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Trang chủ' },
  { href: '/chapters', label: 'Chương truyện' },
  { href: '/battle', label: 'Đấu nhanh' },
  { href: '/leaderboard', label: 'Bảng xếp hạng' },
  { href: '/profile', label: 'Hồ sơ' },
];

export function NavBar() {
  const pathname = usePathname();

  // Hide navbar during play
  if (pathname.startsWith('/play/')) return null;

  return (
    <nav className="bg-red-800 text-amber-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6 overflow-x-auto">
        <Link href="/" className="font-bold text-lg whitespace-nowrap">
          📜 Biên Niên Sử Việt
        </Link>
        <div className="flex gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap px-2 py-1 rounded text-sm transition ${
                pathname === l.href
                  ? 'bg-amber-100 text-red-900 font-semibold'
                  : 'hover:bg-red-700'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
