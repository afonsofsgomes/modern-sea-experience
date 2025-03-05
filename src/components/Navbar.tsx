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
  const [forceColored, setForceColored] = useState(false);

  // Check if current page should have a colored navbar
  useEffect(() => {
    const whiteBackgroundPages = [
      "/our-fleet", 
      "/safety-measures", 
      "/careers", 
      "/port-terminal",
      "/schedule",
      "/privacy-policy",
      "/terms",
      "/cookies"
    ];
    
    const shouldForceColor = whiteBackgroundPages.includes(location.pathname);
    setForceColored(shouldForceColor);
    
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Close mobile menu when route changes
    setIsOpen(false);
    document.body.classList.remove('menu-open');
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

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || forceColored
          ? "bg-white backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between">
          <NavbarLogo scrolled={scrolled || forceColored} />
          <NavbarDesktopLinks onScrollToSection={scrollToSection} scrolled={scrolled || forceColored} />
          <NavbarDesktopActions scrolled={scrolled || forceColored} />
          <NavbarMobileActions isOpen={isOpen} toggleMenu={toggleMenu} scrolled={scrolled || forceColored} />
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
