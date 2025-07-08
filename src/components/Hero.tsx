
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin, Code, Zap, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="px-8 lg:px-16 py-16 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Available for hire
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Front-End
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>South Barrington, IL</span>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                A product-minded front-end developer focused on building scalable, user-centric applications.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-2 mx-auto">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">SMBs Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-2 mx-auto">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">&lt;1s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Load Times</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://resume.sajjadhaq.com', '_blank')}
              >
                View Resume
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">Connect:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/sagehawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/sajjadhaq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczMBcBd4sSTy91VtLs7oEe8jK24lYRmNT3Eh6ueBoZ_w5zCNx7rYiBPUIR9m1fs29rkiZCi0AAj8LjJmiudPoAR70Ao9Pp3_mArBkdMk1W3k32Tu9UEtk071zvUOBM-Knwto-MOoTUGXsgvJgm00u8s6lw=w890-h890-s-no-gm" 
                  alt="Sajjad Haq - Front-End Developer" 
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
