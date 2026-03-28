import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZiggyInvoice vs Wave — Honest Comparison 2026",
  description:
    "ZiggyInvoice vs Wave: Wave is free but charges 2.9% + 30¢ per transaction. ZiggyInvoice charges a flat monthly fee — no surprise payment fees.",
};

const ROWS = [
  { feature: "Monthly fee", ziggy: "From $19/mo flat", wave: "Free (but see below)", ziggyWins: false },
  { feature: "Transaction fees", ziggy: "None (Stripe fees only: 2.9% + 30¢)", wave: "2.9% + 30¢ per transaction (always)", ziggyWins: true },
  { feature: "Cost on $5,000/mo revenue", ziggy: "~$174 (Stripe fees)", wave: "~$175 (same Stripe fees + free plan)", ziggyWins: false },
  { feature: "Auto payment reminders", ziggy: "✓ Included", wave: "Limited", ziggyWins: true },
  { feature: "Recurring invoices", ziggy: "✓ Included", wave: "✓ Included", ziggyWins: false },
  { feature: "Client portal", ziggy: "✓ Included", wave: "Basic", ziggyWins: true },
  { feature: "PDF templates (branded)", ziggy: "✓ Custom branding", wave: "Limited customization", ziggyWins: true },
  { feature: "Customer support", ziggy: "Email + priority options", wave: "Community only (free)", ziggyWins: true },
  { feature: "Overdue tracking dashboard", ziggy: "✓ Full dashboard", wave: "Basic", ziggyWins: true },
  { feature: "14-day free trial", ziggy: "✓ Yes", wave: "Free forever (with fees)", ziggyWins: false },
];

export default function VsWavePage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Honest comparison — updated 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            ZiggyInvoice vs Wave
          </h1>
          <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: 1.65, margin: "0 0 36px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto" }}>
            Wave is &ldquo;free&rdquo; — but charges 2.9% + 30¢ on every payment. ZiggyInvoice charges a flat monthly fee with no payment markup.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none", padding: "13px 24px", borderRadius: "10px" }}>
            Try ZiggyInvoice free →
          </a>
        </div>
      </section>

      {/* The real cost callout */}
      <section style={{ padding: "48px 24px", background: "#fffbeb", borderBottom: "1px solid #fde68a" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div style={{ fontSize: "28px", flexShrink: 0 }}>⚠️</div>
            <div>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#92400e", marginBottom: "8px" }}>The hidden cost of &ldquo;free&rdquo;</div>
              <p style={{ fontSize: "15px", color: "#78350f", lineHeight: 1.65, margin: 0 }}>
                Wave is free to use, but charges 2.9% + 30¢ on every credit card payment and 1% on bank transfers. If you collect $50,000/year from clients, that&apos;s <strong>$1,480+ in Wave payment fees alone</strong>. ZiggyInvoice costs $228/year on the Starter plan — and you pay Stripe&apos;s standard fees, which are identical to what Wave charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 36px", textAlign: "center" }}>
            Feature-by-feature comparison
          </h2>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</div>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", background: "#eef2ff" }}>ZiggyInvoice</div>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>Wave</div>
            </div>
            {ROWS.map((row, i) => (
              <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", borderBottom: i < ROWS.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: "#374151", fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: row.ziggyWins ? "#16a34a" : "#6366f1", fontWeight: row.ziggyWins ? 700 : 500, textAlign: "center", background: "#fafbff" }}>
                  {row.ziggy}
                </div>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: row.ziggyWins ? "#dc2626" : "#6b7280", textAlign: "center" }}>
                  {row.wave}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Wave is for vs ZiggyInvoice */}
      <section style={{ padding: "48px 24px 64px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, letterSpacing: "-0.5px", color: "#111827", margin: "0 0 32px", textAlign: "center" }}>
            Which is right for you?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="comparison-who">
            <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px", background: "#ffffff" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#6b7280", marginBottom: "16px" }}>Choose Wave if…</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You invoice very rarely (1–2x per year)",
                  "You collect cash or check — not online",
                  "You need basic accounting features",
                  "Zero upfront cost is the priority",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#6b7280" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: "2px solid #6366f1", borderRadius: "14px", padding: "28px", background: "#eef2ff" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#6366f1", marginBottom: "16px" }}>Choose ZiggyInvoice if…</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "You collect payments online regularly",
                  "You want automated reminders and tracking",
                  "You bill more than a few clients per month",
                  "You want professional branded invoicing",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#374151" }}>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="9" cy="9" r="9" fill="#6366f1" />
                      <path d="M5.5 9l2.5 2.5 5-5" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Try ZiggyInvoice free for 14 days
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            No credit card required. Cancel anytime.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .comparison-who { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
