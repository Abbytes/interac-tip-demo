import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { creator } from "@/lib/creator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${creator.name} — Tip Page`,
  description: `Send a tip to ${creator.name} via Interac e-Transfer. Supporting: ${creator.goalLabel}.`,
  openGraph: {
    title: `Tip ${creator.name}`,
    description: `Interac e-Transfer tips toward ${creator.goalLabel}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="dark">
      <body
        className={`${inter.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
