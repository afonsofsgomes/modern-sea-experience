
import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface WhatsAppWidgetProps {
  whatsappLink: string;
}

export const WhatsAppWidget = ({ whatsappLink }: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button 
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-lg overflow-hidden">
        <div className="bg-green-500 p-4 flex justify-between items-center">
          <h3 className="text-white font-medium">Chat with us on WhatsApp</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-700">Connect with our team directly through WhatsApp for quick assistance.</p>
          <button
            onClick={handleOpenChat}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            Start Chat
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
