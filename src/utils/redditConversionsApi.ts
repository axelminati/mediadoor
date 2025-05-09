
// Reddit Conversions API utility
// Access token and Pixel ID
const REDDIT_PIXEL_ID = 'a2_gqt07lmtw0m1';
const REDDIT_ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjo0ODk5MDI2MTI5LjUxNjIzMywiaWF0IjoxNzQzMjY2MTI5LjUxNjIzMywianRpIjoiaHVPRUI0US1ESVhFTXNXLVFDYVAyamIyd1d1SEZnIiwiY2lkIjoiMVExRU96VFBXbll2ZXJocHR2Z1dzUSIsImxpZCI6InQyXzFtN20zbm54NG8iLCJhaWQiOiJ0Ml8xbTdtM25ueDRvIiwibGNhIjoxNzQzMjY1MzM2NDY1LCJzY3AiOiJlSnlLVmtwTUtVN096eXRMTFNyT3pNOHJWb29GQkFBQV9fOUJGZ2J1IiwiZmxvIjoxMCwibGwiOnRydWV9.aLeuFfI-jT9usIgujPo673FXtaaA3XHY39QmA3Mr9MJy-IPzeES4bQxsupLPyt_5VbOTkB-Q609BieXXtclygc-guGArinqGlClTms8yYve-TYlHjrmhWEAmx7oGLSiS8fdoL0JbCrtaTMZO9vc2tl1qPklz_q9M6ogfdFI6Rib9zn_h7s8zAmXzrJxpV83t3DaFAt7NhryS-DPE038Jmyh9_4JY4ifPb7n04MJM9h2R5ViijYiYadhikS10j2m86jub6KKbNFM072lGj5_iXI6Y_FXQS5t4ZHHQpNzA4sfYHahl_3eiIoq94nSQr5gsvF5DsRdk-QqLyLbdkDvCFw';
const API_ENDPOINT = `https://ads-api.reddit.com/api/v2.0/conversions/events/${REDDIT_PIXEL_ID}`;

// Interface for user data
interface RedditUser {
  ip_address?: string;
  user_agent?: string;
  screen_dimensions?: {
    width: number;
    height: number;
  };
  email?: string;
  external_id?: string;
  idfa?: string;
  aaid?: string;
  uuid?: string;
}

// Interface for product data
interface RedditProduct {
  id?: string;
  name?: string;
  category?: string;
}

// Interface for event metadata
interface RedditEventMetadata {
  item_count?: number;
  currency?: string;
  valueDecimal?: number; // Changed from value_decimal to valueDecimal
  conversion_id: string;
  products?: RedditProduct[];
}

// Interface for conversion event
interface RedditConversionEvent {
  event_at: string;
  event_type: {
    tracking_type: string;
  };
  click_id?: string;
  user?: RedditUser;
  event_metadata?: RedditEventMetadata;
}

// Interface for conversion API payload
interface RedditConversionPayload {
  test_mode: boolean;
  events: RedditConversionEvent[];
}

/**
 * Sends a conversion event to Reddit Conversions API
 * @param eventType The type of conversion event (e.g., 'PageVisit', 'Purchase', etc.)
 * @param userData Optional user data for better matching
 * @param metadata Optional event metadata
 * @param isTestMode Whether to send the event in test mode
 * @returns Promise that resolves when the event is sent
 */
export const sendRedditConversion = async (
  eventType: string,
  userData?: RedditUser,
  metadata?: Partial<RedditEventMetadata>,
  isTestMode: boolean = false
): Promise<boolean> => {
  try {
    // Create a unique conversion ID if not provided
    const conversionId = metadata?.conversion_id || `conv_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // If value_decimal exists in metadata, convert it to valueDecimal
    const modifiedMetadata = { ...metadata };
    if ((metadata as any)?.value_decimal !== undefined) {
      modifiedMetadata.valueDecimal = parseFloat((metadata as any).value_decimal.toString());
      delete (modifiedMetadata as any).value_decimal;
    }
    
    // Create the event payload
    const eventPayload: RedditConversionPayload = {
      test_mode: isTestMode,
      events: [
        {
          event_at: new Date().toISOString(),
          event_type: {
            tracking_type: eventType
          },
          user: userData,
          event_metadata: {
            ...modifiedMetadata,
            conversion_id: conversionId
          }
        }
      ]
    };

    // Send the event to Reddit Conversions API
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${REDDIT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Reddit Conversions API Error:', errorData);
      return false;
    }

    const responseData = await response.json();
    console.info('Reddit Conversion sent successfully:', responseData);
    return true;
  } catch (error) {
    console.error('Failed to send Reddit conversion:', error);
    return false;
  }
};

/**
 * Tracks a page view using Reddit Conversions API
 * @param url Optional URL of the page
 * @param isTestMode Whether to send the event in test mode
 */
export const trackRedditPageViewAPI = async (url?: string, isTestMode: boolean = false): Promise<void> => {
  // Get user agent and screen dimensions if in browser
  let userData: RedditUser = {};
  
  if (typeof window !== 'undefined') {
    userData = {
      ip_address: undefined, // Remove user_agent as it's causing issues
      screen_dimensions: {
        width: window.screen.width,
        height: window.screen.height
      }
    };
  }

  await sendRedditConversion('PageVisit', userData, {
    conversion_id: `pageview_${Date.now()}`,
    valueDecimal: 0 // Changed from value_decimal to valueDecimal
  }, isTestMode);
};

/**
 * Tracks a purchase event using Reddit Conversions API
 * @param value The value of the purchase
 * @param currency The currency of the purchase (default: USD)
 * @param products Optional array of products purchased
 * @param isTestMode Whether to send the event in test mode
 */
export const trackRedditPurchaseAPI = async (
  value: number,
  currency: string = 'USD',
  products?: RedditProduct[],
  isTestMode: boolean = false
): Promise<void> => {
  // Get user agent and screen dimensions if in browser
  let userData: RedditUser = {};
  
  if (typeof window !== 'undefined') {
    userData = {
      ip_address: undefined, // Remove user_agent as it's causing issues
      screen_dimensions: {
        width: window.screen.width,
        height: window.screen.height
      }
    };
  }

  await sendRedditConversion('Purchase', userData, {
    conversion_id: `purchase_${Date.now()}`,
    valueDecimal: parseFloat(value.toString()), // Changed from value_decimal to valueDecimal and ensure it's a float
    currency,
    products,
    item_count: products?.length || 1
  }, isTestMode);
};

/**
 * Tracks a custom event using Reddit Conversions API
 * @param eventType The type of event to track
 * @param metadata Optional event metadata
 * @param userData Optional user data
 * @param isTestMode Whether to send the event in test mode
 */
export const trackRedditCustomEventAPI = async (
  eventType: string,
  metadata?: Partial<RedditEventMetadata>,
  userData?: RedditUser,
  isTestMode: boolean = false
): Promise<void> => {
  // Get user agent and screen dimensions if in browser
  let userDataWithDefaults: RedditUser = { ...userData };
  
  if (typeof window !== 'undefined') {
    userDataWithDefaults = {
      ...userDataWithDefaults,
      ip_address: userDataWithDefaults.ip_address, // Remove user_agent as it's causing issues
      screen_dimensions: userDataWithDefaults.screen_dimensions || {
        width: window.screen.width,
        height: window.screen.height
      }
    };
  }

  // If value_decimal exists in metadata, convert it to valueDecimal
  const modifiedMetadata = { ...metadata };
  if ((metadata as any)?.value_decimal !== undefined) {
    modifiedMetadata.valueDecimal = parseFloat((metadata as any).value_decimal.toString());
    delete (modifiedMetadata as any).value_decimal;
  }

  await sendRedditConversion(eventType, userDataWithDefaults, {
    ...modifiedMetadata,
    conversion_id: metadata?.conversion_id || `${eventType.toLowerCase()}_${Date.now()}`
  }, isTestMode);
};
