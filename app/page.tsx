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
  children
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20"
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-4 md:space-y-5 lg:space-y-8">
      <Section id="hero">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-dark-gray md:text-4xl lg:text-5xl">
            Run AI workloads on a global network of idle compute resources at lower cost.
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-dark-gray/70 md:text-base">
            AI Genie is a decentralized compute platform built for technical teams
            and startups seeking predictable multi-cloud performance without the
            premium price.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row md:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
            >
              Sign Up
            </Link>
            <Link
              href="/product#how-it-works"
              className="rounded-full border border-dark-gray/15 bg-white/70 px-6 py-2.5 text-sm font-medium text-dark-gray shadow-sm transition hover:border-dark-gray/30 hover:bg-white"
            >
              See Product
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {challenges.map((text) => (
              <div
                key={text}
                className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
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
          <div className="mt-4 aspect-video w-full rounded-soft-xl bg-dark-gray/5 ring-1 ring-dark-gray/10" />
        </div>
      </Section>

      <Section id="metrics">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Impact Metrics
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map(({ value, copy }) => (
              <div
                key={value}
                className="flex flex-col gap-2 rounded-soft-xl bg-white p-5 text-sm text-dark-gray/80 shadow-sm"
              >
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


