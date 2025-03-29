import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Contact | Avijit Pandit',
  description: 'Contact me for any inquiries, collaborations or any service-related request.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-br from-cyan-700 to-teal-700`}
      >
        <main className="min-h-screen flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
