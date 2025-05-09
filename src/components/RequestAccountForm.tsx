
import { useState } from "react";
import { Check, Edit, Plus, Trash, X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// URL regex that doesn't require protocol (http/https)
const urlRegex = /^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/i;

const formSchema = z.object({
  accountName: z.string().min(2, {
    message: "Account name must be at least 2 characters.",
  }),
  accountType: z.enum(["standard", "blackhat"], {
    required_error: "You need to select an account type.",
  }),
  bmId: z.string().min(1, {
    message: "Business Manager ID is required.",
  }),
  urls: z.array(z.string().regex(urlRegex, { message: "Please enter a valid URL" })).optional().default([]),
  pageLinks: z.array(z.string().regex(urlRegex, { message: "Please enter a valid Page link" })).optional().default([]),
  initialFunds: z.coerce.number().positive({
    message: "Initial funds must be a positive number.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RequestAccountFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormValues) => void;
}

export function RequestAccountForm({ open, onOpenChange, onSubmit }: RequestAccountFormProps) {
  const { user } = useAuth();
  const [urlInputs, setUrlInputs] = useState<string[]>([""]);
  const [pageLinkInputs, setPageLinkInputs] = useState<string[]>([""]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountName: "",
      accountType: "standard",
      bmId: "",
      urls: [],
      pageLinks: [],
      initialFunds: 500,
    },
  });

  // Helper function to prepend https:// if not present
  const normalizeUrl = (url: string): string => {
    if (!url) return url;
    return url.match(/^https?:\/\//) ? url : `https://${url}`;
  };

  const addUrlInput = () => {
    setUrlInputs([...urlInputs, ""]);
  };

  const handleUrlChange = (index: number, value: string) => {
    const newUrlInputs = [...urlInputs];
    newUrlInputs[index] = value;
    setUrlInputs(newUrlInputs);
  };

  const removeUrlInput = (index: number) => {
    if (urlInputs.length === 1) {
      setUrlInputs([""]);
    } else {
      const newUrlInputs = urlInputs.filter((_, i) => i !== index);
      setUrlInputs(newUrlInputs);
    }
  };

  const addPageLinkInput = () => {
    setPageLinkInputs([...pageLinkInputs, ""]);
  };

  const handlePageLinkChange = (index: number, value: string) => {
    const newPageLinkInputs = [...pageLinkInputs];
    newPageLinkInputs[index] = value;
    setPageLinkInputs(newPageLinkInputs);
  };

  const removePageLinkInput = (index: number) => {
    if (pageLinkInputs.length === 1) {
      setPageLinkInputs([""]);
    } else {
      const newPageLinkInputs = pageLinkInputs.filter((_, i) => i !== index);
      setPageLinkInputs(newPageLinkInputs);
    }
  };

  const handleSubmit = () => {
    // Filter out empty and normalize filled URLs and page links
    const normalizedUrls = urlInputs
      .filter(url => url.trim() !== "")
      .map(normalizeUrl);
    
    const normalizedPageLinks = pageLinkInputs
      .filter(link => link.trim() !== "")
      .map(normalizeUrl);
    
    if (normalizedUrls.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one URL",
        variant: "destructive",
      });
      return;
    }
    
    if (normalizedPageLinks.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one Page link",
        variant: "destructive",
      });
      return;
    }
    
    // Set the normalized values in the form
    form.setValue("urls", normalizedUrls);
    form.setValue("pageLinks", normalizedPageLinks);
    
    // Get all form values and submit
    const values = form.getValues();
    
    // Create submission data with the normalized arrays
    const submissionData = {
      ...values,
      urls: normalizedUrls,
      pageLinks: normalizedPageLinks,
      timestamp: new Date().toISOString(),
      user: {
        id: user?.id || "unknown",
        name: user?.name || "unknown",
        email: user?.email || "unknown",
      },
      status: "pending"
    };
    
    // Pass the submission data to the onSubmit function
    onSubmit(submissionData);
    
    // Reset form and state
    form.reset();
    setUrlInputs([""]);
    setPageLinkInputs([""]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request New Ad Account</DialogTitle>
          <DialogDescription>
            Fill out the form below to request a new Meta ad account. Our team will review your request and get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. [Agency Aurora] YourBrand" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is how your account will be displayed.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Account Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="standard" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Standard
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="blackhat" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Blackhat
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bmId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Manager ID</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 1234567890123456" {...field} />
                  </FormControl>
                  <FormDescription>
                    The Business Manager ID where the account will be created.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="urls"
              render={() => (
                <FormItem>
                  <FormLabel>URLs</FormLabel>
                  <div className="space-y-2">
                    {urlInputs.map((url, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder="example.com"
                          value={url}
                          onChange={(e) => handleUrlChange(index, e.target.value)}
                        />
                        {index > 0 && (
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeUrlInput(index)}
                            title="Remove URL"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                        {index === urlInputs.length - 1 && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="icon"
                            onClick={addUrlInput}
                            title="Add another URL"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <FormDescription>
                    Add the URLs you want to advertise. The "https://" will be added automatically if missing.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pageLinks"
              render={() => (
                <FormItem>
                  <FormLabel>Page Links</FormLabel>
                  <div className="space-y-2">
                    {pageLinkInputs.map((link, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder="facebook.com/yourpage"
                          value={link}
                          onChange={(e) => handlePageLinkChange(index, e.target.value)}
                        />
                        {index > 0 && (
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removePageLinkInput(index)}
                            title="Remove Page Link"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                        {index === pageLinkInputs.length - 1 && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="icon"
                            onClick={addPageLinkInput}
                            title="Add another Page Link"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <FormDescription>
                    Add the Facebook page links for your ad account. The "https://" will be added automatically if missing.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="initialFunds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Funds (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" min="100" {...field} />
                  </FormControl>
                  <FormDescription>
                    How much you want to add to the account initially.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
