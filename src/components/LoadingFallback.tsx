
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LoadingFallbackProps {
  fullScreen?: boolean;
  message?: string;
  minimal?: boolean;
}

export const LoadingFallback = ({ 
  fullScreen = true,
  message = "Loading...",
  minimal = false
}: LoadingFallbackProps) => {
  // For minimal mode, just return a spinner without the full screen effect
  if (minimal) {
    return (
      <div className="flex items-center justify-center py-10">
        <LoadingSpinner size="md" color="blue" />
      </div>
    );
  }
  
  const containerClasses = fullScreen 
    ? "min-h-screen flex items-center justify-center bg-[#253D7F]" 
    : "min-h-[400px] flex items-center justify-center bg-[#253D7F]";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <img 
          src="https://extranet.seayou.pt/logos/logowhite.png" 
          alt="SeaYou Madeira Logo" 
          className="max-w-[180px] mb-5"
        />
        <div className="spinner">
          <LoadingSpinner size="lg" color="white" />
        </div>
        <div className="loading-text text-white text-opacity-90 mt-4">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;
