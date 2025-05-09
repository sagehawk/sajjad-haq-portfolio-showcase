
import { useEffect, useLayoutEffect } from 'react';
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
  // Use layout effect for critical DOM manipulations before paint
  useLayoutEffect(() => {
    // Set document title immediately
    document.title = "Sajjad Haq - Front-End Developer";
    
    // Set cursor to default immediately
    document.body.style.cursor = 'default';
    
    // Prevent layout shift by setting overflow to auto
    document.documentElement.style.overflow = "auto";
    document.body.style.overflowY = "auto";
    
    // Add critical meta tags immediately
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);
  
  // Use regular effect for non-critical operations
  useEffect(() => {
    // Set up preconnect links for resource loading
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
    
    // Set up scroll animations and parallax effect with requestAnimationFrame
    const setupAfterFirstPaint = () => {
      requestAnimationFrame(() => {
        setupScrollAnimation();
        setupParallaxEffect();
      });
    };
    
    // Delay animations until after content is visible
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(setupAfterFirstPaint);
    } else {
      setTimeout(setupAfterFirstPaint, 10);
    }
    
    // Preload critical images
    [
      'https://ghchart.rshah.org/sagehawk',
      'https://i.imgur.com/tPczn3X.png',
      'https://i.imgur.com/zLMA1fY.png'
    ].forEach(src => {
      const img = new Image();
      img.src = src;
    });
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
