import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about TND Kapital, our ethical business practices, and sharia-compliant trade solutions.",
  openGraph: {
    title: "FAQs | TND Kapital",
    description: "Find answers to common questions about TND Kapital's ethical and sharia-compliant business solutions.",
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TND Kapital about?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TND Kapital is a values-driven community development partner that helps individuals and small businesses acquire what they need through ethical, sharia-compliant business partnerships."
      }
    },
    {
      "@type": "Question",
      "name": "Are you truly sharia-compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our products and services are fully vetted and approved by an independent Sharia Supervisory Board (SSB). We also do our due diligence with our partners to make sure we offer ethically-sourced products that prioritize dignity and transparency at every level."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be muslim to work with TND Kapital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not! While our approach follows Islamic ethical principles, faith is not a requirement. We work with everyone — Muslim or non-Muslim. Our programs are open to individuals, families, and small businesses seeking fair and ethical ways to acquire essential goods or grow their trade."
      }
    },
    {
      "@type": "Question",
      "name": "What partnership models do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Cost Plus Profit (CPP) for Individuals and Businesses, Thrive Together Partnership (TTP), and Group Empowerment Program (GEP)."
      }
    },
    {
      "@type": "Question",
      "name": "How does TND Kapital work with local communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We combine digital tools with a strong local presence to stay close to the people we serve. Our trained representatives live and work within the communities, helping families and entrepreneurs understand our process, make informed choices, and succeed responsibly."
      }
    },
    {
      "@type": "Question",
      "name": "How does TND Kapital sustains itself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Through transparent, pre-agreed margins on trade transactions — never through interest or hidden fees. Our contracts are written in plain simple language. No complicated jargons, no gimmicks. What you see is what you get."
      }
    },
    {
      "@type": "Question",
      "name": "What does \"Sharia-compliant\" mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It means our approach is guided by values rooted in fairness, transparency, and shared benefit. We avoid interest-based transactions and focus on trade, partnership, and real economic activity backed by real goods."
      }
    },
    {
      "@type": "Question",
      "name": "What does \"TND\" stand for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official placeholder is Trust & Nurtured Development, though many partners interpret it as Trust, Nobility, Dignity or Today's Noble Deed."
      }
    },
    {
      "@type": "Question",
      "name": "Is TND Kapital a bank or a lender?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We are not a bank or financial institution. We do not issue loans or credit. We engage in trade-based transactions where we purchase goods or assets on your behalf, and resell them to you at a fair, pre-agreed profit, repayable overtime in installments. No interest ever."
      }
    },
    {
      "@type": "Question",
      "name": "What makes TND Kapital different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do NOT lend cash or liquidity, and we don’t deal with loans or interest. Every transaction is backed by tangible assets or goods, and every arrangement is based on mutual understanding, clear terms, and shared trust. Trust is our currency."
      }
    }
  ]
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
      "name": "FAQs",
      "item": "https://tndkapital.com/faqs"
    }
  ]
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
