import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact Directory',
  description: 'Simple app contact directory'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={`${inter.className} min-h-screen flex flex-col px-4 pt-8 sm:pt-8 sm:px-32 text-zinc-700`}>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
