
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);
  const [hasContent, setHasContent] = useState(false);
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
      setIsLoading(false);
    }, 5000);

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timeoutId);
    };
  }, []);

  // Don't render anything if there are no alerts and not loading
  if (!isLoading && !hasContent && height === 0) return null;

  return (
    <Card className="w-full overflow-hidden bg-white border border-amber-100 shadow-sm rounded-md">
      {isLoading ? (
        <div className="flex items-center justify-center p-4 space-x-2 animate-pulse">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <p className="text-sm text-amber-700">Loading alerts...</p>
        </div>
      ) : (
        <iframe 
          ref={iframeRef}
          src="https://alerts.seayou.pt/embed" 
          style={{ 
            width: "100%", 
            height: height ? `${height}px` : "0", 
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
