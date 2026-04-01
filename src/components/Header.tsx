"use client";

import { useState } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CAREER", href: "#career" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-[var(--color-border-light)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <a
          href="#"
          className="text-[var(--color-text-primary)] font-bold tracking-widest text-lg"
        >
          T. Matsumoto
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-sm tracking-widest transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`fixed inset-0 bg-[var(--color-bg-primary)] z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden h-screen w-screen ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-8 text-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xl tracking-widest text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors block py-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
