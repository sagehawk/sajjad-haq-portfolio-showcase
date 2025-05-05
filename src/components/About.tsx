
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Define the tech stacks with appropriate categories
const techStacks = [
  {
    category: "Core",
    techs: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    techs: ["React", "Vite", "Tailwind", "Shadcn UI", "Bootstrap", "jQuery"],
  },
  {
    category: "Platforms",
    techs: ["Supabase", "Squarespace", "Vercel", "Git"],
  },
  {
    category: "API & Integration",
    techs: ["REST API", "Discord UI", "Google Gemini", "Claude/Bedrock"],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title font-extrabold font-inter text-charcoal dark:text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Sajjad Haq. I take complex product requirements and turn them into blazingly fast, user-obsessed front-end apps using React, TypeScript, TailwindCSS, and Squarespace.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In my projects, I've:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Cut client bounce rates by 40% with responsive, accessible designs.</li>
                <li>Delivered AI-powered dashboards in under two weeks.</li>
                <li>Launched marketing sites that generated 18+ job applications in 20 days.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My obsession is speed, clarity, and ROI—so every line of code converts browsers into customers.
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
              <h3 className="text-xl font-extrabold text-charcoal dark:text-white mb-4 font-inter">Tech Stack</h3>
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
