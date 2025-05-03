
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

export interface ProjectProps {
  title: string;
  summary: string;
  tech: string[];
  details: string;
  link?: string;
  repo?: string;
  image?: string;
  mobileImage?: string;
  beforeImage?: string;
  afterImage?: string;
  loomEmbed?: string;
  clientResults?: {
    name: string;
    result: string;
    image?: string;
  }[];
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(project.image || '');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
          {project.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-extrabold text-charcoal mb-2 font-inter">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 3 && (
                <Badge variant="outline" className="bg-gray-100 text-gray-800">
                  +{project.tech.length - 3}
                </Badge>
              )}
            </div>
            
            <Button 
              className="bg-[#2563EB] hover:bg-white hover:text-[#2563EB] border border-[#2563EB] text-white transition-colors duration-200"
              onClick={() => setIsOpen(true)}
            >
              See More
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold font-inter">{project.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-700">
              {project.summary}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {project.image && (
              <div className="space-y-4">
                <div className="bg-gray-50 p-1 rounded-lg">
                  <img
                    src={activeImage || project.image}
                    alt={project.title}
                    className="w-full rounded object-contain max-h-[50vh]"
                  />
                </div>
                
                {(project.beforeImage || project.afterImage || project.mobileImage) && (
                  <div className="flex gap-2 flex-wrap">
                    {project.image && (
                      <button
                        onClick={() => setActiveImage(project.image!)}
                        className={`p-1 rounded ${activeImage === project.image ? 'ring-2 ring-[#2563EB]' : ''}`}
                      >
                        <img src={project.image} alt="Main view" className="h-16 w-auto object-cover rounded" />
                      </button>
                    )}
                    {project.beforeImage && (
                      <button
                        onClick={() => setActiveImage(project.beforeImage!)}
                        className={`p-1 rounded ${activeImage === project.beforeImage ? 'ring-2 ring-[#2563EB]' : ''}`}
                      >
                        <img src={project.beforeImage} alt="Before" className="h-16 w-auto object-cover rounded" />
                      </button>
                    )}
                    {project.afterImage && (
                      <button
                        onClick={() => setActiveImage(project.afterImage!)}
                        className={`p-1 rounded ${activeImage === project.afterImage ? 'ring-2 ring-[#2563EB]' : ''}`}
                      >
                        <img src={project.afterImage} alt="After" className="h-16 w-auto object-cover rounded" />
                      </button>
                    )}
                    {project.mobileImage && (
                      <button
                        onClick={() => setActiveImage(project.mobileImage!)}
                        className={`p-1 rounded ${activeImage === project.mobileImage ? 'ring-2 ring-[#2563EB]' : ''}`}
                      >
                        <img src={project.mobileImage} alt="Mobile view" className="h-16 w-auto object-cover rounded" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {project.loomEmbed && (
              <div className="aspect-video">
                <iframe
                  src={project.loomEmbed}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge key={index} className="bg-gray-100 text-gray-800">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="pt-2">
              <h4 className="font-semibold mb-2">Project Details</h4>
              <p className="text-gray-700 whitespace-pre-line">{project.details}</p>
            </div>
            
            {project.clientResults && project.clientResults.length > 0 && (
              <div className="pt-2">
                <h4 className="font-semibold mb-3">Client Results</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.clientResults.map((result, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      {result.image && (
                        <img src={result.image} alt={result.name} className="w-full h-auto rounded mb-3" />
                      )}
                      <p className="font-medium">{result.name}</p>
                      <p className="text-sm text-green-600">{result.result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 pt-4">
              {project.link && (
                <Button asChild className="bg-[#2563EB] hover:bg-white hover:text-[#2563EB] border border-[#2563EB]">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Project
                    <ExternalLink size={16} />
                  </a>
                </Button>
              )}
              {project.repo && (
                <Button variant="outline" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View Repository
                    <ExternalLink size={16} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
