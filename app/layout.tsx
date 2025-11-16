import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { I18nProvider } from '@/components/I18nProvider'
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ToonJS - High-Performance Data Manipulation for JavaScript',
  description: 'TypeScript library for tabular data manipulation. Average 2.2x faster. Zero dependencies. Perfect for LLMs and data analysis.',
  keywords: ['toonjs', 'data', 'javascript', 'typescript', 'pandas', 'llm', 'dataframe', 'analysis'],
  authors: [{ name: 'Francesc Fors', url: 'https://cesco.dev' }],
  openGraph: {
    title: 'ToonJS - High-Performance Data Manipulation',
    description: 'TypeScript library for tabular data. 2.2x average faster, zero dependencies.',
    url: 'https://toonjs.dev',
    siteName: 'ToonJS',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <I18nProvider>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
