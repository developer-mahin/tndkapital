import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = 'https://tndkapital.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TND Kapital - Rooted in Values. Built for People",
    template: "%s | TND Kapital",
  },
  description:
    "Empowering Lives Through Ethical Business Solutions. Fair & Transparent- For Everyday People.",
  keywords: ["TND Kapital", "Ethical Business", "Sharia Compliant", "Trade Solutions", "Interest Free"],
  authors: [{ name: "TND Kapital Team" }],
  creator: "TND Kapital",
  publisher: "TND Kapital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "TND Kapital",
    title: "TND Kapital - Rooted in Values. Built for People",
    description: "Empowering Lives Through Ethical Business Solutions. Fair & Transparent- For Everyday People.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TND Kapital - Ethical Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TND Kapital - Rooted in Values. Built for People",
    description: "Empowering Lives Through Ethical Business Solutions. Fair & Transparent- For Everyday People.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TND Kapital",
  "url": baseUrl,
  "logo": `${baseUrl}/favicon.ico`,
  "description": "Empowering Lives Through Ethical Business Solutions. Fair & Transparent- For Everyday People.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Bangladesh" // Adjust if different
  },
  "sameAs": [
    // Add social media links here
    "https://facebook.com/tndkapital",
    "https://linkedin.com/company/tndkapital"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd data={organizationJsonLd} />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
