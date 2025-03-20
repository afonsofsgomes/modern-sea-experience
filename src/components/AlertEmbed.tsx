
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, CloudSun, Loader } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [hasCheckedContent, setHasCheckedContent] = useState(false);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      if (isLoading) {
        console.log("Loading timeout reached");
        setIsLoading(false);
        checkContent();
      }
    }, 3000);

    // Function to check if iframe is empty
    const checkContent = () => {
      if (hasCheckedContent) return;
      
      try {
        const iframe = iframeRef.current;
        if (!iframe) return;
        
        // Default to not empty until proven otherwise
        setIsEmpty(false);
        setHasCheckedContent(true);
      } catch (e) {
        console.error("Error checking iframe:", e);
      }
    };

    // Function to handle iframe load
    const handleIframeLoad = () => {
      setIsLoading(false);
      checkContent();
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
        
        // If we get a height message
        if (event.data.type === "safesailing-widget-height") {
          const height = event.data.height;
          
          // If height is very small, consider it empty
          // This is a key check - only mark as empty if height is tiny
          if (height <= 15) {
            console.log("Empty iframe detected from message: height is", height);
            setIsEmpty(true);
          } else {
            // If height is significant, content exists
            console.log("Content detected in iframe: height is", height);
            setIsEmpty(false);
          }
          
          setHasCheckedContent(true);
        }
        
        // If we explicitly get a hasContent flag, use it
        if (event.data.hasContent === false) {
          setIsEmpty(true);
          setHasCheckedContent(true);
        } else if (event.data.hasContent === true) {
          setIsEmpty(false);
          setHasCheckedContent(true);
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
  }, [isLoading, hasCheckedContent]);

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
            minHeight: "150px", // Increased minimum height
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
