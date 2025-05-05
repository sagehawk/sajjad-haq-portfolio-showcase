
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export interface ProjectProps {
  title: string;
  summary: string;
  tech: string[];
  details: string;
  image: string;
  link?: string;
  repo?: string;
  category: string;
  beforeImage?: string;
  mobileImage?: string;
  mobileImage2?: string;
  loomEmbed?: string;
  caption?: string;
  clientResults?: {
    name: string;
    result: string;
    image: string;
  }[];
  additionalImages?: {
    src: string;
    alt: string;
  }[];
}

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Special case for Articulate and Refine projects
  const getProjectLink = (project: ProjectProps) => {
    if (project.title.includes("Articulate") || project.title.includes("Refine")) {
      return "https://essay.sajjadhaq.com";
    }
    return project.link;
  };

  const projectLink = getProjectLink(project);

  return (
    <motion.div 
      className="flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Project Image with Dialog trigger */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative overflow-hidden aspect-[16/9] cursor-pointer">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </DialogTrigger>
        
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">Detailed view of {project.title} project</DialogDescription>
          
          <div className="p-2">
            {/* Main image & before/after images */}
            {project.beforeImage ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="overflow-hidden rounded-md">
                  <p className="text-xs font-medium text-center mb-1">Before</p>
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Before`} 
                    className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div className="overflow-hidden rounded-md">
                  <p className="text-xs font-medium text-center mb-1">After</p>
                  <img 
                    src={project.image} 
                    alt={`${project.title} - After`}
                    className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            ) : project.additionalImages ? (
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700" 
                    />
                  </CarouselItem>
                  {project.additionalImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                <CarouselNext className="right-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
              </Carousel>
            ) : project.mobileImage ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src={project.mobileImage} 
                      alt={`${project.title} - Mobile`} 
                      className="h-auto max-h-64 w-auto"
                    />
                  </div>
                  {project.mobileImage2 && (
                    <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                      <img 
                        src={project.mobileImage2} 
                        alt={`${project.title} - Mobile 2`} 
                        className="h-auto max-h-64 w-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="mb-4 rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                />
              </div>
            )}
            
            {/* Loom video embed if available */}
            {project.loomEmbed && (
              <div className="aspect-video w-full mb-4">
                <iframe 
                  src={project.loomEmbed} 
                  className="w-full h-full"
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            {/* Client results section */}
            {project.clientResults && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Client Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.clientResults.map((client, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <div className="flex items-start space-x-2">
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{client.name}</p>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                            {client.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Project details text */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.details}</p>
            </div>
            
            {/* Full tech stack list */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Links section */}
            <div className="flex flex-wrap gap-2">
              {projectLink && (
                <Button size="sm" asChild>
                  <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Visit Site
                  </a>
                </Button>
              )}
              {project.repo && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Project Content */}
      <div className="flex flex-col p-5 flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">{project.summary}</p>
        
        {/* Tech Stack */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tech.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {/* View Details button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
              <DialogDescription className="sr-only">Detailed view of {project.title} project</DialogDescription>
              
              <div className="p-2">
                {/* Main image & before/after images */}
                {project.beforeImage ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="overflow-hidden rounded-md">
                      <p className="text-xs font-medium text-center mb-1">Before</p>
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} - Before`} 
                        className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="overflow-hidden rounded-md">
                      <p className="text-xs font-medium text-center mb-1">After</p>
                      <img 
                        src={project.image} 
                        alt={`${project.title} - After`}
                        className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                ) : project.additionalImages ? (
                  <Carousel className="w-full mb-4">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700" 
                        />
                      </CarouselItem>
                      {project.additionalImages.map((img, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700" 
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                    <CarouselNext className="right-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                  </Carousel>
                ) : project.mobileImage ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="md:col-span-2">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                        <img 
                          src={project.mobileImage} 
                          alt={`${project.title} - Mobile`} 
                          className="h-auto max-h-64 w-auto"
                        />
                      </div>
                      {project.mobileImage2 && (
                        <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                          <img 
                            src={project.mobileImage2} 
                            alt={`${project.title} - Mobile 2`} 
                            className="h-auto max-h-64 w-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                )}
                
                {/* Loom video embed if available */}
                {project.loomEmbed && (
                  <div className="aspect-video w-full mb-4">
                    <iframe 
                      src={project.loomEmbed} 
                      className="w-full h-full"
                      frameBorder="0" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                {/* Client results section */}
                {project.clientResults && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Client Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.clientResults.map((client, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                          <div className="flex items-start space-x-2">
                            <img 
                              src={client.image} 
                              alt={client.name} 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">{client.name}</p>
                              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                                {client.result}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Project details text */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.details}</p>
                </div>
                
                {/* Full tech stack list */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Links section */}
                <div className="flex flex-wrap gap-2">
                  {projectLink && (
                    <Button size="sm" asChild>
                      <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Visit Site
                      </a>
                    </Button>
                  )}
                  {project.repo && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
