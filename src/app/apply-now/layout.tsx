import { Metadata } from "next";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Start your journey with TND Kapital today. Apply for our ethical, interest-free trade partnerships and empower your future.",
  openGraph: {
    title: "Apply Now | TND Kapital",
    description: "Apply for ethical, sharia-compliant trade partnerships with TND Kapital.",
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
      "name": "Apply Now",
      "item": "https://tndkapital.com/apply-now"
    }
  ]
};

export default function ApplyNowLayout({
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
