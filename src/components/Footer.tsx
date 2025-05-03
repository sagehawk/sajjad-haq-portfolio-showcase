
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold font-inter">Sajjad Haq</p>
            <p className="text-gray-400 text-sm">Front-End Developer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/sajjadhaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:haq.sajjad220@gmail.com"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 p-2 hover:bg-white/10 rounded-full"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sajjad Haq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
