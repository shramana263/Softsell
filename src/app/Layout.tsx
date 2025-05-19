import "@/app/globals.css"
// Update the import path if the file exists elsewhere, for example:
import { ThemeProvider } from "@/app/ThemeProvider"
// Or create the file at src/components/theme-provider.tsx if it does not exist.

export const metadata = {
  title: "SoftSell - Software License Resale Platform",
  description: "Turn unused software licenses into cash with SoftSell, the leading software license resale platform.",
}

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
