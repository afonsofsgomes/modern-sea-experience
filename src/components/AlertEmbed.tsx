
import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    // Set a new timestamp every time the component mounts
    setTimestamp(Date.now());
    
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
        
        // Handle height updates from the iframe
        if (event.data.type === "safesailing-widget-height" && typeof event.data.height === "number") {
          console.log("Setting iframe height to:", event.data.height);
          setIframeHeight(event.data.height);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    
    // Refresh the iframe every 5 minutes to ensure content is up-to-date
    const refreshInterval = setInterval(() => {
      setTimestamp(Date.now());
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
      window.removeEventListener("message", handleMessage);
      clearTimeout(loadTimeout);
      clearInterval(refreshInterval);
    };
  }, [isLoading]);

  return (
    <Card className="w-full overflow-hidden bg-white border border-blue-100 shadow-sm rounded-md">
      {isLoading ? (
        <div className="flex items-center justify-center p-6 space-x-2">
          <Loader className="h-5 w-5 text-primary animate-spin" />
          <p className="text-sm text-primary">Loading alerts...</p>
        </div>
      ) : (
        <div 
          className="w-full overflow-hidden" 
          style={{ 
            height: `${iframeHeight}px`,
            maxHeight: `${iframeHeight}px`,
            display: 'block',
            lineHeight: 0
          }}
        >
          <iframe 
            ref={iframeRef}
            src={`https://alerts.seayou.pt/embed?t=${timestamp}`} 
            style={{ 
              width: "100%", 
              height: "100%",
              border: "none",
              margin: 0,
              padding: 0,
              display: 'block',
              overflow: "hidden"
            }}
            scrolling="no"
            title="SeaYou Alerts"
            className="w-full"
          />
        </div>
      )}
    </Card>
  );
};
