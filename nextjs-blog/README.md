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

# 開発フロー

このプロジェクトは以下の順番で開発します。

```
1 Database Design
2 Prisma Schema
3 TypeScript Types
4 API Development
5 Frontend Development
6 UI Improvement
```

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
  | 1
  |
  | N
categories
  |
  | 1
  |
  | N
transactions
```

つまり

```
1 user → multiple categories
1 category → multiple transactions
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

ユーザーが自由にカテゴリを作成できます。

| column | type             |
| ------ | ---------------- |
| id     | string           |
| name   | string           |
| type   | income / expense |
| userId | string           |

例

```
Food
Rent
Gym
Coffee
Taxi
Game
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
| userId     | string           |
| note       | string           |
| date       | datetime         |
| createdAt  | datetime         |

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
 │   ├ transactions
 │   └ categories
 │
 ├ dashboard
 │
 ├ layout.tsx
 └ page.tsx

prisma/
 └ schema.prisma

src/
 ├ components
 │   ├ ui
 │   ├ dashboard
 │   └ forms
 │
 ├ lib
 │   └ prisma.ts
 │
 ├ services
 │   ├ transaction.service.ts
 │   └ category.service.ts
 │
 ├ types
 │   └ transaction.ts
 │
 └ utils
```

---

# 主な機能

- ユーザー認証
- 収入 / 支出の記録
- カテゴリ管理
- 月ごとのダッシュボード
- 支出分析

---

# 今後追加予定の機能

- 予算管理 (budget)
- 支出グラフ表示
- 月別レポート
- モバイルアプリ (React Native)
- CSV エクスポート
