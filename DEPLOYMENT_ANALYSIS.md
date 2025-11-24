# 【初学者向け】gh-pagesブランチの必要性と開発ワークフロー

## 💡 まず理解すべき基本概念

### ブランチを分ける理由を料理に例えると...

あなたが料理のレシピ本を出版するとします：

**mainブランチ = レシピ本（材料リストと作り方）**
- 🥕 材料リスト（ソースコード: `src/main.ts`, `src/style.css`）
- 📝 作り方の手順（設定ファイル: `package.json`, `vite.config.ts`）
- 📦 調理器具（開発ツール: `node_modules/`）

**gh-pagesブランチ = 完成した料理の写真集**
- 📸 美しく盛り付けられた料理の写真（ビルド済みHTML/CSS/JS）
- お客さんに見せるのはこっち！

**なぜ分けるのか？**
- レストランのお客さんに見せたいのは「完成した料理」であって、「レシピや調理器具」ではない
- Webサイトの訪問者に見せたいのは「動くサイト」であって、「ソースコード」ではない

---

## 🔍 現在の状況分析

### ✅ 確認済み（正常に動いている）

1. **GitHub Pagesの動作**: ✅ 正常
   - HTTP 200レスポンスを返している
   - HTMLファイルは正しく配信されている
   - アセットファイル（JS/CSS）も正しく配信されている

2. **デプロイ状態**: ✅ 正常
   - `gh-pages`ブランチにビルド成果物がデプロイされている
   - `index.html`と`assets/`ディレクトリが存在する

3. **ビルド成果物**: ✅ 正常
   - `dist/index.html`に正しいアセットパスが含まれている
   - JavaScriptとCSSファイルが生成されている

### ❓ サイトが表示されない原因

1. **ブラウザキャッシュ** - Ctrl+Shift+R（Windows/Linux）または Cmd+Shift+R（Mac）で強制リロード
2. **JavaScriptエラー** - F12でコンソール確認
3. **反映待ち** - デプロイから5分待つ

---

## 📚 なぜブランチを分けるのか？（初学者向け）

### ステップ1: ソースコードとビルド済みコードの違いを知る

**あなたが書くコード（ソースコード）:**
```typescript
// src/main.ts - 296行
const skills: Skill[] = [
  {
    category: 'フロントエンド',
    items: ['TypeScript', 'React', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'],
  },
  // ... さらに200行以上
];

function createHeader(): string {
  return `<header>...</header>`;
}
// ... 関数がたくさん
```

**特徴:**
- 📝 読みやすく、コメントがある
- 🔧 編集しやすい
- 📏 改行や空白が多い
- ⚙️ TypeScriptで型安全

**ビルド後のコード（本番用）:**
```javascript
// dist/assets/index-DZSlzq8g.js - 全て1行に圧縮
const n=[{category:"フロントエンド",items:["TypeScript","React","Vue.js",...
```

**特徴:**
- 🗜️ 1行に圧縮（ミニファイ）されている
- 🚀 ファイルサイズが小さい（読み込みが速い）
- 🔒 変数名が短く難読化されている（`skills` → `n`）
- ❌ 人間には読みにくい

### ステップ2: なぜブランチを分けるのか？

**問題: もしmainブランチに両方置いたら...**

```
mainブランチ/
├── src/main.ts           (296行、読みやすい開発用)
├── dist/index-xxx.js     (1行、圧縮された本番用)
├── package.json
└── node_modules/         (数千個のファイル！)
```

**何が起こるか？**

❌ **問題1: リポジトリが巨大化**
- `node_modules/`には数千個のファイル（100MB以上）
- Gitで管理すると、クローンに時間がかかる
- 他の開発者が困る

❌ **問題2: 混乱する**
- 「どっちのファイルを編集すればいいの？」
- `src/main.ts`を編集しても、`dist/`を更新し忘れたら反映されない

❌ **問題3: Gitの履歴が汚れる**
- コードを1行変更すると、ビルド後のファイルも変更される
- Gitのコミットに「意味のある変更」と「自動生成の変更」が混ざる

**解決策: ブランチを分ける！**

```
mainブランチ（開発用）          gh-pagesブランチ（公開用）
├── src/main.ts             ├── index.html
├── package.json            └── assets/
└── vite.config.ts              └── index-xxx.js (圧縮済み)
```

✅ **利点1: 役割が明確**
- `main`ブランチ = 開発者が編集する場所
- `gh-pages`ブランチ = 訪問者が見る場所

✅ **利点2: 軽量なリポジトリ**
- `main`ブランチには開発に必要なファイルのみ
- `node_modules/`は`.gitignore`で除外

✅ **利点3: 自動化が簡単**
- `npm run deploy`で自動的に`gh-pages`ブランチが更新される
- 手動でファイルをコピーする必要なし

### ステップ3: 実際のワークフローを見る

**あなたがやること:**
```bash
# ステップ1: コードを編集
vim src/main.ts

# ステップ2: ローカルで確認
npm run dev  # http://localhost:5173 で確認

# ステップ3: デプロイ
npm run deploy  # これだけ！
```

**裏で何が起こるか:**
```bash
npm run deploy
  ↓
① npm run build が実行される
  - TypeScriptをコンパイル
  - ファイルを圧縮
  - dist/ に出力
  ↓
② gh-pages -d dist が実行される
  - dist/ の内容を取得
  - gh-pages ブランチに切り替え
  - ファイルをコピー
  - GitHubにプッシュ
  ↓
③ GitHub Pages が自動的に配信
  - https://dayano74.github.io/ で公開
```

**重要なポイント:**
- あなたは`main`ブランチで開発するだけ
- `gh-pages`ブランチは自動的に更新される
- `gh-pages`ブランチを直接編集する必要はない

---

---

## 🚀 今後の開発ワークフロー（実践編）

### 日常的な開発の流れ

#### 🔧 開発作業（毎日やること）

```bash
# 1. 開発サーバーを起動
npm run dev

# 2. ブラウザで http://localhost:5173 を開く

# 3. コードを編集
#    - src/main.ts でコンテンツを編集
#    - src/style.css でデザインを編集

# 4. ブラウザが自動的にリロードされる（ホットリロード）

# 5. 満足したら、Ctrl+C で開発サーバーを停止
```

#### 📝 変更をGitに保存（意味のある変更ができたら）

```bash
# 1. 変更内容を確認
git status
git diff

# 2. ステージング
git add src/main.ts src/style.css

# 3. コミット
git commit -m "プロジェクトセクションに新しいプロジェクトを追加"

# 4. GitHubにプッシュ
git push origin main
```

#### 🌐 サイトを公開（完成したら）

```bash
# 1. デプロイコマンドを実行（これだけ！）
npm run deploy

# 2. 2〜5分待つ

# 3. https://dayano74.github.io/ にアクセス

# 4. ブラウザのキャッシュをクリア（Ctrl+Shift+R）
```

### 具体的な編集例

#### 例1: 自己紹介を変更する

```bash
# 1. ファイルを開く
vim src/main.ts

# 2. 84〜92行目を探す
function createHero(): string {
  return `
    ...
    <span class="hero-name">あなたの名前</span>  # ← ここを編集
    ...
    <p class="hero-subtitle">フルスタックエンジニア / Web開発者</p>  # ← ここも編集
    ...
  `;
}

# 3. ローカルで確認
npm run dev

# 4. OKならデプロイ
npm run deploy
```

#### 例2: プロジェクトを追加する

```bash
# 1. src/main.ts を開く

# 2. 34〜55行目の projects 配列に追加
const projects: Project[] = [
  // ... 既存のプロジェクト
  {
    title: '新しいプロジェクト',  # ← 追加
    description: 'このプロジェクトでは〜',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/dayano74/my-project',
    demo: 'https://my-project-demo.com',
  },
];

# 3. ローカルで確認
npm run dev

# 4. Gitに保存
git add src/main.ts
git commit -m "新しいプロジェクトを追加"
git push origin main

# 5. デプロイ
npm run deploy
```

#### 例3: デザインを変更する

```bash
# 1. src/style.css を開く

# 2. 9〜18行目の色を変更
:root {
  --color-primary: #3b82f6;        /* メインカラー ← 好きな色に変更 */
  --color-primary-dark: #2563eb;
  --color-secondary: #8b5cf6;
  ...
}

# 3. ローカルで確認
npm run dev

# 4. デプロイ
npm run deploy
```

### よくある質問

#### Q1: gh-pagesブランチを直接編集してもいい？
❌ **ダメです！** 次に`npm run deploy`を実行すると上書きされます。
✅ **必ず`main`ブランチで編集してください。**

#### Q2: distディレクトリを編集してもいい？
❌ **ダメです！** `npm run build`を実行すると上書きされます。
✅ **必ず`src/`ディレクトリを編集してください。**

#### Q3: デプロイしたのにサイトが更新されない
✅ **以下を試してください:**
1. 2〜5分待つ（GitHub Pagesの反映に時間がかかる）
2. ブラウザのキャッシュをクリア（Ctrl+Shift+R）
3. シークレットモードで開く
4. F12でコンソールエラーを確認

#### Q4: ローカルでは動くのに本番で動かない
✅ **確認すること:**
1. `npm run build`でエラーが出ていないか
2. `dist/index.html`に正しいパスが含まれているか
3. ブラウザのコンソールにエラーが出ていないか

### 開発のベストプラクティス

✅ **推奨:**
- 小さな変更ごとにコミット
- コミットメッセージは分かりやすく
- ローカルで必ず動作確認してからデプロイ
- 定期的にバックアップ（GitHubにプッシュ）

❌ **避けるべき:**
- `gh-pages`ブランチを直接編集
- `dist/`や`node_modules/`をGitに追加
- ビルドエラーを無視してデプロイ

---

## 🎯 まとめ

### ブランチを分ける理由（簡単に）

🍳 **料理の例え:**
- `main`ブランチ = レシピ本（開発者が見る）
- `gh-pages`ブランチ = 完成した料理（お客さんが見る）

💻 **実際のプロジェクト:**
- `main`ブランチ = ソースコード（編集しやすい）
- `gh-pages`ブランチ = ビルド済みコード（高速で動く）

### あなたがやること

1. **開発**: `main`ブランチで`src/`を編集
2. **確認**: `npm run dev`でローカル確認
3. **保存**: `git commit && git push`
4. **公開**: `npm run deploy`

たったこれだけ！`gh-pages`ブランチは自動で更新されます。

### サイトが表示されない場合

1. ✅ Ctrl+Shift+R でブラウザを強制リロード
2. ✅ 5分待ってから再アクセス
3. ✅ F12でコンソールエラーを確認

**これでも解決しない場合:**
ブラウザのコンソール（F12 > Console）のエラーメッセージを共有してください。

