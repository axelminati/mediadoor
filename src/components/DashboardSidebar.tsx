
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Wallet, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  FilePlus, 
  Users, 
  ChevronDown, 
  ChevronRight,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasChildren?: boolean;
  onClick?: () => void;
}

interface DashboardSidebarProps {
  onClose?: () => void;
}

const NavItem = ({ to, icon, label, active, hasChildren, onClick }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
      active
        ? "bg-primary/10 text-primary dark:bg-primary/20"
        : "text-foreground/70 hover:bg-primary/5 hover:text-foreground dark:hover:bg-primary/10"
    )}
    onClick={onClick}
  >
    {icon}
    <span className="flex-1">{label}</span>
    {hasChildren && <ChevronRight className="h-4 w-4" />}
  </Link>
);

const DashboardSidebar = ({ onClose }: DashboardSidebarProps) => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const [adAccountsOpen, setAdAccountsOpen] = useState(true);
  const isMobile = useIsMobile();

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside className="w-64 h-full bg-background/80 backdrop-blur-lg border-r border-border/50 flex flex-col">
      <div className="p-4 border-b border-border/50 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/56bbaef9-0e10-4738-b407-7e7ecfe057ca.png" 
            alt="PhaseDigital Logo" 
            className="h-16 w-auto" 
          />
          <span className="font-semibold text-xl dark:text-white">PhaseDigital</span>
        </Link>
        
        {isMobile && onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          <NavItem 
            to="/dashboard" 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            active={isActive("/dashboard")} 
            onClick={isMobile ? onClose : undefined}
          />
          
          <NavItem 
            to="/dashboard/wallet" 
            icon={<Wallet className="h-5 w-5" />} 
            label="Wallet" 
            active={isActive("/dashboard/wallet")} 
            onClick={isMobile ? onClose : undefined}
          />

          <div>
            <button
              onClick={() => setAdAccountsOpen(!adAccountsOpen)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                (isActive("/dashboard/ad-accounts") || isActive("/dashboard/ad-accounts/meta") || isActive("/dashboard/ad-accounts/tiktok"))
                  ? "bg-primary/10 text-primary dark:bg-primary/20"
                  : "text-foreground/70 hover:bg-primary/5 hover:text-foreground dark:hover:bg-primary/10"
              )}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="flex-1">Ad Accounts</span>
              {adAccountsOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {adAccountsOpen && (
              <div className="pl-9 mt-1 space-y-1">
                <NavItem 
                  to="/dashboard/ad-accounts/meta" 
                  icon={<div className="w-1.5 h-1.5 rounded-full bg-blue-500" />} 
                  label="Meta" 
                  active={isActive("/dashboard/ad-accounts/meta")} 
                  onClick={isMobile ? onClose : undefined}
                />
                <NavItem 
                  to="/dashboard/ad-accounts/tiktok" 
                  icon={<div className="w-1.5 h-1.5 rounded-full bg-slate-500" />} 
                  label="TikTok" 
                  active={isActive("/dashboard/ad-accounts/tiktok")} 
                  onClick={isMobile ? onClose : undefined}
                />
              </div>
            )}
          </div>
          
          <NavItem 
            to="/dashboard/guides" 
            icon={<FilePlus className="h-5 w-5" />} 
            label="Guides" 
            active={isActive("/dashboard/guides")} 
            onClick={isMobile ? onClose : undefined}
          />
          
          <NavItem 
            to="/dashboard/affiliate" 
            icon={<Users className="h-5 w-5" />} 
            label="Affiliate" 
            active={isActive("/dashboard/affiliate")} 
            onClick={isMobile ? onClose : undefined}
          />
        </nav>
      </div>
      
      <div className="p-4 border-t border-border/50">
        <div className="space-y-1">
          <NavItem 
            to="/dashboard/settings" 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            active={isActive("/dashboard/settings")} 
            onClick={isMobile ? onClose : undefined}
          />
          <button 
            onClick={() => {
              if (isMobile && onClose) onClose();
              logout();
            }}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
