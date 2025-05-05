import ProjectCard, { ProjectProps } from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Define projects data
const projects: ProjectProps[] = [
  {
    title: "Essay Editor (Articulate & Refine)",
    summary: "AI-powered essay tool built from scratch for writing, rewriting, and restructuring content using Google Gemini.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Shadcn UI", "React Hook Form", "Radix UI", "Supabase (planned)", "React Query", "Google Gemini API", "LocalStorage"],
    details: "Created a multi-step editor where users can generate rewrites with AI, reorder paragraphs via drag-and-drop, and save progress in localStorage. Integrated toast feedback, modular components, and light/dark mode. Deployed with Vercel serverless functions for API calls. Built for a university independent study.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMafTZme3W3UGNAMml7H8VARJUTZq_hUNbyghShBrvbihJkDT4LZLs4XipXStISgFBwERvLHeTtN34EkoL5JrN9ZHY289ZbxgH19m93LBsDb2yMarNLU9x-Pu8EAGVBi_TnMJ2Zm9maj9KeAIlVdNqbAA=w1560-h890-s-no-gm",
    loomEmbed: "https://www.loom.com/embed/a23a4e6eb5c84918bcc719bf974cee29",
  },
  {
    title: "MA Food Group",
    summary: "Developed a full commercial website with dynamic job application forms and smooth UI animations.",
    tech: ["HTML5", "CSS3", "Bootstrap 4", "jQuery", "Owl Carousel", "AJAX", "Waypoints", "Form validation"],
    details: "Implemented dynamic job forms (add/remove entries, validation), scroll animations, counters, and lightboxes. Designed for performance and clarity across devices. Wrote clean, componentized code using vanilla JS and Bootstrap grid.",
    link: "https://mafoodgroup.com",
    image: "https://lh3.googleusercontent.com/pw/AP1GczO9laSc9jf_SPq6IWwrlzL7mEXKqQi1chtxyX44eHdlsbzuqEMr-8L5W3wiNi0GZg3-1bCVKclNdSGOqyOukXfgkr4iyBu93g3ll-gZhVbk64z2GnaPI6zxUcRLL2aThUEIORG_puU8jMaHw9li3OsM3Q=w1560-h890-s-no-gm",
    mobileImage: "https://lh3.googleusercontent.com/pw/AP1GczOEacQ-Rnz8qXKKGLmSa7VKnsPYocDRaLE91JnpFNqlqQVrOBw6s5PVy59cb7mE2V_T5X8xhNcpkLcz0aRnIEffIDIfX7oZGeENQSdN87jF5JIfOzZuVCCNCpeQn4JZahW_Ko_V-0DhX7dVTRyHQzonPkQ=w318-h697-s-no-gm",
  },
  {
    title: "NDM Capital LLC",
    summary: "Rebuilt a private equity firm's website — from salesy landing page to authoritative, content-focused design.",
    tech: ["Squarespace (Fluid Engine)", "HTML/CSS", "CMS configuration", "Custom layout blocks", "Video backgrounds"],
    details: "Led both versions of the project. Started with a Bootstrap theme, then migrated to Squarespace for structure, performance, and credibility. Managed content architecture, responsive design, SEO meta config, and form integrations.",
    link: "https://ndmcapitalllc.com",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNyFoJNl0dp4ccOFbdiKZfUweJsfBtcoS8fq0raX99qTeSwkhhV-j1HLhs3-MdalHTz0l2pxr8LVlTQ3AlIEffIDIfX7oZGeENQSdN87jF5JIfOzZuVCCNCpeQn4JZahW_Ko_V-0DhX7dVTRyHQzonPkQ=w1560-h890-s-no-gm",
    beforeImage: "https://lh3.googleusercontent.com/pw/AP1GczMUR2_RpiSK6oF6e8hwvP5mO5NbEH0xZUpCLsgjy_PybJLn7zrGcNADjH_uRsJY5TFXHZcgpc1xzjuwT1yfLKxEANQ3wBaS7qQSs-a7n6R4VIq8bPcvO1pUxF4qxkYFb4YF3Lb8cNFpfLS99j8htcaYkA=w1559-h890-s-no-gm",
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
    image: "https://i.imgur.com/bsNL5c6.gif",
    caption: "Live slash-command flow: dropdown → confirmation.",
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
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title font-extrabold font-inter text-charcoal dark:text-white">Projects</h2>
        
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
