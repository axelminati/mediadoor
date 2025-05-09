
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import { useEffect } from "react";
import { trackPageView } from "@/utils/facebookPixel";
import { trackRedditPageView } from "@/utils/redditPixel";
import Index from "./pages/Index";
import Ecommerce from "./pages/Ecommerce";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import WalletDashboard from "./components/WalletDashboard";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FacebookAds from "./pages/FacebookAds";

const queryClient = new QueryClient();

// RouteChangeTracker component to track page views on route changes
const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on route change for both Facebook and Reddit
    trackPageView();
    trackRedditPageView();
  }, [location]);
  
  return null;
};

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/wallet" element={<ProtectedRoute><WalletDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/ad-accounts/meta" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/ad-accounts/tiktok" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/facebook-ads" element={<FacebookAds />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
