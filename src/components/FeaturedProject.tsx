
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Brain, Type, ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const essayEditor = {
    title: "Essay Editor",
    subtitle: "AI-Powered Writing Assistant",
    description: "Engineered an AI-powered essay editing tool from scratch, integrating Google Gemini API for advanced text generation. Features a clean, intuitive UI for efficient content editing and enhanced user interaction.",
    fullDescription: "Essay Editor is an AI-powered writing assistant that leverages cutting-edge technology to provide intelligent writing assistance. Currently expanding with login systems, automatic mindmap creation, and social learning features where users can view and match with others based on shared learning topics.",
    images: [
      { 
        src: "https://i.imgur.com/eYHWWx6.png", 
        title: "Hero Landing Page",
        description: "Clean, modern interface showcasing the AI writing assistant"
      },
      { 
        src: "https://i.imgur.com/kHV0iRu.png", 
        title: "Topic Question Page",
        description: "Interactive topic selection and question prompts"
      },
      { 
        src: "https://i.imgur.com/URY6e84.png", 
        title: "Full Editor View",
        description: "Complete writing environment with AI assistance"
      },
      { 
        src: "https://i.imgur.com/ImQtBnT.png", 
        title: "AI Coach Interface",
        description: "Real-time AI coaching and suggestions"
      }
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API", "Authentication"],
    link: "https://essay.sajjadhaq.com",
    repo: "https://github.com/sagehawk/essay-editor"
  };

  const features = [
    {
      icon: <Brain className="w-5 h-5 text-blue-600" />,
      title: "AI-Powered Suggestions",
      description: "Real-time writing assistance powered by Google's Gemini API"
    },
    {
      icon: <Type className="w-5 h-5 text-purple-600" />,
      title: "Distraction-Free Editor",
      description: "Clean, intuitive interface designed for focused writing"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
      title: "Smart Learning Features",
      description: "Upcoming: Mindmaps, social learning, and topic matching"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % essayEditor.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + essayEditor.images.length) % essayEditor.images.length);
  };

  return (
    <section className="py-12 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A deep dive into my most complex project showcasing technical depth and product thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800">
              <img 
                src={essayEditor.images[currentImageIndex].src}
                alt={essayEditor.images[currentImageIndex].title}
                className="w-full h-auto object-cover"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {essayEditor.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Image Caption */}
            <div className="mt-3 text-center">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                {essayEditor.images[currentImageIndex].title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {essayEditor.images[currentImageIndex].description}
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                  AI Application
                </Badge>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  {essayEditor.title}
                </h3>
              </div>
              <p className="text-base text-blue-600 dark:text-blue-400 font-medium mb-3">
                {essayEditor.subtitle}
              </p>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {essayEditor.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Key Features</h4>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {essayEditor.tech.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-3">
              <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs">
                <a href={essayEditor.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  View Live Demo
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="text-xs">
                <a href={essayEditor.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 mr-1.5" />
                  View Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
