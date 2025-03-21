
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Madeira Tourism Board",
    logo: "https://via.placeholder.com/200x100?text=Madeira+Tourism",
    description: "Official tourism entity of Madeira Island, promoting the destination worldwide and supporting local tourism initiatives.",
    website: "https://www.visitmadeira.pt"
  },
  {
    id: 2,
    name: "Porto Santo Line",
    logo: "https://via.placeholder.com/200x100?text=Porto+Santo+Line",
    description: "Ferry operator connecting Madeira and Porto Santo islands, offering regular passenger and cargo services.",
    website: "https://www.portosantoline.pt"
  },
  {
    id: 3,
    name: "Madeira Nature Reserve",
    logo: "https://via.placeholder.com/200x100?text=Madeira+Nature",
    description: "Organization dedicated to the preservation and sustainable management of Madeira's natural reserves and protected areas.",
    website: "https://www.pnm.pt"
  },
  {
    id: 4,
    name: "Funchal Marina",
    logo: "https://via.placeholder.com/200x100?text=Funchal+Marina",
    description: "Premier marina facility in Funchal offering berthing services, water and electricity supplies for all types of vessels.",
    website: "https://www.marinadofunchal.com"
  },
  {
    id: 5,
    name: "Madeira Hotels Association",
    logo: "https://via.placeholder.com/200x100?text=Hotels+Association",
    description: "Association representing hotels and accommodation providers across Madeira, promoting quality hospitality services.",
    website: "https://www.madeira-hotels.com"
  },
  {
    id: 6,
    name: "Madeira Ocean Tours",
    logo: "https://via.placeholder.com/200x100?text=Ocean+Tours",
    description: "Leading marine wildlife tour operator specializing in whale and dolphin watching experiences in Madeiran waters.",
    website: "https://www.madeira-ocean.com"
  }
];

const Partners = () => {
  return (
    <>
      <MetaTags
        title="Our Partners | SeaYou Maritime Transportation"
        description="Discover SeaYou's trusted partners that help us deliver exceptional maritime experiences across Madeira and Porto Santo."
        canonicalUrl="https://seayou.pt/partners"
      />
      <ScrollProgressBar />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Added pt-32 to ensure the title is visible below the fixed navbar */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-20 pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Our Trusted Partners</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Collaboration is at the heart of everything we do. Meet the organizations that help us deliver exceptional experiences across Madeira's waters.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {partners.map((partner) => (
                  <div 
                    key={partner.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50"
                  >
                    <div className="p-6 flex flex-col items-center h-full">
                      <div className="w-full h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-md">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-24 max-w-[80%] object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{partner.name}</h3>
                      <p className="text-muted-foreground mb-5 text-center flex-grow">{partner.description}</p>
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center mt-auto"
                      >
                        <Button variant="outline" className="transition-all hover:bg-primary hover:text-white">
                          Visit Website
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-20">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Interested in Partnering with Us?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  We're always looking to build relationships with organizations that share our values and commitment to excellence.
                </p>
                <Link to="/careers">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Partners;
