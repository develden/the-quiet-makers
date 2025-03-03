import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'The Quiet Makers - Путешествие к счастью через доброту',
  description: 'Платформа нового поколения, которая с помощью технологий AI и Blockchain делает процесс благотворительности удобным, прозрачным и вдохновляющим.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
} 