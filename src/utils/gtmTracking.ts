
/**
 * Google Tag Manager tracking utilities
 */

// Interface for product data
interface GTMProduct {
  ID: string;
  name: string;
  category: string;
}

// Interface for lead event data
interface LeadEventData {
  conversionID?: string;
  email?: string;
  source?: string;
  buttonText?: string;
  buttonLocation?: string;
}

// Push a lead event to the dataLayer
export const trackLeadEvent = (data: LeadEventData = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Create a unique conversion ID if not provided
    const conversionId = data.conversionID || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    try {
      // Push to dataLayer
      window.dataLayer.push({
        event: "Lead",
        
        // Attribution matching
        conversionID: conversionId,
        email: data.email || undefined,
        
        // Event metadata
        source: data.source || "CTA Button",
        buttonText: data.buttonText || undefined,
        buttonLocation: data.buttonLocation || undefined
      });
      
      console.info('GTM: Lead event pushed to dataLayer', { conversionId, source: data.source });
    } catch (error) {
      console.error('GTM: Failed to push lead event to dataLayer', error);
    }
  }
};

// Track purchase event
export const trackPurchaseEvent = (
  transactionValue: number,
  currency: string = 'USD',
  products: GTMProduct[] = [],
  email?: string
) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Create a unique conversion ID
    const conversionId = `purchase_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    try {
      // Push to dataLayer
      window.dataLayer.push({
        event: "Purchase",
        
        // Attribution matching
        conversionID: conversionId,
        email: email || undefined,
        
        // Event metadata
        itemCount: products.length || 1,
        currency: currency,
        transactionValue: transactionValue,
        
        products: products.length > 0 ? products : undefined
      });
      
      console.info('GTM: Purchase event pushed to dataLayer', { conversionId, value: transactionValue });
    } catch (error) {
      console.error('GTM: Failed to push purchase event to dataLayer', error);
    }
  }
};

// Declare global interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
