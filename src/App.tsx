
import React from "react";
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
import NotFound from "./pages/NotFound";
import GroupBookings from "./pages/GroupBookings";
import Schedule from "./pages/Schedule";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { SitemapGenerator } from "@/components/SEO";
import SmartlookScript from "@/components/SmartlookScript";
import GoogleTagManager from "@/components/GoogleTagManager";

const queryClient = new QueryClient();
const GTM_ID = "GTM-MBXFXGKX";

const App = () => (
  <React.StrictMode>
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
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/seabus" element={<SeaBus />} />
                <Route path="/private-cruise" element={<PrivateCruise />} />
                <Route path="/porto-santo" element={<PortoSanto />} />
                {/* Redirect Desertas page to home */}
                <Route path="/desertas" element={<Navigate to="/" replace />} />
                <Route path="/group-bookings" element={<GroupBookings />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
