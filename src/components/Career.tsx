import { careerHistory } from "@/data/career";

export default function Career() {
  return (
    <section
      id="career"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Career
        </h2>
        <div className="w-12 h-1 bg-blue-600 mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {careerHistory.map((entry, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900" />

                <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-1">
                  {entry.period}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {entry.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {entry.role}
                </p>

                <div className="space-y-4">
                  {entry.projects.map((project, j) => (
                    <div
                      key={j}
                      className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {project.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {project.description}
                      </p>
                      <ul className="space-y-1">
                        {project.highlights.map((h, k) => (
                          <li
                            key={k}
                            className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-blue-600 mt-1.5 flex-shrink-0">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <circle cx="6" cy="6" r="2" />
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
