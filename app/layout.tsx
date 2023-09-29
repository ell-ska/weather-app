import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import ModalProvider from '@/components/providers/ModalProvider'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Weather',
  description: 'An aestheticly pleasing weather app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn(outfit.variable, 'font-sans text-slate-800')}>
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}
