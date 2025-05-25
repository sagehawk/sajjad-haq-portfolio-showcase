
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Define the tech stacks with appropriate categories based on resume
const techStacks = [
  {
    category: "Core Technologies",
    techs: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    techs: ["React", "Vite", "Tailwind CSS", "Shadcn UI", "Bootstrap", "jQuery"],
  },
  {
    category: "Tools & Platforms",
    techs: ["Git", "GitHub", "VS Code", "Vercel", "Supabase", "Squarespace"],
  },
  {
    category: "Specializations",
    techs: ["Performance Optimization", "Component Architecture", "API Integration", "UI/UX Principles"],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-charcoal dark:text-white relative pb-4 inline-block">
          About Me
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#2563EB] rounded-full"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Sajjad Haq, a front-end developer and founder of Ceramic Catalysts. I specialize in building high-performance, user-centric web applications that drive real business results.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal dark:text-white">Proven Track Record:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Reduction in bounce rates</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">18%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Boost in conversion rates</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">42+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients scaled</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">&lt;700ms</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Load times achieved</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach combines technical excellence with business acumen. I don't just write code—I create solutions that solve real problems and drive measurable growth.
              </p>
            </div>

            <div className="mt-8 md:hidden">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNraD68unEHd3tnsUdDhMbPAhqRFlLaABuiagqM5yL9ZN_Hctl1V_IWZiDAQR9PPrJINXPrS0TKCpCJIFLDhijpmdX5M6u6O_D0RFyRB5Jki60Z2fhIZyCoYkVbyXngQXNjFaMLIg7DuPQ8Qag7U1JaGw=w1187-h890-s-no-gm" 
                alt="Sajjad working on laptop" 
                className="w-full h-auto rounded-lg shadow-md object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hidden md:block mb-6">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNraD68unEHd3tnsUdDhMbPAhqRFlLaABuiagqM5yL9ZN_Hctl1V_IWZiDAQR9PPrJINXPrS0TKCpCJIFLDhijpmdX5M6u6O_D0RFyRB5Jki60Z2fhIZyCoYkVbyXngQXNjFaMLIg7DuPQ8Qag7U1JaGw=w1187-h890-s-no-gm" 
                alt="Sajjad working on laptop" 
                className="w-full h-auto rounded-lg shadow-md object-cover aspect-video"
                loading="lazy"
              />
            </div>
          
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Tech Stack</h3>
              <div className="space-y-4">
                {techStacks.map((stack, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium",
                            index === 0 ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300" :
                            index === 1 ? "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300" :
                            index === 2 ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300" :
                            "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
