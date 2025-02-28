
import { useEffect } from "react";

interface BokunWidgetProps {
  productListId?: string;
  className?: string;
}

export const BokunWidget = ({ productListId = "81631", className = "" }: BokunWidgetProps) => {
  useEffect(() => {
    // Create script element for Bokun Widget Loader
    const script = document.createElement("script");
    script.src = "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d5b4e7f5-19d4-4d2a-96db-4dba0a3ce3b4";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div 
        className="bokunWidget w-full" 
        data-src={`https://widgets.bokun.io/online-sales/d5b4e7f5-19d4-4d2a-96db-4dba0a3ce3b4/product-list/${productListId}`}
      ></div>
      <noscript>Please enable javascript in your browser to book</noscript>
    </div>
  );
};
