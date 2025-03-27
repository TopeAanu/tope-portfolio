// app/layout.tsx
import type { Metadata } from 'next'
import { ThemeProvider } from "./providers/theme-provider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Professional portfolio website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="m-0 p-0 font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}