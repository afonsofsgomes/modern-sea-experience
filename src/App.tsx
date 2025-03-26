
import React, { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";

// Lazy load non-critical pages
const Booking = lazy(() => import("./pages/Booking"));
const SeaBus = lazy(() => import("./pages/SeaBus"));
const PrivateCruise = lazy(() => import("./pages/PrivateCruise"));
const PortoSanto = lazy(() => import("./pages/PortoSanto"));
const Desertas = lazy(() => import("./pages/Desertas"));
const GroupBookings = lazy(() => import("./pages/GroupBookings"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Lazy load analytics components
const SitemapGenerator = lazy(() => import("@/components/SEO/SitemapGenerator").then(module => ({ default: module.default })));
const GoogleTagManager = lazy(() => import("@/components/GoogleTagManager").then(module => ({ default: module.default })));
const FacebookPixel = lazy(() => import("@/components/FacebookPixel").then(module => ({ default: module.default })));
const SmartlookScript = lazy(() => import("@/components/SmartlookScript").then(module => ({ default: module.default })));

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const GTM_ID = "GTM-MBXFXGKX";
const FB_PIXEL_ID = "2645591515649546";

// Flag to check if the Desertas page is accessible
const DESERTAS_ENABLED = false;

// Loading fallback that doesn't cause layout shift
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  // Fix iOS scroll issues and ensure proper heading hierarchy - moved to useEffect
  useEffect(() => {
    // Function to run non-critical optimizations
    const runAccessibilityOptimizations = () => {
      // Use requestIdleCallback for non-critical work
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          // Add accessibility attributes to iframes
          const iframes = document.querySelectorAll('iframe');
          iframes.forEach((iframe, index) => {
            if (!iframe.hasAttribute('title')) {
              iframe.setAttribute('title', `External content ${index + 1}`);
            }
          });
          
          // Fix heading hierarchy
          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
          let lastLevel = 0;
          
          headings.forEach(heading => {
            const level = parseInt(heading.tagName.charAt(1));
            if (level > lastLevel + 1) {
              console.warn(`Non-sequential heading found: ${heading.tagName} should come after h${lastLevel + 1}`);
            }
            lastLevel = level;
          });
        }, { timeout: 3000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          // Add accessibility attributes to iframes
          const iframes = document.querySelectorAll('iframe');
          iframes.forEach((iframe, index) => {
            if (!iframe.hasAttribute('title')) {
              iframe.setAttribute('title', `External content ${index + 1}`);
            }
          });
        }, 2000);
      }
    };
    
    // Run optimizations on first load only
    runAccessibilityOptimizations();
    
    // Cleanup for memory management
    return () => {
      // No cleanup needed
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <div className="overflow-x-hidden w-full">
            {/* Defer loading analytics until after main content */}
            <Suspense fallback={null}>
              <GoogleTagManager id={GTM_ID} />
              <FacebookPixel pixelId={FB_PIXEL_ID} />
              <SmartlookScript />
            </Suspense>
            
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={null}>
                <SitemapGenerator domain="seayou.pt" />
              </Suspense>
              
              <Routes>
                {/* Eagerly load the index route for fast initial render */}
                <Route path="/" element={<Index />} />
                
                {/* Lazy load all other routes */}
                <Suspense fallback={<LoadingFallback />}>
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
                </Suspense>
                
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
