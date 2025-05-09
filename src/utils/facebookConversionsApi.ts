
// Facebook Conversions API implementation

// Access token for the Facebook Conversions API
const ACCESS_TOKEN = 'EAAjl1nBGBiUBO13RCmpjHPU6fV0AaxxplAI7OZActhETsYf8LzsxeaEAL88kdYixTPh6IMuySYppNaBp2eXSXZAd2oNCm9rFCyw2m76N5M38j2Ub04sh7RjRdiUOAwLqLzfvNmOK8CHgGtSZAw7ZAXpDQDiEfMba77vrLtb5p6ZBrTMcv4oBkAb12ZAsmqysbgQwZDZD';
const PIXEL_ID = '989327389965266';
const API_VERSION = 'v18.0'; // Using the current stable version

// Generate a unique event ID
const generateEventId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
};

// Get user data from browser if available
const getUserData = (): Record<string, string> => {
  const userData: Record<string, string> = {};
  
  // Add user agent
  if (typeof navigator !== 'undefined') {
    userData.user_agent = navigator.userAgent;
  }
  
  // Add client IP (Note: In a real app, the server would add this)
  // Client IP is typically captured server-side
  
  return userData;
};

// Send event to Facebook Conversions API
export const sendServerEvent = async (
  eventName: string,
  eventId?: string,
  customData?: Record<string, any>
): Promise<void> => {
  try {
    // Skip if not in browser
    if (typeof window === 'undefined') return;
    
    const userData = getUserData();
    const timestamp = Math.floor(Date.now() / 1000);
    const finalEventId = eventId || generateEventId();
    
    const eventData = {
      event_name: eventName,
      event_time: timestamp,
      event_id: finalEventId,
      event_source_url: window.location.href,
      action_source: 'website',
      user_data: userData,
      custom_data: customData || {},
    };
    
    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
      }),
    });
    
    const result = await response.json();
    
    if (result && result.events_received) {
      console.log(`Facebook Conversions API: ${eventName} event sent successfully`);
    } else {
      console.warn('Facebook Conversions API: Failed to send event', result);
    }
  } catch (error) {
    console.error('Facebook Conversions API error:', error);
  }
};

// Track PageView event
export const trackServerPageView = (): void => {
  sendServerEvent('PageView');
};

// Track Contact event
export const trackServerContact = (): void => {
  sendServerEvent('Contact');
};
