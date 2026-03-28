"use client";

import Link from "next/link";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs FreshBooks", href: "/vs-freshbooks" },
      { label: "vs Wave", href: "/vs-wave" },
    ],
  },
  {
    heading: "Use Cases",
    links: [
      { label: "Freelancers", href: "/freelancers" },
      { label: "Small Business", href: "/small-business" },
      { label: "Contractors", href: "/contractors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "mailto:hello@ziggyinvoice.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="footer-grid">
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", marginBottom: "16px", gap: "6px" }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="#6366f1" />
                <path d="M8 20L14 8L20 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 16h7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "#111827", letterSpacing: "-0.3px" }}>
                Ziggy<span style={{ color: "#6366f1" }}>Invoice</span>
              </span>
            </Link>
            <p style={{ fontWeight: 400, fontSize: "15px", color: "#6b7280", lineHeight: "1.6", margin: 0 }}>
              Professional invoicing for freelancers and small businesses. Get paid faster.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }} className="footer-columns">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p style={{ fontWeight: 600, fontSize: "12px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px", marginTop: 0 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.links.map((link) =>
                    "external" in link && link.external ? (
                      <li key={link.label}>
                        <a href={link.href} style={{ fontWeight: 400, fontSize: "14px", color: "#6b7280", textDecoration: "none", transition: "color 0.15s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}>
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link href={link.href} style={{ fontWeight: 400, fontSize: "14px", color: "#6b7280", textDecoration: "none", transition: "color 0.15s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}>
                          {link.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e7eb", marginTop: "56px", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontWeight: 400, fontSize: "13px", color: "#9ca3af", margin: 0, textAlign: "center" }}>
            &copy; 2026 ZiggyInvoice. Part of ZiggyTech Business Suite. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .footer-grid { grid-template-columns: 240px 1fr !important; } }
        @media (max-width: 899px) { .footer-columns { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .footer-columns { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
