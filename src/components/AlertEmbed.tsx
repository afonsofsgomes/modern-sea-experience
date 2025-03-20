
import { useEffect, useRef, useState } from "react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the alerts domain
      if (event.origin !== "https://alerts.seayou.pt") return;
      
      // If the message contains a height, update our iframe height
      if (event.data && typeof event.data === "object" && event.data.height) {
        setHeight(event.data.height);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <iframe 
        ref={iframeRef}
        src="https://alerts.seayou.pt/embed" 
        style={{ 
          width: "100%", 
          height: height ? `${height}px` : "auto", 
          border: "none",
          overflow: "hidden"
        }}
        scrolling="no"
        title="SeaYou Alerts"
        className="w-full"
      />
    </div>
  );
};
