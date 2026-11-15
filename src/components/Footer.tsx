
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {

  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/#home"
              className="text-2xl font-bold tracking-tight"
            >
              FAHIM<span className="text-lime-400">.</span>
            </Link>

            <p className="mt-2 text-sm text-slate-500">
              Building digital experiences, one project at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                className="text-sm text-slate-400 transition hover:text-lime-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://github.com/fahim0057"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-lime-400 hover:text-lime-400"
          >
            <FaGithub size={20} />
          </a>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row">

          <p className="text-xs text-slate-500">
                     © 2026 Fahim Abdullah. All rights reserved.
            </p>

          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-lime-400"
          >
            Back to top
            <ArrowUp size={14} />
          </Link>

        </div>

      </div>

    </footer>
  );
}
