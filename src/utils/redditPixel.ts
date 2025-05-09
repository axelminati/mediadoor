
import { trackRedditPageViewAPI, trackRedditCustomEventAPI } from './redditConversionsApi';

// Function to track page views
export const trackRedditPageView = () => {
  if (typeof window !== 'undefined' && (window as any).rdt) {
    try {
      // Track with the client-side pixel
      (window as any).rdt('track', 'PageVisit');
      console.info('Reddit Pixel: PageVisit event tracked');
      
      // Also track with the Conversions API
      trackRedditPageViewAPI().catch(error => {
        console.error('Reddit Conversions API Error:', error);
      });
    } catch (error) {
      console.error('Reddit Pixel: Failed to track PageVisit event', error);
    }
  }
};

// Function to track custom events
export const trackRedditEvent = (event: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).rdt) {
    try {
      // Generate conversion ID for deduplication
      const conversionId = `${event.toLowerCase()}_${Date.now()}`;
      
      // Ensure valueDecimal is used instead of value_decimal if present
      const modifiedParams = { ...params };
      if (modifiedParams?.value_decimal !== undefined) {
        modifiedParams.valueDecimal = parseFloat(modifiedParams.value_decimal);
        delete modifiedParams.value_decimal;
      }
      
      // Track with the client-side pixel
      (window as any).rdt('track', event, { 
        ...modifiedParams, 
        conversion_id: conversionId 
      });
      console.info(`Reddit Pixel: ${event} event tracked`, modifiedParams);
      
      // Also track with the Conversions API
      trackRedditCustomEventAPI(event, {
        conversion_id: conversionId,
        ...modifiedParams
      }).catch(error => {
        console.error('Reddit Conversions API Error:', error);
      });
    } catch (error) {
      console.error(`Reddit Pixel: Failed to track ${event} event`, error);
    }
  }
};

// Function to track purchases with both the pixel and Conversions API
export const trackRedditPurchase = (value: number, currency: string = 'USD', products?: any[]) => {
  if (typeof window !== 'undefined' && (window as any).rdt) {
    try {
      // Generate conversion ID for deduplication
      const conversionId = `purchase_${Date.now()}`;
      
      // Track with the client-side pixel
      (window as any).rdt('track', 'Purchase', { 
        value, 
        valueDecimal: parseFloat(value.toString()), // Ensure it's a float
        currency, 
        content_ids: products?.map(p => p.id), 
        conversion_id: conversionId 
      });
      console.info(`Reddit Pixel: Purchase event tracked`, { value, currency });
      
      // Also track with the Conversions API
      trackRedditCustomEventAPI('Purchase', {
        conversion_id: conversionId,
        valueDecimal: parseFloat(value.toString()), // Use valueDecimal instead of value_decimal
        currency,
        products: products?.map(p => ({
          id: p.id,
          name: p.name,
          category: p.category
        })),
        item_count: products?.length || 1
      }).catch(error => {
        console.error('Reddit Conversions API Error:', error);
      });
    } catch (error) {
      console.error(`Reddit Pixel: Failed to track Purchase event`, error);
    }
  }
};
