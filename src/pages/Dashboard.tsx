import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Search, 
  Plus, 
  Copy, 
  Clock, 
  RefreshCw, 
  Info, 
  DollarSign, 
  Download, 
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RequestAccountForm } from "@/components/RequestAccountForm";
import { toast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const mockApplications = [
  {
    id: "APP12345",
    name: "[Agency Aurora] NewBrand1",
    date: "30 Mar 25",
    time: "14:22",
    state: "Pending",
    currency: "USD",
    bmId: "1549785452319169",
    accountType: "standard",
    initialFunds: 500
  },
  {
    id: "APP12346",
    name: "[Agency Aurora] NewBrand2",
    date: "28 Mar 25",
    time: "09:15",
    state: "In Review",
    currency: "USD",
    bmId: "838686641535262",
    accountType: "blackhat",
    initialFunds: 750
  }
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [activeView, setActiveView] = useState("accounts");
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [adAccounts, setAdAccounts] = useState<any[]>([]);
  const [applications, setApplications] = useState(mockApplications);

  const filteredAccounts = adAccounts.filter(account => {
    const matchesSearch = 
      account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.id.includes(searchQuery);
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "active") return matchesSearch && account.state === "Active";
    if (activeTab === "disabled") return matchesSearch && account.state === "Disabled";
    if (activeTab === "hidden") return matchesSearch && account.state === "Hidden";
    
    return matchesSearch;
  });

  const filteredApplications = applications.filter(app => {
    return app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.includes(searchQuery);
  });

  const handleRequestSubmit = (data: any) => {
    console.log("Submitting data:", data); // Keep the logging for debugging
    
    try {
      // Ensure URLs and Page Links are valid arrays
      const urls = Array.isArray(data.urls) ? data.urls : [];
      const pageLinks = Array.isArray(data.pageLinks) ? data.pageLinks : [];
      
      if (urls.length === 0) {
        toast({
          title: "Form Error",
          description: "Please add at least one URL",
          variant: "destructive",
        });
        return;
      }
      
      if (pageLinks.length === 0) {
        toast({
          title: "Form Error",
          description: "Please add at least one page link",
          variant: "destructive",
        });
        return;
      }
      
      // In a real application, this would send the data to a backend service
      const newApplication = {
        id: `APP${Math.floor(Math.random() * 100000)}`,
        name: data.accountName,
        date: new Date().toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: '2-digit'}),
        time: new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'}),
        state: "Pending",
        currency: "USD",
        bmId: data.bmId,
        accountType: data.accountType,
        initialFunds: data.initialFunds,
        // Store the full data including URLs and page links
        fullData: {
          ...data,
          urls,
          pageLinks
        }
      };
      
      setApplications([newApplication, ...applications]);
      setIsRequestFormOpen(false);
      
      // Show success toast
      toast({
        title: "Account Request Submitted",
        description: "Your ad account request has been submitted and is pending review.",
      });
      
      // Automatically switch to Applications tab
      setActiveView("applications");
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const approveApplication = (appId: string) => {
    // Find the application
    const appIndex = applications.findIndex(app => app.id === appId);
    if (appIndex === -1) return;
    
    const app = applications[appIndex];
    
    // Create new ad account from application
    const newAccount = {
      id: `AC${Math.floor(Math.random() * 100000000)}`,
      name: app.name,
      date: new Date().toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: '2-digit'}),
      time: new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'}),
      state: "Active",
      currency: app.currency,
      bmId: app.bmId
    };
    
    // Add to ad accounts
    setAdAccounts([newAccount, ...adAccounts]);
    
    // Remove from applications
    const updatedApplications = [...applications];
    updatedApplications.splice(appIndex, 1);
    setApplications(updatedApplications);
    
    toast({
      title: "Application Approved",
      description: `${app.name} has been approved and is now active.`,
    });
  };

  const AdminControls = ({ appId }: { appId: string }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">Admin Actions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-4">
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Application Controls</h4>
          <div className="flex flex-col space-y-2">
            <Button 
              onClick={() => approveApplication(appId)}
              size="sm" 
              className="justify-start"
              variant="ghost"
            >
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Approve
            </Button>
            <Button size="sm" className="justify-start" variant="ghost">
              <XCircle className="mr-2 h-4 w-4 text-red-500" />
              Reject
            </Button>
            <Button size="sm" className="justify-start" variant="ghost">
              <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
              Request Info
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold">Agency Ad Accounts For Meta</h1>
            <p className="text-muted-foreground">
              Manage your incoming and outgoing transactions with AgencyBoost.
            </p>
          </div>
          
          <Button 
            onClick={() => setIsRequestFormOpen(true)} 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Request New Account
          </Button>
        </div>

        <div className="bg-background/80 backdrop-blur-md rounded-lg border border-border/50 shadow-lg mb-8">
          <div className="p-4 border-b border-border/50">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button 
                variant={activeView === "accounts" ? "outline" : "ghost"} 
                className="text-sm"
                onClick={() => setActiveView("accounts")}
              >
                All Accounts
              </Button>
              <Button 
                variant={activeView === "applications" ? "outline" : "ghost"} 
                className="text-sm"
                onClick={() => setActiveView("applications")}
              >
                Applications
              </Button>
              <Button variant="ghost" className="text-sm">History</Button>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col space-y-4">
              {activeView === "accounts" && (
                <div className="flex justify-between items-center">
                  <Tabs 
                    defaultValue="all" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-4 w-full max-w-xs">
                      <TabsTrigger value="all">View All</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="disabled">Disabled</TabsTrigger>
                      <TabsTrigger value="hidden">Hidden</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search accounts..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeView === "applications" && (
                <div className="flex justify-end items-center">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeView === "accounts" && (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="whitespace-nowrap">DATE & TIME</TableHead>
                        <TableHead className="whitespace-nowrap">ACCOUNT NAME</TableHead>
                        <TableHead className="whitespace-nowrap">ACCOUNT ID</TableHead>
                        <TableHead className="whitespace-nowrap">STATE</TableHead>
                        <TableHead className="whitespace-nowrap">CURRENCY</TableHead>
                        <TableHead className="whitespace-nowrap">BM ID</TableHead>
                        <TableHead className="whitespace-nowrap">ACTIONS</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAccounts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8">
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-muted p-3 mb-2">
                                <Search className="h-6 w-6 text-muted-foreground" />
                              </div>
                              <p className="font-medium">No accounts found</p>
                              <p className="text-sm text-muted-foreground">
                                Try adjusting your search or filter to find what you're looking for.
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredAccounts.map((account) => (
                          <TableRow key={account.id}>
                            <TableCell className="whitespace-nowrap">
                              {account.date} <br />
                              <span className="text-muted-foreground text-xs">{account.time}</span>
                            </TableCell>
                            <TableCell className="font-medium">{account.name}</TableCell>
                            <TableCell>{account.id}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                account.state === "Active" 
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                              }`}>
                                {account.state}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center rounded-full border border-muted px-2.5 py-0.5 text-xs font-medium">
                                {account.currency}
                              </span>
                            </TableCell>
                            <TableCell>{account.bmId}</TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="icon" title="Copy link">
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="View history">
                                  <Clock className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Refresh">
                                  <RefreshCw className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Account info">
                                  <Info className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Billing">
                                  <DollarSign className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Download report">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Security">
                                  <Shield className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}

              {activeView === "applications" && (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="whitespace-nowrap">DATE & TIME</TableHead>
                        <TableHead className="whitespace-nowrap">ACCOUNT NAME</TableHead>
                        <TableHead className="whitespace-nowrap">APPLICATION ID</TableHead>
                        <TableHead className="whitespace-nowrap">STATUS</TableHead>
                        <TableHead className="whitespace-nowrap">TYPE</TableHead>
                        <TableHead className="whitespace-nowrap">INITIAL FUNDS</TableHead>
                        <TableHead className="whitespace-nowrap">BM ID</TableHead>
                        <TableHead className="whitespace-nowrap">ACTIONS</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={8} className="text-center py-8">
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-muted p-3 mb-2">
                                <Search className="h-6 w-6 text-muted-foreground" />
                              </div>
                              <p className="font-medium">No applications found</p>
                              <p className="text-sm text-muted-foreground">
                                Click "Request New Account" to start a new application.
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredApplications.map((app) => (
                          <TableRow key={app.id}>
                            <TableCell className="whitespace-nowrap">
                              {app.date} <br />
                              <span className="text-muted-foreground text-xs">{app.time}</span>
                            </TableCell>
                            <TableCell className="font-medium">{app.name}</TableCell>
                            <TableCell>{app.id}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                app.state === "Pending" 
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                  : app.state === "In Review"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                  : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              }`}>
                                {app.state}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                app.accountType === "standard" 
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                  : "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                              }`}>
                                {app.accountType === "standard" ? "Standard" : "Blackhat"}
                              </span>
                            </TableCell>
                            <TableCell>${app.initialFunds}</TableCell>
                            <TableCell>{app.bmId}</TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="icon" title="View details">
                                  <Info className="h-4 w-4" />
                                </Button>
                                <AdminControls appId={app.id} />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <RequestAccountForm 
        open={isRequestFormOpen} 
        onOpenChange={setIsRequestFormOpen}
        onSubmit={handleRequestSubmit}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
