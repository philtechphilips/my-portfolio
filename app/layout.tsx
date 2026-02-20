import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import 'gsap/dist/gsap';
import 'gsap/dist/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Pelumi Isola • Full-Stack Software Engineer',
  description: 'Security-focused full-stack developer with 5+ years of experience building scalable, secure applications. Specializing in React, Node.js, Laravel, PHP, TypeScript, and cloud technologies.',
  keywords: ['Full-Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Laravel', 'PHP', 'TypeScript', 'Security', 'Cloud Computing', 'Web Development'],
  authors: [{ name: 'Pelumi Isola' }],
  creator: 'Pelumi Isola',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pelumiisola.dev',
    title: 'Pelumi Isola • Full-Stack Software Engineer',
    description: 'Security-focused full-stack developer specializing in React, Node.js, and Laravel',
    siteName: 'Pelumi Isola Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelumi Isola • Full-Stack Software Engineer',
    description: 'Security-focused full-stack developer specializing in React, Node.js, and Laravel',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
