import type { Metadata } from "next"
import { Sora, Outfit } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Accuracore | Streamline Your Business All-in-One Precision Platform",
  description:
    "Accuracore is a powerful, enterprise-ready platform to manage your business from start to finish. Get a unified dashboard, custom workflows, and built-in financial intelligence.",
  icons: {
    icon: "images/logo-white.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable}`}>
      <body className="relative">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
