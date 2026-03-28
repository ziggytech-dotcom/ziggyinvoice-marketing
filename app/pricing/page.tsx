import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Starter $19 · Growth $49 · Pro $99",
  description:
    "ZiggyInvoice plans starting at $19/mo. Starter for freelancers, Growth for small teams, Pro for agencies. 14-day free trial, no credit card required.",
};

const PLANS = [
  {
    name: "Starter",
    price: 19,
    desc: "Perfect for freelancers and solo operators",
    highlight: false,
    features: [
      "Up to 10 active clients",
      "Unlimited invoices",
      "Stripe online payments",
      "Auto payment reminders",
      "Professional PDF templates",
      "Client payment portal",
      "Real-time notifications",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: 49,
    desc: "For growing small businesses and teams",
    highlight: true,
    features: [
      "Unlimited clients",
      "Unlimited invoices",
      "Stripe online payments",
      "Auto payment reminders",
      "Professional PDF templates",
      "Client payment portal",
      "Recurring invoices",
      "Multi-user access (3 seats)",
      "Custom branding",
      "Priority email support",
    ],
  },
  {
    name: "Pro",
    price: 99,
    desc: "For agencies and high-volume businesses",
    highlight: false,
    features: [
      "Unlimited clients",
      "Unlimited invoices",
      "Stripe online payments",
      "Auto payment reminders",
      "Professional PDF templates",
      "Client payment portal",
      "Recurring invoices",
      "Unlimited team members",
      "Custom branding & white label",
      "Advanced reporting",
      "API access",
      "Dedicated account manager",
    ],
  },
];

const FAQS = [
  { q: "Is there a free trial?", a: "Yes — 14 days free, no credit card required. Try the plan of your choice risk-free." },
  { q: "Can I switch plans later?", a: "Absolutely. Upgrade or downgrade at any time. Changes take effect immediately." },
  { q: "What payment methods do clients use?", a: "Visa, Mastercard, Amex, Discover, and ACH bank transfers via Stripe." },
  { q: "Are there transaction fees?", a: "ZiggyInvoice charges no transaction fees. Standard Stripe processing fees apply (2.9% + 30¢)." },
  { q: "Do you offer annual billing?", a: "Yes — pay annually and save 20% on any plan. Contact us after signing up." },
  { q: "Can I cancel anytime?", a: "Yes. Cancel anytime from your dashboard. No questions asked, no cancellation fees." },
];

export default function PricingPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            Simple pricing that{" "}
            <span style={{ color: "#6366f1" }}>scales with you</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>
            Start small and upgrade as your business grows. 14-day free trial on every plan.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="plans-grid">
            {PLANS.map((plan) => (
              <div key={plan.name} style={{ border: plan.highlight ? "2px solid #6366f1" : "1px solid #e5e7eb", borderRadius: "16px", padding: "36px 28px", background: "#ffffff", position: "relative", display: "flex", flexDirection: "column" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "#ffffff", fontSize: "12px", fontWeight: 700, padding: "4px 16px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "6px" }}>{plan.name}</div>
                  <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "20px" }}>{plan.desc}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "48px", fontWeight: 800, color: "#111827", letterSpacing: "-2px", lineHeight: 1 }}>${plan.price}</span>
                    <span style={{ fontSize: "16px", color: "#9ca3af" }}>/mo</span>
                  </div>
                </div>

                <a href="https://app.ziggyinvoice.com/signup" className={plan.highlight ? "btn-plan-primary" : "btn-plan-outline"} style={{ display: "block", textAlign: "center", textDecoration: "none", padding: "12px 20px", borderRadius: "10px", marginBottom: "28px", fontWeight: 700, fontSize: "15px" }}>
                  Start free trial
                </a>

                <div style={{ height: "1px", background: "#f3f4f6", marginBottom: "24px" }} />

                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#374151" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                        <circle cx="9" cy="9" r="9" fill={plan.highlight ? "#eef2ff" : "#f3f4f6"} />
                        <path d="M5.5 9l2.5 2.5 5-5" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "64px 24px 96px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQS.map((faq, i) => (
              <div key={faq.q} style={{ padding: "24px 0", borderBottom: i < FAQS.length - 1 ? "1px solid #e5e7eb" : "none" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{faq.q}</div>
                <div style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Start your free trial today
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            No credit card required. All plans include a 14-day free trial.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" className="btn-white-cta">
            Get started free →
          </a>
        </div>
      </section>

      <style>{`
        .btn-plan-primary {
          background: #6366f1;
          color: #ffffff;
          transition: background 0.15s;
        }
        .btn-plan-primary:hover { background: #4f46e5; }
        .btn-plan-outline {
          background: #ffffff;
          color: #374151;
          border: 1px solid #d1d5db;
          transition: background 0.15s;
        }
        .btn-plan-outline:hover { background: #f3f4f6; }
        .btn-white-cta {
          display: inline-block;
          background: #ffffff;
          color: #6366f1;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 10px;
          transition: background 0.15s;
        }
        .btn-white-cta:hover { background: #f3f4f6; }
        @media (max-width: 899px) {
          .plans-grid { grid-template-columns: 1fr !important; max-width: 460px; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
}
