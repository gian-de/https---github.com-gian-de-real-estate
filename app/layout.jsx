import "./globals.css";

import { Inter } from "@next/font/google";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
