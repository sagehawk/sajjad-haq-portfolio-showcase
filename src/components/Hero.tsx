
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.visibility = "visible";
      
      // Force browser to recalculate layout
      const forceReflow = () => {
        if (sectionRef.current) {
          sectionRef.current.style.opacity = "0.99";
          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.style.opacity = "1";
            }
          }, 10);
        }
      };
      
      // Force layout recalculation
      forceReflow();
      
      // Also force on orientation change and resize
      window.addEventListener('orientationchange', forceReflow);
      window.addEventListener('resize', forceReflow);
      
      return () => {
        window.removeEventListener('orientationchange', forceReflow);
        window.removeEventListener('resize', forceReflow);
      };
    }
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-[100vh] flex flex-col justify-center pt-16 bg-gradient-to-br from-white to-[#EFF6FF] dark:from-[#1F2937] dark:to-[#111827] relative overflow-hidden transition-colors duration-300"
      style={{ 
        visibility: 'hidden', // Start hidden until JS runs
        height: '100vh' // Fixed height rather than min-height
      }}
    >
      {/* Background pattern - using pointer-events-none to allow clicking through */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" strokeWidth="1" stroke="currentColor" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center md:justify-between relative z-10 mt-0">
        <div className="max-w-2xl">
          <div className="flex flex-col items-center md:items-start gap-4 mb-4">
            {isMobile && (
              <div className="mb-2">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczMBcBd4sSTy91VtLs7oEe8jK24lYRmNT3Eh6ueBoZ_w5zCNx7rYiBPUIR9m1fs29rkiZCi0AAj8LjJmiudPoAR70Ao9Pp3_mArBkdMk1W3k32Tu9UEtk071zvUOBM-Knwto-MOoTUGXsgvJgm00u8s6lw=w890-h890-s-no-gm" 
                  alt="Sajjad Haq" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                />
              </div>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal dark:text-white mb-4 font-inter leading-tight text-center md:text-left">
            Sajjad Haq — Front-End Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center md:text-left">
            I build <span className="text-[#2563EB] dark:text-[#3B82F6]">lightning-fast, pixel-perfect</span> web experiences that drive conversions and slash load times by up to 70%.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <Button 
              className="bg-[#2563EB] hover:bg-white hover:text-[#2563EB] border border-[#2563EB] text-white px-6 py-6 text-lg transition-colors duration-200 dark:hover:bg-transparent dark:hover:text-white mt-2 cursor-pointer relative z-20"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            
            <div className="flex gap-3 mt-2">
              <a 
                href="https://github.com/sagehawk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#3B82F6] transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sajjadhaq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#3B82F6] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMBcBd4sSTy91VtLs7oEe8jK24lYRmNT3Eh6ueBoZ_w5zCNx7rYiBPUIR9m1fs29rkiZCi0AAj8LjJmiudPoAR70Ao9Pp3_mArBkdMk1W3k32Tu9UEtk071zvUOBM-Knwto-MOoTUGXsgvJgm00u8s6lw=w890-h890-s-no-gm" 
            alt="Sajjad Haq" 
            className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
