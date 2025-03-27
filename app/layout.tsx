import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechFinIA',
  description: 'Techfinia is a campaign or franchise that merges finance and technology, empowering businesses and individuals to adopt innovative FinTech solutions. It provides education, consulting, and resources to drive digital transformation in the financial sector. Techfinia aims to make financial services more accessible, efficient, and secure through technology.',
  generator: 'Minhal',
  icons : {
      icon:"/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
