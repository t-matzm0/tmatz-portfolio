export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border-light)] bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto text-center text-sm text-[var(--color-text-muted)]">
        &copy; {new Date().getFullYear()} Takuma Matsumoto. All rights
        reserved.
      </div>
    </footer>
  );
}
