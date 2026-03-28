import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice for Freelancers — Get Paid Faster",
  description:
    "Send a professional invoice in 60 seconds. Get paid online via Stripe. Auto-reminders handle the awkward follow-ups. Built for freelancers. From $19/mo.",
};

const PAIN_POINTS = [
  {
    pain: "You've sent an invoice and heard nothing back for 2 weeks",
    fix: "ZiggyInvoice shows you the moment your client opens the invoice — no more wondering if it arrived.",
  },
  {
    pain: "Chasing payment feels awkward and unprofessional",
    fix: "Auto-reminders send polite follow-ups on a schedule you set. You stay professional without the discomfort.",
  },
  {
    pain: "Your invoices look like they came from a spreadsheet",
    fix: "Professional branded templates with your logo and colors. Clients see a business, not a side hustle.",
  },
  {
    pain: "Clients pay late and you lose track of who owes what",
    fix: "The overdue dashboard shows every unpaid invoice at a glance. One click sends a reminder.",
  },
];

const FEATURES = [
  { icon: "⚡", title: "Invoice in 60 seconds", desc: "Pick a client, add line items, hit send. Your invoice is live and payable online." },
  { icon: "💳", title: "Online payments via Stripe", desc: "Clients pay by card or bank transfer directly from the invoice link." },
  { icon: "🔔", title: "Automatic reminders", desc: "Polite payment nudges sent automatically — before, on, and after the due date." },
  { icon: "📄", title: "Branded PDF invoices", desc: "Auto-generated PDFs with your logo. Download or share anytime." },
  { icon: "👁️", title: "Open & read receipts", desc: "See when your client opens your invoice. Know when to follow up." },
  { icon: "🔄", title: "Recurring billing", desc: "Set up monthly retainer billing once and let it run on autopilot." },
];

export default function FreelancersPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 80px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
          <div style={{ maxWidth: "600px" }}>
            <div style={{ display: "inline-flex", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Built for freelancers</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
              Stop chasing invoices.{" "}
              <span style={{ color: "#6366f1" }}>Start getting paid.</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.65, margin: "0 0 36px" }}>
              ZiggyInvoice handles the awkward part of freelancing — following up on unpaid invoices — so you can focus on the work you love.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
              <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px" }}>
                Start free trial →
              </a>
              <Link href="/pricing" style={{ display: "inline-block", background: "#ffffff", color: "#374151", fontWeight: 600, fontSize: "16px", textDecoration: "none", padding: "14px 28px", borderRadius: "10px", border: "1px solid #d1d5db" }}>
                See pricing
              </Link>
            </div>
            <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>From $19/mo · 14-day free trial · No credit card required</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "28px", maxWidth: "380px", width: "100%", boxShadow: "0 20px 50px rgba(99,102,241,0.1)" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#9ca3af", marginBottom: "16px" }}>Your invoicing dashboard</div>
              {[
                { name: "Acme Corp", amount: "$3,200", status: "paid", color: "#16a34a", bg: "#dcfce7" },
                { name: "Studio Noir", amount: "$1,800", status: "overdue", color: "#dc2626", bg: "#fee2e2" },
                { name: "Pixel Labs", amount: "$950", status: "sent", color: "#d97706", bg: "#fef3c7" },
              ].map((inv) => (
                <div key={inv.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{inv.name}</div>
                    <div style={{ fontSize: "12px", color: "#9ca3af" }}>Invoice</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{inv.amount}</div>
                    <span style={{ background: inv.bg, color: inv.color, fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px" }}>
                      {inv.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ padding: "80px 24px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            Sound familiar?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {PAIN_POINTS.map((p) => (
              <div key={p.pain} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", overflow: "hidden" }} className="pain-row">
                <div style={{ padding: "24px", background: "#fff7f7", borderRight: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>The problem</div>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.65, margin: 0 }}>{p.pain}</p>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>ZiggyInvoice fix</div>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.65, margin: 0 }}>{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 48px", textAlign: "center" }}>
            Everything a freelancer needs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "48px 24px 64px", background: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#f59e0b", fontSize: "20px", letterSpacing: "2px", marginBottom: "20px" }}>★★★★★</div>
          <p style={{ fontSize: "20px", color: "#111827", fontWeight: 500, lineHeight: 1.6, margin: "0 0 20px", fontStyle: "italic" }}>
            &ldquo;I used to send an invoice and then just... hope. Now I see when it&apos;s been opened and the reminder handles the follow-up. I get paid 2 weeks faster on average.&rdquo;
          </p>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>James R.</div>
          <div style={{ fontSize: "13px", color: "#9ca3af" }}>Freelance Web Developer</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Get paid on time — every time
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            Join 5,000+ freelancers who send smarter invoices with ZiggyInvoice.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>From $19/mo · No credit card required</p>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) { .hero-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 899px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pain-row { grid-template-columns: 1fr !important; }
          .pain-row > div { border-right: none !important; border-bottom: 1px solid #e5e7eb; }
        }
        @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
