/**
 * Cloudflare Worker worker acts as a proxy service to National Weather Service API, by allowing CORS requests.
 * 
 * https://dash.cloudflare.com/8c4f6ae0eea0ae3dd88f0242a9ca1b5b/workers/services/view/weather-proxy/production
 *
 * - Run "npx wrangler login" to log in to your Cloudflare account
 * - Run "npx wrangler dev" in your terminal to start a development server
 * - Open a browser tab at http://127.0.0.1:8787/MTR/86/95 to see your worker in action
 * - Run "npx wrangler publish" to deploy your worker to Cloudflare
 *
 * This worker accepts requests in the format: /GRID_ID/GRID_X/GRID_Y
 * Example: /MTR/86/95
 * It fetches weather forecast data from Weather.gov for the specified grid coordinates.
 * 
 * - CORS headers are included to allow cross-origin requests.
 * - A User-Agent header is set as required by Weather.gov API policy.
 * - Responses are cached for 5 minutes to reduce load on the Weather.gov API.
 * - Error handling is included for invalid requests and fetch failures.
 * 
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Parse the URL to get the grid coordinates
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Extract gridId, gridX, gridY from path like /MTR/86/95
    const match = path.match(/\/([A-Z]{3})\/(\d+)\/(\d+)/);
    
    if (!match) {
      return new Response(JSON.stringify({
        error: 'Invalid format. Use: /GRID_ID/GRID_X/GRID_Y (e.g., /MTR/86/95)'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const [, gridId, gridX, gridY] = match;
    const weatherUrl = `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`;

    try {
      // Fetch from Weather.gov with required User-Agent header
      const response = await fetch(weatherUrl, {
        headers: {
          'User-Agent': 'WeatherApp/1.0 (contact@example.com)',
        },
      });

      if (!response.ok) {
        throw new Error(`Weather.gov returned ${response.status}`);
      }

      const data = await response.json();

      // Return the data with CORS headers
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
