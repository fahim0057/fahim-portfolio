
type Skill = {
  name: string;
  mark: string;
  description: string;
};

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Web Foundations",
    description: "The building blocks of modern web development.",
    skills: [
      { name: "HTML5", mark: "5", description: "Semantic page structure" },
      { name: "CSS3", mark: "#", description: "Layouts and styling" },
      { name: "JavaScript ES6+", mark: "JS", description: "Programming and interactivity" },
      { name: "TypeScript", mark: "TS", description: "Type-safe JavaScript" },
      { name: "Responsive Design", mark: "RWD", description: "Multi-device layouts" },
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building interactive and reusable interfaces.",
    skills: [
      { name: "React", mark: "RE", description: "Component-based development" },
      { name: "Next.js", mark: "N", description: "Modern React applications" },
      { name: "Tailwind CSS", mark: "TW", description: "Utility-first styling" },
      { name: "Component-Based UI", mark: "UI", description: "Reusable components" },
    ],
  },
  {
    number: "03",
    title: "APIs & Data",
    description: "Working with application data and services.",
    skills: [
      { name: "REST APIs", mark: "API", description: "API integration" },
      { name: "JSON", mark: "{}", description: "Structured data handling" },
      { name: "CRUD Operations", mark: "CRUD", description: "Create, read, update, delete" },
    ],
  },
  {
    number: "04",
    title: "Developer Tools",
    description: "Tools I use throughout my development workflow.",
    skills: [
      { name: "Git", mark: "G", description: "Version control" },
      { name: "GitHub", mark: "GH", description: "Code hosting and collaboration" },
      { name: "VS Code", mark: "VS", description: "Code editor" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/5 bg-[#0B1220] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.2em] text-lime-400">
            MY TECHNICAL TOOLKIT
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Skills &
            <span className="text-lime-400"> Technologies.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            A growing collection of technologies, tools, and
            concepts I use to build modern web applications.
            Always learning, always improving.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="rounded-3xl border border-slate-700/60 bg-[#101A2B] p-6 transition duration-300 hover:border-lime-400/40 sm:p-8"
            >

              {/* Category Heading */}
              <div className="mb-7">
                <span className="text-sm font-semibold text-lime-400">
                  {group.number}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {group.description}
                </p>
              </div>

              {/* Individual Skills */}
              <div className="grid gap-3 sm:grid-cols-2">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700/50 bg-[#0B1220] p-3 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-400/10 text-xs font-bold text-lime-400">
                      {skill.mark}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {skill.name}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {skill.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </article>
          ))}

        </div>

        {/* Closing Text */}
        <p className="mt-12 text-center text-sm text-slate-500">
          Skills grow through practice, experimentation, and continuous learning.
        </p>

      </div>
    </section>
  );
}
