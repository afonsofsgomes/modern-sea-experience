
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
  startLocation?: string;
  endLocation?: string;
  tourOperator?: string;
  availability?: string;
}

export const TourSchema: React.FC<TourSchemaProps> = ({
  name,
  description,
  image,
  price,
  currency = "EUR",
  duration,
  url,
  startLocation,
  endLocation,
  tourOperator = "SeaYou Madeira",
  availability = "https://schema.org/InStock"
}) => {
  const tourData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    "description": description,
    "image": image,
    "url": url || typeof window !== "undefined" ? window.location.href : "",
    "isAccessibleForFree": false,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": availability,
      "validFrom": new Date().toISOString().split('T')[0],  // Today's date
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]  // 1 year from now
    }
  };

  // Add additional properties if provided
  if (duration) {
    tourData["duration"] = duration;
  }

  if (startLocation) {
    tourData["touristType"] = {
      "@type": "TouristTrip",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristAttraction",
            "name": startLocation
          }
        },
        endLocation ? {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristAttraction",
            "name": endLocation
          }
        } : null].filter(Boolean)
      }
    };
  }

  if (tourOperator) {
    tourData["provider"] = {
      "@type": "Organization",
      "name": tourOperator,
      "url": "https://seayou.pt"
    };
  }

  return <StructuredData data={tourData} />;
};
