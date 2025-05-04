
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { customCursorInit, setupParallaxEffect } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations after component mount
    setupScrollAnimation();
    
    // Set up custom cursor
    customCursorInit();
    
    // Set up parallax effects
    setupParallaxEffect();
    
    // Update document title
    document.title = "Sajjad Haq - Front-End Developer";
    
    // Add CSS for custom cursor
    document.body.style.cursor = 'none';
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
