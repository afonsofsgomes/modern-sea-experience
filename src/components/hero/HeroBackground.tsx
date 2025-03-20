
interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <img 
        src={imageUrl} 
        alt="Background" 
        className="w-full h-full object-cover object-bottom opacity-60" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
