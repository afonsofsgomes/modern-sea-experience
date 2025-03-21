
import React from 'react';
import { StructuredData } from './StructuredData';

export const LocalBusinessSchema: React.FC = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "SeaYou Maritime Tourism",
    "description": "Seayou Madeira specializes in scenic seabus connections, exclusive private cruises, and unforgettable maritime tours across Madeira's coastline.",
    "url": "https://seayou.pt",
    "logo": "https://seayou.pt/logo.png",
    "image": "https://extranet.seayou.pt/photos/boat1.jpg",
    "telephone": "+351913514961",
    "email": "info@seayou.pt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Marina do Funchal",
      "addressLocality": "Funchal",
      "addressRegion": "Madeira",
      "postalCode": "9000-000",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.6431",
      "longitude": "-16.9111"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "€€",
    "sameAs": [
      "https://www.facebook.com/seayoumadeira",
      "https://www.instagram.com/seayoumadeira",
      "https://twitter.com/seayoumadeira",
      "https://www.tiktok.com/@seayou.pt",
      "https://www.youtube.com/@seayou.madeira"
    ]
  };

  return <StructuredData data={businessData} />;
};
