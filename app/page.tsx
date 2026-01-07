import Link from "next/link";

const challenges = [
  "Cloud compute costs continue to rise.",
  "Startups waste a significant portion of compute spend.",
  "AI workloads require expensive GPU resources that are hard to access."
];

const metrics = [
  {
    value: "85%+",
    copy: "Lower compute spending when workloads run across our idle node network."
  },
  {
    value: "1200+",
    copy: "Global machines on standby to absorb bursty training and inference demand."
  },
  {
    value: "60s",
    copy: "Average time to dispatch and kick off a distributed AI workload."
  },
  {
    value: "99.9%",
    copy: "Availability through distributed verification and workload routing."
  }
];

function Section({
  id,
  className = "",
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-4 md:space-y-5 lg:space-y-8">
      <Section
        id="hero"
        className="px-6 md:px-0"
      >
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[48px] border border-white/60 bg-gradient-to-br from-white to-[#a2dbed]/20 py-16 px-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.15)]">
          <div className="absolute inset-y-0 left-8 hidden w-32 rounded-full bg-[#a2dbed]/30 blur-[80px] sm:block" />
          <h1 className="relative z-10 text-3xl font-semibold tracking-tight text-dark-gray md:text-4xl lg:text-5xl">
            Run AI workloads on a global network of idle compute resources at lower cost.
          </h1>
          <p className="relative z-10 mt-6 max-w-3xl text-sm text-dark-gray/70 md:text-base">
            AI Genie is a decentralized compute platform built for technical teams
            and startups seeking predictable multi-cloud performance without the
            premium price.
          </p>
          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-dark-gray px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-black"
            >
              Sign Up
            </Link>
            <Link
              href="/product#how-it-works"
              className="rounded-full border border-dark-gray/30 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-dark-gray shadow transition hover:border-black hover:text-black"
            >
              See Product
            </Link>
          </div>
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-black/10 blur-3xl animate-floating" />
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {challenges.map((text, index) => (
              <div
                key={text}
                className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] animate-slide"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-[#a2dbed]">
                  Challenge
                </div>
                <p className="text-sm text-dark-gray/80">{text}</p>
              </div>
            ))}
          </div>
          <p className="max-w-4xl text-sm text-dark-gray/80 md:text-base">
            AI Genie leverages decentralized, unused global compute resources to
            provide fast, secure, and low-cost AI workload execution. By
            distributing workloads across a network of idle hardware, users gain
            access to scalable and reliable compute capacity at significantly
            lower cost than traditional cloud infrastructure.
          </p>
        </div>
      </Section>

      <Section id="demo">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Product Demo
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            Placeholder for upcoming AI Genie product demonstration.
          </p>
          <div className="mt-4 aspect-video w-full rounded-[36px] bg-gradient-to-br from-[#a2dbed]/25 via-white to-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] ring-1 ring-dark-gray/20" />
        </div>
      </Section>

      <Section id="metrics" className="bg-white/80">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Impact Metrics
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map(({ value, copy }, index) => (
              <div
                key={value}
                className="flex flex-col gap-2 rounded-soft-xl bg-white p-6 text-sm text-dark-gray/80 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(0,0,0,0.12)] animate-float-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="inline-flex h-1.5 w-12 rounded-full bg-[#a2dbed]" />
                <div className="text-2xl font-semibold text-dark-gray">{value}</div>
                <p className="text-xs font-medium uppercase tracking-wide text-dark-gray/60">
                  Outcome
                </p>
                <p className="text-sm text-dark-gray/80">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="early-access">
        <div className="space-y-6 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
              Join Early Access
            </h2>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Apply for early access to the AI Genie platform.
            </p>
          </div>
          <form className="mt-4 flex flex-col gap-3 text-sm md:flex-row">
            <input
              type="email"
              name="email"
              className="w-full rounded-full border border-dark-gray/15 bg-light-gray px-4 py-2.5 text-sm text-dark-gray outline-none ring-0 placeholder:text-dark-gray/40 focus:border-primary/60 focus:bg-white focus:ring-1 focus:ring-primary/50"
              placeholder="Email"
              disabled
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
              disabled
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-dark-gray/50">
            Placeholder only (no backend).
          </p>
        </div>
      </Section>
    </div>
  );
}


