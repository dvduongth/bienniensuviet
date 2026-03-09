'use client';

import { useEffect, useState } from 'react';
import { getWeekKey } from '@/lib/scoring';

interface Entry {
  rank: number;
  userName: string;
  score: number;
  correctCount: number;
  userId: string;
}

export function LeaderboardClient() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const weekKey = getWeekKey();

  useEffect(() => {
    fetch(`/api/leaderboard?weekKey=${weekKey}`)
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.leaderboard || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [weekKey]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-800 mb-2">Bảng xếp hạng tuần</h1>
      <p className="text-stone-500 text-sm mb-6">Tuần: {weekKey}</p>

      <div className="bg-white rounded-xl shadow border border-amber-200 overflow-hidden">
        {loading ? (
          <p className="text-stone-500 text-center p-6">Đang tải...</p>
        ) : entries.length === 0 ? (
          <p className="text-stone-500 text-center p-6">
            Chưa có dữ liệu. Hãy chơi Đấu nhanh để ghi điểm!
          </p>
        ) : (
          <table className="w-full">
            <thead className="bg-amber-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-stone-700">#</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-stone-700">Tên</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-stone-700">Điểm</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-stone-700">Đúng</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={`${e.userId}-${e.rank}`} className="border-t border-amber-100 hover:bg-amber-50">
                  <td className="px-4 py-3 font-bold text-amber-700">
                    {e.rank <= 3 ? ['', '🥇', '🥈', '🥉'][e.rank] : e.rank}
                  </td>
                  <td className="px-4 py-3">{e.userName}</td>
                  <td className="px-4 py-3 text-right font-semibold text-red-800">{e.score}</td>
                  <td className="px-4 py-3 text-right text-stone-500">{e.correctCount}/10</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
