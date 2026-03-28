import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice — Invoicing that gets you paid faster",
  description:
    "Send professional invoices, accept Stripe payments, and get paid faster. Auto-reminders, client portal, recurring invoices — starting at $19/mo.",
};

const FEATURES = [
  {
    icon: "💳",
    title: "Stripe Payments",
    desc: "Accept credit cards and bank transfers directly from your invoice. Funds hit your account in days.",
  },
  {
    icon: "🔔",
    title: "Auto Reminders",
    desc: "Politely chase overdue invoices on autopilot. Set it once, never think about it again.",
  },
  {
    icon: "📄",
    title: "PDF Generation",
    desc: "Beautiful, branded PDF invoices your clients can download and reference at any time.",
  },
  {
    icon: "👥",
    title: "Client Management",
    desc: "Store all your clients in one place. Send invoices, track history, manage contacts with ease.",
  },
  {
    icon: "⏰",
    title: "Overdue Tracking",
    desc: "Instantly see which invoices are overdue. Never lose track of money owed to you.",
  },
  {
    icon: "🔄",
    title: "Recurring Invoices",
    desc: "Set up automatic recurring billing for retainer clients. Bill monthly, quarterly — your choice.",
  },
];

const TESTIMONIALS = [
  {
    quote: "I switched from FreshBooks and saved over $600/year. ZiggyInvoice just works.",
    name: "Sarah K.",
    role: "Freelance Designer",
  },
  {
    quote: "The auto-reminders alone are worth every penny. I spend zero time chasing payments now.",
    name: "Marcus T.",
    role: "Web Developer",
  },
  {
    quote: "My clients love the portal. It looks so professional they think I have a whole team.",
    name: "Priya M.",
    role: "Marketing Consultant",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 24px 96px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #faf5ff 100%)" }}>
        <div aria-hidden style={{ position: "absolute", top: "-100px", right: "-150px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "64px", alignItems: "center", position: "relative" }} className="hero-grid">
          <div style={{ maxWidth: "620px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Trusted by 5,000+ small businesses</span>
            </div>

            <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-2px", margin: "0 0 24px", color: "#111827" }}>
              Invoicing that{" "}
              <span style={{ color: "#6366f1" }}>gets you paid</span>{" "}
              faster
            </h1>

            <p style={{ fontSize: "19px", fontWeight: 400, color: "#4b5563", lineHeight: 1.65, margin: "0 0 36px", maxWidth: "520px" }}>
              Send professional invoices, accept Stripe payments online, and auto-chase overdue bills — all from one simple dashboard.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
              <a href="https://app.ziggyinvoice.com/signup" className="btn-primary">
                Start free trial →
              </a>
              <Link href="/features" className="btn-outline">
                See all features
              </Link>
            </div>

            <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>
              No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>

          {/* Mock invoice */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "28px", width: "100%", maxWidth: "400px", boxShadow: "0 25px 60px rgba(99,102,241,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "4px" }}>Invoice</div>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "#111827", letterSpacing: "-0.5px" }}>#INV-0047</div>
                </div>
                <span style={{ background: "#dcfce7", color: "#16a34a", border: "1px solid #bbf7d0", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px" }}>PAID</span>
              </div>
              <div style={{ height: "1px", background: "#f3f4f6", marginBottom: "16px" }} />
              <div style={{ marginBottom: "16px" }}>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Billed To</div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>Acme Corp Ltd.</div>
                <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>billing@acmecorp.com</div>
              </div>
              <div style={{ background: "#f9fafb", borderRadius: "8px", padding: "12px 14px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { desc: "Brand Identity Design", amt: "$2,400.00" },
                  { desc: "Website Redesign", amt: "$3,600.00" },
                  { desc: "Social Media Kit", amt: "$450.00" },
                ].map((item) => (
                  <div key={item.desc} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "13px", color: "#374151" }}>{item.desc}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{item.amt}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#6b7280" }}>Amount Due</div>
                <div style={{ fontSize: "24px", fontWeight: 700, color: "#6366f1", letterSpacing: "-0.5px" }}>$6,450.00</div>
              </div>
              <div style={{ background: "#eef2ff", borderRadius: "8px", padding: "11px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#6366f1" }}>✓ Payment received via Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#f9fafb", padding: "28px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "#6b7280" }}>Join 5,000+ businesses getting paid faster</span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "1px" }}>★★★★★</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>4.9/5</span>
              <span style={{ fontSize: "13px", color: "#9ca3af" }}>from 500+ reviews</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Forbes", "Product Hunt", "TechCrunch"].map((logo) => (
              <span key={logo} style={{ fontSize: "14px", fontWeight: 700, color: "#d1d5db", letterSpacing: "0.08em", textTransform: "uppercase" }}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#111827", margin: "0 0 16px" }}>
              Everything you need to get paid
            </h2>
            <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
              One subscription. All features included. No hidden fees.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px" }} className="feature-card">
                <div style={{ width: "48px", height: "48px", background: "#eef2ff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontSize: "24px" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/features" style={{ fontWeight: 600, fontSize: "15px", color: "#6366f1", textDecoration: "none" }}>
              View all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#111827", margin: 0 }}>
              Get paid in 3 simple steps
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }} className="steps-grid">
            {[
              { n: "1", title: "Create", desc: "Build a professional invoice in 60 seconds. Add your logo, line items, and payment terms." },
              { n: "2", title: "Send", desc: "Email the invoice or share a link. Clients see a beautiful, branded invoice." },
              { n: "3", title: "Get paid", desc: "Client pays online via Stripe. Funds land in your bank in 2–3 business days." },
            ].map((step) => (
              <div key={step.n} style={{ textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#6366f1", color: "#ffffff", fontSize: "26px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  {step.n}
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: "0 0 12px", letterSpacing: "-0.3px" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#111827", margin: "0 0 16px" }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: "18px", color: "#6b7280", margin: "0 0 48px" }}>Plans for every stage. Start small, scale as you grow.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "36px" }} className="pricing-grid">
            {[
              { name: "Starter", price: "$19", mo: "/mo", note: "For freelancers", highlight: false },
              { name: "Growth", price: "$49", mo: "/mo", note: "For small teams", highlight: true },
              { name: "Pro", price: "$99", mo: "/mo", note: "For agencies", highlight: false },
            ].map((plan) => (
              <div key={plan.name} style={{ border: plan.highlight ? "2px solid #6366f1" : "1px solid #e5e7eb", borderRadius: "14px", padding: "28px 20px", background: plan.highlight ? "#eef2ff" : "#ffffff", position: "relative" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "#ffffff", fontSize: "11px", fontWeight: 700, padding: "3px 12px", borderRadius: "999px" }}>
                    POPULAR
                  </div>
                )}
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#6b7280", marginBottom: "8px" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px", justifyContent: "center" }}>
                  <span style={{ fontSize: "40px", fontWeight: 800, color: "#111827", letterSpacing: "-2px" }}>{plan.price}</span>
                  <span style={{ fontSize: "16px", color: "#9ca3af" }}>{plan.mo}</span>
                </div>
                <div style={{ fontSize: "13px", color: "#9ca3af", marginTop: "4px" }}>{plan.note}</div>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="btn-primary">
            View full pricing →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#111827", margin: 0 }}>
              What our customers say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "2px" }}>★★★★★</div>
                <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.7, margin: 0, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>{t.name}</div>
                  <div style={{ fontSize: "13px", color: "#9ca3af", marginTop: "2px" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#ffffff", margin: "0 0 16px", lineHeight: 1.1 }}>
            Ready to get paid faster?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.65, margin: "0 0 40px" }}>
            Join thousands of freelancers and small businesses who invoice smarter.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" className="btn-white" style={{ display: "inline-block", marginBottom: "16px" }}>
            Start your free 14-day trial
          </a>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0 }}>No credit card required</p>
        </div>
      </section>

      <style>{`
        .btn-primary {
          display: inline-block;
          background: #6366f1;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 10px;
          transition: background 0.15s, transform 0.1s;
        }
        .btn-primary:hover { background: #4f46e5; transform: translateY(-1px); }
        .btn-outline {
          display: inline-block;
          background: #ffffff;
          color: #374151;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          transition: border-color 0.15s, color 0.15s;
        }
        .btn-outline:hover { border-color: #6366f1; color: #6366f1; }
        .btn-white {
          background: #ffffff;
          color: #6366f1;
          font-weight: 700;
          font-size: 17px;
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 12px;
          transition: background 0.15s;
        }
        .btn-white:hover { background: #f3f4f6; }
        .feature-card { transition: border-color 0.2s, box-shadow 0.2s; }
        .feature-card:hover { border-color: #a5b4fc; box-shadow: 0 4px 20px rgba(99,102,241,0.1); }
        @media (min-width: 900px) { .hero-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 899px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
