

const focusAreas = [
  {
    title: "Current Focus",
    description:
      "Full-stack development with React, Next.js, TypeScript, and modern web technologies.",
  },
  {
    title: "My Approach",
    description:
      "Curious, creative, and detail-oriented. I enjoy solving problems, experimenting with ideas, and learning continuously.",
  },
  {
    title: "Beyond Coding",
    description:
      "I enjoy archery, football, gaming, and teaching. Sharing knowledge and challenging myself are things I value.",
  },
  {
    title: "My Goal",
    description:
      "Growing into a professional Full-Stack Developer and building useful, reliable, and impactful applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/5 bg-[#101A2B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Introduction */}
          <div className="space-y-6">

            <span className="text-sm font-semibold tracking-[0.2em] text-lime-400">
              GET TO KNOW ME
            </span>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Curious by nature.
              <span className="text-lime-400">
                {" "}Developer by passion.
              </span>
            </h2>

            <p className="leading-8 text-slate-400">
              Hi, I&apos;m Fahim Abdullah, an aspiring Full-Stack
              Developer who enjoys turning ideas into meaningful
              digital experiences.
            </p>

            <p className="leading-8 text-slate-400">
              My journey into web development started with the
              fundamentals of HTML, CSS, and JavaScript. As I
              continued learning, I explored React, TypeScript,
              and Next.js, applying my knowledge through practical
              projects like Ark-en-Ciel and Bazar Dor.
            </p>

            <p className="leading-8 text-slate-400">
              I&apos;m particularly interested in full-stack
              development because I enjoy understanding how
              different parts of an application work together.
              From building intuitive user interfaces to exploring
              backend functionality, I love turning problems
              into working solutions.
            </p>

            <p className="leading-8 text-slate-400">
              I&apos;m naturally curious, creative, and
              detail-oriented. I enjoy solving challenges,
              experimenting with new ideas, working with others,
              and consistently learning something new.
              I also enjoy teaching and sharing knowledge.
            </p>

            <p className="leading-8 text-slate-400">
              Beyond programming, I enjoy archery, football,
              and gaming. These interests give me opportunities
              to challenge myself, stay creative, and maintain
              a healthy balance outside development.
            </p>

            <p className="leading-8 text-slate-400">
              My goal is to grow into a professional Full-Stack
              Developer who builds useful, reliable, and
              impactful applications.
            </p>

          </div>

          {/* Personal Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">

            {focusAreas.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-slate-700/70 bg-[#0B1220] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="mb-4 block text-sm font-semibold text-lime-400">
                  0{index + 1}
                </span>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
