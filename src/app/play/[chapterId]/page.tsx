import { getChapterContent } from '@/lib/content';
import { PlayClient } from './PlayClient';
import Link from 'next/link';

export default async function PlayPage({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const chapter = await getChapterContent(chapterId);

  if (!chapter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-amber-50 gap-4">
        <p className="text-xl">Không tìm thấy chương: {chapterId}</p>
        <Link href="/chapters" className="text-amber-400 underline">
          Về danh sách chương
        </Link>
      </div>
    );
  }

  return <PlayClient chapter={chapter} />;
}
