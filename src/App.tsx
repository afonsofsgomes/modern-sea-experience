
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SeaBus from "./pages/SeaBus";
import PrivateCruise from "./pages/PrivateCruise";
import PortoSanto from "./pages/PortoSanto";
import Desertas from "./pages/Desertas";
import OurFleet from "./pages/OurFleet";
import Booking from "./pages/Booking";
import SafetyMeasures from "./pages/SafetyMeasures";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog/Blog";
import GroupBookings from "./pages/GroupBookings";
import CorporateEvents from "./pages/CorporateEvents";
import PortTerminal from "./pages/PortTerminal";
import Schedule from "./pages/Schedule";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import { AuthProvider } from "./components/auth/AuthContext";
import Auth from "./pages/Auth";
import AuthRequired from "./components/auth/AuthRequired";
import BlogPost from "./pages/Blog/BlogPost";
import BlogDashboard from "./pages/Blog/Dashboard/BlogDashboard";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seabus" element={<SeaBus />} />
          <Route path="/private-cruise" element={<PrivateCruise />} />
          <Route path="/porto-santo" element={<PortoSanto />} />
          <Route path="/desertas" element={<Desertas />} />
          <Route path="/our-fleet" element={<OurFleet />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/safety-measures" element={<SafetyMeasures />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/group-bookings" element={<GroupBookings />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/port-terminal" element={<PortTerminal />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<Cookies />} />
          
          {/* Protected routes */}
          <Route element={<AuthRequired />}>
            <Route path="/blog/dashboard" element={<BlogDashboard />} />
            <Route path="/blog/dashboard/new" element={<BlogDashboard />} />
            <Route path="/blog/dashboard/edit/:id" element={<BlogDashboard />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;
