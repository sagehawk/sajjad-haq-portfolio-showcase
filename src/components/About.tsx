
import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    "React", "TypeScript", "Next.js", "JavaScript (ES6+)", 
    "Tailwind CSS", "Supabase", "Node.js", "Git & GitHub", "Figma"
  ];

  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Background: From Founder to Developer
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a developer who thinks like a founder because I've been one.
            </p>
            
            <p className="leading-relaxed">
              For the last few years, I founded and ran Ceramic Catalysts, a tech agency where I built 
              performance-focused solutions for the automotive detailing industry. This wasn't just about code; 
              it was about driving real business outcomes—like cutting page load times to under 1s to boost 
              ceramic coating leads by 40%, or using AI to slash lead response times and dramatically improve close rates.
            </p>
            
            <p className="leading-relaxed">
              After graduating with my CS degree, I've decided to go all-in on my passion for the craft itself. 
              I'm now seeking a full-time role where I can go deep on a single product, contribute to a team of 
              talented engineers, and help build scalable, user-centric applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
