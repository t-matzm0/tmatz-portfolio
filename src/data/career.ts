export interface CareerEntry {
  period: string;
  company: string;
  role: string;
  projects: {
    name: string;
    description: string;
    highlights: string[];
  }[];
}

export const careerHistory: CareerEntry[] = [
  {
    period: "2020 - Present",
    company: "外資系大手総合コンサルティングファーム",
    role: "ITコンサルタント",
    projects: [
      {
        name: "官公庁向けシステム調達・工程管理支援",
        description:
          "システム改修・保守運用およびデータ分析案件の調達仕様書作成と工程管理",
        highlights: [
          "調達仕様書および附属文書の作成（3案件並列）",
          "他事業者によるシステム改修案件の工程管理・資料レビュー",
          "月次報告会の資料作成・報告",
        ],
      },
      {
        name: "人事KPIダッシュボード保守開発",
        description:
          "BI環境の修正対応における要件定義からカットオーバーまでの管理",
        highlights: [
          "要件検討・整理の推進、クライアント窓口",
          "BI環境の実装およびテスト準備・実施の管理",
        ],
      },
      {
        name: "生成AI活用PoC支援",
        description:
          "社内文書ベースの回答を行う生成AIチャットボットの開発",
        highlights: [
          "Python / LlamaIndex / LangChain によるRAG実装",
          "データローダー開発および既存ソースの拡張",
        ],
      },
      {
        name: "IT DD・Cyber DD",
        description:
          "企業買収・売却に伴うIT資産・セキュリティ状況の調査・分析",
        highlights: [
          "アプリケーション・インフラ・セキュリティ領域の調査",
          "NIST基準に基づくセキュリティアセスメント実施",
          "クライアント窓口・定例会ファシリテーション",
        ],
      },
      {
        name: "サステナビリティプラットフォーム導入支援",
        description:
          "LCAプラットフォームのグローバル展開プロジェクト",
        highlights: [
          "定例会の資料準備・ファシリテーション",
          "グローバルレビュー会での資料作成・プレゼンテーション",
          "スタッフの資料レビュー・議事録確認",
        ],
      },
      {
        name: "価格予測AI構築・精度向上",
        description:
          "機械学習を活用した価格予測モデルの構築と精度改善",
        highlights: [
          "Python / XGBoostによる予測モデル開発・精度検証",
          "Tableauによる分析結果の可視化",
          "複数名開発のための構成管理の立ち上げ",
        ],
      },
      {
        name: "ブランドサイト構築・デジタルマーケティング支援",
        description:
          "DX戦略策定およびマーケティングツール導入",
        highlights: [
          "要件定義支援・サイト制作PMO",
          "DMP・MAツール導入のPMO",
          "マーケティング研修の企画・講師",
        ],
      },
    ],
  },
  {
    period: "2018 - 2020",
    company: "ITコンサルティング企業",
    role: "ITコンサルタント",
    projects: [
      {
        name: "ERP導入プロジェクト PMO",
        description:
          "基幹システム老朽化に伴うSAP導入における周辺システムの要件定義支援",
        highlights: [
          "周辺システム(EDI)のシステム企画PMO",
          "業務要件・機能要件・非機能要件の資料作成",
          "有識者ヒアリングによる現行システム調査・新システム構想策定",
        ],
      },
      {
        name: "基幹システム保守開発",
        description:
          "採用業務支援Webシステムおよびデータ移管・BI用バッチの保守開発",
        highlights: [
          "Python (Django) によるWebシステム・バッチ開発",
          "サブリーダーとして進捗・品質管理と顧客対応を兼務",
        ],
      },
    ],
  },
  {
    period: "2013 - 2018",
    company: "日系大手SIer",
    role: "システムエンジニア",
    projects: [
      {
        name: "金融機関向け基幹システム新規開発",
        description:
          "海外拠点向け基幹システムの新規開発。送金機能チームおよび非機能・技術統括チームを担当",
        highlights: [
          "送金機能チームでの詳細設計・実装・テスト",
          "非機能・技術統括チームリーダーとして性能調査・改善",
          "フレームワークガイド作成・各チームへの展開",
        ],
      },
      {
        name: "カード基幹システム保守開発",
        description:
          "新商品機能開発およびシステム性能向上",
        highlights: [
          "COBOL / Java による基本設計〜開発",
          "開発チームリーダー兼開発担当",
        ],
      },
    ],
  },
];
