
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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

// Loading fallback that doesn't cause layout shift
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
                  path="/seabus" 
                  element={
                    <Suspense fallback={<LoadingFallback />}>
                      <SeaBus />
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
