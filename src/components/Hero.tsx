export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
          IT Consultant & Software Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Matsumoto
          <span className="block text-blue-600 dark:text-blue-400">
            Takuma
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          システムエンジニアからITコンサルタントへ。
          <br className="hidden sm:block" />
          技術力とビジネス視点を融合し、課題解決に取り組んでいます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#career"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            View Career
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
