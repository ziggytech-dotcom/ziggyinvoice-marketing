"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

const COMPARE_LINKS = [
  { label: "vs FreshBooks", href: "/vs-freshbooks" },
  { label: "vs Wave", href: "/vs-wave" },
];

const USE_CASE_LINKS = [
  { label: "Freelancers", href: "/freelancers" },
  { label: "Small Business", href: "/small-business" },
  { label: "Contractors", href: "/contractors" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const compareRef = useRef<HTMLDivElement>(null);
  const useCaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (compareRef.current && !compareRef.current.contains(e.target as Node)) {
        setCompareOpen(false);
      }
      if (useCaseRef.current && !useCaseRef.current.contains(e.target as Node)) {
        setUseCaseOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "6px",
    minWidth: "180px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    zIndex: 100,
  };

  const dropdownLinkStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 500,
    fontSize: "14px",
    color: "#374151",
    textDecoration: "none",
    padding: "9px 12px",
    borderRadius: "7px",
    transition: "background 0.15s, color 0.15s",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/ziggyinvoice-wordmark-v3.png" alt="ZiggyInvoice" style={{ height: 32, width: "auto" }} />
        </a>

        {/* Desktop nav links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1 }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#4b5563",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#111827";
                (e.currentTarget as HTMLAnchorElement).style.background = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#4b5563";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Compare dropdown */}
          <div ref={compareRef} style={{ position: "relative" }}>
            <button
              onClick={() => { setCompareOpen((p) => !p); setUseCaseOpen(false); }}
              style={{
                fontWeight: 500,
                fontSize: "15px",
                color: compareOpen ? "#111827" : "#4b5563",
                background: compareOpen ? "#f3f4f6" : "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.15s, background 0.15s",
              }}
              aria-expanded={compareOpen}
            >
              Compare
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: compareOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {compareOpen && (
              <div style={dropdownStyle}>
                {COMPARE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCompareOpen(false)}
                    style={dropdownLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#f3f4f6";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Use Cases dropdown */}
          <div ref={useCaseRef} style={{ position: "relative" }}>
            <button
              onClick={() => { setUseCaseOpen((p) => !p); setCompareOpen(false); }}
              style={{
                fontWeight: 500,
                fontSize: "15px",
                color: useCaseOpen ? "#111827" : "#4b5563",
                background: useCaseOpen ? "#f3f4f6" : "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.15s, background 0.15s",
              }}
              aria-expanded={useCaseOpen}
            >
              Use Cases
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: useCaseOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {useCaseOpen && (
              <div style={dropdownStyle}>
                {USE_CASE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setUseCaseOpen(false)}
                    style={dropdownLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#f3f4f6";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }} className="desktop-cta">
          <a
            href="https://app.ziggyinvoice.com/login"
            style={{ fontWeight: 500, fontSize: "15px", color: "#4b5563", textDecoration: "none", padding: "8px 14px", borderRadius: "8px", transition: "color 0.15s, background 0.15s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#111827"; (e.currentTarget as HTMLAnchorElement).style.background = "#f3f4f6"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4b5563"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
          >
            Sign in
          </a>
          <a
            href="https://app.ziggyinvoice.com/signup"
            style={{ fontWeight: 600, fontSize: "15px", color: "#ffffff", textDecoration: "none", padding: "9px 20px", borderRadius: "8px", background: "#6366f1", transition: "background 0.15s", display: "inline-block" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#4f46e5"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#6366f1"; }}
          >
            Start free trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          style={{ display: "none", background: "transparent", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", color: "#4b5563", flexShrink: 0 }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid #e5e7eb", padding: "16px 24px 24px", background: "#ffffff", display: "flex", flexDirection: "column", gap: "2px" }}>
          {[...NAV_LINKS, ...COMPARE_LINKS, ...USE_CASE_LINKS].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontWeight: 500, fontSize: "16px", color: "#374151", textDecoration: "none", padding: "12px 8px", borderBottom: "1px solid #f3f4f6", display: "block" }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
            <a href="https://app.ziggyinvoice.com/login" style={{ fontWeight: 500, fontSize: "16px", color: "#374151", textDecoration: "none", padding: "12px 16px", borderRadius: "8px", border: "1px solid #e5e7eb", textAlign: "center" }}>
              Sign in
            </a>
            <a href="https://app.ziggyinvoice.com/signup" style={{ fontWeight: 600, fontSize: "16px", color: "#ffffff", textDecoration: "none", padding: "13px 16px", borderRadius: "8px", background: "#6366f1", textAlign: "center", display: "block" }}>
              Start free trial
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
