import { Metadata } from "next";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our ethical, interest-free product offerings for individuals and businesses, including home items, solar kits, and business tools.",
  openGraph: {
    title: "Our Products | TND Kapital",
    description: "Explore ethical, sharia-compliant product solutions from TND Kapital.",
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Ethical Finance & Trade Partnership",
  "provider": {
    "@type": "Organization",
    "name": "TND Kapital"
  },
  "areaServed": "Bangladesh",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TND Kapital Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cost Plus Profit (CPP) for Individuals",
          "description": "For home and family items such as stoves, TVs, mini solar kits, water tanks, etc."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cost Plus Profit (CPP) for Business",
          "description": "For productive tools like sewing machines, freezers, solar panels, merchandise, etc."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Thrive Together Partnership (TTP)",
          "description": "A trust-based partnership where TND Kapital provides resources and you manage the business, sharing in profit."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Empowerment Program (GEP)",
          "description": "Collective arrangements designed specifically for community groups or co-ops."
        }
      }
    ]
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
      "name": "Our Products",
      "item": "https://tndkapital.com/our-products"
    }
  ]
};

export default function OurProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
