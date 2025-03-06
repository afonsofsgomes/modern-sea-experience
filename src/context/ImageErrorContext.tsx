
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface ImageErrorContextType {
  reportError: (src: string, component: string) => void;
  clearErrors: () => void;
  errors: Record<string, { component: string; count: number }>;
}

const ImageErrorContext = createContext<ImageErrorContextType | undefined>(undefined);

export const useImageError = () => {
  const context = useContext(ImageErrorContext);
  if (!context) {
    throw new Error('useImageError must be used within an ImageErrorProvider');
  }
  return context;
};

export const ImageErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errors, setErrors] = useState<Record<string, { component: string; count: number }>>({});
  const [hasShownToast, setHasShownToast] = useState(false);

  const reportError = (src: string, component: string) => {
    setErrors(prev => {
      const current = prev[src];
      return {
        ...prev,
        [src]: {
          component,
          count: current ? current.count + 1 : 1
        }
      };
    });
  };

  const clearErrors = () => {
    setErrors({});
    setHasShownToast(false);
  };

  // Show a toast notification if there are image errors
  useEffect(() => {
    const errorCount = Object.keys(errors).length;
    if (errorCount > 0 && !hasShownToast) {
      toast.error(
        `${errorCount} image${errorCount > 1 ? 's' : ''} failed to load`, 
        {
          description: 'Fallback images are being used instead',
          duration: 5000,
        }
      );
      setHasShownToast(true);
      
      // Log the errors for debugging
      console.error('Image loading errors:', errors);
    }
  }, [errors, hasShownToast]);

  return (
    <ImageErrorContext.Provider value={{ reportError, clearErrors, errors }}>
      {children}
    </ImageErrorContext.Provider>
  );
};
