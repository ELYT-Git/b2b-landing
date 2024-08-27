import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELYT | Kurumsal Sadakat Programı',
  description: 'Müşterilerinizle ilişkinizi sadakat programları ile güçlendirin. ELYT ile müşterilerinizin sadakatini ödüllendirin.',
  openGraph: {
    images: 'https://business.elyt.net/memory_token.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://*.google.com; style-src 'self' 'unsafe-inline' https://*.googleapis.com; img-src 'self' data:; connect-src 'self'; font-src 'self' https://*.gstatic.com; object-src 'none'; frame-src 'none';"/>
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
