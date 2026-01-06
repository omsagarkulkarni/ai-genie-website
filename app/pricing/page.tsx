"use client";

import { useState } from "react";

const planContent = {
  starter: {
    title: "Starter (Free)",
    description:
      "Ideal for individual developers or small trial workloads that want to test AI Genie without commitment.",
    details:
      "Starter tiers run on shared, pooled capacity with capped runtime. Perfect for experimentation before scaling up."
  },
  usage: {
    title: "Usage-Based (Pay-As-You-Go)",
    description:
      "Designed for teams that need predictable, usage-driven pricing without multi-month contracts.",
    details:
      "Usage-Based plans meter compute credits with flexible throttling and priority scheduling when nodes are available. Add-ons boost reliability."
  }
};

export default function PricingPage() {
  const [openPlan, setOpenPlan] = useState<"starter" | "usage" | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            Pricing
          </h1>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          {(Object.keys(planContent) as Array<keyof typeof planContent>).map(
            (key) => {
              const plan = planContent[key];
              const isOpen = openPlan === key;
              return (
                <div
                  key={plan.title}
                  className="space-y-4 rounded-soft-xl bg-white p-6 shadow-sm"
                >
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-dark-gray">
                      {plan.title}
                    </p>
                    <p className="text-sm text-dark-gray/80">{plan.description}</p>
                  </div>
                  <button
                    className="text-xs font-medium uppercase tracking-wide text-primary"
                    onClick={() =>
                      setOpenPlan((prev) => (prev === key ? null : key))
                    }
                  >
                    {isOpen ? "Hide details" : "Learn more"}
                  </button>
                  {isOpen && (
                    <div className="space-y-3 rounded-soft-xl border border-dark-gray/10 bg-light-gray/70 p-4 text-sm text-dark-gray">
                      <p>{plan.details}</p>
                      {key === "usage" && (
                        <div className="space-y-2 text-xs text-dark-gray/70">
                          <p>
                            Add-ons (Security Tier, Priority Access) are shown
                            only here for the expanded paid view:
                          </p>
                          <p className="text-dark-gray">
                            <span className="font-semibold">Security Tier</span>
                            : Dedicated verification and compliance tooling.
                          </p>
                          <p className="text-dark-gray">
                            <span className="font-semibold">Priority Access</span>
                            : Fast-track scheduling when global nodes spike.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>
      </div>
    </div>
  );
}


