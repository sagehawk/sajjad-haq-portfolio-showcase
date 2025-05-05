
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
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations after component mount
    setupScrollAnimation();
    
    // Set up parallax effects
    setupParallaxEffect();
    
    // Update document title
    document.title = "Sajjad Haq - Front-End Developer";
    
    // Remove the custom cursor styling (now using default cursor)
    document.body.style.cursor = 'default';
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
