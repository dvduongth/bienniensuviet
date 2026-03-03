import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/NavBar';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Biên Niên Sử Việt',
  description: 'Game giáo dục lịch sử Việt Nam cho học sinh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${geist.variable} font-sans antialiased bg-amber-50 text-stone-800`}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
