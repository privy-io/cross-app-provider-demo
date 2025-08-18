import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PrivyProviderWrapper } from "@/components/privy-provider";
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
  title: "Cross-App Provider Demo",
  description: "Demo app showcasing @privy-io/cross-app-provider SDK utilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrivyProviderWrapper>
          {children}
        </PrivyProviderWrapper>
      </body>
    </html>
  );
}
