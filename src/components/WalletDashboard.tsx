
import { useState } from "react";
import { CreditCard, DollarSign, RefreshCw, ArrowUpRight, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

// Mock data for transaction history
const transactions = [
  { id: "TX123456", type: "Deposit", amount: 1000, status: "Completed", date: "10 May 2023" },
  { id: "TX123457", type: "Withdrawal", amount: 250, status: "Completed", date: "15 May 2023" },
  { id: "TX123458", type: "Account Funding", amount: 500, status: "Completed", date: "20 May 2023" },
  { id: "TX123459", type: "Deposit", amount: 750, status: "Pending", date: "25 May 2023" },
];

const WalletDashboard = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(2000); // Mock initial balance
  const [rechargeAmount, setRechargeAmount] = useState<number>(0);
  const [isRechargeDialogOpen, setIsRechargeDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  
  const handleRecharge = () => {
    // In a real application, this would initiate a payment process
    if (rechargeAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a positive amount to recharge.",
        variant: "destructive",
      });
      return;
    }
    
    setIsRechargeDialogOpen(false);
    setIsConfirmDialogOpen(true);
  };
  
  const confirmRecharge = () => {
    // Mock successful recharge
    setBalance(balance + rechargeAmount);
    setIsConfirmDialogOpen(false);
    
    toast({
      title: "Balance Recharged",
      description: `$${rechargeAmount.toFixed(2)} has been added to your balance.`,
    });
    
    setRechargeAmount(0);
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">
            Manage your balance and transactions
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {/* Balance Card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Available Balance</p>
              <h2 className="text-3xl font-bold">${balance.toFixed(2)}</h2>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
          <Button onClick={() => setIsRechargeDialogOpen(true)} className="w-full">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Recharge Balance
          </Button>
        </div>
        
        {/* Transaction Summary Card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Total Transactions</p>
              <h2 className="text-3xl font-bold">{transactions.length}</h2>
            </div>
            <div className="p-2 bg-primary/10 rounded-full">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 mr-1">
                {transactions.filter(t => t.status === "Completed").length}
              </span>
              Completed
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 mr-1">
                {transactions.filter(t => t.status === "Pending").length}
              </span>
              Pending
            </p>
          </div>
        </div>
        
        {/* Quick Actions Card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 p-6 shadow-lg">
          <h3 className="font-medium mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download Statement
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Payment Methods
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              View Transaction History
            </Button>
          </div>
        </div>
      </div>
      
      {/* Transaction History */}
      <div className="bg-background/80 backdrop-blur-md rounded-lg border border-border/50 shadow-lg">
        <div className="p-4 border-b border-border/50">
          <h3 className="font-medium">Recent Transactions</h3>
        </div>
        <div className="p-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        transaction.status === "Completed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      {/* Recharge Dialog */}
      <Dialog open={isRechargeDialogOpen} onOpenChange={setIsRechargeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recharge Your Balance</DialogTitle>
            <DialogDescription>
              Enter the amount you would like to add to your account balance.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  className="pl-9"
                  value={rechargeAmount || ""}
                  onChange={(e) => setRechargeAmount(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRechargeDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRecharge}>
              Proceed to Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Confirmation Dialog */}
      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Payment Successful</AlertDialogTitle>
            <AlertDialogDescription>
              Your payment of ${rechargeAmount.toFixed(2)} has been processed successfully. The funds will be added to your balance immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={confirmRecharge}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default WalletDashboard;
