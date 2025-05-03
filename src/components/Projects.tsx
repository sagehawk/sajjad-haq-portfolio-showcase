
import ProjectCard, { ProjectProps } from "./ProjectCard";

// Define projects data
const projects: ProjectProps[] = [
  {
    title: "Essay Editor (Articulate & Refine)",
    summary: "AI-powered essay tool built from scratch for writing, rewriting, and restructuring content using Google Gemini.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Shadcn UI", "React Hook Form", "Radix UI", "Supabase (planned)", "React Query", "Google Gemini API", "LocalStorage"],
    details: "Created a multi-step editor where users can generate rewrites with AI, reorder paragraphs via drag-and-drop, and save progress in localStorage. Integrated toast feedback, modular components, and light/dark mode. Deployed with Vercel serverless functions for API calls. Built for a university independent study.",
  },
  {
    title: "MA Food Group",
    summary: "Developed a full commercial website with dynamic job application forms and smooth UI animations.",
    tech: ["HTML5", "CSS3", "Bootstrap 4", "jQuery", "Owl Carousel", "AJAX", "Waypoints", "Form validation"],
    details: "Implemented dynamic job forms (add/remove entries, validation), scroll animations, counters, and lightboxes. Designed for performance and clarity across devices. Wrote clean, componentized code using vanilla JS and Bootstrap grid.",
    link: "https://mafoodgroup.com",
  },
  {
    title: "NDM Capital LLC",
    summary: "Rebuilt a private equity firm's website — from salesy landing page to authoritative, content-focused design.",
    tech: ["Squarespace (Fluid Engine)", "HTML/CSS", "CMS configuration", "Custom layout blocks", "Video backgrounds"],
    details: "Led both versions of the project. Started with a Bootstrap theme, then migrated to Squarespace for structure, performance, and credibility. Managed content architecture, responsive design, SEO meta config, and form integrations.",
    link: "https://ndmcapitalllc.com",
  },
  {
    title: "Contract Clarity MVP",
    summary: "Collaborative tool for uploading and managing AI-extracted metadata from contracts (PDF/DOCX).",
    tech: ["React", "TypeScript", "TailwindCSS", "Shadcn UI", "Supabase (Storage + DB)", "React Router", "Toast notifications"],
    details: "Built a responsive dashboard with sidebar navigation, contract upload form, file validation, and preview. Connected to Supabase for file and metadata storage. UI supports manual overrides and real-time status toasts. Built with cousins using Lovable.dev + ChatGPT for architectural planning.",
  },
  {
    title: "Discord Gas Bot",
    summary: "Custom Discord bot to log family car usage, expenses, and split balances fairly.",
    tech: ["Python", "discord.py", "UI components (Views, Selects)", "Ephemeral messaging"],
    details: "Designed slash commands like /filled, /balance, and /settle. Created dropdown-based UI for multi-step interactions. Used ephemeral messages for private feedback and formatted summaries for public logs. Streamlined how multiple drivers track and split fuel costs.",
    repo: "https://github.com/sagehawk/gas_bot",
  },
  {
    title: "Ceramic Catalysts",
    summary: "Long-running marketing agency project featuring landing pages with custom JavaScript enhancements.",
    tech: ["HTML5", "CSS3 (with variables/media queries)", "JavaScript", "jQuery", "intl-tel-input", "3rd-party APIs"],
    details: "Built comparison sliders, dynamic forms, and geo-targeted content using APIs. Integrated validation tools and UI plugins. Experience working inside custom web builders with code injection and layout overrides. Focused on clean, performant, mobile-first design.",
    link: "https://ceramiccatalysts.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
