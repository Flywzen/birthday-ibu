import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Self-hosted fonts (Fontsource) — same Playfair Display + Manrope pairing,
// same weights as before, just served from our own bundle instead of
// Google's CDN. No external font request, no render-blocking <link>, no
// third-party connection for the visitor.
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/500-italic.css';
import '@fontsource/playfair-display/600-italic.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Production-only: avoids firing analytics beacons/requests during
        local dev, where there's nothing useful for Speed Insights to
        collect anyway. */}
    {import.meta.env.PROD && <SpeedInsights />}
  </StrictMode>,
);