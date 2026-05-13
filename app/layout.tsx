import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BiasCheck — Detect Unconscious Bias in Technical Interviews',
  description: 'AI-powered analysis of interview transcripts and feedback patterns to identify potential bias in hiring decisions. Built for HR teams and engineering managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="017e478a-dac0-425b-b426-a5dc36a1adb2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
