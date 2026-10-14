import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { siteConfig } from '@/config/portfolio-data';

import { Toaster } from 'sonner';
import StructuredData from '@/components/shared/StructuredData';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { GlobalEffects } from '@/components/shared/GlobalEffects';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const jetbrains = JetBrains_Mono({ variable: '--font-jetbrains', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'Prisma',
    'PostgreSQL',
    'AI Developer',
    'Portfolio',
  ],
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    suppressHydrationWarning
    className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
  >
    <body suppressHydrationWarning className="bg-background text-foreground min-h-screen font-sans">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <GlobalEffects />
        <div className="flex min-h-screen flex-col">
          <StructuredData />
          <Navbar />

          <main className="flex-1 pt-16">{children}</main>

          <Footer />
        </div>

        <Toaster position="top-right" richColors closeButton expand duration={4000} />
      </ThemeProvider>
    </body>
  </html>
);
}
