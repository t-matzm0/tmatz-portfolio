export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

// Level基準:
// 5: 実務でリード・指導できる
// 4: 実務で自走できる
// 3: 実務経験あり
// 2: 基礎的な理解
// 1: 触ったことがある

export const skillCategories: SkillCategory[] = [
  {
    name: "Consulting",
    skills: [
      { name: "要件定義・業務分析", level: 5 },
      { name: "プロジェクトマネジメント", level: 5 },
      { name: "ステークホルダー管理", level: 4 },
      { name: "提案・プレゼンテーション", level: 4 },
      { name: "データ分析・AI/ML活用", level: 3 },
      { name: "BI・データ可視化", level: 4 },
      { name: "英語コミュニケーション", level: 2 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 4 },
      { name: "SQL", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Java", level: 3 },
      { name: "Dart", level: 3 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Django", level: 3 },
      { name: "Astro", level: 3 },
      { name: "Next.js / React", level: 3 },
      { name: "Flutter", level: 3 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 4 },
      { name: "AWS", level: 3 },
    ],
  },
];
