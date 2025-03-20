
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, CloudSun } from "lucide-react";

export const AlertEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  
  useEffect(() => {
    // Function to check if iframe is empty (white page)
    const checkIframeContent = () => {
      try {
        const iframe = iframeRef.current;
        if (!iframe) return;
        
        // Wait for iframe to load
        iframe.onload = () => {
          setIsLoading(false);
          
          try {
            // Try to access iframe content
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            
            // If we can't access it due to same-origin policy, we'll rely on messages
            if (!iframeDoc) return;
            
            // Check if the body is empty or only has white content
            const bodyContent = iframeDoc.body.innerHTML.trim();
            setIsEmpty(!bodyContent || bodyContent === "");
          } catch (e) {
            console.log("Cannot access iframe content directly due to same-origin policy");
          }
        };
      } catch (e) {
        console.error("Error checking iframe content:", e);
      }
    };

    checkIframeContent();

    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the alerts domain
      if (event.origin !== "https://alerts.seayou.pt") return;
      
      console.log("Received message from alerts iframe:", event.data);
      
      if (event.data && typeof event.data === "object") {
        // If we get any message with content, the iframe is not empty
        setIsLoading(false);
        setIsEmpty(event.data.hasContent === false);
      }
    };

    // Set a timeout to handle cases where the iframe doesn't respond
    const timeoutId = setTimeout(() => {
      console.log("Alert iframe response timeout");
      setIsLoading(false);
      
      // If nothing loaded after timeout, check if iframe appears empty
      if (iframeRef.current) {
        try {
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          if (!iframeDoc || !iframeDoc.body.innerHTML.trim()) {
            setIsEmpty(true);
          }
        } catch (e) {
          // If we can't access iframe content, check if the iframe has size
          const iframeHeight = iframeRef.current.offsetHeight;
          setIsEmpty(iframeHeight <= 10); // Consider empty if height is very small
        }
      }
    }, 5000);

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timeoutId);
    };
  }, []);

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
          onLoad={() => console.log("Alert iframe loaded")}
        />
      )}
    </Card>
  );
};
