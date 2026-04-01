import { personalProjects } from "@/data/projects";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--color-bg-subtle)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="個人開発" subtitle="Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white p-6 rounded-xl border border-[var(--color-border-light)] shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center mb-5 text-[var(--color-accent)]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-2 text-lg">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-5 leading-loose">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
