export interface TagCategory {
  name: string;
  tags: string[];
}

export const skillCategories: TagCategory[] = [
  {
    name: "Consulting",
    tags: [
      "要件定義",
      "PMO",
      "事業者選定・管理",
      "データ分析・BI",
      "IT DD・Cyber DD",
      "ERP導入支援",
      "M&A支援",
      "RPA活用支援",
      "ステークホルダー管理",
      "ファシリテーション",
      "ドキュメンテーション",
    ],
  },
  {
    name: "Development",
    tags: [
      "基本設計・詳細設計",
      "実装",
      "テスト",
      "Python",
      "SQL",
      "TypeScript",
      "Java",
      "Dart",
      "Astro",
      "Next.js / React",
      "Flutter",
    ],
  },
  {
    name: "Tools & Platforms",
    tags: [
      "BI（Tableau / PowerBI）",
      "EPM（Anaplan）",
      "ERP（SAP）",
      "機械学習（XGBoost）",
      "生成AI（LangChain / LlamaIndex / RAG）",
    ],
  },
  {
    name: "Language",
    tags: ["日本語（母語）", "英語（資料作成・読み書き、会話は限定的）"],
  },
];

export const industries: string[] = [
  "金融",
  "クレジットカード",
  "自動車",
  "製造",
  "官公庁",
  "人材",
  "マーケティング",
  "サステナビリティ",
  "ホスピタリティ",
];
