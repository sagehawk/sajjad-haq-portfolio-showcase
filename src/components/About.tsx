
import { cn } from "@/lib/utils";

// Define the tech stacks with appropriate categories
const techStacks = [
  {
    category: "Core",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    techs: ["React", "Vite", "Tailwind", "Shadcn UI", "Bootstrap", "jQuery"],
  },
  {
    category: "Tools & Platforms",
    techs: ["Supabase", "Squarespace", "Git", "Vercel"],
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
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-700">
              Sajjad Haq is a front-end web developer with experience across CMS platforms and modern JavaScript frameworks. He specializes in creating responsive, accessible interfaces that prioritize usability, clarity, and performance.
            </p>
            <p className="text-gray-700">
              His work ranges from drag-and-drop upload tools and AI-integrated dashboards to commercial websites with dynamic forms and content systems. He builds with clean code, modern tools, and a strong understanding of layout, state, and visual hierarchy.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-charcoal mb-4">Tech Stack</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
