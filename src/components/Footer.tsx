
import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Heart, Code2, Rocket } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sajjadhaq",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      href: "https://github.com/sagehawk",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-purple-400"
    },
    {
      name: "Email",
      href: "mailto:haq.sajjad220@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "hover:text-emerald-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  Sajjad Haq
                </h3>
                <p className="text-gray-300 text-lg mb-4">Front-End Developer</p>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  A Chicago-based front-end developer with a passion for building exceptional digital products. Let's connect.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="text-gray-400">
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:haq.sajjad220@gmail.com" className="hover:text-blue-400 transition-colors">
                    haq.sajjad220@gmail.com
                  </a>
                </div>
                <div className="text-gray-400">
                  <div className="font-medium text-white">Phone</div>
                  <a href="tel:224.499.4517" className="hover:text-blue-400 transition-colors">
                    224.499.4517
                  </a>
                </div>
                <div className="text-gray-400">
                  <div className="font-medium text-white">Location</div>
                  <span>South Barrington, IL</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 bg-white/10 text-gray-400 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color} hover:bg-white/20`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; {currentYear} Sajjad Haq. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>and</span>
                <Rocket className="w-4 h-4 text-blue-400" />
                <span>in React</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
