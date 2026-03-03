import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getWeekKey } from '@/lib/scoring';

export async function GET(req: NextRequest) {
  const weekKey = req.nextUrl.searchParams.get('weekKey') || getWeekKey();

  try {
    const scores = await prisma.scoreRun.findMany({
      where: { weekKey },
      orderBy: { score: 'desc' },
      take: 100,
      include: { user: { select: { name: true } } },
    });

    const leaderboard = scores.map((s, i) => ({
      rank: i + 1,
      userName: s.user.name,
      score: s.score,
      correctCount: s.correctCount,
      weekKey: s.weekKey,
      userId: s.userId,
    }));

    return NextResponse.json({ leaderboard, weekKey });
  } catch (error) {
    console.error('Leaderboard error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
