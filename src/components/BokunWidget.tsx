
import { useEffect } from "react";

interface BokunWidgetProps {
  productId?: string;
  productListId?: string;
  isProductPage?: boolean;
  className?: string;
}

export const BokunWidget = ({ 
  productId, 
  productListId = "81631", 
  isProductPage = false,
  className = "" 
}: BokunWidgetProps) => {
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

  // Generate the correct data-src URL based on whether it's a product page or product list
  const dataSrc = isProductPage && productId
    ? `https://widgets.bokun.io/online-sales/d5b4e7f5-19d4-4d2a-96db-4dba0a3ce3b4/experience/${productId}`
    : `https://widgets.bokun.io/online-sales/d5b4e7f5-19d4-4d2a-96db-4dba0a3ce3b4/product-list/${productListId}`;

  return (
    <div className={`w-full ${className}`}>
      <div 
        className="bokunWidget w-full" 
        data-src={dataSrc}
      ></div>
      <noscript>Please enable javascript in your browser to book</noscript>
    </div>
  );
};
