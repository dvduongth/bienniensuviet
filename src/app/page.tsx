import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-red-800 mb-4">Bien Nien Su Viet</h1>
      <p className="text-lg text-stone-600 mb-8">
        Kham pha lich su Viet Nam qua tung cau chuyen hap dan!
      </p>

      <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
        <Link
          href="/chapters"
          className="block bg-red-800 text-amber-50 rounded-xl px-6 py-4 text-lg font-semibold hover:bg-red-700 transition shadow"
        >
          Doc truyen
        </Link>
        <Link
          href="/battle"
          className="block bg-amber-600 text-white rounded-xl px-6 py-4 text-lg font-semibold hover:bg-amber-500 transition shadow"
        >
          Dau nhanh
        </Link>
        <Link
          href="/leaderboard"
          className="block bg-stone-700 text-amber-50 rounded-xl px-6 py-4 text-lg font-semibold hover:bg-stone-600 transition shadow"
        >
          Bang xep hang
        </Link>
        <Link
          href="/profile"
          className="block bg-emerald-700 text-white rounded-xl px-6 py-4 text-lg font-semibold hover:bg-emerald-600 transition shadow"
        >
          Ho so
        </Link>
      </div>
    </div>
  );
}
