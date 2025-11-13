import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: '@AriaCodez - Media Kit',
  description: 'Content creator showcasing premium travel experiences and the work-from-anywhere lifestyle. Highly-engaged audience of tech professionals seeking luxury accommodations.',
  keywords: ['AriaCodez', 'content creator', 'travel', 'luxury resorts', 'work from anywhere', 'digital nomad', 'tech professional', 'media kit'],
  authors: [{ name: 'AriaCodez' }],
  creator: 'AriaCodez',
  openGraph: {
    title: '@AriaCodez - Media Kit',
    description: 'Content creator showcasing premium travel experiences and the work-from-anywhere lifestyle.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '@AriaCodez - Media Kit',
    description: 'Content creator showcasing premium travel experiences and the work-from-anywhere lifestyle.',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
