
interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = imageUrl.includes('.');
  const imageType = hasExtension ? imageUrl.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imageUrl.substring(0, imageUrl.lastIndexOf('.')) + '.webp' 
      : null;

  return (
    <div className="absolute inset-0 z-0">
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img 
          src={imageUrl} 
          alt="Background" 
          className="w-full h-full object-cover object-bottom opacity-60" 
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
