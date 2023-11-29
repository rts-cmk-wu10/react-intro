"use client"

import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Forside</Link>
              </li>
              <li>
                <Link href="/settings">Indstillinger</Link>
              </li>
              <li>
                <Link href="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
