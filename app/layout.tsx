import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Horizon | Banking",
   description:
      "Horizon is a modern banking platform for everyone. Integrated with the latest technologies to provide a seamless experience. Join us today!",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   )
}
