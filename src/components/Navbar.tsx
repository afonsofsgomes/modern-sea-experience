
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { NavbarDesktopLinks } from "./navbar/NavbarDesktopLinks";
import { NavbarDesktopActions } from "./navbar/NavbarDesktopActions";
import { NavbarMobileActions } from "./navbar/NavbarMobileActions";
import { NavbarMobileMenu } from "./navbar/NavbarMobileMenu";

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
      window.location.href = `/#${sectionId}`;
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
