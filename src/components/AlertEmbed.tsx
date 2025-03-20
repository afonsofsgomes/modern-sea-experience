
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, CloudSun } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  
  useEffect(() => {
    // Function to handle iframe load
    const handleIframeLoad = () => {
      setIsLoading(false);
      
      // Try to determine if the iframe is empty
      setTimeout(() => {
        try {
          // Try to check if we can access the content
          const iframe = iframeRef.current;
          if (!iframe) return;
          
          // Check if the iframe has a small height
          const height = iframe.clientHeight || iframe.offsetHeight;
          if (height <= 20) {
            console.log("Empty iframe detected: height is tiny", height);
            setIsEmpty(true);
          }
        } catch (e) {
          console.error("Error checking iframe:", e);
        }
      }, 200); // Short delay to ensure accurate height
    };
    
    // Add load event listener to iframe
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }
    
    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the alerts domain
      if (event.origin !== "https://alerts.seayou.pt") return;
      
      console.log("Received message from alerts iframe:", event.data);
      
      if (event.data && typeof event.data === "object") {
        setIsLoading(false);
        
        // Check for height message - if height is very small, content is likely empty
        if (event.data.type === "safesailing-widget-height") {
          const height = event.data.height;
          
          // If height is very small, consider it empty
          if (height <= 20) {
            console.log("Empty iframe detected from message: height is", height);
            setIsEmpty(true);
          } else {
            setIsEmpty(false);
          }
        }
        
        // If we explicitly get a hasContent flag, use it
        if (event.data.hasContent === false) {
          setIsEmpty(true);
        } else if (event.data.hasContent === true) {
          setIsEmpty(false);
        }
      }
    };
    
    // Set a timeout for initial loading
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.log("Loading timeout reached");
        setIsLoading(false);
      }
    }, 3000);

    window.addEventListener("message", handleMessage);
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
      window.removeEventListener("message", handleMessage);
      clearTimeout(loadingTimeout);
    };
  }, [isLoading]);

  return (
    <Card className="w-full overflow-hidden bg-white border border-amber-100 shadow-sm rounded-md">
      {isLoading ? (
        <div className="flex items-center justify-center p-4 space-x-2 animate-pulse">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <p className="text-sm text-amber-700">Loading alerts...</p>
        </div>
      ) : isEmpty ? (
        <div className="flex items-center justify-center p-6 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-6 w-6" />
              <CloudSun className="h-6 w-6" />
            </div>
            <h4 className="font-medium text-green-700">All Services Operating Normally</h4>
            <p className="text-sm text-gray-600 max-w-md">
              There are currently no service alerts. All routes and services are running as scheduled.
            </p>
          </div>
        </div>
      ) : (
        <iframe 
          ref={iframeRef}
          src="https://alerts.seayou.pt/embed" 
          style={{ 
            width: "100%", 
            height: "auto", 
            minHeight: "100px",
            border: "none",
            overflow: "hidden"
          }}
          scrolling="no"
          title="SeaYou Alerts"
          className="w-full transition-all duration-300"
        />
      )}
    </Card>
  );
};
