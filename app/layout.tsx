import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import BackgroundImage from '@/components/BackgroundImage'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn(outfit.variable, 'font-sans text-slate-800')}>
        <BackgroundImage />
        <Header />
        {children}
      </body>
    </html>
  )
}
