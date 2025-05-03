
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
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title font-extrabold font-inter">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed">
              Sajjad Haq is a front-end developer specializing in React, TypeScript, TailwindCSS, and CMS platforms like Squarespace. He builds responsive, accessible interfaces that prioritize performance and user experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His work spans AI-integrated tools, dynamic forms, and polished marketing sites.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-extrabold text-charcoal mb-4 font-inter">Tech Stack</h3>
            <div className="space-y-4">
              {techStacks.map((stack, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-sm uppercase text-gray-500 font-medium">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-medium",
                          index === 0 ? "bg-blue-100 text-blue-800" :
                          index === 1 ? "bg-purple-100 text-purple-800" :
                          index === 2 ? "bg-green-100 text-green-800" :
                          "bg-amber-100 text-amber-800"
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
