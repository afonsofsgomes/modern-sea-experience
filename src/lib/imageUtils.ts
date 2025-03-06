
/**
 * Checks if an image URL is valid by trying to load it
 * @param url - The image URL to validate
 * @returns Promise that resolves to a boolean indicating if the image is valid
 */
export const isImageValid = (url: string): Promise<boolean> => {
  if (!url || url.trim() === '') {
    return Promise.resolve(false);
  }
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Converts image URLs to HTTPS if they're using HTTP
 * @param url - The image URL to convert
 * @returns The HTTPS URL
 */
export const ensureHttps = (url: string): string => {
  if (!url || url.trim() === '') {
    return url;
  }
  
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
};

/**
 * Applies responsive image sizing parameters to URLs for certain image services
 * @param url - The original image URL
 * @param width - Desired width
 * @returns Modified URL with sizing parameters
 */
export const getResponsiveImageUrl = (url: string, width = 800): string => {
  if (!url || url.trim() === '') {
    return url;
  }
  
  try {
    const urlObj = new URL(url);
    
    // Unsplash specific optimization
    if (urlObj.hostname.includes('unsplash.com')) {
      // Add quality and width parameters if not already present
      if (!urlObj.searchParams.has('q')) {
        urlObj.searchParams.set('q', '80');
      }
      if (!urlObj.searchParams.has('w')) {
        urlObj.searchParams.set('w', width.toString());
      }
      if (!urlObj.searchParams.has('auto')) {
        urlObj.searchParams.set('auto', 'format');
      }
      return urlObj.toString();
    }
    
    return url;
  } catch (e) {
    // If URL parsing fails, return the original URL
    return url;
  }
};
