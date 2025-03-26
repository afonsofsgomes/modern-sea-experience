
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'blue';
  text?: string;
}

export const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue',
  text
}: LoadingSpinnerProps) => {
  // Map sizes to classes
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4'
  };
  
  // Map colors to classes
  const colorClasses = {
    white: 'border-white border-t-transparent',
    blue: 'border-[#253D7F] border-t-transparent'
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}
        aria-hidden="true"
      />
      {text && (
        <p className={`mt-4 text-${color === 'white' ? 'white' : '[#253D7F]'} text-opacity-90 text-sm`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
