import Link from "next/link";

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
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      <Section id="hero">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-dark-gray md:text-4xl lg:text-5xl">
            Affordable AI Compute for Startups
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-dark-gray/70 md:text-base">
            Run AI workloads on a global network of idle compute resources at
            lower cost.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row md:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
            >
              Sign Up
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full border border-dark-gray/15 bg-white/70 px-6 py-2.5 text-sm font-medium text-dark-gray shadow-sm transition hover:border-dark-gray/30 hover:bg-white"
            >
              See How It Works
            </a>
          </div>
        </div>
      </Section>

      <Section id="problem">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Problem
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Cloud compute costs continue to rise.",
              "Startups waste a significant portion of compute spend.",
              "AI workloads require expensive GPU resources that are hard to access."
            ].map((text) => (
              <div
                key={text}
                className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {/* Simple icon placeholder */}
                  ●
                </div>
                <p className="text-sm text-dark-gray/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="solution">
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Solution
          </h2>
          <p className="max-w-3xl text-sm text-dark-gray/80 md:text-base">
            AI Genie leverages decentralized, unused global compute resources to
            provide fast, secure, and low-cost AI workload execution. By
            distributing workloads across a network of idle hardware, users gain
            access to scalable and reliable compute capacity at significantly
            lower cost than traditional cloud infrastructure.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Up to 85 percent lower compute cost",
              "Elastic and on-demand scalability",
              "Optimized for both training and inference workloads"
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-soft-xl bg-white p-5 text-sm text-dark-gray/80 shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </div>
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

      <Section id="how-it-works">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            How It Works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Submit workload through API or dashboard.",
              "AI Genie distributes compute tasks across available global nodes.",
              "Results are returned quickly and at significantly lower cost."
            ].map((step, index) => (
              <div
                key={step}
                className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm text-dark-gray/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="benefits">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
            Benefits
          </h2>
          <ul className="grid gap-3 text-sm text-dark-gray/80 md:grid-cols-2">
            <li className="rounded-soft-xl bg-white p-4 shadow-sm">
              Lower cost and predictable billing
            </li>
            <li className="rounded-soft-xl bg-white p-4 shadow-sm">
              High availability through distributed networks
            </li>
            <li className="rounded-soft-xl bg-white p-4 shadow-sm">
              Secure execution and workload verification
            </li>
            <li className="rounded-soft-xl bg-white p-4 shadow-sm">
              Works alongside existing cloud workflows
            </li>
          </ul>
        </div>
      </Section>

      <Section id="pricing-preview">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
              Pricing
            </h2>
            <Link
              href="/pricing"
              className="hidden rounded-full border border-dark-gray/15 bg-white/70 px-4 py-2 text-xs font-medium text-dark-gray shadow-sm transition hover:border-dark-gray/30 hover:bg-white md:inline-block"
            >
              View Full Pricing
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-dark-gray">
                Starter
              </div>
              <div className="text-xs text-dark-gray/70">
                Placeholder price
              </div>
              <ul className="mt-2 space-y-1 text-xs text-dark-gray/80">
                <li>Placeholder description and price</li>
                <li>Ideal for individual developers or small teams.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-dark-gray">
                Growth
              </div>
              <div className="text-xs text-dark-gray/70">
                Placeholder price
              </div>
              <ul className="mt-2 space-y-1 text-xs text-dark-gray/80">
                <li>Placeholder description and price</li>
                <li>Designed for startups scaling their AI workloads.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-soft-xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-dark-gray">
                Scale
              </div>
              <div className="text-xs text-dark-gray/70">
                Placeholder price
              </div>
              <ul className="mt-2 space-y-1 text-xs text-dark-gray/80">
                <li>Placeholder description and price</li>
                <li>
                  Built for larger teams requiring consistent and intensive
                  compute usage.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <Link
              href="/pricing"
              className="mt-2 inline-block rounded-full border border-dark-gray/15 bg-white/70 px-4 py-2 text-xs font-medium text-dark-gray shadow-sm transition hover:border-dark-gray/30 hover:bg-white"
            >
              View Full Pricing
            </Link>
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


