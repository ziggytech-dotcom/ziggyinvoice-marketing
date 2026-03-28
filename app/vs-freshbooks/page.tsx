import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice vs FreshBooks — Honest Comparison 2026",
  description:
    "ZiggyInvoice vs FreshBooks: compare pricing, features, and value. Same core features, no per-client fees, save up to $600/year.",
};

const ROWS = [
  { feature: "Starting price", ziggy: "$19/mo", fresh: "$19/mo (5 clients only)", ziggyWins: true },
  { feature: "Unlimited clients", ziggy: "✓ Always included", fresh: "Requires $55/mo plan", ziggyWins: true },
  { feature: "Online payments (Stripe)", ziggy: "✓ Included", fresh: "✓ Included", ziggyWins: false },
  { feature: "Auto payment reminders", ziggy: "✓ Included", fresh: "✓ Included", ziggyWins: false },
  { feature: "PDF invoices", ziggy: "✓ Included", fresh: "✓ Included", ziggyWins: false },
  { feature: "Recurring invoices", ziggy: "✓ All plans", fresh: "Plus plan only ($33+)", ziggyWins: true },
  { feature: "Client portal", ziggy: "✓ All plans", fresh: "✓ All plans", ziggyWins: false },
  { feature: "Team members", ziggy: "✓ Growth & Pro", fresh: "Add-on cost", ziggyWins: true },
  { feature: "Per-client fees", ziggy: "None — ever", fresh: "Limits on base plan", ziggyWins: true },
  { feature: "14-day free trial", ziggy: "✓ Yes", fresh: "✓ Yes", ziggyWins: false },
];

export default function VsFreshbooksPage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827" }}>

      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 60%)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1" }}>Honest comparison — updated 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-2px", color: "#111827", margin: "0 0 20px", lineHeight: 1.1 }}>
            ZiggyInvoice vs FreshBooks
          </h1>
          <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: 1.65, margin: "0 0 36px", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
            FreshBooks charges more as you grow. ZiggyInvoice gives you unlimited clients and all features — starting at $19/mo flat.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#6366f1", color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none", padding: "13px 24px", borderRadius: "10px" }}>
              Try ZiggyInvoice free →
            </a>
          </div>
        </div>
      </section>

      {/* Key savings callout */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }} className="stats-grid">
          {[
            { value: "Save $600+", label: "per year vs FreshBooks Plus" },
            { value: "Unlimited", label: "clients on all ZiggyInvoice plans" },
            { value: "No add-ons", label: "all features included from day one" },
          ].map((stat) => (
            <div key={stat.value} style={{ padding: "24px", background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#6366f1", letterSpacing: "-1px", marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-1px", color: "#111827", margin: "0 0 36px", textAlign: "center" }}>
            Feature-by-feature comparison
          </h2>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: "14px", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</div>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", background: "#eef2ff" }}>ZiggyInvoice</div>
              <div style={{ padding: "14px 20px", fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>FreshBooks</div>
            </div>
            {ROWS.map((row, i) => (
              <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", borderBottom: i < ROWS.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: "#374151", fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: row.ziggyWins ? "#16a34a" : "#6366f1", fontWeight: row.ziggyWins ? 700 : 500, textAlign: "center", background: "#fafbff" }}>
                  {row.ziggy}
                </div>
                <div style={{ padding: "16px 20px", fontSize: "14px", color: row.ziggyWins ? "#dc2626" : "#6b7280", textAlign: "center" }}>
                  {row.fresh}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "48px 24px 64px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#f59e0b", fontSize: "20px", letterSpacing: "2px", marginBottom: "20px" }}>★★★★★</div>
          <p style={{ fontSize: "20px", color: "#111827", fontWeight: 500, lineHeight: 1.6, margin: "0 0 20px", fontStyle: "italic" }}>
            &ldquo;I switched from FreshBooks and saved over $600 a year. ZiggyInvoice has everything I need and costs half the price.&rdquo;
          </p>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>Sarah K.</div>
          <div style={{ fontSize: "13px", color: "#9ca3af" }}>Freelance Designer — switched from FreshBooks Plus</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px", margin: "0 0 16px" }}>
            Make the switch today
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", margin: "0 0 36px" }}>
            Import your FreshBooks clients in seconds. Start free — no credit card required.
          </p>
          <a href="https://app.ziggyinvoice.com/signup" style={{ display: "inline-block", background: "#ffffff", color: "#6366f1", fontWeight: 700, fontSize: "16px", textDecoration: "none", padding: "14px 32px", borderRadius: "10px" }}>
            Start free trial →
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
