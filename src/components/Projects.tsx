
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
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
    },
    {
      title: "GamerGrave",
      summary: "Architected and developed a full-stack game discovery platform with infinite scrolling, intelligent search/filtering, and user authentication. Built custom, accessible UI components with pixel-perfect responsive design.",
      details: "GamerGrave is a comprehensive full-stack gaming platform that revolutionizes how users discover and explore games. Architected with modern React architecture featuring advanced filtering systems, real-time data integration with gaming APIs, and a responsive design that works seamlessly across all devices. The platform includes user authentication, personalized recommendations, infinite scrolling, and an intuitive interface that makes game discovery effortless. Built with custom, accessible UI components focusing on optimal user experience and performance.",
      image: "https://i.imgur.com/m9mV8Ga.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Supabase"],
      link: "https://gg.sajjadhaq.com",
      repo: "https://github.com/sagehawk/gamergrave",
      category: "Full-Stack Platform",
      featured: true
    },
    {
      title: "Essay Editor",
      summary: "Engineered an AI-powered essay editing tool from scratch, integrating Google Gemini API for advanced text generation. Designed a clean, intuitive UI for efficient content editing and enhanced user interaction.",
      details: "Essay Editor is an AI-powered writing assistant that leverages cutting-edge technology to provide intelligent writing assistance. Engineered from scratch with Google's Gemini API integration to offer real-time suggestions, grammar corrections, and content improvements. Features a distraction-free writing environment, AI-powered content generation, clean and intuitive UI design, and seamless export options. Built with focus on user experience and efficient content editing workflow.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMafTZme3W3UGNAMml7H8VARJUTZq_hUNbyghShBrvbihJkDT4LZLs4XipXStISgFBwERvLHeTtN34EkoL5JrN9ZHY289ZbxgH19m93LBsDb2yMarNLU9x-Pu8EAGVBi_TnMJ2Zm9maj9KeAIlVdNqbAA=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API"],
      link: "https://essay.sajjadhaq.com",
      repo: "https://github.com/sagehawk/essay-editor",
      category: "AI Application",
      featured: true
    },
    {
      title: "Ceramic Catalysts",
      summary: "Led design and development of client-facing web applications, AI automation tools, and internal systems. Developed AI SMS/voice bot responding in 30s, implemented 'press 1' auto-dialer, and automated CRM dashboards for 50+ shops.",
      details: "Ceramic Catalysts is an advanced AI-powered lead management and automation platform for ceramic coating businesses. As Founder/Lead Developer, I led the design and development of client-facing web applications, AI automation tools, and internal systems that significantly improved client outcomes and operational efficiency. Key achievements include dropping landing-page load below 1s (bounce ↓ 40%, form fills ↑ 41%), developing AI SMS/voice bot responding in 30s (lead-to-call rate ↑ 50%), implementing 'press 1' auto-dialer (no-shows ↓ 25%, clients save 15 hr/week), and automating CRM dashboards for 50+ shops with average revenue increase of $50K.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP9LCQkxGKQpPH6Efcrm-xL0tTmtjRW7W3O194FuwJ0QDN2ZOab85fnNGVGUg6P6Tq1yRrVehpJ04NkscHoJ45WN7a9f_aWOPTNLGe84j1cQ9OaPf1UnbZfRWC0anQ33zpdjdJ2Tyiu9WNGX_lTMOOfIQ=w1560-h890-s-no-gm",
      tech: ["React", "TypeScript", "Node.js", "AI Voice API", "SMS Automation", "CRM Integration", "Express", "Supabase"],
      category: "AI Automation Platform",
      featured: true
    },
    {
      title: "Contract Clarity",
      summary: "Professional contract management platform with intuitive dashboard design, deadline tracking, and notification systems for streamlined document workflow and enhanced productivity.",
      details: "Contract Clarity provides businesses with a comprehensive solution for managing contracts and documents. The platform features an intuitive dashboard, automated deadline tracking, smart notifications, and seamless workflow management to ensure no important dates are missed.",
      image: "https://i.imgur.com/wEo5YRv.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Dashboard Design"],
      category: "Business Platform",
      featured: true
    }
  ];

  return (
    <section id="projects" className="relative py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my most complex and impactful projects, showcasing technical depth, 
              product thinking, and scalable architecture solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
