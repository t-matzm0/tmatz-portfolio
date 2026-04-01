export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const personalProjects: Project[] = [
  {
    title: "Travelet",
    description:
      "旅行の計画・記録を管理するアプリケーション。Web版およびモバイルアプリとして展開。",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Reversi Sensei",
    description:
      "AIを搭載したリバーシ（オセロ）対戦・学習アプリケーション。",
    tech: ["Flutter", "Dart", "AI"],
  },
  {
    title: "Dividend Baker",
    description:
      "配当金の管理・シミュレーションツール。投資ポートフォリオの配当収入を可視化。",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "Band Score Optimiser",
    description:
      "バンドスコアの最適化ツール。MusicXMLの変換・トリミング機能を提供。",
    tech: ["TypeScript"],
  },
  {
    title: "Blog",
    description: "技術ブログ。TypeScriptで構築。",
    tech: ["TypeScript", "Next.js"],
  },
  {
    title: "Discord Bot",
    description:
      "Discord向けの多機能ボット。コミュニティ運営の効率化を支援。",
    tech: ["Python", "Discord.py"],
  },
];
