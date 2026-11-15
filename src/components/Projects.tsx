
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/5 bg-[#0B1220] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.2em] text-lime-400">
            MY RECENT WORK
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Featured
            <span className="text-lime-400"> Projects.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            A collection of projects where I turn ideas into
            functional applications, experiment with technologies,
            and continuously improve my development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-slate-700/60 bg-[#101A2B] transition duration-300 hover:-translate-y-2 hover:border-lime-400/50"
            >

              {/* Project Preview */}
              <div className="relative aspect-[16/10] overflow-hidden">

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="flex h-full items-center justify-center"
                    style={{
                      background: project.coverGradient,
                    }}
                  >
                    <div className="text-center">
                      <p className="text-4xl font-bold tracking-widest text-white/90">
                        {project.title}
                      </p>
                      <p className="mt-3 text-xs tracking-[0.3em] text-lime-400">
                        PROJECT PREVIEW
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-md">
                  {project.category}
                </span>

              </div>

              {/* Project Information */}
              <div className="p-6">

                <h3 className="text-2xl font-bold transition group-hover:text-lime-400">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.length > 0 ? (
                    project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">
                      Technology details being finalized
                    </span>
                  )}

                </div>

                {/* Details Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-7 flex items-center justify-between border-t border-slate-700 pt-5 text-sm font-semibold text-white transition hover:text-lime-400"
                >
                  View Project Details
                  <ArrowUpRight
                    size={20}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
