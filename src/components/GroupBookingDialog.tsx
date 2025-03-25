
import React, { ReactNode, useState, useEffect } from "react";
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

  // Load Tally widgets when dialog opens
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && (window as any).Tally) {
      setTimeout(() => {
        try {
          console.log('Attempting to load Tally embeds');
          (window as any).Tally.loadEmbeds();
          // Toast notification removed
        } catch (e) {
          console.error('Error loading Tally embeds:', e);
          toast({
            title: "Error loading form",
            description: "Please try again later",
            variant: "destructive",
          });
        }
      }, 300); // Short delay to ensure content is rendered
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
              data-tally-src="https://tally.so/r/wAyZZe?transparentBackground=1" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Private Cruise Contact"
              className="border-none"
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
