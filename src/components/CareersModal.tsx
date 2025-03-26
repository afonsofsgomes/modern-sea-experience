
import React, { useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import TallyScript from "./TallyScript";
import { Briefcase } from "lucide-react";

interface CareersModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CareersModal = ({ isOpen, onOpenChange }: CareersModalProps) => {
  const [isRendered, setIsRendered] = useState(false);

  // Load Tally widgets when dialog opens
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      if (typeof window !== 'undefined' && (window as any).Tally) {
        setTimeout(() => {
          try {
            (window as any).Tally.loadEmbeds();
          } catch (e) {
            // Silent error handling in production
            if (process.env.NODE_ENV !== 'production') {
              console.error('Error loading Tally embeds:', e);
            }
          }
        }, 300);
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[95vh] p-0 sm:rounded-xl overflow-hidden">
        <div className="w-full h-full flex flex-col bg-white">
          <div className="bg-[#4A6FA5] p-4 text-white flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Careers at SeaYou</h2>
          </div>
          <div className="flex-1 w-full overflow-hidden">
            {isRendered && (
              <iframe 
                data-tally-src="https://tally.so/r/w4Ng4k" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Job Application"
                className="border-none w-full h-full"
                style={{ minHeight: '90vh' }}
              />
            )}
          </div>
        </div>
      </DialogContent>
      {/* Ensure Tally script is loaded */}
      <TallyScript />
    </Dialog>
  );
};

export default CareersModal;
