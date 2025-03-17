import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AMS Global - Business Solutions",
  description:
    "AMS Global provides innovative products and services to help your business thrive in today's competitive market.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background shadow-md">
              <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <nav className="flex items-center space-x-2">
                    <Button asChild size="sm">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </nav>
                </div>
              </div>
            </header>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'