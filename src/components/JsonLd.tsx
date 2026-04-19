import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * A component to inject JSON-LD structured data into the <head> of the page.
 * Uses dangerouslySetInnerHTML to properly embed the script.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
