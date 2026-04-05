import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Unlimited Invoices`, desc: `Create and send as many invoices as your business needs. No client limits, no invoice limits.`, bullets: [`Unlimited invoices`, `Unlimited clients`, `Professional invoice templates`, `Custom fields`, `Multi-currency support`, `Bulk invoice creation`] },
  { title: `Recurring Billing`, desc: `Set up recurring invoices for retainer clients. Invoices send automatically and reminders follow up for you.`, bullets: [`Flexible billing intervals`, `Auto-send on schedule`, `Automatic payment reminders`, `Retry failed payments`, `Pause and resume`, `Recurring analytics`] },
  { title: `Late Fees`, desc: `Automatically add late fees to overdue invoices. Set your policy once — a flat fee or percentage.`, bullets: [`Flat fee or percentage`, `Grace period configuration`, `Automatic application`, `Notification to client`, `Override per invoice`, `Late payment report`] },
  { title: `Time Tracking`, desc: `Track billable hours directly in ZiggyInvoice. Convert time entries to invoice line items with one click.`, bullets: [`In-app timer`, `Manual time entry`, `Project-based tracking`, `One-click add to invoice`, `Time report by client`, `Team time tracking (Pro)`] },
  { title: `Expense Management`, desc: `Log business expenses, attach receipts, and include expenses in client invoices.`, bullets: [`Expense logging`, `Receipt photo capture`, `Expense categories`, `Add to client invoice`, `Expense reports`, `Tax category tagging`] },
  { title: `Client Payment Portal`, desc: `Clients get their own portal to view outstanding invoices and pay online via credit card or ACH.`, bullets: [`Branded client portal`, `Outstanding invoice view`, `Payment history`, `Credit card + ACH`, `Stripe-powered`, `Auto-receipt on payment`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#14b8a6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#14b8a6] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyInvoice can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggyinvoice.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#14b8a6] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggyinvoice.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#14b8a6] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
