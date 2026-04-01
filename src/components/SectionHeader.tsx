interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-4 text-[var(--color-accent)] text-[10px] md:text-xs tracking-[0.2em] uppercase">
        <div className="h-[1px] w-8 bg-[var(--color-accent)]/30" />
        {subtitle}
        <div className="h-[1px] w-8 bg-[var(--color-accent)]/30" />
      </div>
    </div>
  );
}
