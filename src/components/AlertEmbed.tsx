
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, CloudSun, Loader } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // Function to handle iframe load
    const handleIframeLoad = () => {
      console.log("Iframe loaded");
      setIsLoading(false);
    };
    
    // Set a timeout for initial loading
    const loadTimeout = setTimeout(() => {
      if (isLoading) {
        console.log("Loading timeout reached");
        setIsLoading(false);
      }
    }, 3000);
    
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
        // If loading, stop loading
        if (isLoading) {
          setIsLoading(false);
        }
        
        // If we explicitly get a hasContent flag, use it directly
        if (event.data.hasContent === false) {
          setIsEmpty(true);
          return;
        } else if (event.data.hasContent === true) {
          setIsEmpty(false);
          return;
        }
        
        // If we get a height message, only consider empty if height is extremely small
        // This is the critical fix - we were being too aggressive in marking as empty
        if (event.data.type === "safesailing-widget-height") {
          const height = event.data.height;
          
          // More conservative approach - only mark as empty if height is incredibly small
          // Most alert content will have a height significantly larger than 5
          if (height < 5) {
            console.log("Empty iframe detected: height is", height);
            setIsEmpty(true);
          } else {
            console.log("Content detected in iframe: height is", height);
            setIsEmpty(false);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
      window.removeEventListener("message", handleMessage);
      clearTimeout(loadTimeout);
    };
  }, [isLoading]);

  return (
    <Card className="w-full overflow-hidden bg-white border border-amber-100 shadow-sm rounded-md">
      {isLoading ? (
        <div className="flex items-center justify-center p-4 space-x-2">
          <Loader className="h-5 w-5 text-amber-500 animate-spin" />
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
            minHeight: "200px", // Increased minimum height further for better visibility
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
