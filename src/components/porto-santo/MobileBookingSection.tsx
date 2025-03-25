
import { BokunWidget } from "@/components/BokunWidget";

interface MobileBookingSectionProps {
  id: string;
  title: string;
  color: string;
  productId: string;
  bookingChannelUUID: string;
}

export const MobileBookingSection = ({
  id,
  title,
  color,
  productId,
  bookingChannelUUID
}: MobileBookingSectionProps) => {
  return (
    <div id={id} className="scroll-mt-4">
      <h3 className={`text-lg font-semibold mb-3 text-${color}-800`}>{title}</h3>
      <BokunWidget 
        isCalendarWidget={true}
        productId={productId}
        bookingChannelUUID={bookingChannelUUID}
        className="min-h-[350px]" 
      />
    </div>
  );
};
