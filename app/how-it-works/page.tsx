export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            How It Works
          </h1>
        </header>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            High-Level Workflow
          </h2>
          <ol className="space-y-3 text-sm text-dark-gray/80 md:text-base">
            <li>1. Submit workload through API or dashboard.</li>
            <li>
              2. AI Genie distributes compute tasks across available global
              nodes.
            </li>
            <li>
              3. Results are returned quickly and at significantly lower cost.
            </li>
          </ol>
        </section>

        <section className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
            Technology
          </h2>
          <p className="text-sm text-dark-gray/80 md:text-base">
            AI Genie is a decentralized cloud compute platform designed to lower
            the cost of running AI workloads by using unused compute resources
            from PCs and servers around the world. Instead of relying entirely
            on traditional cloud providers, AI Genie distributes AI tasks across
            a global network of idle hardware. This allows users to access
            compute at significantly lower cost while still running demanding AI
            or machine learning jobs.
          </p>
          <p className="text-sm text-dark-gray/80 md:text-base">
            Workloads are submitted through an interface that enables AI Genie
            to divide and assign tasks to available compute nodes. Each node
            processes a portion of the workload and returns the results to the
            platform, improving efficiency and reducing the overall expense for
            startups and technical teams. By using spare compute capacity, AI
            Genie offers a scalable and cost-effective alternative to
            traditional cloud infrastructure.
          </p>
        </section>
      </div>
    </div>
  );
}


