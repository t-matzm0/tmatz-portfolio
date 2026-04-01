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
];

export const industries: string[] = [
  "金融",
  "製造",
  "官公庁",
  "人材",
  "サステナビリティ",
  "マーケティング",
  "ホスピタリティ",
];
