
import { useState, useRef, useCallback, useEffect } from "react";

interface UseCarouselControllerProps {
  itemsCount: number;
}

export const useCarouselController = ({ itemsCount }: UseCarouselControllerProps) => {
  const apiRef = useRef<any>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const interactionTimerRef = useRef<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([0, 1, 2, 3, 4]);
  
  // Update visible items when currentIndex changes
  useEffect(() => {
    const newVisibleItems = [];
    const length = itemsCount;
    
    // Include current item and more surrounding items for better performance
    for (let i = -2; i <= 4; i++) {
      // Handle wrapping around for loop effect
      const index = (currentIndex + i + length) % length;
      if (!newVisibleItems.includes(index)) {
        newVisibleItems.push(index);
      }
    }
    
    setVisibleItems(newVisibleItems);
  }, [currentIndex, itemsCount]);
  
  // Auto-scroll functionality with performance optimizations
  useEffect(() => {
    // If auto-scroll is paused, don't set up the interval
    if (autoScrollPaused) return;
    
    const interval = setInterval(() => {
      if (apiRef.current) {
        try {
          apiRef.current.scrollNext({ animation: true });
          setCurrentIndex((prev) => (prev + 1) % itemsCount);
        } catch (error) {
          console.error("Error during auto-scroll:", error);
        }
      }
    }, 6000); // Auto-scroll every 6 seconds for a slow pace
    
    // Clean up interval on unmount or when paused state changes
    return () => clearInterval(interval);
  }, [autoScrollPaused, itemsCount]);
  
  // Function to pause auto-scrolling temporarily when user interacts
  const handleUserInteraction = useCallback(() => {
    setAutoScrollPaused(true);
    
    // Clear any existing timer
    if (interactionTimerRef.current) {
      window.clearTimeout(interactionTimerRef.current);
    }
    
    // Resume auto-scrolling after 15 seconds of inactivity
    interactionTimerRef.current = window.setTimeout(() => {
      setAutoScrollPaused(false);
    }, 15000);
  }, []);
  
  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) {
        window.clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  // Handle carousel slide change
  const handleSlideChange = useCallback(() => {
    if (apiRef.current && typeof apiRef.current.selectedScrollSnap === 'function') {
      try {
        const index = apiRef.current.selectedScrollSnap();
        setCurrentIndex(index);
      } catch (error) {
        console.error("Error getting selected scroll snap:", error);
      }
    }
    handleUserInteraction();
  }, [handleUserInteraction]);

  // Force update on window resize to fix any rendering issues
  useEffect(() => {
    const handleResize = () => {
      if (apiRef.current) {
        try {
          apiRef.current.reInit();
        } catch (error) {
          console.error("Error reinitializing carousel:", error);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    apiRef,
    currentIndex,
    visibleItems,
    handleUserInteraction,
    handleSlideChange
  };
};
