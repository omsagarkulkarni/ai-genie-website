import Image from "next/image";

const leaders = [
  {
    name: "Krishna Arun",
    title: "Founder and Chief Executive Officer",
    image: "/images/krishna.png",
    bio: `Krishna Arun is the founder and CEO of AI Genie and leads the technical vision and product development of the platform. He is a motivated 10th grader from Sammamish and attends Eastlake High School. Krishna brings hands-on AI experience, including an internship at Harvard University that helped develop his foundational AI skills. His achievements include second place in the machine learning category at the Washington State Science Fair, Conrad Innovator recognition, ISSEF International Winner, Blue Ocean Top 350 Finalist, Paradigm Challenge Top 100, and competitive robotics success as an FTC Regional finalist and top 16 statewide VEX Robotics contender. Krishna drives AI Genie’s innovation and technical direction.`
  },
  {
    name: "Om Kulkarni",
    title: "Chief Financial Officer",
    image: "/images/om.png",
    bio: `Om Kulkarni is the Chief Financial Officer of AI Genie and oversees financial planning, business operations, and strategic partnerships. He is a freshman at Eastlake High School in Sammamish, Washington, and participates in Tae Kwon Do, competitive swimming, and music. Om supports fundraising, customer acquisition, and overall business strategy. His background includes Washington Business Week, top 5 DECA Regional finalist, Blue Ocean Top 350 Finalist, and Paradigm Challenge Top 100. Om’s leadership and business development skills contribute to AI Genie’s growth and operational discipline.`
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            About
          </h1>
        </header>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Company Background
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            AI Genie is building a decentralized compute platform designed to
            make high-performance AI workloads affordable and accessible.
            Traditional cloud compute costs continue to rise and consume a
            significant portion of startup budgets. AI Genie addresses this by
            tapping into unused compute capacity across global hardware,
            providing scalable and cost-efficient execution for AI and machine
            learning applications. The company’s mission is to democratize
            access to high-performance compute.
          </p>
        </section>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Mission Statement
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            AI Genie’s mission is to democratize access to high-performance
            compute.
          </p>
        </section>

        <section className="space-y-6 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Leadership
          </h2>
          <div className="space-y-4">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col gap-4 rounded-soft-xl bg-light-gray p-4 md:flex-row md:items-start"
              >
                <div className="flex justify-center">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} headshot`}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-full object-cover"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-1 text-sm text-dark-gray/80">
                  <div className="text-sm font-semibold text-dark-gray">
                    {leader.name}
                  </div>
                  <div className="text-xs font-medium text-dark-gray/70">
                    {leader.title}
                  </div>
                  <p className="text-sm text-dark-gray/80">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


