
import { Mail, Phone, Instagram, Facebook, Twitter, Anchor, Ship, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-xl font-display font-medium tracking-tight inline-block mb-6"
            >
              SeaYou
            </Link>
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
                <Link
                  to="/seabus#routes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Seabus Routes
                </Link>
              </li>
              <li>
                <Link
                  to="/private-cruise"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Private Cruises
                </Link>
              </li>
              <li>
                <Link
                  to="/porto-santo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Porto Santo Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/group-bookings"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Group Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate-events"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-fleet"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/safety-measures"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safety Measures
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
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
                <Link
                  to="/port-terminal"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Anchor className="h-4 w-4 mr-2" /> Funchal Port Terminal
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Ship className="h-4 w-4 mr-2" /> Schedule Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SeaYou. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
