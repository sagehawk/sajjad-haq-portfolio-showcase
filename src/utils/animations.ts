
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

export const customCursorInit = () => {
  if (typeof window !== 'undefined') {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Style the cursor
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.5)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'width 0.2s, height 0.2s, background-color 0.2s';

    // Add mouse tracking
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('.project-card')) {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.7)';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('.project-card')) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.5)';
      }
    });
  }
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
