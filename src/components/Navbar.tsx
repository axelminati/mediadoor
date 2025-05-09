
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, LogIn, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/70" : "bg-transparent"}`}>
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/56bbaef9-0e10-4738-b407-7e7ecfe057ca.png" alt="PhaseDigital Logo" className="h-12 w-auto" />
            <span className="font-semibold text-xl dark:text-white">PhaseDigital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? <>
                <Button variant="outline" className="hover-lift dark:border-white/10 dark:hover:border-white/20 dark:bg-white/5" onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button onClick={logout} className="hover-lift bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]">
                  Logout
                </Button>
              </> : <>
                <Button variant="outline" className="hover-lift dark:border-white/10 dark:hover:border-white/20 dark:bg-white/5" onClick={() => navigate("/login")}>
                  Sign in
                </Button>
                <Button className="hover-lift bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]" onClick={() => navigate("/signup")}>
                  Sign up <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </>}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in dark:bg-background/90 backdrop-blur-md rounded-lg p-4">
            {/* Intentionally left empty as per request to remove all specified menu items */}
            <Link to="/about" className="block py-2 text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/faq" className="block py-2 text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              {isAuthenticated ? <>
                  <Button variant="outline" className="justify-center dark:border-white/10 dark:bg-white/5" onClick={() => {
              navigate("/dashboard");
              setIsMenuOpen(false);
            }}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button className="justify-center bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]" onClick={() => {
              logout();
              setIsMenuOpen(false);
            }}>
                    Logout
                  </Button>
                </> : <>
                  <Button variant="outline" className="justify-center dark:border-white/10 dark:bg-white/5" onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}>
                    Sign in
                  </Button>
                  <Button className="justify-center bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]" onClick={() => {
              navigate("/signup");
              setIsMenuOpen(false);
            }}>
                    Sign up <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </>}
            </div>
          </nav>}
      </div>
    </header>
  );
};

export default Navbar;
