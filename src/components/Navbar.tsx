
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { NavbarDesktopLinks } from "./navbar/NavbarDesktopLinks";
import { NavbarDesktopActions } from "./navbar/NavbarDesktopActions";
import { NavbarMobileActions } from "./navbar/NavbarMobileActions";
import { NavbarMobileMenu } from "./navbar/NavbarMobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle scroll to section after navigation to home page
  useEffect(() => {
    // Only run this effect if we're on the home page and there's a hash in the URL
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Small delay to ensure the page is loaded before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // Increased delay for mobile devices
      }
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId: string) => {
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'auto';
    }
    
    // Check if we're on the home page
    if (location.pathname === "/") {
      // Special case for home section - scroll to top
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
    
    // If opening menu, scroll to top of mobile menu
    if (newIsOpen) {
      window.scrollTo(0, 0);
    }
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between">
          <NavbarLogo scrolled={scrolled} />
          <NavbarDesktopLinks onScrollToSection={scrollToSection} scrolled={scrolled} />
          <NavbarDesktopActions scrolled={scrolled} />
          <NavbarMobileActions isOpen={isOpen} toggleMenu={toggleMenu} scrolled={scrolled} />
        </div>
      </div>

      <NavbarMobileMenu 
        isOpen={isOpen} 
        onScrollToSection={scrollToSection}
        onClose={closeMenu}
      />
    </header>
  );
};
