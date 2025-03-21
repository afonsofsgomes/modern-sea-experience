
import { GroupFeature } from "./GroupFeature";
import GroupBookingDialog from "@/components/GroupBookingDialog";
import { groupFeatures } from "./groupBookingsData";

export const GroupIntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Group Experiences
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Perfect for Groups & Events
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Whether you're planning a school trip, family reunion, corporate team building, or a social club outing, our group booking service offers convenience, competitive rates, and personalized attention.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Our dedicated team will work with you to customize your maritime experience, ensuring a memorable event for all participants.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {groupFeatures.map((feature, index) => (
                <GroupFeature 
                  key={index}
                  index={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <GroupBookingDialog size="lg">Request Group Quote</GroupBookingDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://extranet.seayou.pt/photos/private1.jpg" 
                alt="Group trip on boat" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Group Discounts</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy special rates for groups of 10 or more on all our maritime experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupIntroSection;
