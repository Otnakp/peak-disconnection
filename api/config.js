export default function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Set CORS headers to allow your domain
    const origin = req.headers.origin;
    const allowedOrigins = [
        'https://peakdisconnection.com',
        'https://www.peakdisconnection.com',
        'http://localhost:3000', // for local development
        'http://localhost:5000',
        'http://127.0.0.1:3000',
    ];

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Return the configuration
    const config = {
        supabaseUrl: process.env.SUPABASE_URL || 'https://bkoslwlgrigxiywbmarz.supabase.co',
        supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    };

    // Make sure the anon key exists
    if (!config.supabaseAnonKey) {
        return res.status(500).json({ error: 'Configuration missing' });
    }

    res.status(200).json(config);
} 