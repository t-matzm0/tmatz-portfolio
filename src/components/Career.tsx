import { careerHistory } from "@/data/career";
import SectionHeader from "./SectionHeader";

export default function Career() {
  return (
    <section id="career" className="py-24 px-6 bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="職務経歴" subtitle="Career" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-[var(--color-border)]" />

          <div className="space-y-16">
            {careerHistory.map((entry, i) => (
              <div key={i} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-primary)]" />

                <div className="text-sm font-mono text-[var(--color-accent)] mb-2 tracking-wider">
                  {entry.period}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                  {entry.company}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">
                  {entry.role}
                </p>

                <div className="space-y-4">
                  {entry.projects.map((project, j) => (
                    <div
                      key={j}
                      className="bg-white p-6 rounded-xl border border-[var(--color-border-light)] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-[var(--color-text-primary)] mb-2">
                        {project.name}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="space-y-2">
                        {project.highlights.map((h, k) => (
                          <li
                            key={k}
                            className="text-sm text-[var(--color-text-secondary)] flex items-start gap-3"
                          >
                            <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">
                              <svg
                                className="w-2 h-2"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
