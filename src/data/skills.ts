export interface TagCategory {
  name: string;
  tags: string[];
}

export const skillCategories: TagCategory[] = [
  {
    name: "Consulting",
    tags: [
      "要件定義",
      "基本設計・詳細設計",
      "PMO",
      "事業者管理支援",
      "調達仕様書作成支援",
      "ファシリテーション",
      "ドキュメンテーション",
      "ステークホルダー管理",
      "データ分析・BI",
      "IT DD・Cyber DD",
    ],
  },
  {
    name: "Development",
    tags: [
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
