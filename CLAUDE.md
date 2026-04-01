# Portfolio Site - CLAUDE.md

## Project Overview
個人ポートフォリオサイト。Next.js (App Router) + TypeScript + Tailwind CSS で構築。

## Tech Stack
- Next.js 16 (App Router, SSG)
- TypeScript
- Tailwind CSS v4

## Work Rules
- CLAUDE.md はすべての commit に合わせて更新すること（変更内容・進捗を記録）
- 顧客名や推測可能な言い回しは伏せる（職務経歴のコンテンツ）
- commit メッセージは日本語で記述

## Project Structure
```
src/
  app/           - Next.js App Router pages
  components/    - React components
  data/          - コンテンツデータ（経歴・スキル・プロジェクト等）
```

## Design Reference
- playon-music.jp（ピアノ教室サイト）のデザイン品質を参考
- カラーパレット: スレートブルー (#4A7C8F) をアクセントに、温かみのあるニュートラルトーン
- セクション見出し: 日本語タイトル + 装飾線に囲まれた英語サブタイトル (SectionHeader コンポーネント)
- 豊富な余白 (py-24)、セクション間の背景色切替
- 丸角カード + subtle border + 柔らかいシャドウ

## Update Log
- 2026-04-01: playon-music.jp を参考にデザインリファイン（カラーパレット、セクション構造、カードデザイン刷新）
- 2026-04-01: プロジェクト初期セットアップ (Next.js + TypeScript + Tailwind CSS)
