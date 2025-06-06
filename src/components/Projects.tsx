
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "GamerGrave",
      summary: "A comprehensive game discovery platform built with React and TypeScript. Features infinite scrolling, intelligent search/filtering, user authentication, and a responsive design optimized for gaming enthusiasts.",
      details: "GamerGrave is a full-stack gaming platform that revolutionizes how users discover and explore games. Built with modern React architecture, it features advanced filtering systems, real-time data integration with gaming APIs, and a responsive design that works seamlessly across all devices. The platform includes user authentication, personalized recommendations, and an intuitive interface that makes game discovery effortless.",
      image: "https://i.imgur.com/m9mV8Ga.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Supabase"],
      link: "https://gg.sajjadhaq.com",
      repo: "https://github.com/sagehawk/gamergrave",
      category: "Web Application",
      featured: true
    },
    {
      title: "Essay Editor",
      summary: "An AI-powered writing assistant that helps users create, edit, and improve their essays. Integrates Google Gemini API for advanced text generation and editing suggestions with a clean, intuitive interface.",
      details: "Essay Editor leverages cutting-edge AI technology to provide intelligent writing assistance. The application integrates with Google's Gemini API to offer real-time suggestions, grammar corrections, and content improvements. Features include a distraction-free writing environment, AI-powered content generation, and seamless export options.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMafTZme3W3UGNAMml7H8VARJUTZq_hUNbyghShBrvbihJkDT4LZLs4XipXStISgFBwERvLHeTtN34EkoL5JrN9ZHY289ZbxgH19m93LBsDb2yMarNLU9x-Pu8EAGVBi_TnMJ2Zm9maj9KeAIlVdNqbAA=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API"],
      link: "https://essay.sajjadhaq.com",
      repo: "https://github.com/sagehawk/essay-editor",
      category: "AI Application",
      featured: true
    },
    {
      title: "Ceramic Catalysts",
      summary: "Advanced AI-powered lead management system for ceramic coating shops. Features automated AI voice assistants that instantly call leads, book appointments, and connect shop owners seamlessly for higher conversion rates.",
      details: "Ceramic Catalysts revolutionizes lead management for ceramic coating businesses with cutting-edge AI automation. The system features an intelligent voice assistant that immediately calls incoming leads, books appointments through natural conversation, and automatically connects shop owners at the scheduled time. This seamless automation has dramatically increased conversion rates and reduced missed opportunities for our clients.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP9LCQkxGKQpPH6Efcrm-xL0tTmtjRW7W3O194FuwJ0QDN2ZOab85fnNGVGUg6P6Tq1yRrVehpJ04NkscHoJ45WN7a9f_aWOPTNLGe84j1cQ9OaPf1UnbZfRWC0anQ33zpdjdJ2Tyiu9WNGX_lTMOOfIQ=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Node.js", "AI Voice API", "Automation", "CRM Integration"],
      category: "AI Automation",
      featured: true
    },
    {
      title: "Mystic Empowerment",
      summary: "A mystical wellness platform focused on personal empowerment and spiritual growth. Features intuitive navigation, engaging content presentation, and responsive design for optimal user experience.",
      details: "Mystic Empowerment is a wellness platform designed to guide users on their spiritual journey. The site features engaging animations, intuitive navigation, and a mobile-first design approach. Built with modern web technologies to ensure fast loading times and smooth user interactions.",
      image: "https://i.imgur.com/zLMA1fY.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://mystic.sajjadhaq.com",
      repo: "https://github.com/sagehawk/mystic-empowerment",
      category: "Website"
    },
    {
      title: "MA Food Group",
      summary: "Corporate website for a food distribution company featuring modern design, comprehensive service information, and optimized performance for business conversion and client engagement.",
      details: "MA Food Group's corporate website showcases professional branding and optimized user experience for lead generation. The site features comprehensive service information, client testimonials, and performance optimization for fast loading times and high conversion rates.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczO9laSc9jf_SPq6IWwrlzL7mEXKqQi1chtxyX44eHdlsbzuqEMr-8L5W3wiNi0GZg3-1bCVKclNdSGOqyOukXfgkr4iyBu93g3ll-gZhVbk64z2GnaPI6zxUcRLL2aThUEIORG_puU8jMaHw9li3OsM3Q=w1560-h890-s-no-gm",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://mafoodgroup.com",
      category: "Corporate Website"
    },
    {
      title: "Contract Clarity",
      summary: "Professional contract management platform with intuitive dashboard design, deadline tracking, and notification systems for streamlined document workflow and enhanced productivity.",
      details: "Contract Clarity provides businesses with a comprehensive solution for managing contracts and documents. The platform features an intuitive dashboard, automated deadline tracking, smart notifications, and seamless workflow management to ensure no important dates are missed.",
      image: "https://i.imgur.com/wEo5YRv.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Dashboard Design"],
      category: "Business Platform"
    },
    {
      title: "NDM Capital",
      summary: "Professional financial services website with sophisticated design, clear service presentation, and optimized user journey for client acquisition and business growth.",
      details: "NDM Capital's website represents professional financial services with sophisticated design and clear service presentation. The site is optimized for client acquisition with strategic user journey design and performance optimization.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNyFoJNl0dp4ccOFbdiKZfUweJsfBtcoS8fq0raX99qTeSwkhhV-j1HLhs3-MdalHTz0l2pxr8LVlTQ3AlIEffIDIfX7oZGeENQSdN87jF5JIfOzZuVCCNCpeQn4JZahW_Ko_V-0DhX7dVTRyHQzonPkQ=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Tailwind CSS", "Performance Optimization"],
      link: "https://ndmcapitalllc.com/",
      category: "Financial Services"
    },
    {
      title: "Discord Gas Bot",
      summary: "An automated Discord bot for tracking gas prices and providing real-time updates to server members. Built with Python and Discord API integration for seamless server management.",
      details: "Discord Gas Bot is an automated solution for tracking and reporting gas prices in Discord servers. Built with Python and integrated with Discord's API, it provides real-time updates and automated notifications to help server members stay informed about fuel costs.",
      image: "https://i.imgur.com/bsNL5c6.gif",
      tech: ["Python", "Discord API", "Automation", "Real-time Data"],
      repo: "https://github.com/sagehawk/gas_bot",
      category: "Bot Development"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my latest work, demonstrating expertise in modern web technologies, 
              AI automation, and performance optimization.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">42+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Conversion Boost</div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge technology and exceptional user experience.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
