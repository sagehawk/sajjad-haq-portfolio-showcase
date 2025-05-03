
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProjectProps {
  title: string;
  summary: string;
  tech: string[];
  details: string;
  link?: string;
  repo?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-gray-100">
        <div className="p-6">
          <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="bg-gray-100">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="border-navy text-navy hover:bg-navy hover:text-white"
            onClick={() => setIsOpen(true)}
          >
            See More
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-700">
              {project.summary}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
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
            
            <div className="flex flex-wrap gap-3 pt-2">
              {project.link && (
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-navy hover:bg-navy/90">
                    Visit Project
                  </a>
                </Button>
              )}
              {project.repo && (
                <Button variant="outline" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    View Repository
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
