import { personalProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Projects
        </h2>
        <div className="w-12 h-1 bg-blue-600 mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
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
