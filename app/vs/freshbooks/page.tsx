import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZiggyInvoice vs FreshBooks — Unlimited clients, $2 less | ZiggyInvoice",
  description:
    "FreshBooks limits how many clients you can have on lower tiers and starts at $17/mo. ZiggyInvoice is $15/mo with unlimited clients and unlimited invoices. No tier games.",
}

const ACCENT = "#6366f1"
const ACCENT_BG = "rgba(99,102,241,0.1)"
const ACCENT_BORDER = "rgba(99,102,241,0.25)"

export default function VsFreshBooks() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none}}`}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>Invoice</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/#features"], ["Pricing", "/#pricing"], ["Sign In", "https://app.ziggyinvoice.com/login"]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href="https://app.ziggyinvoice.com/signup" style={{
            background: ACCENT, color: "#fff", padding: "9px 20px",
            borderRadius: 8, fontSize: 14, fontWeight: 600,
          }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: ACCENT_BG,
          border: `1px solid ${ACCENT_BORDER}`,
          borderRadius: 99,
          padding: "6px 16px",
          fontSize: 13,
          color: ACCENT,
          fontWeight: 600,
          marginBottom: 24,
          letterSpacing: "0.02em",
        }}>
          ZiggyInvoice vs FreshBooks
        </div>

        <h1 style={{
          fontSize: "clamp(38px, 5vw, 60px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          color: "#fff",
        }}>
          FreshBooks limits your clients.<br />
          <span style={{
            background: `linear-gradient(135deg, #fff 0%, ${ACCENT} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>We don't. And we're $2 less.</span>
        </h1>

        <p style={{ fontSize: 18, color: "#888", lineHeight: 1.6, marginBottom: 36, maxWidth: 620, margin: "0 auto 36px" }}>
          FreshBooks caps you at 5 clients on their lowest tier and charges $17/mo for the next step up. ZiggyInvoice is <strong style={{ color: "#fff" }}>$15/mo with unlimited clients and unlimited invoices</strong> — no tier games, no upsells.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://app.ziggyinvoice.com/signup" style={{
            background: ACCENT, color: "#fff", padding: "15px 30px",
            borderRadius: 10, fontSize: 16, fontWeight: 600,
          }}>
            Start Free Trial — $15/mo
          </a>
          <a href="/#pricing" style={{
            background: "transparent", color: "#fff", padding: "15px 30px",
            borderRadius: 10, fontSize: 16, fontWeight: 600,
            border: "1px solid #333",
          }}>
            See Full Pricing
          </a>
        </div>
      </section>

      {/* ── SIDE BY SIDE ── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}>
          <div style={{
            background: "#111111",
            border: `2px solid ${ACCENT}`,
            borderRadius: 16,
            padding: "32px 28px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 12 }}>
              ZiggyInvoice
            </div>
            <div style={{ fontSize: 48, fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 4 }}>$15</div>
            <div style={{ color: "#555", fontSize: 14, marginBottom: 16 }}>/mo · everything included</div>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
              {[
                "✓ Unlimited clients — always",
                "✓ Unlimited invoices",
                "✓ Recurring invoices",
                "✓ Late fee automation",
                "✓ Time tracking",
                "✓ Expense tracking",
                "✓ Client payment portal",
                "✓ Multi-currency",
              ].map(item => (
                <li key={item} style={{ padding: "5px 0", fontSize: 14, color: "#ccc" }}>
                  <span style={{ color: ACCENT }}>{item.slice(0, 1)}</span>{item.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: "#0d0d0d",
            border: "1px solid #222",
            borderRadius: 16,
            padding: "32px 28px",
            textAlign: "center",
            opacity: 0.8,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#555", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 12 }}>
              FreshBooks
            </div>
            <div style={{ fontSize: 48, fontWeight: 700, color: "#555", letterSpacing: "-1px", marginBottom: 4 }}>$17+</div>
            <div style={{ color: "#444", fontSize: 14, marginBottom: 16 }}>/mo · clients capped on lower tiers</div>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
              {[
                "✗ 5 clients on Lite tier ($19/mo)",
                "✓ Unlimited on Plus ($33/mo)",
                "✓ Recurring invoices",
                "✓ Late fees",
                "✓ Time tracking",
                "✓ Expense tracking",
                "✓ Client portal",
                "✓ Multi-currency",
              ].map(item => (
                <li key={item} style={{ padding: "5px 0", fontSize: 14, color: item.startsWith("✗") ? "#c0392b" : "#555" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE ── */}
      <section style={{ padding: "0 24px 96px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 40, textAlign: "center" }}>
          Feature-by-feature breakdown
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: "rgba(99,102,241,0.04)" }}>ZiggyInvoice</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>FreshBooks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", "$15/mo", "$19/mo (Lite)"],
                ["Client limit at starting price", "Unlimited", "5 clients (Lite tier)"],
                ["Unlimited clients price", "$15/mo", "$33/mo (Plus tier)"],
                ["Unlimited invoices", "✅ Yes", "✅ Yes"],
                ["Online payments (Stripe)", "✅ Yes", "✅ Yes (+ fee)"],
                ["Recurring invoices", "✅ Yes", "✅ Yes"],
                ["Late fee automation", "✅ Yes", "✅ Yes"],
                ["Time tracking", "✅ Yes", "✅ Yes"],
                ["Expense tracking", "✅ Yes", "✅ Yes (Plus+)"],
                ["Client payment portal", "✅ Yes", "✅ Yes"],
                ["Multi-currency", "✅ Yes", "✅ Yes"],
                ["Invoice status tracking", "✅ Yes", "✅ Yes"],
                ["Proposals / estimates", "🔧 Coming", "✅ Yes"],
                ["QuickBooks sync", "🔧 Coming Soon", "✅ Yes"],
                ["Annual contract", "No", "No"],
                ["Free trial", "14 days, no credit card", "30 days"],
              ].map(([feature, invoice, freshbooks], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: "rgba(99,102,241,0.03)", fontWeight: 500 }}>{invoice}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{freshbooks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 28,
          background: ACCENT_BG,
          border: `1px solid ${ACCENT_BORDER}`,
          borderRadius: 12,
          padding: "24px 28px",
          textAlign: "center",
        }}>
          <p style={{ color: "#ccc", fontSize: 16, lineHeight: 1.7 }}>
            💡 <strong style={{ color: "#fff" }}>Bottom line:</strong> FreshBooks charges $17/mo and limits how many clients you can have on lower tiers. We're $15/mo — unlimited clients, unlimited invoices, no tier games.{" "}
            <strong style={{ color: ACCENT }}>Everything you need, $2 less.</strong>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "80px 24px",
        textAlign: "center",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 46px)",
          fontWeight: 700,
          letterSpacing: "-1px",
          marginBottom: 16,
          color: "#fff",
        }}>
          Ready to ditch the client limits?
        </h2>
        <p style={{ fontSize: 17, color: "#555", marginBottom: 36 }}>
          14 days free. No credit card. Unlimited clients from day one.
        </p>
        <a href="https://app.ziggyinvoice.com/signup" style={{
          display: "inline-block",
          background: ACCENT,
          color: "#fff",
          padding: "16px 36px",
          borderRadius: 12,
          fontSize: 17,
          fontWeight: 700,
        }}>
          Start Free Trial — $15/mo →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555" }}>ziggybusiness.com</a>
          </p>
          <p style={{ fontSize: 13, color: "#2a2a2a", marginTop: 8 }}>© 2026 ZiggyInvoice. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
