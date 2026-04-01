"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-800">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          T. Matsumoto
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md dark:bg-gray-950/95 dark:border-gray-800">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
