import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import 'gsap/dist/gsap';
import 'gsap/dist/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

const baseUrl = 'https://pelumiisola.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Pelumi Isola — Full-Stack Software Engineer',
    template: '%s | Pelumi Isola',
  },
  description: 'Pelumi Isola is a security-focused full-stack software engineer with 6+ years of experience building scalable web applications. Specialized in React, Node.js, TypeScript, Laravel, PostgreSQL, and cloud infrastructure. Based in Lagos, Nigeria — open to remote work.',
  keywords: [
    'Pelumi Isola',
    'Full-Stack Developer',
    'Software Engineer',
    'Backend Developer',
    'React Developer',
    'Node.js Developer',
    'Laravel Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'PostgreSQL',
    'API Development',
    'Lagos Nigeria Developer',
    'Remote Software Engineer',
    'Security-focused Developer',
    'Web Application Developer',
    'Full Stack Engineer Nigeria',
  ],
  authors: [{ name: 'Pelumi Isola', url: baseUrl }],
  creator: 'Pelumi Isola',
  publisher: 'Pelumi Isola',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Pelumi Isola — Full-Stack Software Engineer',
    description: 'Security-focused full-stack software engineer with 6+ years building scalable applications. React, Node.js, TypeScript, Laravel, PostgreSQL.',
    siteName: 'Pelumi Isola',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pelumi Isola — Full-Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelumi Isola — Full-Stack Software Engineer',
    description: 'Security-focused full-stack engineer. React, Node.js, TypeScript, Laravel. Based in Lagos — open to remote.',
    site: '@softwareengng',
    creator: '@softwareengng',
    images: ['/opengraph-image'],
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Pelumi Isola',
      url: baseUrl,
      image: `${baseUrl}/images/my-image.jpeg`,
      jobTitle: 'Full-Stack Software Engineer',
      description: 'Security-focused full-stack software engineer with 6+ years of experience building scalable web applications.',
      email: 'pelumiisola87@gmail.com',
      sameAs: [
        'https://github.com/philtechphilips',
        'https://www.linkedin.com/in/pelumi-isola-84661821a',
        'https://x.com/softwareengng',
        'https://www.instagram.com/philipstheprogrammer/',
      ],
      knowsAbout: [
        'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Laravel',
        'PHP', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
        'Docker', 'CI/CD', 'REST APIs', 'GraphQL', 'Azure',
        'Web Security', 'Full-Stack Development',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'AB-InBev',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Pelumi Isola',
      description: 'Portfolio of Pelumi Isola — Full-Stack Software Engineer',
      author: { '@id': `${baseUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
