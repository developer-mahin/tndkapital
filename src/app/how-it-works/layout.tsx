import { Metadata } from "next";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Discover how TND Kapital's trade-based partnership models work. From application to ownership, we ensure a fair and transparent process.",
  openGraph: {
    title: "How It Works | TND Kapital",
    description: "Discover TND Kapital's transparent and ethical trade process.",
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://tndkapital.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How It Works",
      "item": "https://tndkapital.com/how-it-works"
    }
  ]
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
