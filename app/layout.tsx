import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { I18nProvider } from '@/components/I18nProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ToonJS - High-Performance Data Manipulation for JavaScript',
  description: 'TypeScript library for tabular data manipulation. Up to 3x faster. Zero dependencies. Perfect for LLMs and data analysis.',
  keywords: ['toonjs', 'data', 'javascript', 'typescript', 'pandas', 'llm', 'dataframe', 'analysis'],
  authors: [{ name: 'Francesc Fors', url: 'https://cesco.dev' }],
  openGraph: {
    title: 'ToonJS - High-Performance Data Manipulation',
    description: 'TypeScript library for tabular data. 3x faster, zero dependencies.',
    url: 'https://toonjs.dev',
    siteName: 'ToonJS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToonJS - High-Performance Data Manipulation',
    description: 'TypeScript library for tabular data. 3x faster, zero dependencies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
