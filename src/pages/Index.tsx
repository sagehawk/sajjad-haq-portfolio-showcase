
import { useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Paper-like container with margins */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl">
        <Navbar />
        <Hero />
        <FeaturedProject />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
