
import React from 'react';
import { StructuredData } from './StructuredData';

interface TourSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  currency?: string;
  duration?: string;
  url?: string;
}

export const TourSchema: React.FC<TourSchemaProps> = ({
  name,
  description,
  image,
  price,
  currency = "EUR",
  duration,
  url
}) => {
  const tourData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    "description": description,
    "image": image,
    "url": url || typeof window !== "undefined" ? window.location.href : "",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock"
    }
  };

  // Add duration if provided
  if (duration) {
    tourData["duration"] = duration;
  }

  return <StructuredData data={tourData} />;
};
