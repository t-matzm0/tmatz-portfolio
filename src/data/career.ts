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
          "システム改修・保守運用およびデータ分析案件の調達仕様書作成、並行して複数案件の工程管理を担当",
        highlights: [
          "調達仕様書の作成・クライアント折衝（3案件並列）",
          "他事業者によるシステム改修案件の工程管理",
          "マネージャー不在下でのプロジェクト完遂",
        ],
      },
      {
        name: "人事KPIダッシュボード保守開発",
        description:
          "既存のBI環境における修正対応の要件定義から実装・テストまでを一貫して管理",
        highlights: [
          "要件検討からカットオーバーまでの全工程管理",
          "クライアントへの改善提案と実装",
        ],
      },
      {
        name: "生成AI活用PoC支援",
        description:
          "社内文書ベースの回答を行う生成AIチャットボットの開発",
        highlights: [
          "Python / LlamaIndex / LangChain によるRAG実装",
          "短期アサインで予定より前倒しで開発完了",
        ],
      },
      {
        name: "企業買収に伴うIT DD・Cyber DD",
        description:
          "対象企業のIT資産・セキュリティ状況の調査・分析",
        highlights: [
          "NIST基準に基づくセキュリティアセスメント実施",
          "クライアント窓口・定例会ファシリテーション",
        ],
      },
      {
        name: "サステナビリティプラットフォーム導入支援",
        description:
          "LCAプラットフォームのグローバル展開プロジェクトを実質リード",
        highlights: [
          "グローバルレビュー会での英語プレゼンテーション",
          "ステークホルダー管理・プロジェクト推進",
        ],
      },
      {
        name: "ブランドサイト構築・デジタルマーケティング支援",
        description:
          "DX戦略策定およびマーケティングツール導入のPMO",
        highlights: [
          "要件定義支援・サイト制作PMO",
          "マーケティング研修の企画・講師",
        ],
      },
      {
        name: "価格予測AI構築",
        description:
          "機械学習を活用した価格予測モデルの構築・精度向上",
        highlights: [
          "Python / XGBoostによる予測モデル開発",
          "Tableauによるデータ可視化",
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
        name: "基幹システム保守開発",
        description:
          "採用業務支援Webシステムおよびデータ移管用バッチ・BI用データ加工バッチの保守開発",
        highlights: [
          "Python (Django) によるWebシステム開発",
          "プロジェクトサブリーダーとして進捗・品質管理",
          "顧客対応・要求ヒアリング",
        ],
      },
      {
        name: "ERP導入プロジェクト PMO",
        description:
          "基幹システム老朽化に伴うSAP導入における周辺システムの要件定義支援",
        highlights: [
          "周辺システム(EDI)のシステム企画PMO",
          "業務要件・機能要件・非機能要件の資料作成",
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
        name: "金融機関向け基幹システム開発",
        description:
          "海外拠点向け基幹システムの新規開発。送金機能チームにて設計・実装・検証を担当",
        highlights: [
          "Java / 独自フレームワークでの大規模システム開発",
          "非機能・技術統括チームリーダーとして性能改善を推進",
          "フレームワークガイド作成による品質向上施策",
          "最大40名規模のチーム管理",
        ],
      },
      {
        name: "カード基幹システム保守開発",
        description:
          "カード基幹システムの保守における新商品機能開発およびシステム性能向上",
        highlights: [
          "COBOL / Java による基幹システム開発",
          "開発チームリーダーとして約10名のチーム管理",
        ],
      },
    ],
  },
];
