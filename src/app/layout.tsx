import type { Metadata } from 'next';
import type { Viewport } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    template: '%s | Hadi Jafari',
    default: 'Hadi Jafari - Frontend Developer | TypeScript, React, Next.js',
  },
  description:
    'Frontend developer building modern and responsive web applications with TypeScript, React, and Next.js.',
  keywords: [
    'Hadi Jafari',
    'frontend developer',
    'TypeScript developer',
    'React developer',
    'Next.js developer',
    'web development',
    'freelance developer',
  ],
  authors: [{ name: 'Hadi Jafari' }],
  creator: 'Hadi Jafari',
  metadataBase: new URL('https://hadijafari.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hadi Jafari - Frontend Developer | TypeScript, React, Next.js',
    description:
      'Frontend developer building modern and responsive web applications with TypeScript, React, and Next.js.',
    url: 'https://hadijafari.dev',
    siteName: 'Hadi Jafari - Frontend Developer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hadijafari.jpg',
        width: 1200,
        height: 630,
        alt: 'Hadi Jafari - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadi Jafari - Frontend Developer',
    description:
      'Building modern and responsive web applications with TypeScript, React, and Next.js.',
    creator: '@hadijafaridev',
    images: ['/hadijafari.jpg'],
  },
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
};

export const viewport: Viewport = {
  themeColor: '#F9F8F6FF',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hadi Jafari',
    url: 'https://hadijafari.dev',
    image: 'https://hadijafari.dev/hadijafari.jpg',
    jobTitle: 'Frontend Developer',
    description:
      'Frontend developer building modern and responsive web applications with TypeScript, React, and Next.js.',
    sameAs: [
      'https://github.com/Hadi111jafari',
      'https://linkedin.com/in/abdul-hadi-jafari',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-stacksansnotch antialiased max-w-7xl px-2.5 pb-2.5 mx-auto bg-background text-foreground min-h-screen ease-in-out transition-colors duration-300`}
      >
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg"
        >
          Skip to main content
        </Link>
        <NextTopLoader
          height={5}
          color="#d9db4d"
          shadow="0 0 20px #d9db4d"
          showSpinner={false}
          easing={'ease-out'}
        />
        <ThemeProvider enableSystem={false}>
          <div className="w-full h-2.5 bg-background top-0 fixed z-50"></div>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
