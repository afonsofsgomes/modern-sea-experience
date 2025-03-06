
import React from 'react';
import { StructuredData } from './StructuredData';

interface BlogSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  url?: string;
}

export const BlogSchema: React.FC<BlogSchemaProps> = ({
  title,
  description,
  datePublished,
  dateModified = datePublished,
  image,
  authorName = "SeaYou Madeira",
  authorUrl = "https://seayou.pt",
  publisherName = "SeaYou Madeira",
  publisherLogo = "https://seayou.pt/logo.png",
  url
}) => {
  const blogData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || typeof window !== "undefined" ? window.location.href : ""
    }
  };

  return <StructuredData data={blogData} />;
};
