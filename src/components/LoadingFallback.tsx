
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LoadingFallbackProps {
  fullScreen?: boolean;
  message?: string;
}

export const LoadingFallback = ({ 
  fullScreen = true,
  message = "Loading SeaYou experience..."
}: LoadingFallbackProps) => {
  const containerClasses = fullScreen 
    ? "min-h-screen flex items-center justify-center bg-white" 
    : "min-h-[400px] flex items-center justify-center bg-white";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <div className="bg-[#253D7F] p-4 rounded mb-5">
          <img 
            src="https://extranet.seayou.pt/logos/logowhite.png" 
            alt="SeaYou Madeira Logo" 
            className="max-w-[180px]"
          />
        </div>
        <div className="spinner">
          <LoadingSpinner size="lg" color="blue" />
        </div>
        <div className="loading-text text-[#253D7F] text-opacity-90 mt-4">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;
