import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soulvia.com'),
  title: 'Soulvia - Anonymous Safe Communication Platform',
  description: 'Experience true digital privacy with Soulvia. End-to-end encrypted, anonymous communication without compromising your identity. Join thousands protecting their digital freedom.',
  keywords: 'anonymous chat, privacy protection, encrypted messaging, digital privacy, secure communication, anonymous social platform',
  authors: [{ name: 'Soulvia Team' }],
  creator: 'Soulvia',
  publisher: 'Soulvia',
  openGraph: {
    title: 'Soulvia - Anonymous Safe Communication Platform',
    description: 'Experience true digital privacy with end-to-end encryption and anonymous communication.',
    url: 'https://soulvia.com',
    siteName: 'Soulvia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soulvia - Anonymous Communication Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soulvia - Anonymous Safe Communication Platform',
    description: 'Experience true digital privacy with end-to-end encryption.',
    images: ['/og-image.jpg'],
    creator: '@soulvia',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-dark-900 mobile-scroll">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}