
import { MobileBookingSection } from "@/components/porto-santo/MobileBookingSection";

export const MobileBookingSections = () => {
  return (
    <div className="space-y-8">
      <MobileBookingSection
        id="basic-booking"
        title="Basic Experience - Book Now"
        color="blue"
        productId="982788"
        bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
      />
      
      <MobileBookingSection
        id="half-day-booking"
        title="Half-Day Tour - Book Now"
        color="green"
        productId="985324"
        bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
      />
    </div>
  );
};
