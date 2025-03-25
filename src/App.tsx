
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import SeaBus from "./pages/SeaBus";
import PrivateCruise from "./pages/PrivateCruise";
import PortoSanto from "./pages/PortoSanto";
import Desertas from "./pages/Desertas";
import GroupBookings from "./pages/GroupBookings";
import Schedule from "./pages/Schedule";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { SitemapGenerator } from "@/components/SEO";
import SmartlookScript from "@/components/SmartlookScript";
import GoogleTagManager from "@/components/GoogleTagManager";
import FacebookPixel from "@/components/FacebookPixel";

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const GTM_ID = "GTM-MBXFXGKX";
const FB_PIXEL_ID = "2645591515649546";

// Flag to check if the Desertas page is accessible
const DESERTAS_ENABLED = false;

const App = () => {
  // Fix iOS scroll issues and ensure proper heading hierarchy
  useEffect(() => {
    // Add accessibility attributes to iframes when they load
    const addAccessibilityToIframes = () => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe, index) => {
        if (!iframe.hasAttribute('title')) {
          iframe.setAttribute('title', `External content ${index + 1}`);
        }
      });
    };
    
    // Fix heading hierarchy
    const fixHeadingHierarchy = () => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      let lastLevel = 0;
      
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1) {
          console.warn(`Non-sequential heading found: ${heading.tagName} should come after h${lastLevel + 1}`);
        }
        lastLevel = level;
      });
    };
    
    // Execute fixes on first load and when route changes
    const observer = new MutationObserver(() => {
      addAccessibilityToIframes();
      setTimeout(fixHeadingHierarchy, 1000);
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial run
    addAccessibilityToIframes();
    setTimeout(fixHeadingHierarchy, 1000);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <div className="overflow-x-hidden w-full">
            <GoogleTagManager id={GTM_ID} />
            <FacebookPixel pixelId={FB_PIXEL_ID} />
            <Toaster />
            <Sonner />
            <SmartlookScript />
            <BrowserRouter>
              <SitemapGenerator domain="seayou.pt" />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/seabus" element={<SeaBus />} />
                <Route path="/private-cruise" element={<PrivateCruise />} />
                <Route path="/porto-santo" element={<PortoSanto />} />
                <Route path="/group-bookings" element={<GroupBookings />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* Desertas page - redirects to home if not enabled */}
                <Route 
                  path="/desertas" 
                  element={DESERTAS_ENABLED ? <Desertas /> : <Navigate to="/" replace />} 
                />
                
                {/* Redirect all other routes to the homepage */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
