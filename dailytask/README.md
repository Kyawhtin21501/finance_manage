# DailyTask

Next.js (App Router) + TypeScript + Tailwind CSS + Prisma を使った Todo サンプルアプリです。  
ここまで作成した内容をこの README にまとめています。

## 現在の実装内容

- Feature-based フォルダ構成を導入
- `/todo` ページを実装（Server Action 利用）
- レイヤード構成を実装  
  `UI (page.tsx) -> action -> usecase -> repository`
- Prisma 連携（Todo モデル、Prisma Client 設定）
- Biome 導入（lint / format / check）
- Docker 関連スクリプト追加
- `docker-compose.yml` 追加（frontend / backend サービス）
- `/api/users` API ルート追加

## ディレクトリ構成

```text
src/
├── app/
│   ├── page.tsx
│   ├── api/
│   │   └── users/
│   │       └── route.ts
│   └── todo/
│       ├── actions.ts
│       └── page.tsx
│
├── features/
│   ├── auth/
│   │   ├── services/
│   │   └── usecases/
│   ├── shift/
│   │   ├── services/
│   │   └── usecases/
│   ├── user/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── usecases/
│   └── todo/
│       ├── repositories/
│       │   └── todoRepository.ts
│       ├── types/
│       │   └── todo.ts
│       └── usecases/
│           └── createTodo.ts
│
├── shared/
│   ├── lib/
│   └── utils/
│
└── infrastructure/
    ├── db/
    │   └── client.ts
    └── external/

prisma/
└── schema.prisma
```

## Todo 機能（Server Action + レイヤー）

### 1) UI
- ファイル: `src/app/todo/page.tsx`
- テキストエリア (`name="content"`) と Save / Cancel ボタンを配置
- `<form action={createTodoAction}>` で Server Action を実行

### 2) Action
- ファイル: `src/app/todo/actions.ts`
- `"use server"` を使用
- `createTodoAction(formData)` で `content` を抽出
- `createTodoUsecase(content)` を呼び出し
- `await revalidatePath("/todo")` 後に `redirect("/todo")`

### 3) Usecase
- ファイル: `src/features/todo/usecases/createTodo.ts`
- `content` を `trim`
- 空文字ならエラーを throw
- Repository に処理委譲

### 4) Repository
- ファイル: `src/features/todo/repositories/todoRepository.ts`
- Prisma Client を利用して Todo 作成
- ビジネスロジックは持たず永続化処理に専念

### 5) Type
- ファイル: `src/features/todo/types/todo.ts`
- `Todo` 型 (`id`, `content`, `createdAt`) を定義

### 6) DB Client
- ファイル: `src/infrastructure/db/client.ts`
- PrismaClient のシングルトンを定義（開発時の多重生成回避）

## Prisma 設定

### `prisma/schema.prisma`

- `Todo` モデルを定義
  - `id: String @id @default(cuid())`
  - `content: String`
  - `createdAt: DateTime @default(now())`

### `prisma.config.ts` (Prisma 7)

- Prisma 7 方式で datasource URL を定義
- `DATABASE_URL` は `prisma.config.ts` 側で読み込み

### `.env.example`

```bash
DATABASE_URL="file:./dev.db"
```

## Biome / 品質チェック

- 設定ファイル: `biome.json`
- Tailwind directive 対応済み
- 主なスクリプト:
  - `pnpm run lint:biome` : Biome lint
  - `pnpm run format` : Biome format
  - `pnpm run check` : Biome lint + TypeScript 型チェック
  - `pnpm run build:prod` : check 実行後に build

## package scripts

```bash
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint

pnpm run lint:biome
pnpm run format
pnpm run check
pnpm run build:prod

pnpm run prisma:generate
pnpm run prisma:migrate:dev
pnpm run prisma:migrate:deploy
pnpm run prisma:push
pnpm run prisma:studio

pnpm run vercel-build

pnpm run docker:build
pnpm run docker:run
```

## Docker

### `docker-compose.yml`

```yaml
version: "3"

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"

  backend:
    build: ./backend
    ports:
      - "5000:5000"
```

> 注意: 現在のリポジトリには `./frontend` / `./backend` ディレクトリは未作成です。  
> `docker compose up` を使う場合はそれぞれの Dockerfile/アプリを追加してください。

## セットアップ手順

1. 依存関係をインストール

```bash
pnpm install
```

2. 環境変数を用意

```bash
cp .env.example .env
```

3. Prisma Client を生成

```bash
pnpm run prisma:generate
```

4. スキーマ反映（どちらか）

```bash
pnpm run prisma:push
# または
pnpm run prisma:migrate:dev
```

5. 開発起動

```bash
pnpm run dev
```

ブラウザで `http://localhost:3000/todo` を開いて確認できます。
