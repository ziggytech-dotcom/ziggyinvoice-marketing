'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Is there really no client limit?`, a: `No client limit, ever. Starter is $15/mo for unlimited invoices and unlimited clients.` },
  { q: `How do clients pay?`, a: `Clients receive a payment link in the invoice email. They can pay via credit card or ACH bank transfer, powered by Stripe. Payments land in your Stripe account.` },
  { q: `Can I set up automatic recurring invoices?`, a: `Yes. Set up a recurring invoice with any billing interval — weekly, monthly, quarterly, or custom. ZiggyInvoice sends automatically and follows up with payment reminders.` },
  { q: `Do you take a percentage of payments?`, a: `No. ZiggyInvoice charges a flat monthly fee. Stripe's standard processing fee (2.9% + 30 cents) applies to card payments — that goes to Stripe, not us.` },
  { q: `Can I track time and bill clients for it?`, a: `Yes (Pro plan). Use the built-in timer or log time manually. When ready to invoice, add time entries to the invoice with one click.` },
  { q: `What kind of reports does ZiggyInvoice generate?`, a: `Pro plan includes revenue reports by client, period, and status. Tax summary reports. Outstanding AR aging reports. Expense reports with tax categories. All exportable to CSV.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#14b8a6] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyInvoice.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#14b8a6]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#14b8a6] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#14b8a6]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggyinvoice.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#14b8a6] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
