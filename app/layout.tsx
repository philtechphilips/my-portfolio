import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import 'gsap/dist/gsap';
import 'gsap/dist/ScrollTrigger';

// Your component code here


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isola Pelumi • Software Engineer',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
