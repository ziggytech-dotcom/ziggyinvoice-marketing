'use client'

import { useState } from 'react'

const ACCENT = '#14b8a6'
const SIGNUP = 'https://app.ziggyinvoice.com/signup'
const LOGIN  = 'https://app.ziggyinvoice.com/login'

const faqs = [
  {
    q: 'How much does ZiggyInvoice cost?',
    a: 'ZiggyInvoice starts at $15/mo on the Starter plan — unlimited invoices, unlimited clients, recurring billing. Pro is $25/mo and adds time tracking, expense management, and a client payment portal. All plans include a 14-day free trial, no credit card required.',
  },
  {
    q: 'How is ZiggyInvoice different from FreshBooks?',
    a: 'FreshBooks limits your clients to 5 on the entry plan ($17/mo) and charges $55/mo for unlimited clients. ZiggyInvoice has no client limits on any plan — $15/mo, unlimited everything. No surprise upgrade prompts.',
  },
  {
    q: 'Can my clients pay online?',
    a: 'Yes. ZiggyInvoice integrates with Stripe so your clients can pay online by card or bank transfer directly from the invoice. You get paid faster, and it\'s all tracked automatically.',
  },
  {
    q: 'Does ZiggyInvoice support recurring billing?',
    a: 'Yes — set up recurring invoices once and they send automatically on your schedule. Perfect for retainer clients, subscription services, or monthly maintenance contracts.',
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'Sign up and get full access for 14 days — no credit card required. If it\'s not for you, just walk away. Nothing to cancel.',
  },
  {
    q: 'Can I track time and expenses in ZiggyInvoice?',
    a: 'Yes — on the Pro plan ($25/mo). Track billable hours, log expenses, and convert them directly into invoice line items. Everything in one place.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#080808', color: '#fff', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a', padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            Ziggy<span style={{ color: ACCENT }}>Invoice</span>
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a href="#features" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Features</a>
            <a href="/compare/freshbooks" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>vs FreshBooks</a>
            <a href="/compare/quickbooks" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>vs QuickBooks</a>
            <a href="#pricing" style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Pricing</a>
            <a href={LOGIN} style={{ color: '#888', fontSize: 14, textDecoration: 'none' }}>Sign In</a>
            <a href={SIGNUP} style={{
              background: ACCENT, color: '#000', textDecoration: 'none',
              padding: '9px 18px', borderRadius: 8, fontSize: 14, fontWeight: 700,
            }}>Start Free Trial</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: '100px 24px 80px', textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)',
          borderRadius: 99, padding: '6px 16px', fontSize: 13, color: ACCENT, fontWeight: 600,
          marginBottom: 32, letterSpacing: '0.02em',
        }}>
          Flat $15/mo · No client limits · No surprises
        </div>

        <h1 style={{
          fontSize: 'clamp(44px,6vw,72px)', fontWeight: 800, lineHeight: 1.06,
          letterSpacing: '-2px', marginBottom: 28, color: '#fff',
        }}>
          Get paid.<br />
          <span style={{ color: ACCENT }}>Stop chasing.</span>
        </h1>

        <p style={{ fontSize: 20, color: '#888', lineHeight: 1.65, marginBottom: 44, maxWidth: 680, margin: '0 auto 44px' }}>
          FreshBooks charges $17/month and limits your clients on lower tiers. We charge $15/month for unlimited invoices,
          unlimited clients, recurring billing, and a client payment portal —{' '}
          <strong style={{ color: '#fff' }}>no limits, no surprises.</strong>
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href={SIGNUP} style={{
            background: ACCENT, color: '#000', textDecoration: 'none',
            padding: '16px 32px', borderRadius: 10, fontSize: 16, fontWeight: 700,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: 'transparent', color: '#fff', textDecoration: 'none',
            padding: '16px 32px', borderRadius: 10, fontSize: 16, fontWeight: 600, border: '1px solid #2a2a2a',
          }}>
            See Pricing
          </a>
        </div>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['14-day free trial', 'No credit card', 'Cancel anytime'].map(b => (
            <span key={b} style={{ fontSize: 13, color: '#555' }}>
              <span style={{ color: ACCENT, marginRight: 6 }}>✓</span>{b}
            </span>
          ))}
        </div>
      </section>

      {/* ── PRODUCT PLACEHOLDER ── */}
      <section style={{ padding: '0 24px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg,#111 0%,#00100f 100%)',
          border: '1px solid #2a2a2a', borderRadius: 20,
          padding: '80px 40px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 0%,rgba(20,184,166,0.12) 0%,transparent 70%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: 48, marginBottom: 16 }}>💳</div>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: '#fff' }}>Product screenshot coming soon</h3>
          <p style={{ color: '#555', fontSize: 15 }}>Invoice builder · Recurring billing · Stripe payment portal · Client view</p>
        </div>
      </section>

      {/* ── FACTS BAR ── */}
      <section style={{
        background: '#0d0d0d', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 40px',
        }}>
          {[
            '$15/mo — unlimited everything',
            'Clients pay online via Stripe',
            'Automatic recurring billing',
            'Support from the team that built it',
          ].map(fact => (
            <span key={fact} style={{ fontSize: 14, color: '#888', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {fact}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 16 }}>
            Everything you need to get paid.
          </h2>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 500, margin: '0 auto' }}>
            Invoices, recurring billing, Stripe payments — all in one place, all for $15/mo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {[
            {
              icon: '📄',
              title: 'Unlimited Invoices',
              desc: 'Create, send, and track as many invoices as you need. No caps, no tiers, no "upgrade to send more" prompts. Unlimited on every plan.',
            },
            {
              icon: '🔁',
              title: 'Recurring Billing',
              desc: 'Set up automatic recurring invoices for retainer clients and subscriptions. Send once, get paid every month — automatically.',
            },
            {
              icon: '💳',
              title: 'Stripe Payments',
              desc: 'Clients click a button and pay by card or bank transfer. Payments sync automatically, invoices mark themselves paid. No chasing.',
            },
            {
              icon: '⏱️',
              title: 'Time Tracking',
              desc: 'Log billable hours as you work and convert them into invoice line items in one click. Know exactly what every project costs.',
            },
            {
              icon: '🧾',
              title: 'Expense Management',
              desc: 'Snap receipts, categorize expenses, and add them to client invoices. Keep every project profitable and every expense accounted for.',
            },
            {
              icon: '🔐',
              title: 'Client Payment Portal',
              desc: 'Clients get their own portal to view invoices, download statements, and pay online. Professional experience — zero friction.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: '#111', border: '1px solid #1f1f1f', borderRadius: 16, padding: '32px 28px',
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section style={{
        background: 'linear-gradient(135deg,#00100f 0%,#0a0a0a 100%)',
        borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
        padding: '96px 24px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, margin: '0 auto 32px',
          }}>
            💡
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, letterSpacing: '-0.8px', marginBottom: 28, lineHeight: 1.2 }}>
            Why we built ZiggyInvoice
          </h2>
          <p style={{ fontSize: 19, color: '#999', lineHeight: 1.8, marginBottom: 32 }}>
            FreshBooks was limiting our client count on the entry plan. QuickBooks wanted $30+ a month for features we
            didn&apos;t need. We built flat-rate invoicing — $15/month, unlimited clients, unlimited invoices.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {[
              { stat: '$15/mo', label: 'Starter price' },
              { stat: 'Unlimited', label: 'clients' },
              { stat: 'Recurring', label: 'billing included' },
              { stat: '14 days', label: 'free trial' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: '#111', border: '1px solid #1f1f1f', borderRadius: 12,
                padding: '20px 28px', textAlign: 'center', minWidth: 130,
              }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: ACCENT, letterSpacing: '-0.5px' }}>{stat}</div>
                <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '96px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Simple pricing. No surprises.
          </h2>
          <p style={{ color: '#666', fontSize: 16 }}>FreshBooks is $17–$55. QuickBooks is $30–$200. We're $15.</p>
        </div>

        {/* Competitor teaser */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12,
          marginBottom: 40,
        }}>
          {[
            { name: 'FreshBooks', price: '$17–$55/mo', note: 'client limits on lower tiers' },
            { name: 'QuickBooks', price: '$30–$200/mo', note: 'features you don\'t need' },
            { name: 'ZiggyInvoice', price: '$15/mo', price2: '→ $25/mo Pro', note: 'unlimited everything, no limits', accent: true },
          ].map(({ name, price, price2, note, accent }) => (
            <div key={name} style={{
              background: accent ? 'rgba(20,184,166,0.07)' : '#0d0d0d',
              border: accent ? `1px solid rgba(20,184,166,0.3)` : '1px solid #1a1a1a',
              borderRadius: 12, padding: '20px 22px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: accent ? ACCENT : '#555', marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: accent ? '#fff' : '#444', letterSpacing: '-0.5px' }}>{price}</div>
              {price2 && <div style={{ fontSize: 14, color: ACCENT, fontWeight: 600 }}>{price2}</div>}
              <div style={{ fontSize: 12, color: '#555', marginTop: 6 }}>{note}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {[
            {
              name: 'Starter',
              price: '$15',
              sub: '/mo',
              highlight: false,
              desc: 'Everything you need to invoice clients and get paid — no limits, no surprises.',
              features: [
                'Unlimited invoices',
                'Unlimited clients',
                'Recurring billing',
                'Stripe payments',
                'Invoice templates',
                'Email support',
              ],
            },
            {
              name: 'Pro',
              price: '$25',
              sub: '/mo',
              highlight: true,
              desc: 'For growing businesses that need time tracking, expenses, and a client portal.',
              features: [
                'Everything in Starter',
                'Time tracking',
                'Expense management',
                'Client payment portal',
                'Project profitability reports',
                'Priority support',
              ],
            },
          ].map(({ name, price, sub, highlight, desc, features }) => (
            <div key={name} style={{
              background: '#111',
              border: highlight ? `2px solid ${ACCENT}` : '1px solid #1f1f1f',
              borderRadius: 20, padding: '36px 28px', position: 'relative',
            }}>
              {highlight && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: ACCENT, color: '#000', fontSize: 11, fontWeight: 700,
                  padding: '4px 14px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? ACCENT : '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}>
                <span style={{ fontSize: 52, fontWeight: 700, color: '#fff', letterSpacing: '-2px' }}>{price}</span>
                <span style={{ fontSize: 16, color: '#555' }}>{sub}</span>
              </div>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 28 }}>{desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
                {features.map(item => (
                  <li key={item} style={{ padding: '8px 0', fontSize: 14, color: '#ccc', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #1a1a1a' }}>
                    <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={SIGNUP} style={{
                display: 'block', textDecoration: 'none', textAlign: 'center',
                background: highlight ? ACCENT : 'transparent',
                color: highlight ? '#000' : '#fff',
                border: highlight ? 'none' : '1px solid #333',
                padding: '14px', borderRadius: 10, fontSize: 15, fontWeight: 700,
              }}>
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: '#444' }}>
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '96px 24px', maxWidth: 740, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px,4vw,38px)', fontWeight: 700, letterSpacing: '-0.6px', marginBottom: 48, textAlign: 'center' }}>
          Frequently asked questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', padding: '20px 24px', fontSize: 16, fontWeight: 600, color: '#fff',
                  cursor: 'pointer', background: 'none', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                }}
              >
                {item.q}
                <span style={{ color: ACCENT, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', fontSize: 15, color: '#777', lineHeight: 1.7, borderTop: '1px solid #1a1a1a', paddingTop: 16 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: '100px 24px', textAlign: 'center',
        background: 'linear-gradient(180deg,#0a0a0a 0%,#001412 100%)',
        borderTop: '1px solid #1a1a1a',
      }}>
        <h2 style={{ fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 16, lineHeight: 1.1 }}>
          Ready to get paid on time, every time?
        </h2>
        <p style={{ fontSize: 20, color: '#666', marginBottom: 16, fontWeight: 500 }}>
          Unlimited invoices. No client limits. No surprises.
        </p>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 44 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href={SIGNUP} style={{
          display: 'inline-block', background: ACCENT, color: '#000', textDecoration: 'none',
          padding: '18px 44px', borderRadius: 12, fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px',
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#050505', borderTop: '1px solid #111', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
            Ziggy<span style={{ color: ACCENT }}>Invoice</span>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['Features', '#features'],
              ['vs FreshBooks', '/compare/freshbooks'],
              ['vs QuickBooks', '/compare/quickbooks'],
              ['Pricing', '#pricing'],
              ['Blog', '/blog'],
              ['Privacy', '/privacy'],
              ['Terms', '/terms'],
              ['Sign In', LOGIN],
            ].map(([label, href]) => (
              <a key={label} href={href} style={{ color: '#555', fontSize: 14, textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#333' }}>
            Part of{' '}
            <a href="https://ziggybusiness.com" style={{ color: '#555', textDecoration: 'none' }}>ZiggyTech Business Suite</a>
          </p>
          <p style={{ fontSize: 12, color: '#2a2a2a' }}>© 2026 ZiggyInvoice. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
