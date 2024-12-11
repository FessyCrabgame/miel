"use client";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";
import { BossPages } from "@/components/shared/dashboardBoss/candidatesPage";
import { BrowserRouter } from "react-router-dom";

const PTSans = PT_Sans({
  subsets: ["cyrillic"],
  variable: "--font-PT_Sans",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={`${PTSans.variable}`}>
        <main>
          <Header />
          <BrowserRouter>
            <BossPages />
            {children}
          </BrowserRouter>
        </main>
      </body>
    </html>
  );
}
