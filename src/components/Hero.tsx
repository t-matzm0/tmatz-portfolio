export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-16 bg-[var(--color-bg-primary)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-primary)] to-white" />
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-sm md:text-base tracking-[0.15em] mb-6 text-[var(--color-accent)] font-medium">
          IT Consultant & Software Engineer
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-[1px] w-8 bg-[var(--color-accent)]" />
          <span className="text-base md:text-lg tracking-[0.1em] text-[var(--color-text-secondary)] font-medium">
            Portfolio
          </span>
          <span className="h-[1px] w-8 bg-[var(--color-accent)]" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-tight text-[var(--color-text-primary)]">
          Matsumoto Takuma
        </h1>
        <p className="text-base md:text-lg leading-[2.5] tracking-widest text-[var(--color-text-secondary)] font-medium max-w-2xl mx-auto mb-12">
          システムエンジニアからITコンサルタントへ。
          <br className="hidden sm:block" />
          技術力とビジネス視点を融合し、
          <br className="md:hidden" />
          課題解決に取り組んでいます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#career"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Career
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
