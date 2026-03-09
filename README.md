# Biên Niên Sử Việt

Game giáo dục lịch sử Việt Nam cho học sinh lớp 5.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS
- Prisma 7 + PostgreSQL (leaderboard)
- Web Speech API (TTS)

## Chay local

```bash
# 1. Cai dat dependencies
cd bienniensuviet
npm install

# 2. Copy env va cap nhat DATABASE_URL
cp .env.example .env
# Sua DATABASE_URL trong .env cho dung

# 3. Tao database + migrate
npx prisma migrate dev --name init

# 4. (Tuy chon) Seed 20 score gia de test leaderboard
npm run db:seed

# 5. Chay dev server
npm run dev
# Mo http://localhost:3000
```

**Luu y:** Neu khong co PostgreSQL, cac trang khong lien quan DB (trang chu, chuong truyen, dau nhanh client-side) van chay binh thuong. Chi leaderboard API can DB.

## Environment Variables

| Bien | Bat buoc | Mo ta |
|------|----------|-------|
| `DATABASE_URL` | Co (cho leaderboard) | PostgreSQL connection string |

Xem `.env.example` de biet format.

## Deploy len Vercel (mien phi)

### Buoc 1: Tao database PostgreSQL mien phi

**Phuong an A — Neon (khuyen dung)**

1. Dang ky tai [neon.tech](https://neon.tech) (mien phi, khong can the)
2. Tao project moi, chon region gan nhat (Singapore)
3. Copy connection string, dang:
   ```
   postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

**Phuong an B — Supabase**

1. Dang ky tai [supabase.com](https://supabase.com) (mien phi, 2 project)
2. Tao project moi → Settings → Database → Connection string (URI)
3. Copy connection string, dang:
   ```
   postgresql://postgres.[ref]:[pass]@aws-0-[region].pooler.supabase.com:6543/postgres
   ```

### Buoc 2: Migrate database

```bash
# Dat DATABASE_URL trong .env tro toi Neon/Supabase
DATABASE_URL="postgresql://..." npx prisma migrate deploy
```

### Buoc 3: Deploy len Vercel

1. Push code len GitHub/GitLab
2. Vao [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel tu nhan dien Next.js, khong can chinh gi
4. Them Environment Variable:
   - `DATABASE_URL` = connection string tu Buoc 1
5. Nhan **Deploy**

Vercel se tu dong chay `npm install` → `postinstall` (prisma generate) → `npm run build`.

### Buoc 4: Kiem tra

- Trang chu, chuong truyen, dau nhanh: hoat dong ngay
- Leaderboard: can DB, kiem tra API `/api/leaderboard` tra ve JSON
- (Tuy chon) Chay seed tren local voi DATABASE_URL cua production de co du lieu test

### Luu y khi deploy

- **Build command**: mac dinh `npm run build` (da bao gom `prisma generate`)
- **Output directory**: mac dinh `.next` (Vercel tu detect)
- **Node.js version**: 18+ (Vercel mac dinh)
- **Free tier Neon**: 0.5 GB storage, 190h compute/thang — du cho MVP
- **Free tier Supabase**: 500 MB storage, 2 project — du cho MVP
- **Khong can dich vu tra phi nao**

## Kiem tra code

```bash
npm run lint      # ESLint
npx tsc --noEmit  # TypeScript typecheck
npm run build     # Production build
```

## Cau truc du an

```
content/           Noi dung game (JSON)
  index.json       Danh sach chuong
  ch1.json         Chuong 1: Van Lang - Au Lac
  ch2.json         Chuong 2: Hai Ba Trung
  questions.json   Ngan hang cau hoi (25 cau)

src/
  app/             Next.js routes
    page.tsx        Trang chu
    chapters/       Danh sach chuong
    play/[id]/      Choi chuong (VN engine)
    battle/         Che do Dau nhanh
    leaderboard/    Bang xep hang tuan
    profile/        Ho so nguoi choi
    api/score/      POST submit diem
    api/leaderboard GET top 100

  game/            Visual Novel engine
    VNEngine.tsx    Engine chinh
    GlossaryText.tsx Tooltip thuat ngu

  minigames/       Mini-game
    TimelineDragDrop.tsx  Keo tha timeline

  lib/             Tien ich
    types.ts        TypeScript types
    content.ts      Content loader
    progress.ts     localStorage save/load
    scoring.ts      He thong tinh diem
    audio.ts        BGM/SFX toggle
    tts.ts          Text-to-Speech (Web Speech API)
    db.ts           Prisma client
    battle-config.ts Config dau nhanh

  components/      UI chung
    NavBar.tsx
    AudioSettings.tsx

prisma/
  schema.prisma    DB schema
  seed.ts          Seed 20 score gia
```

## Tinh nang

1. **Visual Novel Engine**: doc truyen tuong tac, lua chon re nhanh, glossary tooltip
2. **Dau nhanh**: 10 cau / 60 giay, phao 50/50, streak bonus
3. **Mini-game Timeline**: keo tha sap xep moc thoi gian
4. **Leaderboard tuan**: PostgreSQL, top 100
5. **Am thanh**: BGM/SFX toggle, TTS doc loi dan chuyen
6. **Accessibility**: nut to, focus states, phim Space de Next

## Them noi dung moi

1. Tao file `content/ch3.json` theo format cua ch1/ch2
2. Them entry vao `content/index.json`
3. Them loader vao `src/lib/content.ts` (chapterLoaders map)
4. Them cau hoi vao `content/questions.json`
