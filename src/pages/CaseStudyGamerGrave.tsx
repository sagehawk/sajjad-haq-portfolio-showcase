
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allCaseStudies } from '@/data/caseStudies';
import { Link, useLocation } from 'react-router-dom';

const CaseStudyGamerGrave = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const otherCaseStudies = allCaseStudies.filter(study => study.link !== currentPath).slice(0, 3);

  const techStack = [
    "React", "TypeScript", "Supabase", "Tailwind CSS", "Vite", "Vercel"
  ];

  const codeSnippet = `const getOptimizedSupabaseUrl = (
  url: string,
  width?: number,
  height?: number,
  quality: number = 80
): string => {
  if (!url) return url;
  
  const supabaseUrl = 'https://your-project.supabase.co';
  const bucket = 'game-images';
  
  // Extract file path from full URL
  const filePath = url.split('/').pop();
  
  // Build transformation parameters
  const params = new URLSearchParams({
    width: width?.toString() || '400',
    height: height?.toString() || '300',
    quality: quality.toString(),
    format: 'webp'
  });
  
  return \`\${supabaseUrl}/storage/v1/object/public/\${bucket}/\${filePath}?transform=\${params}\`;
};`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg border-l border-r border-gray-200 dark:border-gray-700 min-h-screen">
        
        {/* Hero Header */}
        <section className="px-8 lg:px-16 py-16 bg-white dark:bg-gray-800">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Case Study: GamerGrave
            </h1>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A community-driven platform for classic arcade games, optimized for performance.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => window.open('https://gg.sajjadhaq.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3"
                onClick={() => window.open('https://github.com/sagehawk/gamergrave', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Screenshot */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://i.imgur.com/zZ27lls.png" 
              alt="GamerGrave Homepage"
              className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </motion.div>
        </section>

        {/* Project Overview */}
        <section className="px-8 lg:px-16 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                The Challenge
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">The Problem</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    For collectors and fans of classic arcade games, information is scattered across multiple databases, 
                    forums, and websites. There was no unified platform where enthusiasts could discover, track, and 
                    share information about their favorite retro games.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">The Goal</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    The primary objective was to build a beautiful, performant, and community-driven platform 
                    where users could browse, discover, and contribute to a comprehensive database of classic arcade games.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                My Role & Tech Stack
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Role</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sole Full-Stack Developer
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Challenge */}
        <section className="px-8 lg:px-16 py-16 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                The Performance Challenge: An Image-Heavy Platform
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The single hardest technical problem was image performance. With hundreds of high-resolution 
                game cover images, the GameGrid page loaded very slowly, creating a frustrating user experience. 
                The initial page load was taking over 4 seconds, which is unacceptable for modern web standards.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:w-1/2">
                <img 
                  src="https://i.imgur.com/jsgI9vg.png" 
                  alt="Filter sidebar showing the problem"
                  className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-gray-700 dark:text-gray-300">
                    With dozens of high-resolution game images loading at once, the initial user experience 
                    was slow and frustrating.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                The Solution: On-the-Fly Image Optimization
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I solved this by implementing a multi-layered image optimization strategy using Supabase's 
                transformation API. This allowed me to serve appropriately sized, WebP-formatted images 
                on demand, dramatically reducing load times.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 p-6 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                This utility function dynamically requests an optimized WebP version of an image from 
                Supabase Storage, tailored to the exact size needed by the UI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="px-8 lg:px-16 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://i.imgur.com/qixhoDn.png" 
                alt="Fast-loading game thumbnails"
                className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                The Outcome
              </h2>
              
              <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400">75%</div>
                  <div className="text-lg font-medium text-green-700 dark:text-green-300">Reduction</div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    in Largest Contentful Paint (LCP) time, from over 4s to under 1s
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My biggest takeaway was the critical importance of front-end performance optimization. 
                Even the most beautiful UI is worthless if it takes too long to load. This project taught me 
                to think about performance from day one, not as an afterthought.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features Gallery */}
        <section className="px-8 lg:px-16 py-16 bg-white dark:bg-gray-800">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://i.imgur.com/Gc17Gwt.png" 
                alt="Submit Game button"
                className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Community Game Submissions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Authenticated users can contribute to the database by submitting new games, 
                including uploading images directly to Supabase Storage.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://i.imgur.com/0Jg5FMw.png" 
                alt="Login button"
                className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                User Authentication & Profiles
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A complete authentication system allows users to register, log in, 
                and manage their contributions.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://i.imgur.com/tYDqt2F.png" 
                alt="Filter sidebar"
                className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Advanced Game Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A sophisticated filtering system lets users sort the game database by genre, 
                platform, release status, and more.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://i.imgur.com/DYTXDsT.png" 
                alt="Featured games with engagement metrics"
                className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Engaging UI/UX
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A clean and intuitive interface encourages browsing and interaction 
                with the game data.
              </p>
            </motion.div>
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
    </div>
  );
};

export default CaseStudyGamerGrave;
