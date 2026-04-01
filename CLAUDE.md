# Portfolio Site - CLAUDE.md

## Project Overview
個人ポートフォリオサイト + ブログ。Astro + TypeScript + Tailwind CSS で構築。

## Tech Stack
- Astro v6 (SSG)
- TypeScript (strict)
- Tailwind CSS v4
- Content Collections (glob loader) でブログ記事管理

## Work Rules
- CLAUDE.md はすべての commit に合わせて更新すること（変更内容・進捗を記録）
- 顧客名や推測可能な言い回しは伏せる（職務経歴のコンテンツ）
- commit メッセージは日本語で記述

## Project Structure
```
src/
  layouts/         - Layout.astro (ベース), BlogPost.astro (記事)
  pages/           - index.astro, blog/index.astro, blog/[...slug].astro
  components/      - Header, Hero, About, Career, Skills, Projects, Blog, Contact, Footer, ThemeSwitcher
  content/blog/    - Markdown ブログ記事
  content.config.ts - Content Collections スキーマ定義
  data/            - 経歴・スキル・プロジェクトのデータ
  styles/          - グローバルCSS
scripts/
  generate-blog-post.md - Claude Code 用記事生成プロンプト
.github/workflows/
  generate-blog-post.yml - 毎週月曜に記事を自動生成するワークフロー
```

## Blog Auto-Generation
- GitHub Actions (毎週月曜 9:00 JST) で Claude Code CLI を実行
- `scripts/generate-blog-post.md` のプロンプトに従い記事を生成
- PR を自動作成 → 人間がレビュー・マージ
- `ANTHROPIC_API_KEY` を GitHub Secrets に設定する必要あり

## Design
- ミニマル・クリーン。装飾を抑え余白とタイポグラフィで構成
- モノクロ基調 (black/opacity で濃淡) + CSS変数でアクセントカラー切替
- ThemeSwitcher: ヘッダーのドットをクリックで6色切替 (localStorage保存)
- max-w-3xl で読みやすいコンテンツ幅

## Contact
- Formspree によるフォーム送信（メールアドレス非公開）
- `YOUR_FORMSPREE_ID` を実際のIDに差し替える必要あり

## Privacy / Anonymization
- 所属企業名はぼかして記載（日系大手SIer / ITコンサルティング企業 / 外資系大手総合コンサルティングファーム）
- 顧客名・プロジェクト固有名は記載しない

## Update Log
- 2026-04-02: Industries → Industries & Domains に変更、DD追加
- 2026-04-02: PM→PM/PMO変更、ファシリテーション・ドキュメンテーション追加
- 2026-04-02: Django/Tools&Platforms削除、経験業界セクション追加（金融/製造/官公庁/人材/サステナビリティ/マーケティング/ホスピタリティ）
- 2026-04-02: スキルレベルを実態に合わせて調整、Tableau/XGBoostをコンサルカテゴリに吸収、SAP削除
- 2026-04-02: 名前修正(Takashi)、社名ぼかし、スキル順序変更、フォーム追加、テーマ切替機能
- 2026-04-02: ブログ基盤追加（Content Collections + 記事自動生成パイプライン）
- 2026-04-02: Next.js → Astro に切り替え、ミニマルデザインで再構築
- 2026-04-01: プロジェクト初期セットアップ
