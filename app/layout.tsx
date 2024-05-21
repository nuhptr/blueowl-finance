export const dynamic = "force_dynamic" // for testing only

import type { Metadata } from "next"
import { Inter, IBM_Plex_Serif } from "next/font/google"

import "./globals.css"

// font initialization
const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter", // custom variable name
})
const ibmPlexSerif = IBM_Plex_Serif({
   subsets: ["latin"],
   weight: ["400", "700"],
   variable: "--font-ibm-plex-serif", // custom variable name
})

// Metadata for SEO
export const metadata: Metadata = {
   title: "Horizon | Banking",
   description:
      "Horizon is a modern banking platform for everyone. Integrated with the latest technologies to provide a seamless experience. Join us today!",
   icons: { icon: "/icons/ic_logo.svg" }, // favicon
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
      </html>
   )
}
