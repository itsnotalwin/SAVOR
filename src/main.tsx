import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register Service Worker for PWA Offline mode
if ('serviceWorker' in navigator && (process.env.NODE_ENV === 'production' || location.hostname !== 'localhost')) {
  window.addEventListener('load', () => {
    const swUrl = new URL('sw.js', import.meta.url).href;
    navigator.serviceWorker.register(swUrl).catch((err) => {
      console.log('SW registration failed: ', err);
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
