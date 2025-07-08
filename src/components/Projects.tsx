
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Additional projects with less prominence
  const additionalProjects = [
    {
      title: "GamerGrave",
      summary: "Full-stack game discovery platform with advanced search and filtering capabilities.",
      details: "A comprehensive gaming platform featuring infinite scrolling, intelligent search/filtering, user authentication, and real-time data integration with gaming APIs.",
      image: "https://i.imgur.com/m9mV8Ga.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      link: "https://gg.sajjadhaq.com",
      repo: "https://github.com/sagehawk/gamergrave",
      category: "Full-Stack Platform",
      featured: false
    },
    {
      title: "Contract Clarity",
      summary: "Professional contract management platform with deadline tracking and notifications.",
      details: "Provides businesses with comprehensive contract management featuring intuitive dashboard, automated deadline tracking, and smart notification systems.",
      image: "https://i.imgur.com/wEo5YRv.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Dashboard Design"],
      category: "Business Platform",
      featured: false
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => (
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
