
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

// Generate known project routes at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Loading fallback
function ProjectDetailsFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1220] text-white">
      <p className="text-slate-400">
        Loading project details...
      </p>
    </main>
  );
}

// Main route component
export default function ProjectDetailsPage({
  params,
}: Props) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      {params.then(({ slug }) => (
        <ProjectDetails slug={slug} />
      ))}
    </Suspense>
  );
}

// Component that receives the resolved slug
function ProjectDetails({ slug }: { slug: string }) {
  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1220] px-5 py-16 text-white sm:px-8">

      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-lime-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Project Heading */}
        <div className="mt-12">

          <span className="text-sm font-semibold tracking-widest text-lime-400">
            {project.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            {project.title}
            <span className="text-lime-400">.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            {project.summary}
          </p>

        </div>

        {/* Project Image */}
        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl border border-slate-700">

          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center"
              style={{
                background: project.coverGradient,
              }}
            >
              <h2 className="text-4xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          )}

        </div>

        {/* Project Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3">

          {/* Left Column */}
          <div className="space-y-10 lg:col-span-2">

            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold">
                Project Overview
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                {project.description}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold">
                Key Features
              </h2>

              <ul className="mt-5 space-y-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges Faced */}
            <section>
              <h2 className="text-2xl font-bold">
                Challenges Faced
              </h2>

              {project.challenges.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-slate-400">
                  Project-specific development challenges will be
                  documented after reviewing the implementation.
                </p>
              )}
            </section>

            {/* Future Improvements */}
            <section>
              <h2 className="text-2xl font-bold">
                Future Improvements
              </h2>

              {project.futureImprovements.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {project.futureImprovements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-slate-400">
                  Potential improvements will be added after
                  reviewing the implementation.
                </p>
              )}
            </section>

          </div>

          {/* Right Column: Project Information */}
          <aside className="h-fit rounded-2xl border border-slate-700 bg-[#101A2B] p-6">

            {/* Technology Stack */}
            <h2 className="text-xl font-bold">
              Technology Stack
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.length > 0 ? (
                project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <p className="text-sm text-slate-400">
                  Technology details are being finalized.
                </p>
              )}
            </div>

            {/* Development Role */}
            {project.role && (
              <div className="mt-8 border-t border-slate-700 pt-6">
                <h3 className="text-sm font-semibold text-slate-400">
                  Development Role
                </h3>

                <p className="mt-2 font-medium text-lime-400">
                  {project.role}
                </p>
              </div>
            )}

            {/* Project Links */}
            <div className="mt-8 space-y-3">

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
                >
                  Live Project
                  <ExternalLink size={16} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 px-4 py-3 text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
                >
                  Client GitHub Repository
                  <FaGithub size={17} />
                </a>
              )}

              {!project.liveUrl && !project.githubUrl && (
                <p className="text-xs leading-6 text-slate-500">
                  Public project links will be added when available.
                </p>
              )}

            </div>

          </aside>

        </div>

        {/* Back to Portfolio */}
        <div className="mt-20 border-t border-slate-700 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-lime-400"
          >
            <ArrowLeft size={18} />
            Explore More Projects
          </Link>
        </div>

      </div>

    </main>
  );
}
