import Image from 'next/image'

export function ZiggyInvoiceLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyinvoice-wordmark-dark.png"
      alt="ZiggyInvoice"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
