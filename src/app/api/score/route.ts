import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getWeekKey } from '@/lib/scoring';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { score, correctCount } = body;

    if (typeof score !== 'number' || typeof correctCount !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Get or create guest user from cookie
    const cookieStore = await cookies();
    let userId = cookieStore.get('bnsv-user-id')?.value;

    if (!userId) {
      const user = await prisma.user.create({ data: {} });
      userId = user.id;
      const response = NextResponse.json({ success: true, userId });
      response.cookies.set('bnsv-user-id', userId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      });

      await prisma.scoreRun.create({
        data: {
          userId,
          score,
          correctCount,
          weekKey: getWeekKey(),
        },
      });

      return response;
    }

    // Ensure user exists
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!existingUser) {
      const user = await prisma.user.create({ data: { id: userId } });
      userId = user.id;
    }

    await prisma.scoreRun.create({
      data: {
        userId,
        score,
        correctCount,
        weekKey: getWeekKey(),
      },
    });

    return NextResponse.json({ success: true, userId });
  } catch (error) {
    console.error('Score submission error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
