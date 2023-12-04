import { ClerkLoaded, ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"
import { PusherProvider } from '@/Components/pusherContextProvider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-secondary", inter.className)}>
          <PusherProvider>
            {children}
          </PusherProvider>
        </body>
      </html>
    </ClerkProvider>
    
  )
}
