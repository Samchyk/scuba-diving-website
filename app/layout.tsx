import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-mono-jet',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hungarybuvarkodas.com'),
  title: {
    default: 'Hungary Búvárkodás — A mélység csendje',
    template: '%s — Hungary Búvárkodás',
  },
  description:
    'Magyar nyelvű búvármagazin a búvárkodás művészetéről: technikák, felszerelés, biztonság, történelem és a víz alatti világ felfedezése.',
  keywords: [
    'búvárkodás',
    'scuba',
    'szabadtüdős merülés',
    'merülés',
    'búvárfelszerelés',
    'víz alatti felfedezés',
  ],
  openGraph: {
    title: 'Hungary Búvárkodás — A mélység csendje',
    description:
      'Magyar nyelvű búvármagazin a búvárkodás művészetéről és a víz alatti világ felfedezéséről.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a1620',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`dark ${inter.variable} ${cormorant.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
