
import { BookingHeader, BookingFooter } from "@/components/porto-santo";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  MobileBookingCards, 
  DesktopBookingCards, 
  MobileBookingSections 
} from "@/components/porto-santo/booking";

export const PortoSantoBooking = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="booking" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <BookingHeader />
        
        {/* Experience Cards - Compact mobile view or Desktop view */}
        {isMobile ? <MobileBookingCards /> : <DesktopBookingCards />}
        
        {/* Booking Widgets - For mobile view these are linked from the card buttons */}
        {isMobile && <MobileBookingSections />}
        
        <BookingFooter />
      </div>
    </section>
  );
};
