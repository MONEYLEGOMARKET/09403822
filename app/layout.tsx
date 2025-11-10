import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TRADINGSYSTEM - Open-Source Trading Analytics",
    template: "%s | TRADINGSYSTEM"
  },
  description: "100% free and open-source trading analytics platform for professional traders. Track performance, analyze trades, and improve your trading with AI-powered insights.",
  keywords: ["trading", "analytics", "prop firm", "trading journal", "performance tracking", "open source"],
  authors: [{ name: "TRADINGSYSTEM Contributors" }],
  creator: "TRADINGSYSTEM",
  publisher: "TRADINGSYSTEM",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://tradingsystem.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://tradingsystem.app",
    title: "TRADINGSYSTEM - Open-Source Trading Analytics",
    description: "100% free and open-source trading analytics platform for professional traders.",
    siteName: "TRADINGSYSTEM",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRADINGSYSTEM - Open-Source Trading Analytics",
    description: "100% free and open-source trading analytics platform for professional traders.",
    creator: "@tradingsystem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            className: "border border-border bg-background text-foreground",
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
