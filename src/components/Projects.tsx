
import { useState } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
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

// Define projects data
const projects: ProjectProps[] = [
  {
    title: "Mystic Empowerment",
    summary: "A meditative web application for daily reflection and mindfulness with an elegant, flowing user journey.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Context API", "Custom Animations"],
    details: "Created a calming digital sanctuary with Portal Entry (captivating landing page), Invocation Prompt (thoughtful prompts based on time/mood), Reflection Space (serene journaling area), and Parting Mantra (inspirational quotes). Implemented custom animation sequences, centralized context for journey state management, ethereal visual aesthetics with fluid gradients, and responsive design across all devices.",
    image: "https://i.imgur.com/zLMA1fY.png",
    link: "https://mystic.sajjadhaq.com",
    featured: true,
    category: "React",
  },
  {
    title: "Essay Editor (Articulate & Refine)",
    summary: "AI-powered essay tool built from scratch for writing, rewriting, and restructuring content using Google Gemini.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Shadcn UI", "React Hook Form", "Radix UI", "Supabase (planned)", "React Query", "Google Gemini API", "LocalStorage"],
    details: "Created a multi-step editor where users can generate rewrites with AI, reorder paragraphs via drag-and-drop, and save progress in localStorage. Integrated toast feedback, modular components, and light/dark mode. Deployed with Vercel serverless functions for API calls. Built for a university independent study.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMafTZme3W3UGNAMml7H8VARJUTZq_hUNbyghShBrvbihJkDT4LZLs4XipXStISgFBwERvLHeTtN34EkoL5JrN9ZHY289ZbxgH19m93LBsDb2yMarNLU9x-Pu8EAGVBi_TnMJ2Zm9maj9KeAIlVdNqbAA=w1560-h890-s-no-gm",
    loomEmbed: "https://www.loom.com/embed/a23a4e6eb5c84918bcc719bf974cee29",
    category: "React",
    featured: true,
  },
  {
    title: "MA Food Group",
    summary: "Developed a full commercial website with dynamic job application forms and smooth UI animations.",
    tech: ["HTML5", "CSS3", "Bootstrap 4", "jQuery", "Owl Carousel", "AJAX", "Waypoints", "Form validation"],
    details: "Implemented dynamic job forms (add/remove entries, validation), scroll animations, counters, and lightboxes. Designed for performance and clarity across devices. Wrote clean, componentized code using vanilla JS and Bootstrap grid.",
    link: "https://mafoodgroup.com",
    image: "https://lh3.googleusercontent.com/pw/AP1GczO9laSc9jf_SPq6IWwrlzL7mEXKqQi1chtxyX44eHdlsbzuqEMr-8L5W3wiNi0GZg3-1bCVKclNdSGOqyOukXfgkr4iyBu93g3ll-gZhVbk64z2GnaPI6zxUcRLL2aThUEIORG_puU8jMaHw9li3OsM3Q=w1560-h890-s-no-gm",
    mobileImage: "https://lh3.googleusercontent.com/pw/AP1GczP-MdNLev23jYMcfj_FUwbNXShUQazQrbWV2HflwRqIcaV3NunvjpJrEuMHBfbS0n5wCHniR8dkXbE_iyFj0MCL8VcfxQu4Xv2s7v3QKOSqjy5Z5uHkgXS_V3TpxfCCuek1zyWzS3cf5d1M3sq2Vo1vXA=w318-h697-s-no-gm",
    mobileImage2: "https://lh3.googleusercontent.com/pw/AP1GczPmby1vJGXUFsjO-rHMdRpFL-56jj01X_egrALCY3xc27gWEKKNgBF_-24-qkUO-E6vygGMBmL1HhA2ajpKHyYs7DMfjgBCAX7wQOEtFM2yXkbJC6_OCbShS7fmGyyoLtLxe6oVmeWQt7MCu9VOTGc2dw=w316-h695-s-no-gm", 
    category: "CMS",
  },
  {
    title: "NDM Capital LLC",
    summary: "Rebuilt a private equity firm's website — from salesy landing page to authoritative, content-focused design.",
    tech: ["Squarespace (Fluid Engine)", "HTML/CSS", "CMS configuration", "Custom layout blocks", "Video backgrounds"],
    details: "Led both versions of the project. Started with a Bootstrap theme, then migrated to Squarespace for structure, performance, and credibility. Managed content architecture, responsive design, SEO meta config, and form integrations.",
    link: "https://ndmcapitalllc.com",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNyFoJNl0dp4ccOFbdiKZfUweJsfBtcoS8fq0raX99qTeSwkhhV-j1HLhs3-MdalHTz0l2pxr8LVlTQ3AlIEffIDIfX7oZGeENQSdN87jF5JIfOzZuVCCNCpeQn4JZahW_Ko_V-0DhX7dVTRyHQzonPkQ=w1560-h890-s-no-gm",
    beforeImage: "https://lh3.googleusercontent.com/pw/AP1GczMUR2_RpiSK6oF6e8hwvP5mO5NbEH0xZUpCLsgjy_PybJLn7zrGcNADjH_uRsJY5TFXHZcgpc1xzjuwT1yfLKxEANQ3wBaS7qQSs-a7n6R4VIq8bPcvO1pUxF4qxkYFb4YF3Lb8cNFpfLS99j8htcaYkA=w1559-h890-s-no-gm",
    category: "CMS",
  },
  {
    title: "Contract Clarity MVP",
    summary: "Collaborative tool for uploading and managing AI-extracted metadata from contracts (PDF/DOCX).",
    tech: ["React", "TypeScript", "TailwindCSS", "Shadcn UI", "Supabase (Storage + DB)", "React Router", "Toast notifications"],
    details: "Built a responsive dashboard with sidebar navigation, contract upload form, file validation, and preview. Connected to Supabase for file and metadata storage. UI supports manual overrides and real-time status toasts. Built with cousins using Lovable.dev + ChatGPT for architectural planning.",
    image: "https://i.imgur.com/wEo5YRv.png",
    additionalImages: [
      {
        src: "https://i.imgur.com/1NJvKwY.png",
        alt: "Contracts Section"
      },
      {
        src: "https://i.imgur.com/JPu2Utp.png",
        alt: "Alerts Section"
      }
    ],
    category: "React",
  },
  {
    title: "Discord Gas Bot",
    summary: "Custom Discord bot to log family car usage, expenses, and split balances fairly.",
    tech: ["Python", "discord.py", "UI components (Views, Selects)", "Ephemeral messaging"],
    details: "Designed slash commands like /filled, /balance, and /settle. Created dropdown-based UI for multi-step interactions. Used ephemeral messages for private feedback and formatted summaries for public logs. Streamlined how multiple drivers track and split fuel costs.",
    repo: "https://github.com/sagehawk/gas_bot",
    image: "https://i.imgur.com/bsNL5c6.gif",
    caption: "Live slash-command flow: dropdown → confirmation.",
    category: "Python",
  },
  {
    title: "Ceramic Catalysts",
    summary: "Long-running marketing agency project featuring landing pages with custom JavaScript enhancements.",
    tech: ["HTML5", "CSS3 (with variables/media queries)", "JavaScript", "jQuery", "intl-tel-input", "3rd-party APIs"],
    details: "Built comparison sliders, dynamic forms, and geo-targeted content using APIs. Integrated validation tools and UI plugins. Experience working inside custom web builders with code injection and layout overrides. Focused on clean, performant, mobile-first design.",
    link: "https://ceramiccatalysts.com",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP9LCQkxGKQpPH6Efcrm-xL0tTmtjRW7W3O194FuwJ0QDN2ZOab85fnNGVGUg6P6Tq1yRrVehpJ04NkscHoJ45WN7a9f_aWOPTNLGe84j1cQ9OaPf1UnbZfRWC0anQ33zpdjdJ2Tyiu9WNGX_lTMOOfIQ=w1560-h890-s-no-gm",
    clientResults: [
      {
        name: "Ethan",
        result: "$14,000+ jobs in 27 days",
        image: "https://lh3.googleusercontent.com/pw/AP1GczMbFkU5-TjMHVdCBbLAH97RQw7NVzAI_dPykLUiM0gK75_MrMAmyh35Hk67ewHeK_Wl18jDZy9kDv7stahvti9jXGTrddEuEV0ype1PDZnPaUP7aTUfWI0JuGUGT1zMj4O5BZFev-Vh9xi-z55lGPvD5Q=w951-h889-s-no-gm"
      },
      {
        name: "Alex Dorman",
        result: "18 jobs in 20 days",
        image: "https://lh3.googleusercontent.com/pw/AP1GczPdy589ULn_eafaM9J_86JFKbunR5748g-BvcFQ_BE7DusZrs54wO52fjR7UkV5J842Op-dEmzlIBMFi1gQ1ZTPAnwaT4zCjIrlOtfHimJvMMx0ShVbK3l9Vz2hZVnnweLB5pnngrw7ZZlkWHzQx6ZLqg=w954-h886-s-no-gm"
      },
      {
        name: "Zachary Mercer",
        result: "13 jobs in 10 days",
        image: "https://lh3.googleusercontent.com/pw/AP1GczMs73ibCitu__0-SfnJMgL37sa7IQrQBJsJ-pWclqqaHVJ4gP25kRx8hpJ2q7rhrKnd_GecDA27dO8BBiLe7j5KuCsLEWl43DyLkYDUE2L10kIwrybSUiqoQYPMJ7zA0Crbu9__mFoFzvOFmwGA7zeRnw=w877-h884-s-no-gm"
      }
    ],
    category: "CMS",
  },
];

// Define filter categories
const categories = ["All", "React", "CMS", "Python"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === "All" 
    ? projects.filter(project => !project.featured) 
    : projects.filter(project => project.category === activeFilter && !project.featured);
  
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  const renderFeaturedProjectDetails = (project: ProjectProps) => {
    return (
      <>
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
          {project.link && (
            <Button size="sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ChevronRight className="w-4 h-4 mr-2" /> Visit Site
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
      </>
    );
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title font-extrabold font-inter text-charcoal dark:text-white">Projects</h2>
        
        {/* Featured Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Featured Work</h3>
          
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="mb-16 last:mb-0"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[2fr,1fr]' : 'lg:grid-cols-[1fr,2fr] lg:flex-row-reverse'} gap-8 items-center`}>
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="mb-4">
                        <h4 className="text-3xl font-bold mb-3">{project.title}</h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.slice(0, 5).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 5 && (
                            <Badge variant="outline" className="text-sm">
                              +{project.tech.length - 5} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.link && (
                            <Button asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline">View Details</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
                              <DialogDescription className="sr-only">Detailed view of {project.title} project</DialogDescription>
                              <div className="p-2">
                                {renderFeaturedProjectDetails(project)}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
                          <DialogDescription className="sr-only">Detailed view of {project.title} project</DialogDescription>
                          <div className="p-2">
                            {renderFeaturedProjectDetails(project)}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">More Projects</h3>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-[#2563EB] hover:bg-[#2563EB]/90" 
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
