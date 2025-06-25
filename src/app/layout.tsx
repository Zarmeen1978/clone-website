import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InvoZone | Software Development and Consulting Company',
  description: 'Professional portfolio showcasing React, Next.js, Tailwind CSS, and Bootstrap skills',
  icons: {
    // icon: '\invo-logo.png', 
    shortcut: '\assests\images\invo-logo.png',
    apple: '/apple-touch-icon.png', 
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container py-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}