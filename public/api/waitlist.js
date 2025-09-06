// Mock API endpoint for development
// This file simulates the /api/waitlist endpoint

// Simple in-memory storage for demo purposes
const waitlist = [];

// Handle POST requests to /api/waitlist
if (typeof window !== 'undefined') {
  // Client-side mock for development
  const originalFetch = window.fetch;
  
  window.fetch = function(url, options) {
    if (url === '/api/waitlist' && options?.method === 'POST') {
      return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          const data = JSON.parse(options.body);
          waitlist.push({
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString()
          });
          
          console.log('Waitlist entry added:', data);
          console.log('Total entries:', waitlist.length);
          
          // Simulate success response
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({ success: true, message: 'Added to waitlist' })
          });
        }, 1000);
      });
    }
    
    // For all other requests, use original fetch
    return originalFetch.apply(this, arguments);
  };
}
