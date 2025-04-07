import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased text-gray-800 `}
      >
        <main className="min-h-screen bg-cyan-700">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
