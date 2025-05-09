
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

// Define user type
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

// Define auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, accessKey: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  isAuthenticated: false,
});

// Special access key for registration
const SPECIAL_ACCESS_KEY = "YouRock2025";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("agencyboost_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem("agencyboost_user");
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login validation - in a real app this would verify credentials with a backend
      if (email && password) {
        // Check if user exists in localStorage (mock database)
        const users = JSON.parse(localStorage.getItem("agencyboost_users") || "[]");
        const foundUser = users.find((u: any) => u.email === email);
        
        if (foundUser && foundUser.password === password) {
          // Remove password before storing in context
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem("agencyboost_user", JSON.stringify(userWithoutPassword));
          toast({
            title: "Login successful",
            description: "Welcome back to AgencyBoost!",
          });
        } else {
          throw new Error("Invalid email or password");
        }
      } else {
        throw new Error("Email and password are required");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        toast({
          title: "Login failed",
          description: e.message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (name: string, email: string, password: string, accessKey: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate access key
      if (accessKey !== SPECIAL_ACCESS_KEY) {
        throw new Error("Invalid access key");
      }
      
      // Mock user creation
      if (name && email && password) {
        // Check if users collection exists in localStorage
        const existingUsers = JSON.parse(localStorage.getItem("agencyboost_users") || "[]");
        
        // Check if email already exists
        if (existingUsers.some((u: any) => u.email === email)) {
          throw new Error("Email already in use");
        }
        
        // Create new user
        const newUser = {
          id: `user_${Date.now()}`,
          name,
          email,
          password, // In a real app, this would be hashed
          createdAt: new Date(),
        };
        
        // Add user to "database"
        existingUsers.push(newUser);
        localStorage.setItem("agencyboost_users", JSON.stringify(existingUsers));
        
        // Remove password before storing in context
        const { password: _, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem("agencyboost_user", JSON.stringify(userWithoutPassword));
        
        toast({
          title: "Account created",
          description: "Welcome to AgencyBoost!",
        });
      } else {
        throw new Error("All fields are required");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        toast({
          title: "Signup failed",
          description: e.message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("agencyboost_user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
