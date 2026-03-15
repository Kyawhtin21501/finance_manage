This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1 DB 設計
2 API 設計
3 Backend
4 Frontend
5 UI polish

1 Database design
2 Prisma schema
3 TypeScript types
4 API
5 Frontend

# 家計管理ダッシュボードアプリ

このプロジェクトは **Next.js / TypeScript / Prisma** を使用して作る
シンプルな家計管理アプリです。

ユーザーは **収入 (income) と支出 (expense)** を入力し、
月ごとの支出・収入をダッシュボードで確認できます。

---

# 使用技術

- Next.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Clerk Authentication

---

# データベース設計

このアプリでは **1 つのデータベース**を使用し、
以下の **3 つのテーブル**でデータを管理します。

```
users
categories
transactions
```

---

# テーブル関係

```
users
  |
  | userId
  |
transactions
  |
  | categoryId
  |
categories
```

---

# users テーブル

| column    | type     | 説明             |
| --------- | -------- | ---------------- |
| id        | string   | Clerk の userId  |
| email     | string   | ユーザーのメール |
| createdAt | datetime | アカウント作成日 |

---

# categories テーブル

支出・収入のカテゴリを管理します。

| column | type             |
| ------ | ---------------- |
| id     | string           |
| name   | string           |
| type   | income / expense |

例

```
Food
Rent
Tax
Salary
Drinking
Cigarette
```

---

# transactions テーブル

ユーザーの収入・支出データを保存します。

| column     | type             |
| ---------- | ---------------- |
| id         | string           |
| amount     | number           |
| type       | income / expense |
| categoryId | string           |
| note       | string           |
| date       | datetime         |
| userId     | string           |
| createdAt  | datetime         |

---

# 開発の進め方

このプロジェクトは以下の順番で開発します。

```
1 データベース設計
2 Prisma schema 作成
3 TypeScript 型定義
4 API 開発
5 フロントエンド開発
6 UI 改善
```

---

# アプリケーション構造

```
Database
   ↓
Prisma ORM
   ↓
API Routes
   ↓
Frontend (Next.js / React)
   ↓
UI Components
```

---

# フォルダ構成

```
app/
 ├ api/
 ├ dashboard/
 ├ layout.tsx
 └ page.tsx

prisma/
 └ schema.prisma

src/
 ├ components/
 ├ lib/
 ├ services/
 ├ types/
 └ utils/
```

---

# 主な機能

- ユーザー認証
- 収入・支出の記録
- カテゴリ管理
- 月ごとのダッシュボード
- 支出分析

---

# 今後追加予定の機能

- 予算管理 (budget)
- カテゴリのカスタマイズ
- グラフ表示
- モバイルアプリ（React Native）
