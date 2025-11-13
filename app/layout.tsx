import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'High Strangeness | Paranormal Discovery App',
  description: 'An AI-assisted paranormal logging and discovery app. A living map of the unexplained. Report UFO sightings, ghost encounters, and cryptid sightings. Explore an interactive map of paranormal activity worldwide.',
  keywords: ['paranormal', 'UFO', 'UAP', 'ghost', 'cryptid', 'supernatural', 'app', 'sightings', 'reports', 'haunted', 'alien', 'unexplained'],
  openGraph: {
    title: 'High Strangeness',
    description: 'An AI-assisted paranormal logging and discovery app. A living map of the unexplained.',
    type: 'website',
    url: 'https://highstrangeness.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
