import { Check, Shield, Wind } from "lucide-react";

export const SeaBusFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1: Flexible Reschedules */}
          <div className="flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                <Clock className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-900">Flexible Reschedules</h3>
            <p className="text-gray-600">Reschedule in advance without hassle.</p>
          </div>
          
          {/* Feature 2: Full Refund Option with Checkmark */}
          <div className="flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                <Check className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-900">Full Refund Option</h3>
            <p className="text-gray-600">Full refund available with cancellation insurance.</p>
          </div>
          
          {/* Feature 3: Weather Safety Assurance with Wind icon */}
          <div className="flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                <Wind className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-900">Weather Safety Assurance</h3>
            <p className="text-gray-600">Rescheduling or refund for unfavorable weather conditions.</p>
          </div>
          
          {/* Feature 4: Secure Booking with Shield icon */}
          <div className="flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-blue-900">Secure Booking</h3>
            <p className="text-gray-600">Full encryption ensuring privacy and security.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
