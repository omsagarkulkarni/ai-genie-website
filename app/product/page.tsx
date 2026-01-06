export default function ProductPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            Product
          </h1>
          <p className="text-sm text-dark-gray/70 md:text-base">
            AI Genie makes idle compute resources actionable for every startup
            without the overhead of hyperscaler lock-in. The platform orchestrates
            secure task routing, workload verification, and resiliency monitoring
            for both training and inference.
          </p>
        </header>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Product Overview
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            AI Genie connects idle PCs and servers worldwide, creating a
            decentralized compute fabric that is accessed through a single API
            or dashboard. Users submit workloads, define priorities, and monitor
            progress while the platform automatically routes tasks to verified
            nodes that match performance and compliance needs.
          </p>
        </section>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            How Workloads Run
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            Workloads enter AI Genie in small tasks that the platform divides,
            schedules, and tracks. Compute nodes are choreographed globally to
            tackle each slice, returning encrypted results and health metrics.
            This layered orchestration keeps execution secure and verifiable
            while giving users transparency into each stage.
          </p>
        </section>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Decentralized + Cloud Compute
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            AI Genie blends decentralized and traditional cloud compute by routing
            every job to the best available resource. Decentralized, idle nodes
            absorb bursty or experimental workloads, while familiar cloud stacks
            remain on standby for sensitive or large-scale jobs. This hybrid
            approach unlocks more compute without forcing teams to abandon their
            existing infrastructure.
          </p>
        </section>
      </div>
    </div>
  );
}

