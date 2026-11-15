
type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  status: "Completed" | "Currently Pursuing";
  description: string;
};

const education: EducationItem[] = [
  {
    institution: "North South University",
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science and Engineering",
    status: "Completed",
    description:
      "Completed my undergraduate studies in Computer Science and Engineering.",
  },
  {
    institution: "University of Dhaka",
    degree: "Professional Master's",
    field: "Information and Cyber Security",
    status: "Currently Pursuing",
    description:
      "Currently pursuing postgraduate studies in Information and Cyber Security.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-white/5 bg-[#101A2B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.2em] text-lime-400">
            MY ACADEMIC JOURNEY
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Education &
            <span className="text-lime-400"> Learning.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            My academic background combines computer science
            with an ongoing focus on information and cybersecurity.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative ml-2 space-y-8 border-l border-slate-700 pl-8">

          {education.map((item) => {
            const isCompleted = item.status === "Completed";

            return (
              <article
                key={item.institution}
                className="relative rounded-2xl border border-slate-700/60 bg-[#0B1220] p-6 transition duration-300 hover:border-lime-400/40 sm:p-8"
              >

                {/* Timeline Marker */}
                <span className="absolute -left-[2.55rem] top-8 h-4 w-4 rounded-full border-4 border-[#101A2B] bg-lime-400" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div className="space-y-3">

                    <h3 className="text-2xl font-bold">
                      {item.institution}
                    </h3>

                    <p className="text-lg font-medium text-lime-400">
                      {item.degree}
                    </p>

                    <p className="text-slate-300">
                      {item.field}
                    </p>

                    <p className="max-w-2xl text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                  {/* Academic Status */}
                  <span
                    className={`w-fit shrink-0 rounded-full px-4 py-2 text-xs font-semibold ${
                      isCompleted
                        ? "bg-lime-400/10 text-lime-400"
                        : "bg-blue-400/10 text-blue-400"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
