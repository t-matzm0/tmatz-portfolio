# Portfolio Site - CLAUDE.md

## Project Overview
個人ポートフォリオサイト。Astro + TypeScript + Tailwind CSS で構築。

## Tech Stack
- Astro v5 (SSG)
- TypeScript (strict)
- Tailwind CSS v4

## Work Rules
- CLAUDE.md はすべての commit に合わせて更新すること（変更内容・進捗を記録）
- 顧客名や推測可能な言い回しは伏せる（職務経歴のコンテンツ）
- commit メッセージは日本語で記述

## Project Structure
```
src/
  layouts/       - ベースレイアウト
  pages/         - Astro ページ
  components/    - Astro コンポーネント (.astro)
  data/          - コンテンツデータ（経歴・スキル・プロジェクト等）
  styles/        - グローバルCSS
```

## Design
- ミニマル・クリーン。装飾を抑え余白とタイポグラフィで構成
- モノクロ基調 (black/opacity で濃淡)、アクセント色は最小限
- max-w-3xl で読みやすいコンテンツ幅

## Update Log
- 2026-04-02: Next.js → Astro に切り替え、ミニマルデザインで再構築
- 2026-04-01: playon-music.jp を参考にデザインリファイン（方向性修正済み）
- 2026-04-01: プロジェクト初期セットアップ (Next.js + TypeScript + Tailwind CSS)
