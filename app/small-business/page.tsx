import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice for Small Business — Professional Invoicing Software",
  description:
    "Manage clients, send professional invoices, accept Stripe payments, and track overdue accounts. ZiggyInvoice is built for small business owners.",
};

const BENEFITS = [
  {
    icon: "📊",
    title: "Full cash flow visibility",
    desc: "Know exactly what's owed, what's overdue, and what's coming in. Real-time dashboard updates as clients pay.",
  },
  {
    icon: "👥",
    title: "Unlimited client management",
    desc: "Store all your clients in one place. Billing history, contact info, payment terms — always at your fingertips.",
  },
  {
    icon: "🔄",
    title: "Recurring & subscription billing",
    desc: "Automate retainer billing, subscriptions, and monthly service fees. Set it up once and it runs itself.",
  },
  {
    icon: "💳",
    title: "Online payments via Stripe",
    desc: "Your clients pay online by card or bank transfer — directly from the invoice. No more checks or wire transfers.",
  },
  {
    icon: "👁️",
    title: "Invoice tracking & open receipts",
    desc: "See when each invoice was opened and whether it's been paid. No more guessing games.",
  },
  {
    icon: "🤝",
    title: "Multi-user team access",
    desc: "Give your bookkeeper or team members access. Set permissions so everyone has what they need.",
  },
];

const STATS = [
  { value: "73%", label: "of invoices paid within 48h of reminder" },
  { value: "2.3×", label: "faster average payment vs paper invoices" },
  { value: "5,000+", label: "small businesses trust ZiggyInvoice" },
];

export default function SmallBusinessPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 80px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Built for small business owners</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            Professional invoicing for{" "}
            <span style={{ color: "#6366f1" }}>your small business</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.65, margin: "0 0 36px" }}>
            Stop losing money to late payments. ZiggyInvoice gives your small business professional invoicing, online payments, and automated follow-ups — without the complexity of enterprise software.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px" }}>
              Start free trial →
            </a>
            <Link href="/pricing" style={{ display: "inline-block", background: "#ffffff", color: "#374151", fontWeight: 600, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px", border: "1px solid #d1d5db" }}>
              View pricing
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>From $19/mo · 14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }} className="stats-grid">
          {STATS.map((s) => (
            <div key={s.value} style={{ padding: "24px" }}>
              <div style={{ fontSize: "36px", fontWeight: 800, color: "#6366f1", letterSpacing: "-1.5px", marginBottom: "8px" }}>{s.value}</div>
              <div style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 16px" }}>
              Built for how small businesses actually work
            </h2>
            <p style={{ fontSize: "17px", color: "#6b7280", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
              No complex setup. No accounting degree required. Just send invoices and get paid.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{b.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>{b.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section style={{ padding: "80px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            What ZiggyInvoice does for your business
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                step: "01",
                title: "Create and send professional invoices",
                desc: "Pick a client from your database, add your services, and send a beautifully branded invoice in under 2 minutes. Your clients get a link they can pay immediately.",
              },
              {
                step: "02",
                title: "Collect payment online",
                desc: "Clients pay by card or bank transfer from the invoice link. No more chasing checks or dealing with bank transfers manually. Money lands in your account in 2–3 days.",
              },
              {
                step: "03",
                title: "Automated reminders handle follow-up",
                desc: "Set a reminder schedule once. ZiggyInvoice sends polite nudges before the due date, on the due date, and when overdue. You stay professional without the awkwardness.",
              },
              {
                step: "04",
                title: "Track everything in one dashboard",
                desc: "See all outstanding invoices, overdue accounts, and recent payments at a glance. Know your cash flow position in real time.",
              },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#6366f1", color: "#ffffff", fontSize: "16px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#f59e0b", fontSize: "20px", letterSpacing: "2px", marginBottom: "20px" }}>★★★★★</div>
          <p style={{ fontSize: "20px", color: "#111827", fontWeight: 500, lineHeight: 1.6, margin: "0 0 20px", fontStyle: "italic" }}>
            &ldquo;I run a 4-person marketing agency. ZiggyInvoice replaced our messy spreadsheet invoicing overnight. My bookkeeper loves it and clients actually pay faster.&rdquo;
          </p>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>Lisa M.</div>
          <div style={{ fontSize: "13px", color: "#9ca3af" }}>Owner, Bright & Co. Marketing Agency</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Run your invoicing like a pro
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            Join 5,000+ small businesses using ZiggyInvoice to get paid faster.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>From $19/mo · No credit card required</p>
        </div>
      </section>

      <style>{`
        @media (max-width: 899px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
