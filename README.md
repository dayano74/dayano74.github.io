# Portfolio Website

モダンでレスポンシブなポートフォリオサイト（Vite + TypeScript）

## 🚀 特徴

- ✨ モダンでクリーンなデザイン
- 📱 完全レスポンシブ（モバイル・タブレット・デスクトップ対応）
- ⚡ Vite による高速な開発環境
- 🔧 TypeScript で型安全な開発
- 🎨 美しいアニメーション効果
- 🌐 GitHub Pages で簡単デプロイ

## 📦 セットアップ

### 必要な環境

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install
```

## 🛠️ 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

ビルドされたサイトをローカルでプレビューできます。

## 🚢 デプロイ

### GitHub Pages へのデプロイ

```bash
npm run deploy
```

このコマンドで自動的にビルドして GitHub Pages にデプロイされます。

## ✏️ カスタマイズ方法

### 1. 個人情報の更新

`src/main.ts` を開いて、以下の情報を更新してください：

#### プロフィール情報
```typescript
// ヒーローセクションの名前を変更
function createHero(): string {
  return `
    ...
    <span class="hero-name">あなたの名前</span>
    ...
    <p class="hero-subtitle">フルスタックエンジニア / Web開発者</p>
    <p class="hero-description">
      情熱を持ってコードを書いています。<br>
      ユーザー体験を向上させるWebアプリケーションの開発が得意です。
    </p>
    ...
  `;
}
```

#### スキル・技術スタック
```typescript
const skills: Skill[] = [
  {
    category: 'フロントエンド',
    items: ['TypeScript', 'React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'],
  },
  // 自分のスキルに合わせて編集
];
```

#### プロジェクト
```typescript
const projects: Project[] = [
  {
    title: 'プロジェクト名 1',
    description: 'プロジェクトの説明',
    technologies: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo.example.com',
    image: 'path/to/image.jpg', // オプション
  },
  // プロジェクトを追加
];
```

#### 連絡先リンク
```typescript
function createContact(): string {
  return `
    ...
    <a href="mailto:your.email@example.com" class="contact-link">
    <a href="https://github.com/yourusername" ...>
    <a href="https://twitter.com/yourusername" ...>
    <a href="https://linkedin.com/in/yourusername" ...>
    ...
  `;
}
```

### 2. 色・デザインの変更

`src/style.css` の `:root` セクションで色を変更できます：

```css
:root {
  --color-primary: #3b82f6;        /* メインカラー */
  --color-primary-dark: #2563eb;   /* メインカラー（濃い） */
  --color-secondary: #8b5cf6;      /* アクセントカラー */
  --color-text: #1f2937;           /* テキストカラー */
  --color-text-light: #6b7280;     /* 薄いテキスト */
  --color-bg: #ffffff;             /* 背景色 */
  --color-bg-secondary: #f9fafb;   /* セカンダリ背景色 */
}
```

### 3. ページタイトルの変更

`index.html` を開いて、`<title>` タグを更新してください：

```html
<title>Portfolio | Your Name</title>
```

## 📂 ファイル構成

```
.
├── index.html          # HTML エントリーポイント
├── package.json        # npm 設定
├── tsconfig.json       # TypeScript 設定
├── vite.config.ts      # Vite 設定
└── src/
    ├── main.ts         # メイン TypeScript ファイル
    └── style.css       # スタイルシート
```

## 🎨 含まれているセクション

1. **ヘッダー** - ナビゲーションメニュー
2. **ヒーロー** - 自己紹介とキャッチコピー
3. **スキル** - 技術スタックの紹介
4. **プロジェクト** - 作品・プロジェクトの紹介
5. **コンタクト** - SNS・連絡先リンク
6. **フッター** - コピーライト

## 💡 カスタマイズのヒント

### プロジェクト画像の追加

1. `public/` フォルダに画像を配置
2. `src/main.ts` のプロジェクト定義に画像パスを追加：

```typescript
const projects: Project[] = [
  {
    title: 'プロジェクト名',
    description: '説明',
    technologies: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://...',
    image: '/images/project1.png', // 追加
  },
];
```

### セクションの追加

`src/main.ts` に新しい関数を作成し、`init()` 関数で呼び出してください：

```typescript
function createNewSection(): string {
  return `
    <section class="new-section">
      <div class="container">
        <h2 class="section-title">新しいセクション</h2>
        <p>コンテンツ</p>
      </div>
    </section>
  `;
}

function init(): void {
  // ...
  app.innerHTML = `
    ${createHeader()}
    <main>
      ${createHero()}
      ${createSkills()}
      ${createProjects()}
      ${createNewSection()} // 追加
      ${createContact()}
    </main>
    ${createFooter()}
  `;
}
```

## 📝 ライセンス

MIT License - 自由にカスタマイズして使用してください！

## 🤝 貢献

改善提案や不具合報告は Issue または Pull Request でお願いします。

---

**良いポートフォリオサイト作りを！** 🚀
