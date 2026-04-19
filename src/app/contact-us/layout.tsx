import { Metadata } from "next";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TND Kapital for any inquiries about our ethical trade solutions. We're here to support your journey.",
  openGraph: {
    title: "Contact Us | TND Kapital",
    description: "Get in touch with the TND Kapital team for ethical business solutions.",
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
      "name": "Contact Us",
      "item": "https://tndkapital.com/contact-us"
    }
  ]
};

export default function ContactUsLayout({
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
