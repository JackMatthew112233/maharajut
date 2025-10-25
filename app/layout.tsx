import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import FloatingFAQChat from "@/components/floating-faq-chat";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maharajut - Kerajinan Rajut Nusantara",
  description:
    "UMKM kerajinan tangan bahan rajutan yang memadukan tradisi Indonesia dengan desain modern. Tas, pakaian, dan aksesoris rajut berkualitas tinggi.",
  keywords:
    "rajut, kerajinan tangan, tas rajut, pakaian rajut, aksesoris rajut, UMKM, Indonesia, nusantara, handmade",
  authors: [{ name: "Maharajut Team" }],
  creator: "Maharajut",
  publisher: "Maharajut",
  openGraph: {
    title: "Maharajut - Kerajinan Rajut Nusantara",
    description:
      "UMKM kerajinan tangan bahan rajutan yang memadukan tradisi Indonesia dengan desain modern.",
    url: "https://maharajut.id",
    siteName: "Maharajut",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharajut - Kerajinan Rajut Nusantara",
    description:
      "UMKM kerajinan tangan bahan rajutan yang memadukan tradisi Indonesia dengan desain modern.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingFAQChat />
            <Toaster position="top-right" richColors />
          </div>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
