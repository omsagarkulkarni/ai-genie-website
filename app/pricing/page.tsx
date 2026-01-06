"use client";

import { useState } from "react";

const starterDetails = [
  "200 compute credits (≈ 25 vCPU-hours or up to 1 prosumer GPU-hour)",
  "14-day duration",
  "Up to 4 vCPUs / 8 GB RAM per workload",
  "1 active workload at a time",
  "Decentralized compute only; non-sensitive workloads",
  "Card on file (no charge), org-level signup",
  "Referral bonus: +100 credits (unlocks after $50 paid usage or 10+ compute hours)"
];

const usageDetails = [
  "vCPU: $0.03 – $0.07 per vCPU-hour (tiered by reliability/region)",
  "GPU: RTX-class: $0.40 – $0.90 per GPU-hour",
  "GPU: A100/H100-class: market-aligned pricing",
  "Minimum spend: $50/month",
  "Volume discounts: 5% sustained usage, 10% enterprise-scale usage"
];

const usageSummary = [
  "Usage-based pricing",
  "vCPU and GPU support",
  "$50 monthly minimum",
  "Scales with workload demand"
];

const addOns = [
  "Security Tier (Dedicated Compute Zone): isolated pool with SLA + policy controls (tier uplift)",
  "Priority Access: +$0.02 per vCPU-hour"
];

export default function PricingPage() {
  const [expandedPlan, setExpandedPlan] = useState<"starter" | "usage" | null>(
    null
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            Pricing
          </h1>
          <p className="text-sm text-dark-gray/70 md:text-base">
            Simple, usage-based pricing. Pay only for the compute you use.
            Designed for startups and SMBs running AI workloads without
            hyperscaler waste.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="space-y-3 rounded-soft-xl border border-dark-gray/5 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark-gray">
              Starter (Free)
            </div>
            <p className="text-sm text-dark-gray/80">
              Evaluate AI Genie with no upfront cost
            </p>
            <ul className="space-y-1 text-xs text-dark-gray/70">
              <li>14-day access</li>
              <li>Limited compute credits</li>
              <li>Constrained resources</li>
              <li>Card on file required (no charge)</li>
            </ul>
            <button
              type="button"
              className="rounded-full border border-dark-gray/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-dark-gray transition hover:border-dark-gray/30"
              onClick={() =>
                setExpandedPlan((prev) => (prev === "starter" ? null : "starter"))
              }
            >
              Learn more
            </button>
          </article>

          <article className="space-y-3 rounded-soft-xl border border-dark-gray/5 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-dark-gray">
              Usage-Based (Pay-As-You-Go)
            </div>
            <p className="text-sm text-dark-gray/80">
              Pay only for the compute you use
            </p>
            <ul className="space-y-1 text-xs text-dark-gray/70">
              {usageSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="rounded-full border border-dark-gray/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-dark-gray transition hover:border-dark-gray/30"
              onClick={() =>
                setExpandedPlan((prev) => (prev === "usage" ? null : "usage"))
              }
            >
              Learn more
            </button>
          </article>
        </section>

        {expandedPlan === "starter" && (
          <section className="space-y-4 rounded-soft-xl bg-light-gray/60 p-6 shadow-inner">
            <h2 className="text-lg font-semibold text-dark-gray">
              Freemium Onboarding Plan (Starter)
            </h2>
            <ul className="space-y-2 text-sm text-dark-gray/80">
              {starterDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        )}

        {expandedPlan === "usage" && (
          <section className="space-y-4 rounded-soft-xl bg-light-gray/60 p-6 shadow-inner">
            <h2 className="text-lg font-semibold text-dark-gray">
              Usage-Based Pricing Plan
            </h2>
            <ul className="space-y-2 text-sm text-dark-gray/80">
              {usageDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="space-y-3 rounded-soft-xl bg-white/80 p-4 text-sm text-dark-gray/80">
              <div className="font-medium text-dark-gray">Optional Add-Ons</div>
              <ul className="space-y-1">
                {addOns.map((addon) => (
                  <li key={addon}>{addon}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="rounded-soft-xl bg-white/90 px-6 py-6 text-sm text-dark-gray/80 shadow-sm md:px-8 md:py-8 md:text-base">
          AI Genie helps startups reduce cloud costs by offloading suitable AI
          workloads from hyperscale providers to a global network of idle compute.
          You avoid long-term commitments, scale naturally with usage, and pay
          only for what you actually run.
        </section>
      </div>
    </div>
  );
}


