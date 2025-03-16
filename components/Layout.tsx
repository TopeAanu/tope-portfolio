// components/Layout.tsx
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>CodeMamba | Portfolio</title>
        <meta name="description" content="CodeMamba's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}