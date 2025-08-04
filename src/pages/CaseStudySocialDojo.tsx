
import { useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { allCaseStudies } from '@/data/caseStudies';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, ExternalLink } from 'lucide-react';
import FigmaEmbed from '@/components/FigmaEmbed';
import { motion } from "framer-motion";


const CaseStudySocialDojo = () => {
  useLayoutEffect(() => {
    document.title = "Case Study: The Social Dojo - Sajjad Haq";
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  const otherCaseStudies = allCaseStudies.filter(study => study.link !== currentPath).slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Case Study: The Social Dojo</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">A full-stack "flight simulator" for social skills, designed to turn conversational anxiety into a trainable skill.</p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">The "awkward silence" is a universal source of social anxiety. For ambitious professionals, it can be a barrier to building crucial relationships. Our target user, "Alex," feels this pain point regularly, struggling to move beyond simple pleasantries in workplace conversations.</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">The Social Dojo tackles this by providing a private gym for social skills. Our 3-step system (The Sparring Room, The Follow-Up Engine, The Instant Replay) empowers users to practice, fail safely, and get actionable feedback, building real conversational muscle memory.</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">The Technical Blueprint</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Front-End</h3>
              <p className="text-sm text-muted-foreground">Built with Next.js and TypeScript for a robust, type-safe application. The UI is constructed using a component library based on Tailwind CSS and shadcn/ui.</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">State Management</h3>
              <p className="text-sm text-muted-foreground">Global state is managed using Zustand for a lightweight solution. Local component state handles UI interactions within the chat and mission views.</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">API Integration</h3>
              <p className="text-sm text-muted-foreground">The core chat functionality interfaces with a backend service that calls the Google Gemini API, handling real-time message streams.</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Backend & Auth</h3>
              <p className="text-sm text-muted-foreground">User data, authentication, and database management are handled by Supabase, providing a scalable and secure backend-as-a-service.</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="blueprint" 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">The Complete UI/UX Blueprint</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">The full design is displayed below as a high-resolution image for fast loading. For a closer look, you can explore the live, interactive prototype, or view the presentation slides further down.</p>
          <div className="text-center mb-8">
            <Button asChild size="lg">
              <a href="https://www.figma.com/design/TZItmQJvb4GYTmP7dZXkqq/The-Social-Dojo?node-id=1-4998&t=VdxrZWnql8wKwIeh-1" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Interactive Figma Prototype
              </a>
            </Button>
          </div>
          <img src="https://i.imgur.com/1mGqBcZ.png" alt="Social Dojo full UI showcase" className="w-full h-auto rounded-lg shadow-lg border border-border" />
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Product Strategy & User Flow</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">The project's strategy is rooted in a simple, three-step user flow designed to build conversational muscle memory. The user enters a practice environment (The Sparring Room), receives AI-driven feedback (The Instant Replay), and gets tools to apply their skills in the real world (The Follow-Up Engine). This entire flow is visualized in the presentation below.</p>
          <div className="max-w-4xl mx-auto">
            <FigmaEmbed src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXHF26DUgCc2yPkoEHh72zE%2FUntitled%3Fnode-id%3D3-29%26scaling%3Dscale-down-width%26hide-ui%3D1" className="w-full" />
          </div>
        </motion.section>

      </main>

      <section className="px-4 md:px-6 py-12 md:py-20 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Read More Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherCaseStudies.map((study) => (
              <Link to={study.link} key={study.title} className="block group">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border border-border">
                  <img src={study.image} alt={`${study.title} screenshot`} className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{study.title}</h3>
                    <p className="text-muted-foreground text-sm">{study.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={scrollToTop}>
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudySocialDojo;
