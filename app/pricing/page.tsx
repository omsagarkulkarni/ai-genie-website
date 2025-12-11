export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            Pricing
          </h1>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3 rounded-soft-xl bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark-gray">Starter</div>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Placeholder description and price
            </p>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Ideal for individual developers or small teams.
            </p>
          </div>

          <div className="space-y-3 rounded-soft-xl bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark-gray">Growth</div>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Placeholder description and price
            </p>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Designed for startups scaling their AI workloads.
            </p>
          </div>

          <div className="space-y-3 rounded-soft-xl bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark-gray">Scale</div>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Placeholder description and price
            </p>
            <p className="text-sm text-dark-gray/80 md:text-base">
              Built for larger teams requiring consistent and intensive compute
              usage.
            </p>
          </div>
        </section>

        <section className="rounded-soft-xl bg-light-gray px-6 py-6 text-sm text-dark-gray/80 shadow-inner md:px-8 md:py-8 md:text-base">
          CTA: Contact us or See Full Pricing
        </section>
      </div>
    </div>
  );
}


