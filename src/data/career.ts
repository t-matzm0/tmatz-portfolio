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
    period: "2024 - Present",
    company: "外資系大手総合コンサルティングファーム",
    role: "ITコンサルタント / シニアアソシエイト",
    projects: [
      {
        name: "公共機関向けシステム調達支援",
        description:
          "大規模システムの改修・保守運用に関する調達仕様書の作成および品質向上施策の立案",
        highlights: [
          "データ分析・機械学習による品質向上施策の立案",
          "複数案件の並行管理とクライアント折衝",
          "調達仕様書の作成・レビュー",
        ],
      },
      {
        name: "KPIダッシュボード開発",
        description:
          "人事領域のKPIダッシュボード保守開発における要件定義から実装までの一貫した開発管理",
        highlights: [
          "要件定義から実装までの全工程管理",
          "クライアントへの改善提案と実装",
          "チームマネジメントによる品質確保",
        ],
      },
    ],
  },
  {
    period: "2023 - 2024",
    company: "外資系大手総合コンサルティングファーム",
    role: "ITコンサルタント / シニアアソシエイト",
    projects: [
      {
        name: "サステナビリティプラットフォーム導入支援",
        description:
          "LCA（ライフサイクルアセスメント）プラットフォームのグローバル展開プロジェクトをリード",
        highlights: [
          "グローバルレビュー会での英語プレゼンテーション",
          "ステークホルダー管理・プロジェクト推進",
        ],
      },
      {
        name: "価格予測AI構築",
        description:
          "機械学習を活用した価格予測モデルの構築・精度向上プロジェクト",
        highlights: [
          "Python / XGBoostによる予測モデル開発",
          "Tableauによるデータ可視化",
          "モデル精度の継続的な改善",
        ],
      },
      {
        name: "統合マーケティング戦略立案",
        description:
          "ファネル分析やメディア接点分析を通じた効果的なマーケティング戦略の策定",
        highlights: [
          "データドリブンな戦略策定",
          "RPA導入支援の販売戦略立案",
        ],
      },
    ],
  },
  {
    period: "2020 - 2022",
    company: "ITコンサルティング企業",
    role: "システムエンジニア / ITコンサルタント",
    projects: [
      {
        name: "基幹システム保守開発",
        description:
          "人材サービス領域の基幹システム保守開発およびデータ移管・BI用バッチ開発",
        highlights: [
          "Python (Django) によるWebシステム開発",
          "データ移管用バッチ・BI用データ加工バッチの開発",
          "顧客対応・要求ヒアリング",
        ],
      },
      {
        name: "ERP導入プロジェクト PMO",
        description: "大手製造業向けSAP導入プロジェクトのPMO業務",
        highlights: [
          "EDI連携システムのプロジェクト管理",
          "要件定義からテストまでの工程管理",
        ],
      },
    ],
  },
  {
    period: "2013 - 2020",
    company: "日系大手SIer",
    role: "システムエンジニア",
    projects: [
      {
        name: "金融機関向け基幹システム開発",
        description:
          "海外拠点向け基幹システムの新規開発において、送金機能の設計・実装・検証・リリースを担当",
        highlights: [
          "Java言語での大規模システム開発",
          "独自フレームワークを活用した性能改善",
          "開発チームのマネジメント",
          "設計から検証・リリースまでの全工程を経験",
        ],
      },
    ],
  },
];
