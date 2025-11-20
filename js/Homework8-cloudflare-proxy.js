/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 * 
 * 
 * https://weather-proxy.berenyia1.workers.dev/MTR/86/95
 * 
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
                    'Access-Control-Allow-Origin': '*', // allow CORS
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