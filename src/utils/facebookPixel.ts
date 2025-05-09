
import { trackServerPageView, trackServerContact } from './facebookConversionsApi';

// Declare global interface for Facebook Pixel
declare global {
  interface Window {
    fbq: Function;
  }
}

// Function to check if Facebook Pixel is loaded
const isFbPixelLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

// Track Page View event
export const trackPageView = (): void => {
  if (isFbPixelLoaded()) {
    window.fbq('track', 'PageView');
    console.log('Facebook Pixel: PageView event tracked');
    
    // Also send to Conversions API
    trackServerPageView();
  }
};

// Track Contact event
export const trackContact = (): void => {
  if (isFbPixelLoaded()) {
    window.fbq('track', 'Contact');
    console.log('Facebook Pixel: Contact event tracked');
    
    // Also send to Conversions API
    trackServerContact();
  }
};
