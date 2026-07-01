import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sreemfin.com'),
  title: {
    default: 'Sreem Financials and Insurance Services | Private Wealth Advisory',
    template: '%s | Sreem Financials and Insurance Services'
  },
  description: 'Bespoke capital protection, multi-generational life insurance structures, international visitor medical plans, and private trust engineering.',
  keywords: ['Life Insurance', 'Visitor Insurance', 'Will and Trust', 'IMG Patriot Plus', 'Atlas Travel Insurance', 'Asset Protection', 'Sreem Financials'],
  authors: [{ name: 'Sreem Financials Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Sreem Financials and Insurance Services',
    description: 'Bespoke wealth engineering, legacy protection, and global travel medical insulation.',
    url: 'https://sreemfin.com',
    siteName: 'Sreem Financials and Insurance Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sreem Financials and Insurance Services',
    description: 'Institutional-grade asset safeguarding and international coverage frameworks.',
  },
  icons: {
    icon: '/images/sreemlogo (1).png',
    shortcut: '/images/sreemlogo (1).png',
    apple: '/images/sreemlogo (1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning={true}
    >
      <body
        className={`${plusJakartaSans.variable} font-sans min-h-full flex flex-col`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
