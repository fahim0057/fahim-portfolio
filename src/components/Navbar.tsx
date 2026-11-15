
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1220]/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Brand */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          FAHIM<span className="text-lime-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Let's Talk Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-300 lg:flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${
          isOpen ? "block" : "hidden"
        } border-t border-white/10 bg-[#0B1220] px-5 py-5 lg:hidden`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-slate-300 transition-colors hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 font-semibold text-slate-950"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
