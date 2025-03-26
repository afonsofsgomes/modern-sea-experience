
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LoadingFallback } from "@/components/LoadingFallback";
// Import SeaBus directly instead of lazy loading it
import SeaBus from "./pages/SeaBus";

// Lazy load non-critical pages
const Booking = lazy(() => import("./pages/Booking"));
const PrivateCruise = lazy(() => import("./pages/PrivateCruise"));
const PortoSanto = lazy(() => import("./pages/PortoSanto"));
const Desertas = lazy(() => import("./pages/Desertas"));
const GroupBookings = lazy(() => import("./pages/GroupBookings"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Lazy load analytics components
const SitemapGenerator = lazy(() => import("@/components/SEO/SitemapGenerator"));
const GoogleTagManager = lazy(() => import("@/components/GoogleTagManager"));
const FacebookPixel = lazy(() => import("@/components/FacebookPixel"));

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
            {/* Defer loading analytics until after main content */}
            <Suspense fallback={null}>
              <GoogleTagManager id={GTM_ID} />
              <FacebookPixel pixelId={FB_PIXEL_ID} />
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
                
                {/* Eagerly load the SeaBus route to fix the loading issue */}
                <Route path="/seabus" element={<SeaBus />} />
                
                {/* Lazy load all other routes */}
                <Route 
                  path="/booking" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Booking />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/private-cruise" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <PrivateCruise />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/porto-santo" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <PortoSanto />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/group-bookings" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <GroupBookings />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/schedule" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Schedule />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/privacy-policy" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <PrivacyPolicy />
                    </Suspense>
                  } 
                />
                <Route 
                  path="/terms" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Terms />
                    </Suspense>
                  } 
                />
                
                {/* Desertas page - redirects to home if not enabled */}
                <Route 
                  path="/desertas" 
                  element={
                    DESERTAS_ENABLED ? (
                      <Suspense fallback={<LoadingFallback />}>
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
