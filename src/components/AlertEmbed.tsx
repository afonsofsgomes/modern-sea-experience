
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the alerts domain
      if (event.origin !== "https://alerts.seayou.pt") return;
      
      // If the message contains a height, update our iframe height
      if (event.data && typeof event.data === "object") {
        if (event.data.height) {
          setHeight(event.data.height);
        }
        // If we receive a hasContent flag, update our state
        if (event.data.hasContent !== undefined) {
          setHasContent(event.data.hasContent);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Don't render anything if there are no alerts
  if (!hasContent && height === 0) return null;

  return (
    <Card className="w-full overflow-hidden bg-white border-none shadow-sm rounded-md mb-4">
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
        className="w-full"
      />
    </Card>
  );
};
