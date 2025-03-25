
import { useEffect, useState, useRef } from "react";

interface BokunWidgetProps {
  productId?: string;
  productListId?: string;
  isProductPage?: boolean;
  isCalendarWidget?: boolean;
  className?: string;
  bookingChannelUUID?: string;
}

export const BokunWidget = ({ 
  productId, 
  productListId = "83066", // Default product list ID
  isProductPage = false,
  isCalendarWidget = false,
  className = "",
  bookingChannelUUID = "51f490fc-f867-4e8b-a0d8-cf7730297dde" // Default UUID
}: BokunWidgetProps) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Function to load Bokun script
    const loadScript = () => {
      // Cleanup previous script if it exists
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
      
      // Check if script already exists in the document
      const existingScript = document.querySelector(`script[src*="BokunWidgetsLoader.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create new script
      const script = document.createElement("script");
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${bookingChannelUUID}`;
      script.async = true;
      script.type = "text/javascript";
      script.onload = () => setScriptLoaded(true);
      
      document.body.appendChild(script);
      scriptRef.current = script;
    };
    
    // Load the script
    loadScript();
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, [bookingChannelUUID]);
  
  // Generate the correct data-src URL based on widget type
  let dataSrc = "";
  
  if (isCalendarWidget && productId) {
    dataSrc = `https://widgets.bokun.io/online-sales/${bookingChannelUUID}/experience-calendar/${productId}`;
  } else if (isProductPage && productId) {
    dataSrc = `https://widgets.bokun.io/online-sales/${bookingChannelUUID}/experience/${productId}`;
  } else {
    dataSrc = `https://widgets.bokun.io/online-sales/${bookingChannelUUID}/product-list/${productListId}`;
  }
  
  // Manually initialize widget when script is loaded
  useEffect(() => {
    if (scriptLoaded && containerRef.current) {
      // Use setTimeout to ensure the DOM is fully rendered
      const timer = setTimeout(() => {
        if (window && (window as any).BokunWidgetsLoader) {
          try {
            (window as any).BokunWidgetsLoader.loadWidgets();
          } catch (e) {
            console.error("Error initializing Bokun widget:", e);
          }
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [scriptLoaded]);

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      <div 
        className="bokunWidget w-full" 
        data-src={dataSrc}
      ></div>
      <noscript>Please enable javascript in your browser to book</noscript>
    </div>
  );
};
