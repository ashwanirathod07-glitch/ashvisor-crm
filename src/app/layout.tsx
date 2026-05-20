import type { Metadata } from "next"
import "./globals.css"

import {
  ClerkProvider,
} from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Ashvisor",
  description: "AI Performance Marketing Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}