
// Map of destination names to fallback image URLs
export const destinationFallbacks: Record<string, string> = {
  "Funchal": "https://images.unsplash.com/photo-1592089042603-930e791a6d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Caniçal": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Calheta": "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Porto Santo": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Desertas": "https://images.unsplash.com/photo-1518125853935-a7c1d54032a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

// Default fallbacks for categories of images
export const defaultFallbacks = {
  boat: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  island: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  landscape: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  boat1: "https://images.unsplash.com/photo-1532587311244-fa8c813675fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  pxo: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  empty: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
};

// Function to get a fallback image URL based on the original image URL
export const getFallbackImage = (originalUrl: string): string => {
  // Handle empty URLs
  if (!originalUrl || originalUrl.trim() === '') {
    return defaultFallbacks.empty;
  }
  
  // Try to match destinations first
  for (const [destination, fallbackUrl] of Object.entries(destinationFallbacks)) {
    if (originalUrl.toLowerCase().includes(destination.toLowerCase())) {
      return fallbackUrl;
    }
  }

  // Try to match image categories
  for (const [category, fallbackUrl] of Object.entries(defaultFallbacks)) {
    if (originalUrl.toLowerCase().includes(category.toLowerCase())) {
      return fallbackUrl;
    }
  }

  // Default fallback
  return "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
};
