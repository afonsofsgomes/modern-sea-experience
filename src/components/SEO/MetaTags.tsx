
import { Helmet } from "react-helmet";

// Fallback image if the main OG image fails
const FALLBACK_OG_IMAGE = "https://extranet.seayou.pt/logos/logowhite.png";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: "website" | "article";
}

export const MetaTags = ({
  title,
  description,
  keywords = "boat tours madeira, seayou, porto santo tours, desertas tours, private cruises, luxury boat tours, 1 day experience",
  ogImage = FALLBACK_OG_IMAGE,
  canonicalUrl,
  type = "website"
}: MetaTagsProps) => {
  // Use the current URL as canonical if not provided
  const canonical = canonicalUrl || typeof window !== "undefined" ? window.location.href : "";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
