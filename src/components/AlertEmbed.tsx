
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, CloudSun } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(100); // Default height to ensure visibility
  const [hasContent, setHasContent] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the alerts domain
      if (event.origin !== "https://alerts.seayou.pt") return;
      
      // If the message contains a height, update our iframe height
      if (event.data && typeof event.data === "object") {
        if (event.data.height) {
          setHeight(event.data.height);
          setIsLoading(false);
        }
        // If we receive a hasContent flag, update our state
        if (event.data.hasContent !== undefined) {
          setHasContent(event.data.hasContent);
          if (!event.data.hasContent) {
            setIsLoading(false);
          }
        }
      }
    };

    // Set a timeout to handle cases where the iframe doesn't respond
    const timeoutId = setTimeout(() => {
      console.log("Alert iframe response timeout");
      setIsLoading(false);
    }, 5000);

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timeoutId);
    };
  }, []);

  // For debugging
  useEffect(() => {
    console.log("AlertEmbed state:", { height, hasContent, isLoading });
  }, [height, hasContent, isLoading]);

  // Always render the component initially to ensure the iframe has a chance to load
  return (
    <Card className="w-full overflow-hidden bg-white border border-amber-100 shadow-sm rounded-md">
      {isLoading ? (
        <div className="flex items-center justify-center p-4 space-x-2 animate-pulse">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <p className="text-sm text-amber-700">Loading alerts...</p>
        </div>
      ) : hasContent ? (
        <iframe 
          ref={iframeRef}
          src="https://alerts.seayou.pt/embed" 
          style={{ 
            width: "100%", 
            height: `${height}px`, 
            border: "none",
            overflow: "hidden"
          }}
          scrolling="no"
          title="SeaYou Alerts"
          className="w-full transition-all duration-300"
          onLoad={() => console.log("Alert iframe loaded")}
        />
      ) : (
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
      )}
    </Card>
  );
};
