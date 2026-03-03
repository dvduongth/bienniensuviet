import Link from 'next/link';
import chapterIndex from '@/../content/index.json';

export default function ChaptersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-800 mb-6">📖 Chương truyện</h1>
      <div className="grid gap-4">
        {chapterIndex.chapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/play/${ch.id}`}
            className="block bg-white rounded-xl p-5 shadow hover:shadow-lg transition border border-amber-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{ch.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-red-800">{ch.title}</h2>
                <p className="text-stone-500 text-sm">{ch.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
