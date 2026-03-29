import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "ZiggyInvoice — Invoicing that gets you paid faster",
    template: "%s | ZiggyInvoice",
  },
  description:
    "Send professional invoices, accept Stripe payments online, and get paid faster. Auto-reminders, client portal, recurring invoices — starting at $19/mo.",
  keywords: [
    "invoicing software",
    "invoice generator",
    "online payments",
    "freelance invoicing",
    "small business invoicing",
    "stripe invoicing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziggyinvoice.com",
    siteName: "ZiggyInvoice",
    title: "ZiggyInvoice — Invoicing that gets you paid faster",
    description:
      "Send professional invoices, accept Stripe payments online, and get paid faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyInvoice — Invoicing that gets you paid faster",
    description:
      "Send professional invoices, accept Stripe payments online, and get paid faster.",
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
      <body style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
