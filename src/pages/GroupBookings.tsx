
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, CalendarDays, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MetaTags } from "@/components/SEO";

// Define form schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  groupSize: z.string().min(1, { message: "Please enter your group size" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date" }),
  experienceType: z.string().min(1, { message: "Please select an experience type" }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const GroupBookings = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      groupSize: "",
      preferredDate: "",
      experienceType: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Submit to Supabase
      const { error } = await supabase.from("group_booking_inquiries").insert({
        contact_name: values.fullName,
        email: values.email,
        group_size: parseInt(values.groupSize),
        event_date: values.preferredDate,
        destination: values.experienceType,
        requirements: values.additionalInfo,
      });

      if (error) throw error;

      // Success notification
      toast({
        title: "Group Inquiry Submitted",
        description: "Thank you! We'll contact you shortly about your group booking.",
      });

      // Reset form and show success state
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting group inquiry:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title="Group Bookings | SeaYou Madeira"
        description="Special rates and personalized service for groups of all sizes. Book your group maritime experience in Madeira."
        keywords="group bookings, Madeira group tours, corporate events, school trips, family reunions, group discounts"
      />
      
      <Navbar />
      
      <section className="pt-32 pb-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
              For Groups
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Group Bookings
            </h1>
            <p className="text-lg text-white/80">
              Special rates and personalized service for groups of all sizes
            </p>
          </div>
        </div>
      </section>
      
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
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button size="lg" onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Group Quote
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1534970028765-db07030e942a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
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
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="aspect-[3/2] relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{pkg.location}</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Inquire Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="inquiry-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  Contact Us
                </span>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                  Request a Group Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form with your group details and one of our dedicated group coordinators will contact you within 24 hours with a customized proposal.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium mb-4">Group Booking Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <p className="text-muted-foreground">Submit your group inquiry with details about your group size and preferences</p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <p className="text-muted-foreground">Receive a customized quote from our group coordinator</p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <p className="text-muted-foreground">Confirm your booking with a deposit</p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <p className="text-muted-foreground">Enjoy your customized maritime experience!</p>
                    </li>
                  </ol>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Direct Contact</p>
                    <p className="text-muted-foreground">groups@seayou.pt | +351 291 000 111</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                      <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                      <p>Your group inquiry has been submitted successfully. One of our group coordinators will contact you shortly.</p>
                    </div>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Your email" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="groupSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Group Size</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Number of people" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="experienceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Type</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="seabus">SeaBus Route</SelectItem>
                                <SelectItem value="porto-santo">Porto Santo Trip</SelectItem>
                                <SelectItem value="private-cruise">Private Cruise</SelectItem>
                                <SelectItem value="custom">Custom Experience</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your group and any special requirements" 
                                className="h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Group Inquiry"}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const groupFeatures = [
  {
    icon: Users,
    title: "Special Group Rates",
    description: "Discounted prices for groups of 10 or more people"
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description: "Options to accommodate your group's specific timing needs"
  },
  {
    icon: MapPin,
    title: "Custom Pickup Points",
    description: "Arrange convenient pickup locations for larger groups"
  },
  {
    icon: Clock,
    title: "Dedicated Booking Agent",
    description: "Personal assistance throughout the booking process"
  }
];

const groupPackages = [
  {
    title: "School Group Adventure",
    description: "Educational and fun maritime experiences tailored for school groups with special educational content.",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Educational",
    groupSize: "15-60 students",
    duration: "2-4 hours",
    location: "Multiple routes available"
  },
  {
    title: "Corporate Team Building",
    description: "Build stronger teams while enjoying the beautiful waters around Madeira with customized activities.",
    image: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Team Building",
    groupSize: "10-25 colleagues",
    duration: "Half or full day",
    location: "Private cruise options"
  },
  {
    title: "Family Reunion Package",
    description: "Create lasting memories with a special maritime experience for your family gathering.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Family",
    groupSize: "10-30 family members",
    duration: "3-6 hours",
    location: "Custom routes available"
  }
];

export default GroupBookings;
