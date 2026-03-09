import Link from 'next/link';
import Image from 'next/image';
import chapterIndex from '@/../content/index.json';

const CHAPTER_IMAGES: Record<string, { thumbnail: string; characters: string[] }> = {
  ch1: {
    thumbnail: '/textures/VanLang_AuLac_CoLoa_bacground.png',
    characters: ['/textures/lac_long_quan_character.png', '/textures/au_co_character.png'],
  },
  ch2: {
    thumbnail: '/textures/Trung_Sisters_elephants_silhouette.png',
    characters: ['/textures/trung_trac_character.png', '/textures/trung_nhi_character.png'],
  },
};

export default function ChaptersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Chương truyện</h1>
      <div className="grid gap-6">
        {chapterIndex.chapters.map((ch) => {
          const images = CHAPTER_IMAGES[ch.id];
          return (
            <Link
              key={ch.id}
              href={`/play/${ch.id}`}
              className="group block bg-white rounded-2xl shadow hover:shadow-xl transition-all border border-amber-200 overflow-hidden"
            >
              {/* Thumbnail banner */}
              {images && (
                <div className="relative h-40 sm:h-48 bg-stone-800 overflow-hidden">
                  <Image
                    src={images.thumbnail}
                    alt={ch.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />

                  {/* Character previews */}
                  <div className="absolute bottom-0 left-4 flex items-end gap-1">
                    {images.characters.map((charSrc, i) => (
                      <div key={i} className="relative w-16 h-24 sm:w-20 sm:h-32 drop-shadow-lg">
                        <Image
                          src={charSrc}
                          alt=""
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Chapter title overlay */}
                  <div className="absolute bottom-3 right-4">
                    <span className="text-amber-100 text-xs font-medium bg-amber-800/70 px-2 py-1 rounded">
                      {ch.icon} {ch.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-red-800 group-hover:text-red-700 transition-colors">
                  {ch.title}
                </h2>
                <p className="text-stone-500 text-sm mt-1">{ch.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
