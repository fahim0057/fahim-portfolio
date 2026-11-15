
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fahim0057",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/fahim-abdullah-o057",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:fahim.fxm@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1220] text-white"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">

        {/* Introduction */}
        <div className="space-y-7">

          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-xs font-medium tracking-wider text-lime-400">
              ASPIRING FULL-STACK DEVELOPER
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-lg text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Fahim
              <br />
              <span className="text-lime-400">
                Abdullah.
              </span>
            </h1>

            <h2 className="text-xl font-semibold text-slate-200 sm:text-2xl">
              Turning ideas into digital experiences.
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-slate-400">
            I&apos;m an aspiring Full-Stack Developer passionate
            about building modern, responsive, and user-friendly
            web applications. I enjoy learning new technologies,
            solving problems, and bringing creative ideas to life
            through code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
            >
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              Resume Coming Soon
              <Download size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-3">

            <span className="text-sm text-slate-500">
              Find me on
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="rounded-full border border-slate-700 p-3 text-slate-300 transition hover:border-lime-400 hover:text-lime-400"
                >
                  <Icon size={19} />
                </a>
              );
            })}

          </div>
        </div>

        {/* Profile Image Placeholder */}

{/* Profile Image */}
<div className="relative mx-auto w-full max-w-md">

  <div className="absolute -inset-4 rounded-3xl bg-lime-400/10 blur-2xl" />

  <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">

   <Image
  src="/images/profile.png"
  alt="Portrait of Fahim Abdullah"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 448px"
  className="object-cover object-center"
/>

  </div>

  <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 shadow-xl">
    <p className="text-sm font-semibold text-white">
      Building & Learning
    </p>
    <p className="text-xs text-lime-400">
      One project at a time.
    </p>
  </div>

</div>


      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 md:flex">
        <ArrowDown size={15} />
        Scroll to explore
      </div>

    </section>
  );
}
