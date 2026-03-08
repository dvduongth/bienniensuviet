import Link from 'next/link'
import React from 'react'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
          <Link href="/">Home</Link> |{' '}
          <Link href="/battle">Battle</Link> |{' '}
          <Link href="/play/[chapterId]">Play</Link> |{' '}
          <Link href="/demo/timeline">Demo Timeline</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
