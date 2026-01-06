const steps = [
  "Submit workload through API or dashboard.",
  "AI Genie distributes compute tasks across available global nodes.",
  "Results are returned quickly and at significantly lower cost."
];

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 md:py-16 lg:py-20">
      <section className="space-y-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-dark-gray/60">
            Product
          </p>
          <h1 className="text-3xl font-semibold text-dark-gray md:text-4xl">
            Distributed compute for modern AI workloads
          </h1>
        </div>
        <p className="text-sm text-dark-gray/80 md:text-base">
          AI Genie is a decentralized cloud compute platform designed to lower
          the cost of running AI workloads by using unused compute resources
          from PCs and servers around the world. Instead of relying entirely on
          traditional cloud providers, AI Genie distributes AI tasks across a
          global network of idle hardware. This allows users to access compute
          at significantly lower cost while still running demanding AI or
          machine learning jobs.
        </p>
      </section>

      <section
        id="how-it-works"
        className="space-y-6 rounded-soft-xl bg-white p-6 shadow-sm md:p-8"
      >
        <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
          How It Works
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex flex-col gap-3 rounded-soft-xl bg-light-gray px-4 py-5 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </div>
              <p className="text-sm text-dark-gray/80">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-dark-gray md:text-2xl">
          Technology
        </h2>
        <p className="text-sm text-dark-gray/80 md:text-base">
          Workloads are submitted through an interface that enables AI Genie to
          divide and assign tasks to available compute nodes. Each node processes
          a portion of the workload and returns the results to the platform,
          improving efficiency and reducing the overall expense for startups and
          technical teams. By using spare compute capacity, AI Genie offers a
          scalable and cost-effective alternative to traditional cloud
          infrastructure.
        </p>
      </section>
    </div>
  );
}

