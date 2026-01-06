import Link from "next/link";

const benefits = [
  {
    headline: "85% idle GPU capacity reclaimed",
    body: "Taps unused hardware so teams access premium compute without waiting."
  },
  {
    headline: "3 regions live in under 5 minutes",
    body: "Deploy workloads globally from a single dashboard and stay focused on experimentation."
  },
  {
    headline: "4 concurrent workloads",
    body: "Parallelize pipelines for faster iteration without touching existing cloud contracts."
  },
  {
    headline: "200 compute credits by default",
    body: "Startups launch trials immediately with usable credits and zero upfront lock-in."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 pt-16 lg:pt-24">
        <h1 className="w-full text-4xl font-semibold leading-tight text-dark-gray md:text-5xl lg:text-6xl">
          Run AI workloads on a global network of idle compute resources at lower cost.
        </h1>
        <p className="max-w-3xl text-sm text-dark-gray/70 md:text-base">
          AI Genie orchestrates computing across decentralized hardware so founders
          and builders loop past hyperscaler complexity and focus on their models.
          The platform routes, verifies, and returns every execution without
          forcing long-term commitments.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-5 rounded-soft-xl bg-white/90 p-6 shadow-sm md:p-8">
          <div className="text-sm uppercase tracking-[0.35em] text-dark-gray/60">
            Benefits
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.headline}
                className="rounded-soft-xl border border-dark-gray/5 bg-light-gray/60 p-5 text-sm leading-relaxed"
              >
                <div className="text-xl font-semibold text-dark-gray">
                  {benefit.headline}
                </div>
                <p className="mt-2 text-dark-gray/70">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 rounded-soft-xl bg-white/90 p-6 shadow-sm md:p-10">
          <Link
            href="/product"
            className="text-2xl font-semibold text-primary md:text-3xl"
          >
            Explore the Product
          </Link>
          <p className="text-sm text-dark-gray/70">
            Learn how AI Genie routes workloads, balances compute, and keeps every
            execution secure.
          </p>
        </div>
      </section>
    </div>
  );
}


