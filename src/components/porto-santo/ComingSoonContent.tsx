
import React from 'react';

interface ComingSoonContentProps {
  title?: string;
  color?: string;
}

export const ComingSoonContent: React.FC<ComingSoonContentProps> = ({ 
  title = "Coming Soon",
  color = "purple" 
}) => {
  return (
    <div className="flex justify-center items-center h-[300px] bg-purple-50 rounded-lg">
      <div className="text-center px-6">
        <h3 className={`text-xl font-semibold text-${color}-800 mb-2`}>{title}</h3>
        <p className={`text-sm text-${color}-600`}>
          We're preparing an unforgettable full-day experience for you. Stay tuned!
        </p>
      </div>
    </div>
  );
};
