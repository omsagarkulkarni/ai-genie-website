import Image from "next/image";
import Link from "next/link";

const platformPillars = [
  {
    title: "Secured global compute fabric",
    detail:
      "Elastic mesh spanning idle PCs and servers, routed with verification-first security policies."
  },
  {
    title: "Predictable cost controls",
    detail:
      "Unified dashboard surfaces spend, minimums, and usage tiers so startups plan with clarity."
  },
  {
    title: "Built for AI workflows",
    detail:
      "Hybrid training and inference orchestration keeps GPUs humming while offloading cold runs."
  }
];

const humanStories = [
  {
    name: "Founder & Core Team",
    role: "Visionaries behind AI Genie",
    quote:
      "Krishna and Om’s leadership keeps AI Genie laser-focused on accessible compute—every pilot has run in under 48 hours.",
    image: "/images/krishna.jpg"
  },
  {
    name: "Operational Partners",
    role: "Financial & strategy operators",
    quote:
      "Om’s business discipline and Krishna’s technical rigor make every launch predictable and secure.",
    image: "/images/om.png"
  }
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
    <div className="space-y-12">
      <Section id="hero">
        <div className="relative overflow-hidden rounded-[48px] border border-white/50 bg-gradient-to-br from-white via-[#e4f0ff] to-[#a2dbed]/30 p-10 text-center shadow-[0_40px_100px_rgba(9,17,41,0.25)] hero-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(130,195,255,0.35),_transparent_55%)]" />
          <div className="relative space-y-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-dark-gray/60">
                Decentralized compute
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-dark-gray md:text-5xl">
                Run AI workloads on a global network of idle compute resources at lower cost.
              </h1>
              <p className="mx-auto max-w-3xl text-sm text-dark-gray/70 md:text-base">
                AI Genie unifies unused PCs and servers into a secure, verified fabric so startups and technical
                teams can shift expensive workloads off hyperscale providers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-dark-gray px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-black"
              >
                Sign Up
              </Link>
              <Link
                href="/product#how-it-works"
                className="rounded-full border border-dark-gray/30 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-dark-gray transition hover:border-black hover:text-black"
              >
                See Product
              </Link>
            </div>

            <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_25px_45px_rgba(0,0,0,0.08)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-dark-gray/60">Usage footprint</p>
                <p className="text-xl font-semibold text-dark-gray">Hybrid, multi-region</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-dark-gray/60">Average latency</p>
                <p className="text-xl font-semibold text-dark-gray">≤ 150ms</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-dark-gray/60">Cost signal</p>
                <p className="text-xl font-semibold text-dark-gray">$0.03 – $0.07/vCPU</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-tr from-[#10203b] to-[#1b4177] text-white">
        <div className="space-y-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Platform pillars</p>
              <h2 className="text-2xl font-semibold md:text-3xl">A platform built like enterprise security</h2>
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-white/40">
              Inspired by the clarity of proven cloud control planes
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="space-y-3 rounded-[32px] border border-white/20 bg-white/5 p-6 shadow-[0_25px_55px_rgba(0,0,0,0.2)] backdrop-blur-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.4em] text-[#a2dbed]">
                  Pillar {index + 1}
                </div>
                <p className="text-lg font-semibold">{pillar.title}</p>
                <p className="text-sm text-white/70">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-dark-gray/60">Human-centric proof</p>
            <h2 className="text-2xl font-semibold text-dark-gray md:text-3xl">People building with AI Genie</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {humanStories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col gap-4 rounded-[32px] border border-dark-gray/10 bg-white p-6 shadow-[0_25px_45px_rgba(9,17,41,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_55px_rgba(9,17,41,0.15)]"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-[28px] bg-dark-gray/5">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition duration-700 ease-in-out hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-dark-gray/60">{story.role}</p>
                <p className="text-lg font-semibold text-dark-gray">{story.name}</p>
                <p className="text-sm text-dark-gray/80">{story.quote}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="demo">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">Product Demo</h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            Placeholder for upcoming AI Genie product demonstration.
          </p>
          <div className="mt-4 aspect-video w-full rounded-[36px] bg-gradient-to-br from-[#a2dbed]/25 via-white to-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] ring-1 ring-dark-gray/20" />
        </div>
      </Section>

      <Section id="metrics" className="bg-white/80">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">Impact Metrics</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map(({ value, copy }, index) => (
              <div
                key={value}
              className="flex flex-col gap-2 rounded-soft-xl bg-white p-6 text-sm text-dark-gray/80 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(0,0,0,0.12)] animate-float-in animate-smooth-fade"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="inline-flex h-1.5 w-12 rounded-full bg-[#a2dbed]" />
                <div className="text-2xl font-semibold text-dark-gray">{value}</div>
                <p className="text-xs font-medium uppercase tracking-wide text-dark-gray/60">Outcome</p>
                <p className="text-sm text-dark-gray/80">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="early-access">
        <div className="space-y-6 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">Join Early Access</h2>
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
          <p className="text-xs text-dark-gray/50">Placeholder only (no backend).</p>
        </div>
      </Section>
    </div>
  );
}


