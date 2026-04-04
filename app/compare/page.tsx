import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyInvoice vs FreshBooks vs QuickBooks — Full Comparison 2026",
  description: "ZiggyInvoice vs FreshBooks vs QuickBooks: feature comparison, pricing, and why ZiggyTech Suite integration changes everything.",
  keywords: ["ZiggyInvoice vs FreshBooks", "ZiggyInvoice vs QuickBooks", "FreshBooks alternative", "QuickBooks alternative"],
  openGraph: { title: "ZiggyInvoice vs FreshBooks vs QuickBooks — 2026", description: "ZiggyInvoice $19/mo vs FreshBooks $19/mo (5 clients) vs QuickBooks $35/mo.", url: "https://ziggyinvoice.com/compare" },
};
const accent = "#14b8a6"; const bg = "#0a0a0a"; const cardBg = "#111111"; const muted = "#a1a1aa"; const borderColor = "#1f1f1f";
export default function ComparePage() {
  return (
    <div style={{ background: bg, minHeight: "100vh", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}>
      <section style={{ padding: "88px 24px 64px", textAlign: "center", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${accent}18`, border: `1px solid ${accent}40`, borderRadius: "100px", padding: "6px 18px", fontSize: "13px", color: accent, fontWeight: 600, marginBottom: "24px" }}>Feature Comparison 2026</div>
          <h1 style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}><span style={{ color: accent }}>ZiggyInvoice</span> vs FreshBooks vs QuickBooks</h1>
          <p style={{ fontSize: "18px", color: muted, lineHeight: 1.6, marginBottom: "40px" }}>Professional invoicing for modern businesses. Feature by feature, dollar by dollar.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.ziggyinvoice.com/signup" style={{ background: accent, color: "#000", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Try ZiggyInvoice Free &#x2192;</Link>
            <Link href="/pricing" style={{ background: "transparent", color: "#fff", border: `1px solid ${borderColor}`, padding: "14px 28px", borderRadius: "10px", fontWeight: 600, fontSize: "16px", textDecoration: "none" }}>See Pricing</Link>
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>The price difference is <span style={{ color: accent }}>significant</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "20px" }}>
            <div style={{ background: cardBg, border: `2px solid ${accent}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: accent, color: "#000", fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "100px" }}>RECOMMENDED</div>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>ZiggyInvoice</div>
              <div style={{ fontSize: "42px", fontWeight: 800, color: accent, marginBottom: "4px" }}>$19/mo</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "16px" }}>flat rate, all features</div>
              <div style={{ fontSize: "14px", color: muted }}>&#x2705; Full ZiggyTech Suite</div>
            </div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>FreshBooks</div>
              <div style={{ fontSize: "42px", fontWeight: 800, marginBottom: "4px" }}>$19/mo (5 clients)</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "16px" }}>base plan</div>
              <div style={{ fontSize: "14px", color: muted }}>&#x274C; No suite integration</div>
            </div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>QuickBooks</div>
              <div style={{ fontSize: "42px", fontWeight: 800, marginBottom: "4px" }}>$35/mo</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "16px" }}>base plan</div>
              <div style={{ fontSize: "14px", color: muted }}>&#x274C; No suite integration</div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>Feature-by-feature comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: cardBg, borderRadius: "16px", overflow: "hidden" }}>
              <thead><tr style={{ borderBottom: `2px solid ${borderColor}` }}>
                <th style={{ padding: "16px", textAlign: "left", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase" }}>Feature</th>
                <th style={{ padding: "16px", textAlign: "center", color: accent, fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>ZiggyInvoice</th>
                <th style={{ padding: "16px", textAlign: "center", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase" }}>FreshBooks</th>
                <th style={{ padding: "16px", textAlign: "center", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase" }}>QuickBooks</th>
              </tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Starting price</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>$19/mo</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>$19/mo (5 client limit)</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>$35/mo</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Unlimited clients</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌ Capped</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Recurring invoices</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Expense tracking</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Time tracking</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Automatic reminders</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>CRM sync (ZiggyHQ)</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅ Native</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Proposal to invoice (ZiggyPitch)</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅ Native</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>ZiggyTech Suite integration</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅ Native</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td></tr>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}><td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Accountant access</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600 }}>✅ Free</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅ ($11/mo)</td><td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "13px", color: accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>THE REAL DIFFERENCE</div>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px", lineHeight: 1.2 }}>FreshBooks and QuickBooks are <span style={{ color: accent }}>standalone tools</span>.<br/>ZiggyInvoice is part of something bigger.</h2>
          <p style={{ fontSize: "18px", color: muted, lineHeight: 1.7, marginBottom: "40px" }}>Accepted proposals from ZiggyPitch instantly become invoices. Client data from ZiggyHQ auto-fills. Contractor payments sync to ZiggyPayroll.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "16px", marginBottom: "40px" }}>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyHQ</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyDocs</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggySchedule</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyPayroll</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyPitch</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyHR</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyReviews</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyIntake</div>
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff" }}>&#x2705; ZiggyNexus</div>
          </div>
          <Link href="https://ziggytechventures.com" style={{ color: accent, fontSize: "15px", textDecoration: "none", fontWeight: 600 }}>See the full ZiggyTech Business Suite &#x2192;</Link>
        </div>
      </section>
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "16px" }}>Ready to make the switch?</h2>
          <p style={{ fontSize: "18px", color: muted, marginBottom: "40px" }}>Start your free trial. No credit card required. Cancel anytime.</p>
          <Link href="https://app.ziggyinvoice.com/signup" style={{ background: accent, color: "#000", padding: "18px 40px", borderRadius: "12px", fontWeight: 700, fontSize: "18px", textDecoration: "none", display: "inline-block" }}>Try ZiggyInvoice Free &#x2192;</Link>
        </div>
      </section>
    </div>
  );
}
