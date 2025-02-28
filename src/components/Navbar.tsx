
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <a
              href="/"
              className="text-2xl font-display font-medium tracking-tight hover:opacity-80 transition-opacity"
            >
              Sea You
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="#collections"
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Collections
            </a>
            <a
              href="#bestsellers"
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Best Sellers
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover-border-effect transition-colors"
            >
              Contact
            </a>
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
            <button
              aria-label="Shopping cart"
              className="p-2 rounded-full hover:bg-secondary transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              aria-label="Shopping cart"
              className="p-2 rounded-full hover:bg-secondary transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
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
            <a
              href="#collections"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </a>
            <a
              href="#bestsellers"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Best Sellers
            </a>
            <a
              href="#about"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
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
          </div>
        </div>
      )}
    </header>
  );
};
