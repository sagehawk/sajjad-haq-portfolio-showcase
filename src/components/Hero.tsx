

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const navigateToSocialDojoCaseStudy = () => {
    window.location.href = '/case-study/social-dojo';
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="px-6 lg:px-12 py-16 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Sajjad Haq
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              A developer who thinks like a founder.
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I build high-performance web applications with a focus on measurable business outcomes. 
              Having run my own tech agency, I bridge the gap between sophisticated engineering and 
              the bottom-line results that drive a business forward.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium"
              onClick={navigateToSocialDojoCaseStudy}
            >
              View My Featured Project
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 font-medium"
              onClick={() => window.open('https://resume.sajjadhaq.com', '_blank')}
            >
              View Resume
            </Button>
          </div>

          {/* Professional Links */}
          <div className="flex justify-center gap-6 pt-6">
            <a 
              href="https://linkedin.com/in/sajjadhaq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/sagehawk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:haq.sajjad220@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

