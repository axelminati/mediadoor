
import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import DashboardSidebar from "./DashboardSidebar";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAuthenticated, loading } = useAuth();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 bg-primary/30 rounded-full"></div>
          <div className="mt-4 h-6 w-24 bg-primary/30 rounded"></div>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile menu toggle */}
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50 md:hidden" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
      
      {/* Sidebar - only visible on desktop or when toggled on mobile */}
      <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-40 transition-transform transform duration-300 ease-in-out' : ''} ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <DashboardSidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Backdrop overlay on mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <main className={`flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950 ${isMobile ? 'w-full' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
