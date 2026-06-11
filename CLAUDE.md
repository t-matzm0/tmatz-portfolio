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

## Blog Auto-Generation（休止中）
- ブログページは `src/pages/_blog/` に退避（underscore prefix で Astro のルーティング対象外、URLなし）
- 自動生成ワークフローの schedule はコメントアウト済み（workflow_dispatch のみ残置）
- 再開条件: 自動生成（automate blog maker）で品質が出せると確認できたら、`_blog` → `blog` リネーム + schedule 復活 + `ANTHROPIC_API_KEY` を GitHub Secrets に設定
- `scripts/generate-blog-post.md` のプロンプトに従い記事生成 → PR 自動作成 → 人間がレビュー・マージ、の設計は維持

## Design
- ミニマル・クリーン。装飾を抑え余白とタイポグラフィで構成
- モノクロ基調 (black/opacity で濃淡) + CSS変数でアクセントカラー切替
- ThemeSwitcher: ヘッダーのドットをクリックで6色切替 (localStorage保存)
- max-w-3xl で読みやすいコンテンツ幅

## Contact
- 公開ページにフォームは置かない方針（フリーランスエージェント経由で連絡を受ける運用）
- `Contact.astro` ファイル自体は残置しているがどのページからも import していない

## Privacy / Anonymization
- 所属企業名はぼかして記載（日系大手SIer / ITコンサルティング企業 / 外資系大手総合コンサルティングファーム）
- 顧客名・プロジェクト固有名は記載しない

## Deploy
- 本番: https://tmatz.studio/ （Cloudflare Pages、プロジェクト名 tmatz-portfolio）
- **main への push で自動デプロイ**（.github/workflows/deploy.yml、cloudflare/wrangler-action）
- リリースフロー: feature/ → develop に PR → develop → main にリリース PR → マージで自動デプロイ
- GitHub Secrets: CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID 設定済み

## Update Log
- 2026-06-11: main push での自動デプロイ追加（GitHub Actions + wrangler-action、Secrets 設定済み）
- 2026-06-11: Notion職務経歴DBとの全件突合レビュー反映。Anaplan を BCI期から除去（事実誤り、実際はPwC期2023年）、人事KPIダッシュボードを BI環境→Anaplan環境に修正、送金チームをサブリーダー実態（レビュー・テスト推進）に修正、直近の官公庁業務標準化・制度DX支援を追加、RPA導入→RPA活用支援、scikit-learn/AWS 削除（業務裏付けなし・ユーザー判断）。匿名化漏れ・期間・業界リスト9件は検証済み問題なし
- 2026-06-11: Cloudflare Pages 公開（tmatz-portfolio.pages.dev / カスタムドメイン tmatz.studio）。404.astro 追加（Pages の SPA フォールバックで未知URLがトップを返すのを防止）
- 2026-06-10: 公開前クリーンアップ。`/blog` を `_blog` に退避（実名→T.M.修正込み、将来の自動生成運用に備え温存）、`/career` 削除（/portfolio-x7k2 と重複・推測可能URLのため）、Layout description を現Hero文面に更新、blog自動生成workflowのscheduleを停止（manual起動のみ残置）。develop/featureブランチ運用開始
- 2026-05-30: 一区切り（フリーランスエージェント面談での共有URL用途で完成扱い）。Hero文面を価値提案型に書き換え（「事業課題のIT・データ・AIによる解決を、要件整理から実行まで一貫して支援」）、トップを T.M. で匿名化（Header/Hero/Footer の名前を props 化）、フル版は `/portfolio-x7k2` に実名集約、Contact削除（ナビ・コンポーネント・両ページから）、Functional Domains は Industries に統合して撤去、Skills を能力グルーピング化、ニュースリリースは載せない方針確定（NDA/秘密保持）
- 2026-05-09: スキル整理（Tools&Platforms能力グルーピング化、Industries/Functional Domains 分離、Language追加）、career.ts 補強（海外送金、Anaplan、カードバッチ）
- 2026-04-27: Heroボタン削除、Blog削除、トップとフル版のデザイン統一、ナビ・コンタクト共通化
- 2026-04-26: デザインブラッシュアップ（セクション番号・モノスペースラベル・hover動作・余白拡張）
- 2026-04-24: /portfolio-x7k2 フルページ追加（Hero+About+Career詳細+Skills+Contact を1ページに統合、名刺QRコード用）
- 2026-04-02: キャリア全面修正（期間・社名・ロール・プロジェクト内容をNotionDBから正確に反映）
- 2026-04-02: スキルをRFP境界で整理（Consulting=ユーザー側支援/Development=開発側）、調達仕様書を事業者選定・管理に統合
- 2026-04-02: PM→PM/PMO変更、ファシリテーション・ドキュメンテーション追加
- 2026-04-02: Django/Tools&Platforms削除、経験業界セクション追加（金融/製造/官公庁/人材/サステナビリティ/マーケティング/ホスピタリティ）
- 2026-04-02: スキルレベルを実態に合わせて調整、Tableau/XGBoostをコンサルカテゴリに吸収、SAP削除
- 2026-04-02: 名前修正(Takashi)、社名ぼかし、スキル順序変更、フォーム追加、テーマ切替機能
- 2026-04-02: ブログ基盤追加（Content Collections + 記事自動生成パイプライン）
- 2026-04-02: Next.js → Astro に切り替え、ミニマルデザインで再構築
- 2026-04-01: プロジェクト初期セットアップ
