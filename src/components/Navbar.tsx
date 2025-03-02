
import { useState, useEffect } from "react";
import { Menu, X, Ship, User, Search, Calendar, Anchor, MapPin, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // Check if we're on the home page
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-display font-medium tracking-tight hover:opacity-80 transition-opacity"
            >
              SeaYou
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("routes")}
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Routes
            </button>
            <button
              onClick={() => scrollToSection("cruises")}
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Private Cruises
            </button>
            <button
              onClick={() => scrollToSection("tours")}
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Porto Santo Tours
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="User account"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            <Link to="/booking">
              <Button variant="primary" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/booking">
              <Button variant="primary" size="sm">
                Book
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-24 px-6 pb-6 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection("routes")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Routes
            </button>
            <button
              onClick={() => scrollToSection("cruises")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Private Cruises
            </button>
            <button
              onClick={() => scrollToSection("tours")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Porto Santo Tours
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4 py-4">
              <button
                aria-label="Search"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                aria-label="User account"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
            <Link
              to="/booking"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
