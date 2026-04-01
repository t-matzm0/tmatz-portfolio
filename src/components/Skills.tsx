import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-blue-600 mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-5">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-2 h-2 rounded-full ${
                              level <= skill.level
                                ? "bg-blue-600"
                                : "bg-gray-200 dark:bg-gray-700"
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
