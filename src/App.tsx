
import React, { lazy, Suspense, useEffect } from "react";
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
import { Helmet } from "react-helmet";

// Lazy load non-critical pages
const Booking = lazy(() => import("./pages/Booking"));
const PrivateCruise = lazy(() => import("./pages/PrivateCruise"));
const PortoSanto = lazy(() => import("./pages/PortoSanto"));
const Desertas = lazy(() => import("./pages/Desertas"));
const GroupBookings = lazy(() => import("./pages/GroupBookings"));
const Schedule = lazy(() => import("./pages/Schedule"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Lazy load only the sitemap generator
const SitemapGenerator = lazy(() => import("./components/SEO/SitemapGenerator"));

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

// Inline analytics code to avoid dynamic imports
const GTM_ID = "GTM-MBXFXGKX";
const FB_PIXEL_ID = "2645591515649546";

// Flag to check if the Desertas page is accessible
const DESERTAS_ENABLED = false;

const App = () => {
  // Add analytics to the page without dynamic imports
  useEffect(() => {
    // Only run in production to avoid filling analytics in development
    if (process.env.NODE_ENV === 'production') {
      // Register route change listener for analytics
      const handleRouteChange = () => {
        if (window.fbq) {
          window.fbq('track', 'PageView');
        }
        
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'pageview',
            page: window.location.pathname
          });
        }
      };
      
      // Listen for history changes
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <div className="overflow-x-hidden w-full">
            {/* Inline analytics scripts using Helmet */}
            <Helmet>
              {/* Google Tag Manager */}
              <script type="text/javascript">{`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}</script>
              
              {/* Facebook Pixel */}
              <script type="text/javascript">{`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `}</script>
              <noscript>{`
                <img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1" alt="Facebook Pixel" />
              `}</noscript>
            </Helmet>
            
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
