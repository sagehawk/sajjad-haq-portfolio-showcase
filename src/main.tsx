
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use requestIdleCallback for non-critical rendering when browser is idle
const renderApp = () => {
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
