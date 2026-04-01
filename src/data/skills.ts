export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "Java", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Dart", level: 3 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Django", level: 4 },
      { name: "Astro", level: 3 },
      { name: "Next.js / React", level: 3 },
      { name: "Flutter", level: 3 },
      { name: "XGBoost / scikit-learn", level: 4 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Tableau", level: 4 },
      { name: "SAP", level: 3 },
      { name: "AWS", level: 3 },
      { name: "Git", level: 4 },
    ],
  },
  {
    name: "Consulting",
    skills: [
      { name: "Project Management", level: 5 },
      { name: "Stakeholder Management", level: 4 },
      { name: "Requirements Definition", level: 5 },
      { name: "English Communication", level: 3 },
    ],
  },
];
