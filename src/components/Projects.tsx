
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Primary projects (more prominent)
  const primaryProjects = [
    {
      title: "Nomad-Score",
      summary: "A full-stack discovery platform I architected to help digital nomads find hotels with verified Wi-Fi speeds. This was a deep dive into database design, API integration, and complex, multi-layered filtering.",
      details: "Nomad-Score is a comprehensive platform designed specifically for digital nomads who need reliable internet connectivity while traveling. I architected this full-stack solution from the ground up, focusing on database design for handling complex hotel data, API integrations with multiple travel services, and implementing sophisticated filtering systems. The platform features verified Wi-Fi speed data, location-based search, and multi-criteria filtering to help nomads make informed accommodation decisions.",
      image: "https://i.imgur.com/k6Mmnje.png",
      tech: ["React", "TypeScript", "Node.js", "Database Design", "API Integration", "Multi-layered Filtering"],
      link: "https://nomad-score.com",
      category: "Full-Stack Platform",
      featured: true
    },
    {
      title: "Simple Phonics",
      summary: "An interactive learning app that taught me a ton about solving tricky UI challenges, like native-like mobile gestures and supporting right-to-left (RTL) languages.",
      details: "Simple Phonics is an interactive educational application designed to teach phonetic sounds to young learners. This project challenged me to solve complex UI problems including implementing native-like mobile gestures for touch interactions and supporting right-to-left (RTL) languages for inclusive learning. The app focuses on creating an engaging, accessible learning experience with smooth animations and intuitive navigation that works seamlessly across different devices and languages.",
      image: "https://i.imgur.com/wtokzwx.png",
      tech: ["React", "TypeScript", "Mobile Gestures", "RTL Support", "Interactive UI", "Educational Design"],
      link: "https://phonics.sajjadhaq.com",
      category: "Educational App",
      featured: true
    }
  ];

  // Secondary projects (less prominent)
  const secondaryProjects = [
    {
      title: "GamerGrave",
      summary: "Architected and developed a full-stack game discovery platform with infinite scrolling, intelligent search/filtering, and user authentication.",
      details: "GamerGrave is a comprehensive full-stack gaming platform that revolutionizes how users discover and explore games. Architected with modern React architecture featuring advanced filtering systems, real-time data integration with gaming APIs, and a responsive design that works seamlessly across all devices.",
      image: "https://i.imgur.com/m9mV8Ga.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Supabase"],
      link: "https://gg.sajjadhaq.com",
      repo: "https://github.com/sagehawk/gamergrave",
      category: "Full-Stack Platform",
      featured: false
    },
    {
      title: "Ceramic Catalysts",
      summary: "Led design and development of client-facing web applications, AI automation tools, and internal systems for ceramic coating businesses.",
      details: "Ceramic Catalysts is an advanced AI-powered lead management and automation platform for ceramic coating businesses. As Founder/Lead Developer, I led the design and development of client-facing web applications, AI automation tools, and internal systems that significantly improved client outcomes and operational efficiency.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP9LCQkxGKQpPH6Efcrm-xL0tTmtjRW7W3O194FuwJ0QDN2ZOab85fnNGVGUg6P6Tq1yRrVehpJ04NkscHoJ45WN7a9f_aWOPTNLGe84j1cQ9OaPf1UnbZfRWC0anQ33zpdjdJ2Tyiu9WNGX_lTMOOfIQ=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Node.js", "AI Voice API", "SMS Automation", "CRM Integration"],
      category: "AI Automation Platform",
      featured: false
    },
    {
      title: "Contract Clarity",
      summary: "Professional contract management platform with intuitive dashboard design, deadline tracking, and notification systems.",
      details: "Contract Clarity provides businesses with a comprehensive solution for managing contracts and documents. The platform features an intuitive dashboard, automated deadline tracking, smart notifications, and seamless workflow management to ensure no important dates are missed.",
      image: "https://i.imgur.com/wEo5YRv.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Dashboard Design"],
      category: "Business Platform",
      featured: false
    }
  ];

  return (
    <section className="py-12 px-8 lg:px-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Primary Projects Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {primaryProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secondary Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
