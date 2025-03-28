
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
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/9374361538.png";

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
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" prefix="og: https://ogp.me/ns#" />
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:url" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="420" />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* PWA Meta Tags */}
      <meta name="theme-color" content="#253D7F" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="https://extranet.seayou.pt/logos/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="https://extranet.seayou.pt/logos/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://extranet.seayou.pt/logos/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://extranet.seayou.pt/logos/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="https://extranet.seayou.pt/logos/android-chrome-512x512.png" />
      
      {/* Apple PWA Splash Screens */}
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-1242x2208.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-device-pixel-ratio: 2)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-1668x2224.png" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-device-pixel-ratio: 2)" />
      <link rel="apple-touch-startup-image" href="https://extranet.seayou.pt/logos/splash-2048x2732.png" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-device-pixel-ratio: 2)" />
      
      {/* Allow child elements - useful for page-specific structured data */}
      {children}
    </Helmet>
  );
};

// Also export as default to ensure compatibility
export default PageHead;
