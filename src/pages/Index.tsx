
import { useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import FeaturedProject from '@/components/FeaturedProject';
import About from '@/components/About';
import Education from '@/components/Education';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useLayoutEffect(() => {
    document.title = "Sajjad Haq - Front-End Developer";
    document.body.style.cursor = 'default';
    document.documentElement.style.overflow = "auto";
    document.body.style.overflowY = "auto";
    
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Clean, paper-like container */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg border-l border-r border-gray-200 dark:border-gray-700 min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedCaseStudy />
        <FeaturedProject />
        <About />
        <Education />
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
