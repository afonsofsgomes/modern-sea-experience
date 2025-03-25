
import React, { ReactNode, useState, useEffect, useRef } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import TallyScript from "./TallyScript";
import { Button, ButtonProps } from "./ui/button";
import { toast } from "@/hooks/use-toast";

interface GroupBookingDialogProps {
  children: ReactNode;
  buttonProps?: ButtonProps;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const GroupBookingDialog = ({ 
  children, 
  buttonProps,
  size,
  className
}: GroupBookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Preload Tally iframe source when component mounts
  useEffect(() => {
    // Create a hidden iframe to preload
    const preloadIframe = document.createElement('iframe');
    preloadIframe.style.display = 'none';
    preloadIframe.src = 'https://tally.so/r/wAyZZe?transparentBackground=1';
    document.body.appendChild(preloadIframe);
    
    // Remove after preloading
    return () => {
      if (document.body.contains(preloadIframe)) {
        document.body.removeChild(preloadIframe);
      }
    };
  }, []);

  // When dialog opens, ensure the iframe is loaded
  useEffect(() => {
    if (isOpen) {
      if (iframeRef.current && !iframeRef.current.src && iframeRef.current.dataset.tallySrc) {
        // Set the src directly to avoid waiting for Tally script
        iframeRef.current.src = iframeRef.current.dataset.tallySrc;
      }
      
      // Also try to load via Tally object if available
      setTimeout(() => {
        try {
          console.log('Attempting to load Tally embeds');
          if (typeof (window as any).Tally !== 'undefined') {
            (window as any).Tally.loadEmbeds();
          }
        } catch (e) {
          console.error('Error loading Tally embeds:', e);
          toast({
            title: "Error loading form",
            description: "Please try again later",
            variant: "destructive",
          });
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button {...buttonProps} size={size} className={className}>{children}</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-[90vw] h-[80vh] p-0">
          <div className="w-full h-full">
            <iframe 
              ref={iframeRef}
              data-tally-src="https://tally.so/r/wAyZZe?transparentBackground=1" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Private Cruise Contact"
              className="border-none"
              src="https://tally.so/r/wAyZZe?transparentBackground=1"
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* Load Tally script when component is mounted */}
      <TallyScript />
    </>
  );
};

export default GroupBookingDialog;
