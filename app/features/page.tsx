import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — Professional Invoicing Software",
  description:
    "Explore every ZiggyInvoice feature: Stripe payments, PDF generation, auto reminders, client management, overdue tracking, and recurring invoices.",
};

const FEATURES = [
  {
    id: "stripe-payments",
    eyebrow: "Online Payments",
    title: "Accept payments online — instantly",
    body: "Clients pay directly from the invoice with a credit card, debit card, or bank transfer. Powered by Stripe, the world's most trusted payment platform. Funds hit your account in 2–3 business days.",
    benefits: [
      "Visa, Mastercard, Amex, ACH bank transfer",
      "Auto-reconciliation — books update automatically",
      "Payment confirmation emails sent to both parties",
      "No manual chasing required",
    ],
  },
  {
    id: "pdf-generation",
    eyebrow: "PDF Generation",
    title: "Beautiful, branded invoice PDFs",
    body: "Every invoice generates a pixel-perfect PDF automatically. Your logo, brand colors, and all payment details — ready to attach to any email or download on demand.",
    benefits: [
      "Auto-generated on every invoice",
      "Client can download from their portal",
      "Professional layout — no templates to fiddle with",
      "Tax breakdown included",
    ],
  },
  {
    id: "auto-reminders",
    eyebrow: "Automated Follow-ups",
    title: "Stop chasing. Start getting paid.",
    body: "ZiggyInvoice sends polite, professional payment reminders automatically. Set the schedule once — before due date, on due date, and overdue — and never think about it again.",
    benefits: [
      "Customizable reminder schedules",
      "3 reminder touchpoints — before, on, and after due date",
      "Professional tone — never awkward",
      "Disable anytime with one click",
    ],
  },
  {
    id: "client-management",
    eyebrow: "Client Management",
    title: "All your clients in one place",
    body: "Store contact details, billing addresses, and payment history for every client. Send an invoice in seconds — no re-entering data every time.",
    benefits: [
      "Unlimited client records",
      "Invoice history per client",
      "Custom payment terms per client",
      "Client portal access for self-service",
    ],
  },
  {
    id: "overdue-tracking",
    eyebrow: "Overdue Tracking",
    title: "Know exactly who owes you — right now",
    body: "The overdue dashboard gives you a real-time view of every unpaid invoice. Filter by amount, client, or days overdue. Take action instantly.",
    benefits: [
      "Color-coded status indicators",
      "One-click payment reminder",
      "Aging report by days overdue",
      "Cash flow projection dashboard",
    ],
  },
  {
    id: "recurring-invoices",
    eyebrow: "Recurring Billing",
    title: "Automate your retainer billing",
    body: "Set up recurring invoices for monthly retainers or subscriptions. ZiggyInvoice sends them automatically, on schedule, every time.",
    benefits: [
      "Weekly, monthly, quarterly, or custom",
      "Auto-send on schedule",
      "Auto-remind if unpaid",
      "Easy to pause or cancel",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>All features included in every plan</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            Every tool you need to{" "}
            <span style={{ color: "#6366f1" }}>run your invoicing</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: 1.65, margin: "0 0 36px" }}>
            Professional invoicing, online payments, automated follow-ups, and client management — all in one simple dashboard.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px" }}>
            Start free trial →
          </a>
        </div>
      </section>

      {/* Feature blocks */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {FEATURES.map((f, i) => (
            <div key={f.id} id={f.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="feature-row">
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ display: "inline-flex", background: "#eef2ff", color: "#6366f1", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "20px" }}>
                  {f.eyebrow}
                </div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#111827", letterSpacing: "-1px", margin: "0 0 16px", lineHeight: 1.2 }}>
                  {f.title}
                </h2>
                <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 24px" }}>{f.body}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {f.benefits.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "15px", color: "#374151" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                        <circle cx="9" cy="9" r="9" fill="#eef2ff" />
                        <path d="M5.5 9l2.5 2.5 5-5" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ order: i % 2 === 1 ? 1 : 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "48px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "240px" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "56px", marginBottom: "12px" }}>
                      {i === 0 ? "💳" : i === 1 ? "📄" : i === 2 ? "🔔" : i === 3 ? "👥" : i === 4 ? "⏰" : "🔄"}
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#6366f1" }}>{f.eyebrow}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Ready to try every feature free?
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px", lineHeight: 1.6 }}>
            14-day free trial. All features included. No credit card required.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .feature-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .feature-row > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}
