
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 bg-[#101A2B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold tracking-[0.2em] text-lime-400">
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Let&apos;s build something
            <span className="text-lime-400"> together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
            Have an interesting project, an opportunity, or
            simply want to connect? I&apos;d be happy to hear
            from you. Feel free to reach out.
          </p>

          {/* Email Contact Card */}
          <div className="mt-12 rounded-3xl border border-slate-700/70 bg-[#0B1220] p-7 sm:p-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
              <Mail size={27} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Send me an email
            </h3>

            <a
              href="mailto:fahim.fxm@gmail.com"
              className="mt-3 inline-block break-all text-base text-slate-400 transition hover:text-lime-400 sm:text-lg"
            >
              fahim.fxm@gmail.com
            </a>

            <div>
              <a
                href="mailto:fahim.fxm@gmail.com?subject=Portfolio%20Inquiry"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} />
              </a>
            </div>

          </div>

          {/* GitHub */}
          <div className="mt-10">
            <p className="text-sm text-slate-500">
              You can also find my work on GitHub
            </p>

            <a
              href="https://github.com/fahim0057"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fahim's GitHub profile"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-lime-400 hover:text-lime-400"
            >
              <FaGithub size={19} />
              Visit GitHub Profile
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
