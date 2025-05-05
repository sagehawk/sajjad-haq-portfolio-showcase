
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-[#EFF6FF] dark:from-[#1F2937] dark:to-[#111827] relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" strokeWidth="1" stroke="currentColor" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="section-container flex items-center justify-between">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal dark:text-white mb-6 font-inter leading-tight">
            Sajjad Haq — Front-End Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I build <span className="text-[#2563EB] dark:text-[#3B82F6]">responsive, AI-powered, content-focused</span> websites that balance business goals with thoughtful UI.
          </p>
          <Button 
            className="bg-[#2563EB] hover:bg-white hover:text-[#2563EB] border border-[#2563EB] text-white px-6 py-6 text-lg transition-colors duration-200 dark:hover:bg-transparent dark:hover:text-white mt-4"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
        </motion.div>
        
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMBcBd4sSTy91VtLs7oEe8jK24lYRmNT3Eh6ueBoZ_w5zCNx7rYiBPUIR9m1fs29rkiZCi0AAj8LjJmiudPoAR70Ao9Pp3_mArBkdMk1W3k32Tu9UEtk071zvUOBM-Knwto-MOoTUGXsgvJgm00u8s6lw=w890-h890-s-no-gm" 
            alt="Sajjad Haq" 
            className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
