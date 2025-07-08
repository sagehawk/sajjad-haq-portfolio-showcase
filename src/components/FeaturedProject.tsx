
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Brain, Type } from "lucide-react";

const FeaturedProject = () => {
  const essayEditor = {
    title: "Essay Editor",
    subtitle: "AI-Powered Writing Assistant",
    description: "Engineered an AI-powered essay editing tool from scratch, integrating Google Gemini API for advanced text generation. Designed a clean, intuitive UI for efficient content editing and enhanced user interaction.",
    fullDescription: "Essay Editor is an AI-powered writing assistant that leverages cutting-edge technology to provide intelligent writing assistance. Engineered from scratch with Google's Gemini API integration to offer real-time suggestions, grammar corrections, and content improvements. Features a distraction-free writing environment, AI-powered content generation, clean and intuitive UI design, and seamless export options. Built with focus on user experience and efficient content editing workflow.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMafTZme3W3UGNAMml7H8VARJUTZq_hUNbyghShbrvbihJkDT4LZLs4XipXStISgFBwERvLHeTtN34EkoL5JrN9ZHY289ZbxgH19m93LBsDb2yMarNLU9x-Pu8EAGVBi_TnMJ2Zm9maj9KeAIlVdNqbAA=w1560-h890-s-no-gm",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API"],
    link: "https://essay.sajjadhaq.com",
    repo: "https://github.com/sagehawk/essay-editor"
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Suggestions",
      description: "Real-time writing assistance powered by Google's Gemini API"
    },
    {
      icon: <Type className="w-6 h-6 text-purple-600" />,
      title: "Distraction-Free Editor",
      description: "Clean, intuitive interface designed for focused writing"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Smart Content Generation",
      description: "Intelligent content improvements and grammar corrections"
    }
  ];

  return (
    <section className="py-16 px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A deep dive into my most complex and impactful project showcasing technical depth and product thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={essayEditor.image}
                alt={essayEditor.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  AI Application
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {essayEditor.title}
                </h3>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                {essayEditor.subtitle}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {essayEditor.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features</h4>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{feature.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {essayEditor.tech.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href={essayEditor.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={essayEditor.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
