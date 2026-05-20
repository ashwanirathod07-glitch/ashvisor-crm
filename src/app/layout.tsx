import "./globals.css"

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
export const metadata = {
  title: "Ashvisor - AI Marketing Platform",
  description: "AI-powered adtech and performance marketing solutions.",
};