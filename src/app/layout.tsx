import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takuma Matsumoto | IT Consultant & Software Engineer",
  description:
    "システムエンジニアからITコンサルタントへ。技術力とビジネス視点を融合し、課題解決に取り組むポートフォリオサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
        {children}
      </body>
    </html>
  );
}
