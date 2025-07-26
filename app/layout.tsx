import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Akbarshohdev - Odoo ERP Specialist | O'zbekistonda ERP yechimlari",
    template: "%s | Akbarshohdev"
  },
  description: "Odoo ERP mutaxassisi. Bizneslarni raqamlashtirish va jarayonlarni optimallashtirish bo'yicha maxsus yechimlar. O'zbekistonda Odoo ERP joriy qilish va moslashtirish xizmatlari.",
  keywords: [
    "Odoo ERP",
    "ERP tizimi",
    "biznes boshqaruvi",
    "O'zbekiston ERP",
    "Odoo mutaxassisi",
    "biznes raqamlashtirish",
    "Odoo joriy qilish",
    "ERP yechimlari",
    "biznes optimizatsiya",
    "Odoo moslashtirish"
  ],
  authors: [{ name: "Akbarshohdev" }],
  creator: "Akbarshohdev",
  publisher: "Akbarshohdev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saadyucuf.uz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://saadyucuf.uz',
    title: 'Akbarshohdev - Odoo ERP Specialist | O\'zbekistonda ERP yechimlari',
    description: 'Odoo ERP mutaxassisi. Bizneslarni raqamlashtirish va jarayonlarni optimallashtirish bo\'yicha maxsus yechimlar.',
    siteName: 'Akbarshohdev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akbarshohdev - Odoo ERP Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akbarshohdev - Odoo ERP Specialist',
    description: 'Odoo ERP mutaxassisi. Bizneslarni raqamlashtirish va jarayonlarni optimallashtirish bo\'yicha maxsus yechimlar.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Akbarshohdev" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
