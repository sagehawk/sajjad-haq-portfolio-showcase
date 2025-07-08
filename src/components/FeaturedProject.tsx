
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProject = () => {
  const caseStudies = [
    {
      title: "Ceramic Catalysts",
      impact: "Driving 40% lead growth for 50+ businesses through performance and AI",
      description: "Built and scaled a tech agency focused on the automotive detailing industry. Delivered performance-focused solutions that cut page load times to under 1s and used AI to dramatically improve lead conversion rates.",
      tech: ["React", "Next.js", "AI/Automation", "Performance Optimization"],
      link: "#",
      metrics: "40% increase in leads, <1s load times, 50+ businesses served"
    },
    {
      title: "Nomad-Score",
      impact: "Full-stack discovery platform with advanced filtering architecture",
      description: "Architected a comprehensive platform for digital nomads to find hotels with verified Wi-Fi speeds. Built with Supabase backend featuring complex, multi-layered filtering systems and location-based search.",
      tech: ["React", "TypeScript", "Supabase", "Database Design"],
      link: "https://nomad-score.com",
      metrics: "Full-stack architecture, Complex filtering, Location-based search"
    },
    {
      title: "Simple Phonics",
      impact: "Mobile-first learning app solving complex UI challenges",
      description: "Engineered an interactive educational application with native-like mobile gestures and right-to-left (RTL) language support. Focused on creating an engaging, accessible learning experience across different devices and languages.",
      tech: ["React", "TypeScript", "Mobile UX", "RTL Support"],
      link: "https://phonics.sajjadhaq.com",
      metrics: "Native-like gestures, RTL language support, Cross-device compatibility"
    }
  ];

  return (
    <section id="featured-work" className="py-16 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Case studies focused on problem-solving, technical architecture, and measurable business outcomes.
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

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                    <strong>Key Metrics:</strong> {project.metrics}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {project.link !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Site
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-blue-600 hover:text-blue-700"
                  >
                    Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
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
