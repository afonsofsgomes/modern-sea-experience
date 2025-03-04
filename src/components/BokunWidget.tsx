
import { useEffect } from "react";

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
  useEffect(() => {
    // Create script element for Bokun Widget Loader
    const script = document.createElement("script");
    script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${bookingChannelUUID}`;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
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
