
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProject = () => {
  const caseStudies = [
    {
      title: "GamerGrave",
      impact: "Community-driven platform for classic arcade games, optimized for performance",
      description: "A project focused on front-end performance and data handling, built to master concepts like infinite scrolling, client-side filtering, and building a custom component library with React and Supabase.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
      link: "https://gg.sajjadhaq.com",
      metrics: "75% reduction in LCP time, Full-stack architecture, Community submissions",
      caseStudyLink: "/case-study/gamergrave"
    },
    
    {
      title: "Simple Phonics",
      impact: "Mobile-first learning app solving complex UI challenges",
      description: "A deep dive into complex UI/UX challenges, this project was built to master native-like mobile gestures and the architectural patterns required for full right-to-left (RTL) language support.",
      tech: ["React", "TypeScript", "Mobile UX", "RTL Support"],
      link: "https://phonics.sajjadhaq.com",
      metrics: "Native-like gestures, RTL language support, Cross-device compatibility",
      caseStudyLink: "/case-study/simple-phonics"
    }
  ];

  return (
    <section id="featured-project" className="py-16 px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects where I've explored specific technologies and solved unique challenges.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.impact}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                    <strong>Key Metrics:</strong> {project.metrics}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.link !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Live Site
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-blue-600 hover:text-blue-700 text-xs"
                    onClick={() => {
                      if (project.caseStudyLink !== "#") {
                        window.location.href = project.caseStudyLink;
                      }
                    }}
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
