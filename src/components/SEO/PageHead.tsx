
import React from 'react';
import { Helmet } from 'react-helmet';

interface PageHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: "website" | "article";
  locale?: string;
  children?: React.ReactNode;
}

// Original OG image URL - always use this as default
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/og.png";

export const PageHead: React.FC<PageHeadProps> = ({
  title,
  description,
  keywords = "boat tours madeira, seayou, porto santo tours, desertas tours, private cruises, luxury boat tours, 1 day experience",
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  type = "website",
  locale = "en_US",
  children
}) => {
  const siteName = "SeaYou Madeira - Boat Tours in Madeira";
  // Always use the domain canonical URL as default
  const canonical = canonicalUrl || "https://seayou.pt" + (typeof window !== "undefined" ? window.location.pathname : "");
  
  // Ensure the OG image URL is absolute
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://seayou.pt${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb#" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL - always set to seayou.pt domain */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags - Enhanced for Facebook compatibility */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:url" content={absoluteOgImage} />
      <meta property="og:image:secure_url" content={absoluteOgImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="420" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`SeaYou Madeira - ${title}`} />
      
      {/* Facebook specific tags */}
      <meta property="fb:app_id" content="1324423168329224" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      
      {/* Allow child elements - useful for page-specific structured data */}
      {children}
    </Helmet>
  );
};

// Also export as default to ensure compatibility
export default PageHead;
