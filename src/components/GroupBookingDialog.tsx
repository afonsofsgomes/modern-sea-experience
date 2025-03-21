
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import TallyScript from "./TallyScript";
import { Button, ButtonProps } from "./ui/button";
import { ReactNode, useState } from "react";

interface GroupBookingDialogProps {
  children: ReactNode;
  buttonProps?: ButtonProps;
}

export const GroupBookingDialog = ({ 
  children, 
  buttonProps 
}: GroupBookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button {...buttonProps}>{children}</Button>
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
