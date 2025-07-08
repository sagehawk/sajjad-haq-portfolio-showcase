
import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sajjadhaq",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "GitHub", 
      href: "https://github.com/sagehawk",
      icon: <Github className="h-5 w-5" />
    },
    {
      name: "Email",
      href: "mailto:haq.sajjad220@gmail.com", 
      icon: <Mail className="h-5 w-5" />
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Sajjad Haq
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              A Chicago-based front-end developer with a passion for building exceptional digital products. Let's connect.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700">
            &copy; {currentYear} Sajjad Haq. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
