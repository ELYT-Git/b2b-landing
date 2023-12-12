import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELYT | Kurumsal Sadakat Programı',
  description: 'Müşterilerinizle ilişkinizi sadakat programları ile güçlendirin. ELYT ile müşterilerinizin sadakatini ödüllendirin.',
  openGraph: {
    images: 'memory_token.webp',
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
