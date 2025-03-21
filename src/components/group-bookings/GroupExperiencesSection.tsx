
import { GroupExperience } from "./GroupExperience";
import { groupPackages } from "./groupBookingsData";

export const GroupExperiencesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            Group Packages
          </span>
          <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
            Popular Group Experiences
          </h2>
          <p className="text-muted-foreground">
            Choose from our most popular group packages or contact us for a custom experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groupPackages.map((pkg, index) => (
            <GroupExperience 
              key={index}
              index={index}
              title={pkg.title}
              description={pkg.description}
              image={pkg.image}
              badge={pkg.badge}
              location={pkg.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupExperiencesSection;
