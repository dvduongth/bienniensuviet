import { PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

const NAMES = [
  'Minh Anh', 'Duc Huy', 'Thu Ha', 'Quang Vinh', 'Ngoc Linh',
  'Hoang Nam', 'Thanh Truc', 'Bao Long', 'Mai Phuong', 'Khanh Linh',
  'Tuan Kiet', 'Ha My', 'Duy Tan', 'Thuy Tien', 'Nhat Minh',
  'Phuong Anh', 'Van Hao', 'Yen Nhi', 'Tri Dung', 'Cam Tu',
];

function getWeekKey() {
  const now = new Date();
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const days = Math.floor((now.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
  const week = Math.ceil((days + startOfYear.getDay() + 1) / 7);
  return `${year}-W${String(week).padStart(2, '0')}`;
}

async function main() {
  console.log('Seeding database...');
  const weekKey = getWeekKey();

  for (const name of NAMES) {
    const user = await prisma.user.create({ data: { name } });
    const score = Math.floor(Math.random() * 800) + 200;
    const correctCount = Math.floor(Math.random() * 8) + 3;

    await prisma.scoreRun.create({
      data: {
        userId: user.id,
        score,
        correctCount,
        weekKey,
      },
    });
    console.log(`  Created ${name}: ${score} pts`);
  }

  console.log('Seed complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
