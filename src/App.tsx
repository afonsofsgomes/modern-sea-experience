
import React, { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import SmartlookScript from "@/components/SmartlookScript";
import GoogleTagManager from "@/components/GoogleTagManager";
import { SitemapGenerator } from "@/components/SEO";

// Lazy-load page components
const Index = lazy(() => import("./pages/Index"));
const Booking = lazy(() => import("./pages/Booking"));
const SeaBus = lazy(() => import("./pages/SeaBus"));
const PrivateCruise = lazy(() => import("./pages/PrivateCruise"));
const PortoSanto = lazy(() => import("./pages/PortoSanto"));
const Desertas = lazy(() => import("./pages/Desertas"));
const GroupBookings = lazy(() => import("./pages/GroupBookings"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Loading fallback while pages load
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-blue-50 text-blue-900">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-t-blue-900 border-r-blue-700 border-b-blue-500 border-l-blue-300 rounded-full animate-spin mx-auto mb-4"></div>
      <div>Loading page...</div>
    </div>
  </div>
);

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

// Flag to check if the Desertas page is accessible
const DESERTAS_ENABLED = false;

const App = () => {
  // Debug mount to confirm App is rendering
  useEffect(() => {
    console.log('App component mounted');
    
    // Fix iOS scroll issues and ensure proper heading hierarchy
    const addAccessibilityToIframes = () => {
      requestIdleCallback(() => {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach((iframe, index) => {
          if (!iframe.hasAttribute('title')) {
            iframe.setAttribute('title', `External content ${index + 1}`);
          }
        });
      });
    };
    
    // Execute fixes on first load and when route changes
    const observer = new MutationObserver(() => {
      addAccessibilityToIframes();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial run
    addAccessibilityToIframes();
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <div className="overflow-x-hidden w-full">
            <GoogleTagManager id={GTM_ID} />
            <Toaster />
            <Sonner />
            <SmartlookScript />
            <BrowserRouter>
              <SitemapGenerator domain="seayou.pt" />
              <Suspense fallback={<PageLoader />}>
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
              </Suspense>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
