"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-white`}>
      <div className="relative z-0">
          {children}
      </div>
      </body>

    </html>
  );
}
