import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edward Passagi',
  description: 'Edward Passagi · Software Engineer, Builder, Problem-Solver',
  keywords: 'Edward Passagi, Software Engineer, Backend Developer, Infrastructure Engineer, Epic Systems, UIUC, Computer Science, Illinois, Urbana-Champaign',
  authors: [{ name: 'Edward Passagi' }],
  creator: 'Edward Passagi',
  publisher: 'Edward Passagi',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edwardpassagi.github.io',
    title: 'Edward Passagi - Software Engineer & Infrastructure Developer',
    description: 'Edward Passagi is a Backend & Infrastructure Engineer with BS & MCS in Computer Science from UIUC. Ex-Epic Systems Software Developer.',
    siteName: 'Edward Passagi Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Edward Passagi - Software Engineer & Infrastructure Developer',
    description: 'Backend & Infrastructure Engineer | Ex-Epic Systems | BS & MCS CS @ UIUC',
    creator: '@edwardpassagi',
  },
  verification: {
    google: 'ywJanfnKAXt0jv5a3L2h776LAuKsCk7QhK7j-E49qFc',
  },
  icons: {
    icon: '/images/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}