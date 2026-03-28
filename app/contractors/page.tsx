import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice for Contractors — Professional Invoicing",
  description:
    "Contractors bill big. Late payments hurt. ZiggyInvoice sends professional invoices, accepts Stripe payments, and auto-reminds clients so you get paid on time.",
};

const BENEFITS = [
  {
    icon: "💼",
    title: "Professional invoices for big-ticket work",
    desc: "When you're billing $10K+ per project, your invoice needs to look the part. Branded templates with your logo, payment terms, and detailed line items.",
  },
  {
    icon: "📅",
    title: "Net-30 / Net-60 payment terms built in",
    desc: "Set payment terms on every invoice — Net-30, Net-60, or custom due dates. ZiggyInvoice auto-reminds clients as the deadline approaches.",
  },
  {
    icon: "🔔",
    title: "Automated overdue reminders",
    desc: "Late payments are costly on large contracts. Automatic, professional reminders go out on your schedule — before you have to pick up the phone.",
  },
  {
    icon: "📄",
    title: "Milestone & progress billing",
    desc: "Bill per milestone or split large contracts into installments. Create separate invoices for deposits, mid-project payments, and final balances.",
  },
  {
    icon: "💳",
    title: "Online payments for large amounts",
    desc: "Clients pay by card or ACH bank transfer directly from the invoice. Large projects pay better via ACH — lower fees, same speed.",
  },
  {
    icon: "📊",
    title: "Project payment tracking",
    desc: "Track what's been billed, what's been paid, and what's outstanding per project. Never lose track of a payment across a long engagement.",
  },
];

const SCENARIOS = [
  {
    title: "Construction & trades",
    desc: "Bill deposits before work starts, progress payments mid-project, and final invoices on completion. Auto-reminders keep clients on schedule.",
  },
  {
    title: "IT & software contractors",
    desc: "Invoice for hourly work, fixed projects, or monthly retainers. Detailed line items show exactly what each charge covers.",
  },
  {
    title: "Consulting & professional services",
    desc: "Professional invoices that reflect your expertise. Net-30 terms with automated follow-up — no more chasing slow-paying corporate clients.",
  },
  {
    title: "Creative & design agencies",
    desc: "Brand the invoice with your studio identity. Clients pay online via Stripe — no more waiting for checks to clear.",
  },
];

export default function ContractorsPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 80px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Built for contractors</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            Invoice like a professional.{" "}
            <span style={{ color: "#6366f1" }}>Get paid on time.</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.65, margin: "0 0 36px" }}>
            Contractors bill big amounts with longer payment terms. ZiggyInvoice sends professional invoices, tracks every payment, and auto-chases late clients — so your cash flow stays healthy.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px" }}>
              Start free trial →
            </a>
            <Link href="/pricing" style={{ display: "inline-block", background: "#ffffff", color: "#374151", fontWeight: 600, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px", border: "1px solid #d1d5db" }}>
              See pricing
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>From $19/mo · 14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Large contract callout */}
      <section style={{ padding: "48px 24px", background: "#fffbeb", borderBottom: "1px solid #fde68a" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "16px", color: "#92400e", fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
            <strong>One late payment on a $20,000 contract costs you more than a year of ZiggyInvoice.</strong>{" "}
            Automated reminders reduce late payments by up to 73%.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            Built for contractor invoicing
          </h2>
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

      {/* Use case scenarios */}
      <section style={{ padding: "80px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            Works for every kind of contractor
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="scenarios-grid">
            {SCENARIOS.map((s) => (
              <div key={s.title} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
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
            &ldquo;I bill $15–40K per project. Before ZiggyInvoice, I had two clients who went 60+ days overdue. The automated reminders have completely changed how fast I get paid.&rdquo;
          </p>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>Derek H.</div>
          <div style={{ fontSize: "13px", color: "#9ca3af" }}>Independent IT Contractor</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Protect your cash flow
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            Professional invoicing and automated follow-up for contractors who mean business.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>From $19/mo · No credit card required</p>
        </div>
      </section>

      <style>{`
        @media (max-width: 899px) { .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .scenarios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
