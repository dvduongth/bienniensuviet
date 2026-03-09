import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/textures/startup_story_backround.png"
          alt="Biên Niên Sử Việt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-900/30 to-amber-50" />
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-16 text-center">
        {/* Sky decoration */}
        <div className="relative mx-auto w-48 h-24 mb-4">
          <Image
            src="/textures/Van_Lang_sky_layer.png"
            alt=""
            fill
            className="object-contain opacity-80"
          />
        </div>

        <h1 className="text-5xl font-bold text-amber-50 mb-3 drop-shadow-lg">
          Biên Niên Sử Việt
        </h1>
        <p className="text-lg text-amber-100 mb-10 drop-shadow">
          Khám phá lịch sử Việt Nam qua từng câu chuyện hấp dẫn!
        </p>

        {/* NPC mascot */}
        <div className="relative mx-auto w-40 h-56 mb-8 drop-shadow-2xl">
          <Image
            src="/textures/startup_npc.png"
            alt="Người dẫn chuyện"
            fill
            className="object-contain"
          />
        </div>

        {/* Speech bubble */}
        <div className="relative max-w-sm mx-auto bg-white/90 backdrop-blur rounded-2xl p-4 mb-10 shadow-lg border border-amber-200">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 border-l border-t border-amber-200 rotate-45" />
          <p className="text-stone-700 text-sm font-medium">
            Chào mừng các em! Hãy cùng mình khám phá những trang sử hào hùng của dân tộc Việt Nam nhé!
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
          <Link
            href="/chapters"
            className="block bg-red-800 text-amber-50 rounded-xl px-6 py-4 text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Đọc truyện
          </Link>
          <Link
            href="/battle"
            className="block bg-amber-600 text-white rounded-xl px-6 py-4 text-lg font-semibold hover:bg-amber-500 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Đấu nhanh
          </Link>
          <Link
            href="/leaderboard"
            className="block bg-stone-700 text-amber-50 rounded-xl px-6 py-4 text-lg font-semibold hover:bg-stone-600 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Bảng xếp hạng
          </Link>
          <Link
            href="/profile"
            className="block bg-emerald-700 text-white rounded-xl px-6 py-4 text-lg font-semibold hover:bg-emerald-600 transition shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Hồ sơ
          </Link>
        </div>
      </div>
    </div>
  );
}
