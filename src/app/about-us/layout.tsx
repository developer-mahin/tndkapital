import { Metadata } from "next";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about TND Kapital, our mission, values, and our commitment to ethical, sharia-compliant community development.",
  openGraph: {
    title: "About Us | TND Kapital",
    description: "Learn more about TND Kapital's mission and values in ethical business.",
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
      "name": "About Us",
      "item": "https://tndkapital.com/about-us"
    }
  ]
};

export default function AboutUsLayout({
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
