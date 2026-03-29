import Script from "next/script"

const ACCENT = "#6366f1"
const ACCENT_BG = "rgba(99,102,241,0.1)"
const ACCENT_BORDER = "rgba(99,102,241,0.25)"
const ACCENT_DIM = "rgba(99,102,241,0.03)"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "ZiggyInvoice",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://ziggyinvoice.com",
      "description": "Invoicing and billing for freelancers and small businesses. Unlimited invoices, recurring billing, Stripe payments, time tracking, and expense tracking — $15/mo flat.",
      "offers": {
        "@type": "Offer",
        "price": "15.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "15.00",
          "priceCurrency": "USD",
          "unitText": "MONTH",
          "description": "Flat $15/mo — unlimited invoices, unlimited clients, all features included."
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ZiggyInvoice cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZiggyInvoice is $15/mo flat. That includes unlimited invoices, unlimited clients, recurring billing, late fee automation, time tracking, expense tracking, and a client payment portal. No tiers, no client limits, no add-ons."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any limits on clients or invoices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "None. Every plan includes unlimited clients and unlimited invoices. We don't believe in punishing you for growing."
          }
        },
        {
          "@type": "Question",
          "name": "How do clients pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clients pay via the online payment portal — credit card or ACH bank transfer, powered by Stripe. Funds go directly to your Stripe account. You can also accept payments in multiple currencies."
          }
        },
        {
          "@type": "Question",
          "name": "How does the free trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get 14 days free — no credit card required. Full access to all live features from day one. If it's not for you, just walk away."
          }
        },
        {
          "@type": "Question",
          "name": "How does recurring billing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Set up a recurring invoice once — choose the interval (monthly, quarterly, etc.) and ZiggyInvoice automatically sends and charges it on schedule. You'll never forget to bill a retainer client again."
          }
        },
        {
          "@type": "Question",
          "name": "How is ZiggyInvoice different from FreshBooks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreshBooks starts at $17/mo but limits how many clients you can have on lower tiers. ZiggyInvoice is $15/mo with unlimited clients and unlimited invoices — no tier games, no upsells. Everything included."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ display: "flex", gap: 28 }}>
              {[
                ["Features", "#features"],
                ["Compare", "/vs/freshbooks"],
                ["Pricing", "#pricing"],
                ["Sign In", "https://app.ziggyinvoice.com/login"],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ color: "#888", fontSize: 15, fontWeight: 500 }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <a href="https://app.ziggyinvoice.com/signup" style={{
            background: ACCENT,
            color: "#fff",
            padding: "9px 20px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: "100px 24px 80px",
        textAlign: "center",
        maxWidth: 820,
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          background: ACCENT_BG,
          border: `1px solid ${ACCENT_BORDER}`,
          borderRadius: 99,
          padding: "6px 16px",
          fontSize: 13,
          color: ACCENT,
          fontWeight: 600,
          marginBottom: 28,
          letterSpacing: "0.02em",
        }}>
          FreshBooks Alternative · $15/mo flat · Unlimited clients
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 6vw, 68px)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          color: "#fff",
        }}>
          Get paid faster.<br />
          <span style={{
            background: `linear-gradient(135deg, #fff 0%, ${ACCENT} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Stop chasing invoices.</span>
        </h1>

        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
          Send professional invoices in under 2 minutes. Collect payment via Stripe. Automate recurring billing and late fees. Everything you need to get paid — for <strong style={{ color: "#fff" }}>$15/mo flat</strong>.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <a href="https://app.ziggyinvoice.com/signup" style={{
            background: ACCENT,
            color: "#fff",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: "transparent",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            border: "1px solid #333",
          }}>
            See Pricing
          </a>
        </div>

        <p style={{ fontSize: 13, color: "#555", letterSpacing: "0.03em" }}>
          No credit card · 14-day free trial · Unlimited clients & invoices
        </p>

        {/* Trust badges */}
        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 40,
        }}>
          {[
            "💳 Stripe payments built-in",
            "♾️ Unlimited clients, always",
            "🔁 Recurring billing on autopilot",
          ].map(badge => (
            <span key={badge} style={{
              fontSize: 13,
              color: "#666",
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: 8,
              padding: "8px 14px",
            }}>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM STRIP ── */}
      <section style={{
        background: "#0f0f0f",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "56px 24px",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          textAlign: "center",
        }}>
          {[
            {
              emoji: "📬",
              headline: "Still chasing payments manually?",
              body: "Following up on overdue invoices wastes hours every month. Late fee reminders that send themselves pay for the tool in the first week.",
            },
            {
              emoji: "🗃️",
              headline: "Spreadsheets are not invoicing software.",
              body: "A manually-updated Excel sheet has no payment link, no status tracking, no reminders, and no client portal. It's costing you money and time.",
            },
            {
              emoji: "💰",
              headline: "FreshBooks charges more and limits clients.",
              body: "FreshBooks starts at $17/mo but caps how many clients you can have. We're $15/mo — unlimited clients, unlimited invoices. No tier games.",
            },
          ].map(({ emoji, headline, body }) => (
            <div key={headline}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{headline}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
            Everything you need to get paid.
          </h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto" }}>
            Built for freelancers and small businesses who want to spend time on their work — not their billing.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {[
            {
              icon: "⚡",
              title: "Invoices in Under 2 Minutes",
              desc: "Select a client, add line items, hit send. Your invoice is in their inbox with a pay-now button in under two minutes. Professional, branded, done.",
            },
            {
              icon: "🔁",
              title: "Recurring Invoices",
              desc: "Set it once and get paid every month automatically. Perfect for retainer clients, subscription billing, and monthly services. No more manual sends.",
            },
            {
              icon: "💳",
              title: "Online Payment Portal",
              desc: "Clients pay via card or ACH bank transfer, powered by Stripe. A branded payment portal shows all their invoices — they pay in one click.",
            },
            {
              icon: "⏰",
              title: "Late Fee Automation",
              desc: "Set a late fee percentage and ZiggyInvoice adds it automatically after the due date. No awkward follow-up calls, no manual edits — it just happens.",
            },
            {
              icon: "🕐",
              title: "Time Tracking",
              desc: "Log hours directly in the app. When it's time to bill, convert tracked time to an invoice with one click. Every minute is accounted for.",
            },
            {
              icon: "🧾",
              title: "Expense Tracking",
              desc: "Attach receipts, categorize expenses, and include them on your invoices. Know exactly where your money goes — and get reimbursed for what you spend.",
            },
            {
              icon: "📊",
              title: "Invoice Status Tracking",
              desc: "See at a glance which invoices are sent, viewed, paid, or overdue. Never wonder if a client saw your invoice again.",
            },
            {
              icon: "🌍",
              title: "Multi-Currency Support",
              desc: "Invoice clients in their local currency. Bill USD, EUR, GBP, CAD, and more — ZiggyInvoice handles the currency display automatically.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 14,
              padding: "28px 24px",
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMING SOON STRIP ── */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>What's coming next</h2>
            <p style={{ color: "#555", fontSize: 15 }}>We ship fast. Here's what's in the pipeline.</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
            {[
              {
                icon: "📚",
                title: "QuickBooks Sync",
                badge: "Coming Soon",
                badgeColor: "#0066ff",
                desc: "Sync invoices and payments directly with QuickBooks. One-click accounting, no manual exports.",
              },
              {
                icon: "🏦",
                title: "Bank Reconciliation",
                badge: "Coming Soon",
                badgeColor: "#0066ff",
                desc: "Match payments to invoices automatically. Keep your books clean without an accountant.",
              },
              {
                icon: "📋",
                title: "Tax Summaries",
                badge: "Coming Soon",
                badgeColor: "#0066ff",
                desc: "Automated annual and quarterly tax summaries. Know exactly what you owe before April.",
              },
            ].map(({ icon, title, badge, badgeColor, desc }) => (
              <div key={title} style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "24px 22px",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={{
                    background: `${badgeColor}20`,
                    color: badgeColor,
                    border: `1px solid ${badgeColor}40`,
                    borderRadius: 99,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase" as const,
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{
        padding: "96px 24px",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 14 }}>
              Built for every kind of freelancer
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              Whether you're hourly, project-based, or retainer — ZiggyInvoice handles your billing your way.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}>
            {[
              { icon: "💻", name: "Freelancers & Developers", desc: "Hourly or project invoices, retainer billing, milestone payments — tracked and automated." },
              { icon: "🎨", name: "Designers & Creatives", desc: "Project billing, revision fees, licensing charges, and brand retainer invoices in one place." },
              { icon: "🔨", name: "Contractors & Trades", desc: "Job invoices with material charges, deposit requests, and final billing — all tracked per project." },
              { icon: "🎓", name: "Coaches & Consultants", desc: "Session billing, package invoices, and retainer charges. Recurring billing handles your monthly clients." },
              { icon: "📸", name: "Photographers & Videographers", desc: "Shoot deposits, licensing fees, album delivery invoices, and print orders — all in one system." },
              { icon: "🏠", name: "Property Management", desc: "Rental invoices, maintenance billing, HOA fees, and owner disbursements with recurring automation." },
              { icon: "🩺", name: "Healthcare & Wellness", desc: "Session billing, package invoices, and insurance-friendly exports for therapists, coaches, and practitioners." },
              { icon: "🌿", name: "Landscaping & Green Services", desc: "Seasonal contracts, per-job billing, and recurring maintenance charges for your weekly and monthly clients." },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "24px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}>
                <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{name}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom callout */}
          <div style={{
            background: ACCENT_BG,
            border: `1px solid ${ACCENT_BORDER}`,
            borderRadius: 14,
            padding: "32px 36px",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Whatever you do, we'll handle the billing.</h3>
              <p style={{ fontSize: 15, color: "#888", maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
                ZiggyInvoice works for any freelancer or service business. Every plan includes onboarding support to get your first invoices out the door.
              </p>
            </div>
            <a href="https://app.ziggyinvoice.com/signup" style={{
              background: ACCENT,
              color: "#fff",
              padding: "13px 26px",
              borderRadius: 9,
              fontSize: 15,
              fontWeight: 600,
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
            }}>
              Start Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "96px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            ZiggyInvoice vs FreshBooks
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Unlimited clients. Every feature. $2 less per month.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: ACCENT_DIM }}>ZiggyInvoice</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>FreshBooks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "$15/mo", "From $17/mo"],
                ["Client limit", "Unlimited", "Limited on lower tiers (up to 5)"],
                ["Invoice limit", "Unlimited", "Unlimited"],
                ["Online payments (Stripe/card)", "✅ Yes", "✅ Yes"],
                ["Recurring invoices", "✅ Yes", "✅ Yes"],
                ["Late fee automation", "✅ Yes", "✅ Yes"],
                ["Time tracking", "✅ Yes", "✅ Yes"],
                ["Expense tracking", "✅ Yes", "✅ Yes"],
                ["Client payment portal", "✅ Yes", "✅ Yes"],
                ["Multi-currency", "✅ Yes", "✅ Yes"],
                ["Invoice status tracking", "✅ Yes", "✅ Yes"],
                ["QuickBooks sync", "🔧 Coming Soon", "✅ Yes"],
                ["Annual contract", "No — cancel anytime", "No"],
                ["Free trial", "14 days, no credit card", "30 days"],
              ].map(([feature, invoice, freshbooks], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: ACCENT_DIM, fontWeight: 500 }}>{invoice}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{freshbooks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 24,
          background: ACCENT_BG,
          border: `1px solid ${ACCENT_BORDER}`,
          borderRadius: 12,
          padding: "20px 24px",
          textAlign: "center",
        }}>
          <p style={{ color: "#ccc", fontSize: 15, lineHeight: 1.7 }}>
            💡 <strong style={{ color: "#fff" }}>Bottom line:</strong> FreshBooks charges $17/mo and limits how many clients you can have on lower tiers. We're $15/mo — unlimited clients, unlimited invoices, no tier games. <strong style={{ color: ACCENT }}>Everything you need, $2 less.</strong>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#444" }}>
          Pricing data sourced from FreshBooks.com · Updated March 2026
        </p>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{
        padding: "96px 24px",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            One price. Everything included.
          </h2>
          <p style={{ color: "#666", fontSize: 16, marginBottom: 48 }}>
            No tiers. No client limits. No hidden fees.
          </p>

          <div style={{
            background: "#111111",
            border: `2px solid ${ACCENT}`,
            borderRadius: 20,
            padding: "40px 36px",
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 12 }}>
              ZiggyInvoice
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, color: "#fff", letterSpacing: "-2px" }}>$15</span>
              <span style={{ fontSize: 18, color: "#555" }}>/mo</span>
            </div>
            <p style={{ color: "#555", fontSize: 14, marginBottom: 32 }}>
              Everything included · Unlimited clients · Unlimited invoices
            </p>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, textAlign: "left" }}>
              {[
                "Unlimited invoices",
                "Unlimited clients",
                "Professional invoice builder (2 min or less)",
                "Recurring invoice automation",
                "Online payment portal (Stripe — card & ACH)",
                "Late fee automation",
                "Time tracking + one-click invoicing",
                "Expense tracking & receipt attachment",
                "Invoice status tracking (sent, viewed, paid, overdue)",
                "Multi-currency support",
              ].map(item => (
                <li key={item} style={{ padding: "7px 0", fontSize: 15, color: "#ccc", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1a1a1a" }}>
                  <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <a href="https://app.ziggyinvoice.com/signup" style={{
              display: "block",
              background: ACCENT,
              color: "#fff",
              padding: "16px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              textAlign: "center",
            }}>
              Start Free Trial — No credit card required
            </a>
          </div>

          {/* Bundle callout */}
          <div style={{
            background: "#111111",
            border: "1px solid #1f1f1f",
            borderRadius: 14,
            padding: "22px 24px",
            textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6 }}>
              🏢 <strong style={{ color: "#fff" }}>Running a full business?</strong> Get all ZiggyTech apps — including ZiggyInvoice — for a flat monthly rate with the ZiggyTech Business Suite.{" "}
              <a href="https://ziggybusiness.com" style={{ color: ACCENT, textDecoration: "underline" }}>Learn more →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 48, textAlign: "center" }}>
          Questions? We've got answers.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              q: "How much does ZiggyInvoice cost?",
              a: "$15/mo flat. That includes unlimited invoices, unlimited clients, recurring billing, late fee automation, time tracking, expense tracking, and a client payment portal. One price. Everything included.",
            },
            {
              q: "Are there any limits on clients or invoices?",
              a: "None. Unlimited clients, unlimited invoices — forever. We don't tier-gate basic features or penalize you for having a full client roster.",
            },
            {
              q: "How do clients pay?",
              a: "Clients pay through the online payment portal — credit card or ACH bank transfer, powered by Stripe. Funds go directly to your Stripe account. You can also invoice in multiple currencies.",
            },
            {
              q: "How does the free trial work?",
              a: "Sign up and get 14 days free — no credit card required. Full access to every live feature from day one. If you don't want to continue, nothing to cancel.",
            },
            {
              q: "How does recurring billing work?",
              a: "Set up a recurring invoice once — choose the client, amount, and interval (monthly, quarterly, etc.). ZiggyInvoice automatically sends the invoice on schedule. Perfect for retainer clients.",
            },
            {
              q: "How is ZiggyInvoice different from FreshBooks?",
              a: "FreshBooks starts at $17/mo but limits how many clients you can have on lower tiers. ZiggyInvoice is $15/mo with unlimited clients and unlimited invoices — no tier games, no upsells. Everything included, $2 less.",
            },
          ].map(({ q, a }) => (
            <details key={q} style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <summary style={{
                padding: "20px 24px",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                {q}
                <span style={{ color: ACCENT, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#777", lineHeight: 1.7, borderTop: "1px solid #1a1a1a" }}>
                <p style={{ marginTop: 16 }}>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center",
        background: "linear-gradient(180deg, #0a0a0a 0%, #08070f 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          letterSpacing: "-1.5px",
          marginBottom: 20,
          lineHeight: 1.1,
        }}>
          Your invoice isn't going to<br />
          <span style={{
            background: `linear-gradient(135deg, #fff 0%, ${ACCENT} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>pay itself.</span>
        </h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 40 }}>
          14 days free. No credit card. Send your first invoice today.
        </p>
        <a href="https://app.ziggyinvoice.com/signup" style={{
          display: "inline-block",
          background: ACCENT,
          color: "#fff",
          padding: "18px 40px",
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.2px",
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#050505",
        borderTop: "1px solid #111",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" as const, justifyContent: "center" }}>
            {[
              ["Home", "/"],
              ["Features", "#features"],
              ["Compare", "/vs/freshbooks"],
              ["Pricing", "#pricing"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Sign In", "https://app.ziggyinvoice.com/login"],
            ].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, fontWeight: 500 }}>
                {label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555" }}>ziggybusiness.com</a>
          </p>

          <p style={{ fontSize: 13, color: "#2a2a2a" }}>
            © 2026 ZiggyInvoice. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
