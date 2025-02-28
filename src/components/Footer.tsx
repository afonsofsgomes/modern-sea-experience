
import { Mail, Phone, Instagram, Facebook, Twitter, Anchor, Ship, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <a
              href="/"
              className="text-xl font-display font-medium tracking-tight inline-block mb-6"
            >
              SeaYou
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Maritime tourism services in Madeira. Seabus connections, private cruises, and tours to Porto Santo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#routes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Seabus Routes
                </a>
              </li>
              <li>
                <a
                  href="#cruises"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Private Cruises
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Porto Santo Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Group Bookings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safety Measures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Funchal Marina, Madeira
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@seayou.pt"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" /> info@seayou.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351291000000"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" /> +351 291 000 000
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Anchor className="h-4 w-4 mr-2" /> Funchal Port Terminal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Ship className="h-4 w-4 mr-2" /> Schedule Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SeaYou. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
