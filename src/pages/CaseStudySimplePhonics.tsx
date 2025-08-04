
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

import { allCaseStudies } from '@/data/caseStudies';

const CaseStudySimplePhonics = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const otherCaseStudies = allCaseStudies.filter(study => study.link !== currentPath).slice(0, 3);
  const techStack = [
    "React",
    "TypeScript", 
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "ESLint"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Case Study: Simple Phonics
            </h1>
            <h3 className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              An interactive learning app I built for my son, who used it to master his alphabet and phonics by 18 months old.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://phonics.sajjadhaq.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Site
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('#', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/XSTHI5o.png" 
                alt="Simple Phonics Application Screenshot"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">The Challenge</h2>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">The Problem</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a new parent, I wanted a simple, focused, and distraction-free digital tool to help my son learn his phonics. Many existing educational apps were either too complex, filled with ads, or focused more on gamification than on core learning. I needed a pure, effective learning environment.
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">The Goal</h4>
              <p className="text-muted-foreground leading-relaxed">
                The objective was to build an intuitive app that my own 1-year-old could use. Success wasn't defined by features, but by a single metric: would it effectively teach him the alphabet? The answer was a resounding yes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">My Role & Tech Stack</h2>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">Role</h4>
              <p className="text-muted-foreground mb-6">Sole Developer & Primary User Tester</p>

              <h4 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              The Deep Dive: Design Through a Child's Eyes
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Building for a toddler is the ultimate test of user-centric design. Every element had to be intuitive and serve the primary goal of learning. This led to a process of ruthless simplification and iterative design based on direct, real-world observation.
            </p>

            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/xHwjWGK.png" 
                alt="Simple interface showing BED word with corresponding image"
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">A Lesson in "Less is More"</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              An early version included a 'confetti' button for positive reinforcement. However, during user testing with my son, I observed that the flashy feature became the *entire point* of the app for him—he just wanted to press the button. It was a distraction, not an enhancement. I made the crucial product decision to remove it, refocusing the app entirely on the core learning loop. This taught me that a successful feature is not one that is merely fun, but one that effectively serves the user's primary goal.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-6">The Technical Solution for a Seamless Experience</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To support this distraction-free environment, the app needed to feel seamless. The main technical challenge was handling asynchronous operations, like fetching images from an API, without introducing loading spinners or layout shifts that would break a child's concentration. I solved this by creating a reusable custom React hook, `useImageAPI`.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-4">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">
{`// src/hooks/useImageAPI.ts
import { useState, useEffect } from 'react';

// (Assume the rest of the hook code, like interfaces, is here)

export const useImageAPI = (query: string) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    
    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // ... logic to fetch image from Pexels API ...
        const data = await response.json();
        setImage(data.photos[0]);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [query]);

  return { image, isLoading, error };
};`}
                </code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground italic">
              This custom hook encapsulates the complexity of the API call, making the main component more readable and maintainable. This technical decision was crucial to maintaining the simple, uninterrupted learning experience that proved so effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://i.imgur.com/dEtkFaH.png" 
                alt="Simple Phonics app displayed on mobile device"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">The Outcome</h2>
              
              <blockquote className="text-2xl font-bold text-primary border-l-4 border-primary pl-6 mb-8 italic">
                "The project was an unqualified success. By the time he was 18 months old, my son had used this application to learn all his letters and their corresponding phonetic sounds."
              </blockquote>

              <p className="text-muted-foreground leading-relaxed">
                This project was the most profound lesson in user empathy I've ever had. It taught me to observe users, trust data (even when that data is a toddler's behavior), and be willing to remove features for the sake of the core user journey. It proved that the simplest solution, backed by clean and stable code, is often the most effective.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
            <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySimplePhonics;
