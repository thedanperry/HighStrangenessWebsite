export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "High Strangeness",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": [
      {
        "@type": "Offer",
        "price": "1.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://apps.apple.com/us/app/high-strangeness/id6755126760",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1.99",
          "priceCurrency": "USD",
          "billingIncrement": "P1M"
        }
      },
      {
        "@type": "Offer",
        "price": "14.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://apps.apple.com/us/app/high-strangeness/id6755126760",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "14.99",
          "priceCurrency": "USD",
          "billingIncrement": "P1Y"
        }
      }
    ],
    "description": "Paranormal discovery app with a living map of the unexplained. Report UFO sightings, ghost encounters, and cryptid sightings. Explore interactive maps, use field scanners for anomaly detection, access literature archives, and connect with a global community of investigators.",
    "featureList": [
      "Report paranormal experiences with photos and videos",
      "Field Scanner for EMF and anomaly detection",
      "Interactive world map of paranormal activity",
      "Community feed with trending reports",
      "Literature archive of occult and esoteric texts",
      "Media transmissions from leading paranormal sources"
    ],
    "screenshot": [
      "https://highstrangeness.app/screenshots/screenshot-1.png",
      "https://highstrangeness.app/screenshots/screenshot-2.png",
      "https://highstrangeness.app/screenshots/screenshot-3.png",
      "https://highstrangeness.app/screenshots/screenshot-4.png"
    ],
    "url": "https://highstrangeness.app",
    "publisher": {
      "@type": "Organization",
      "name": "High Strangeness"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

