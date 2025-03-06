
import React from 'react';
import { StructuredData } from './StructuredData';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CheckoutPage' | 'CollectionPage' | 'ItemPage' | 'ProfilePage' | 'SearchResultsPage';
  lastUpdated?: string;
  breadcrumbs?: {
    name: string;
    url: string;
  }[];
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  title,
  description,
  url,
  image,
  type = 'WebPage',
  lastUpdated = new Date().toISOString(),
  breadcrumbs = []
}) => {
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  
  // Build breadcrumb items
  const breadcrumbItems = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));
  
  // Add home page as first item if not already present
  if (breadcrumbs.length === 0 || breadcrumbs[0].url !== "https://seayou.pt/") {
    breadcrumbItems.unshift({
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://seayou.pt/"
    });
  }
  
  const webPageData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": currentUrl,
    "dateModified": lastUpdated,
    "isPartOf": {
      "@type": "WebSite",
      "name": "SeaYou Madeira",
      "url": "https://seayou.pt/"
    }
  };
  
  // Add image if provided
  if (image) {
    webPageData["image"] = image;
  }
  
  // Add breadcrumbs if available
  if (breadcrumbItems.length > 0) {
    webPageData["breadcrumb"] = {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  }

  return <StructuredData data={webPageData} />;
};
