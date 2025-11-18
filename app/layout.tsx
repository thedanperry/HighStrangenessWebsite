import type { Metadata } from 'next'
import './globals.css'
import { StructuredData } from './components/StructuredData'

export const metadata: Metadata = {
  title: 'High Strangeness | Paranormal Discovery App with Living Map',
  description: 'Paranormal discovery app with a living map of the unexplained. Report UFO sightings, ghost encounters, and cryptid sightings. Explore interactive maps, use field scanners for anomaly detection, access literature archives, and connect with investigators worldwide.',
  keywords: [
    'paranormal app',
    'UFO sightings',
    'UAP reports',
    'ghost encounters',
    'cryptid sightings',
    'paranormal investigation',
    'supernatural app',
    'anomalous activity',
    'haunted locations',
    'alien encounters',
    'unexplained phenomena',
    'paranormal research',
    'field scanner',
    'EMF detector',
    'paranormal map',
    'ghost hunting app',
    'UFO tracking',
    'paranormal database',
    'occult literature',
    'esoteric texts'
  ],
  authors: [{ name: 'High Strangeness' }],
  creator: 'High Strangeness',
  publisher: 'High Strangeness',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'High Strangeness | Paranormal Discovery App',
    description: 'A paranormal discovery app with a living map of the unexplained. Report sightings, explore hotspots, and connect with investigators worldwide.',
    type: 'website',
    url: 'https://highstrangeness.app',
    siteName: 'High Strangeness',
    images: [
      {
        url: 'https://highstrangeness.app/logo.png',
        width: 1200,
        height: 1200,
        alt: 'High Strangeness - Paranormal Discovery App',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Strangeness | Paranormal Discovery App',
    description: 'A paranormal discovery app with a living map of the unexplained. Report UFO sightings, ghost encounters, and cryptid sightings.',
    images: ['https://highstrangeness.app/logo.png'],
  },
  alternates: {
    canonical: 'https://highstrangeness.app',
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
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
