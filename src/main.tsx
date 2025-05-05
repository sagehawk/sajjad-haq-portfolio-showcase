
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload critical assets
const preloadAssets = () => {
  // Add any critical assets to preload here
  const criticalImages = [
    'https://ghchart.rshah.org/sagehawk'
  ];
  
  criticalImages.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// Use requestIdleCallback for non-critical rendering when browser is idle
const renderApp = () => {
  // Preload assets in the background
  preloadAssets();
  
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

// Use requestIdleCallback for non-critical rendering when browser is idle
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(renderApp);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(renderApp, 1);
}
