const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 
  (isLocalhost ? 'http://localhost:5000' : 'https://vb-6qy4.onrender.com');

export const API_BASE_URL = `${BACKEND_URL}/api`;
