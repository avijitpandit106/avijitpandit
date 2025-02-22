import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Avijit Pandit',
  description:
    'Software Developer | Specializing in React, Node.js, and scalable architectures.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-linear-to-b from-blue-500 to-purple-500 text-gray-800 `}
      >
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
