
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Import components directly instead of lazy loading
import SeaBus from "./pages/SeaBus";
import GoogleTagManager from "@/components/GoogleTagManager";
import FacebookPixel from "@/components/FacebookPixel";

// Lazy load non-critical pages without showing a loading screen
const Booking = lazy(() => import("./pages/Booking"));
const PrivateCruise = lazy(() => import("./pages/PrivateCruise"));
const PortoSanto = lazy(() => import("./pages/PortoSanto"));
const Desertas = lazy(() => import("./pages/Desertas"));
const GroupBookings = lazy(() => import("./pages/GroupBookings"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Lazy load only the sitemap generator
const SitemapGenerator = lazy(() => import("@/components/SEO/SitemapGenerator"));

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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <div className="overflow-x-hidden w-full">
            {/* Load analytics directly instead of using Suspense */}
            <GoogleTagManager id={GTM_ID} />
            <FacebookPixel pixelId={FB_PIXEL_ID} />
            
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={null}>
                <SitemapGenerator domain="seayou.pt" />
              </Suspense>
              
              <Routes>
                {/* Eagerly load the index route for fast initial render */}
                <Route path="/" element={<Index />} />
                
                {/* Eagerly load the SeaBus route */}
                <Route path="/seabus" element={<SeaBus />} />
                
                {/* Lazy load all other routes - no loading fallback */}
                <Route 
                  path="/booking" 
                  element={
                    <Suspense fallback={null}>
                      <Booking />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/private-cruise" 
                  element={
                    <Suspense fallback={null}>
                      <PrivateCruise />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/porto-santo" 
                  element={
                    <Suspense fallback={null}>
                      <PortoSanto />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/group-bookings" 
                  element={
                    <Suspense fallback={null}>
                      <GroupBookings />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/schedule" 
                  element={
                    <Suspense fallback={null}>
                      <Schedule />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/privacy-policy" 
                  element={
                    <Suspense fallback={null}>
                      <PrivacyPolicy />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/terms" 
                  element={
                    <Suspense fallback={null}>
                      <Terms />
                    </Suspense>
                  } 
                />
                
                {/* Desertas page - redirects to home if not enabled */}
                <Route 
                  path="/desertas" 
                  element={
                    DESERTAS_ENABLED ? (
                      <Suspense fallback={null}>
                        <Desertas />
                      </Suspense>
                    ) : <Navigate to="/" replace />
                  } 
                />
                
                {/* 404 page for all other routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
