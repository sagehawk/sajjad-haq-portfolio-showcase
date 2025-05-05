
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { setupParallaxEffect } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations after component mount
    setupScrollAnimation();
    
    // Set up parallax effects
    setupParallaxEffect();
    
    // Update document title
    document.title = "Sajjad Haq - Front-End Developer";
    
    // Set cursor to default
    document.body.style.cursor = 'default';
    
    // Add these meta tags for performance optimization
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    // Add preconnect links for faster resource loading
    const preconnectDomains = [
      'https://fonts.googleapis.com', 
      'https://fonts.gstatic.com', 
      'https://lh3.googleusercontent.com',
      'https://ghchart.rshah.org',
      'https://i.imgur.com'
    ];
    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
    
    // Preload the GitHub contribution chart
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://ghchart.rshah.org/sagehawk';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
    
    // Preload OG Image
    const ogImagePreloadLink = document.createElement('link');
    ogImagePreloadLink.rel = 'preload';
    ogImagePreloadLink.href = 'https://i.imgur.com/tPczn3X.png';
    ogImagePreloadLink.as = 'image';
    document.head.appendChild(ogImagePreloadLink);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
