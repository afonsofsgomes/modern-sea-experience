
interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <picture>
        <source 
          srcSet={imageUrl.replace('.jpg', '.webp').replace('.jpeg', '.webp').replace('.png', '.webp')} 
          type="image/webp" 
        />
        <img 
          src={imageUrl} 
          alt="Background" 
          className="w-full h-full object-cover object-bottom opacity-60" 
          fetchPriority="high"
          decoding="async"
          width="1920" 
          height="1080"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
