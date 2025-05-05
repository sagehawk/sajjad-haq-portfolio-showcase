
import { animate, motion } from "framer-motion";

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Remove the custom cursor initialization - using default cursor now
export const customCursorInit = () => {
  // Function kept for compatibility but no longer adds custom cursor
  return;
};

export const setupParallaxEffect = () => {
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax for background elements
      const backgrounds = document.querySelectorAll('.parallax-bg');
      backgrounds.forEach((bg) => {
        (bg as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
      });
      
      // Parallax for midground elements
      const midgrounds = document.querySelectorAll('.parallax-mid');
      midgrounds.forEach((mid) => {
        (mid as HTMLElement).style.transform = `translateY(${scrollY * 0.6}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }
};
