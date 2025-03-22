
interface CarouselIndicatorsProps {
  totalItems: number;
  currentIndex: number;
}

export const CarouselIndicators = ({ totalItems, currentIndex }: CarouselIndicatorsProps) => {
  return (
    <div className="flex justify-center mt-4 gap-1">
      {Array.from({ length: totalItems }).map((_, index) => (
        <div 
          key={index} 
          className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/40'} transition-colors`}
        />
      ))}
    </div>
  );
};
