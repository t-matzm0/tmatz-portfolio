import { skillCategories } from "@/data/skills";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="スキル" subtitle="Skills" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[var(--color-bg-primary)] p-8 rounded-xl border border-[var(--color-border-light)]"
            >
              <h3 className="font-bold text-[var(--color-text-primary)] mb-6 text-lg">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {skill.name}
                      </span>
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                              level <= skill.level
                                ? "bg-[var(--color-accent)]"
                                : "bg-[var(--color-border)]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
