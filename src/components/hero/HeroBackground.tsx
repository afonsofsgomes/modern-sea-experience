
interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  // Use the .webp version if available
  const webpUrl = imageUrl.replace(/\.(jpeg|jpg|png)$/, '.webp');
  
  return (
    <div className="absolute inset-0 z-0">
      <picture>
        <source srcSet={webpUrl} type="image/webp" />
        <img 
          src={imageUrl} 
          alt="Background" 
          className="w-full h-full object-cover object-bottom opacity-60" 
          fetchPriority="high"
          decoding="async"
          loading="eager"
          width="1920"
          height="1080"
          sizes="100vw"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
