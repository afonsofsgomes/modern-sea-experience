
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import GroupBookingDialog from "@/components/GroupBookingDialog";

export const DesertasGroupBooking = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-10 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-display font-medium mb-4">
            Ready to Explore the Desertas Islands?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your adventure now or contact us for group bookings and special arrangements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={scrollToBooking}
            >
              Book Individual Tickets
            </Button>
            <GroupBookingDialog 
              buttonProps={{
                variant: "outline",
                className: "border-green-600 text-green-700 hover:bg-green-50"
              }} 
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" /> Group Booking
            </GroupBookingDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
