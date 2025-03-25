
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import SeaBus from "./pages/SeaBus";
import PrivateCruise from "./pages/PrivateCruise";
import PortoSanto from "./pages/PortoSanto";
import Desertas from "./pages/Desertas";
import NotFound from "./pages/NotFound";
import GroupBookings from "./pages/GroupBookings";
import PortTerminal from "./pages/PortTerminal";
import Schedule from "./pages/Schedule";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { SitemapGenerator } from "@/components/SEO";
import SmartlookScript from "@/components/SmartlookScript";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="overflow-x-hidden w-full">
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
            <Route path="/desertas" element={<Desertas />} />
            <Route path="/group-bookings" element={<GroupBookings />} />
            <Route path="/port-terminal" element={<PortTerminal />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
