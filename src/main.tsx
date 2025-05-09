
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload critical assets immediately
const preloadCriticalAssets = () => {
  const criticalImages = [
    'https://ghchart.rshah.org/sagehawk',
    'https://i.imgur.com/zLMA1fY.png'
  ];
  
  criticalImages.forEach(url => {
    const img = new Image();
    img.fetchPriority = 'high';
    img.src = url;
  });
};

// Preload non-critical assets when browser is idle
const preloadNonCriticalAssets = () => {
  const nonCriticalImages = [
    // Add any non-critical images here
  ];
  
  nonCriticalImages.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// Render app and preload critical assets immediately
const renderApp = () => {
  preloadCriticalAssets();
  
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
    
    // Preload non-critical assets when browser is idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadNonCriticalAssets);
    } else {
      setTimeout(preloadNonCriticalAssets, 1000);
    }
  }
};

// Start rendering immediately
renderApp();
