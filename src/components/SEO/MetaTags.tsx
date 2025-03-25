
import { Helmet } from "react-helmet";

// Default OG image URL
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/og.png";

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
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  type = "website"
}: MetaTagsProps) => {
  // Use the current URL as canonical if not provided
  const canonical = canonicalUrl || typeof window !== "undefined" ? window.location.href : "";
  
  // Ensure the OG image URL is absolute
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://seayou.pt${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags - Enhanced for Facebook compatibility */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
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
    </Helmet>
  );
};
