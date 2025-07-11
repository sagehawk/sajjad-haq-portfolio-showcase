
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CaseStudyArticulateRefine = () => {
  const navigate = useNavigate();

  const techStack = [
    "React",
    "TypeScript", 
    "Google Gemini API",
    "Tailwind CSS",
    "shadcn/ui",
    "Vite"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        
        {/* Section 1: Hero Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Case Study: Articulate & Refine
          </h1>
          <h3 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            An AI-powered writing critic that analyzes essays for clarity, consistency, and logical soundness.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => window.open('https://essay.sajjadhaq.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Site
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          <div className="w-full">
            <img 
              src="https://i.imgur.com/8SL0btJ.png" 
              alt="Articulate & Refine Dashboard Screenshot"
              className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </motion.section>

        {/* Section 2: Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    The Problem
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Great writing is built on clear logic, but feedback is often subjective and hard to come by. Writers need objective, structured tools to identify weaknesses in their arguments and improve their critical thinking.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    The Goal
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    The objective was to build a tool that moves beyond simple grammar checks, using AI to provide a deep, structural analysis of an essay's logic and flow, and to present this complex data in a simple, understandable way.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                My Role & Tech Stack
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Role
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sole Developer
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Deep Dive */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              The Deep Dive: From Text to Actionable Insight
            </h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Step 1: The Request
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  The user begins by clicking the 'Analyze' button, initiating a request to the AI backend.
                </p>
                <img 
                  src="https://i.imgur.com/bp0hAtz.png" 
                  alt="Analyze Button Screenshot"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Step 2: The AI at Work
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  This triggers a call to the Google Gemini API. The AI isn't just checking grammar; it's executing a complex prompt to evaluate the text against multiple criteria: logical consistency, clarity of expression, and structural coherence.
                </p>
                <img 
                  src="https://i.imgur.com/cZwx53o.png" 
                  alt="Loading Analysis Screenshot"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Step 3: The Verdict
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  The API returns a structured JSON object containing scores and specific feedback points. The front-end then parses this data to generate a rich, interactive dashboard for the user.
                </p>
                <img 
                  src="https://i.imgur.com/qhmAOV9.png" 
                  alt="Feedback Cards Screenshot"
                  className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-8"
                />

                {/* Code Snippet */}
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`// A simplified example of the prompt engineering for the analysis feature

async function getEssayAnalysis(essayText: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = \`
    Analyze the following essay based on three criteria: clarity, consistency, and logical soundness.
    Provide a response in JSON format with the following structure:
    {
      "overallScore": <number from 0-100>,
      "clarity": { "score": <number>, "feedback": "<string>" },
      "consistency": { "score": <number>, "feedback": "<string>" },
      "feedbackPoints": [
        { "type": "ERROR" | "WARNING", "sentence": "<exact sentence from text>", "explanation": "<string>" }
      ]
    }
    Essay to analyze: "\${essayText}"
  \`;

  // ... logic to call API and parse the JSON response
}`}</code>
                  </pre>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  The key was not just calling the API, but engineering a precise prompt that instructs the AI to return a structured, predictable JSON object. This allows the front-end to reliably parse the data and build the dynamic results dashboard.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: The Result */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.imgur.com/cDh0EdM.png" 
                alt="Score Cards Screenshot"
                className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                The Outcome & Lessons Learned
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The result is a powerful feedback loop for writers. Instead of vague advice, they receive specific, quantifiable scores and targeted feedback, allowing them to pinpoint weaknesses and make concrete improvements.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This project was a deep dive into practical AI application and product design. I learned that the true challenge of using LLMs is not just making an API call, but in a) <strong>Prompt Engineering:</strong> carefully crafting instructions to get structured, reliable data back, and b) <strong>Data Visualization:</strong> translating that complex data into a UI that is intuitive, actionable, and empowers the user.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Key Features Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://i.imgur.com/osymybk.png" 
                alt="Essay Management Header"
                className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-4"
              />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Full Essay Lifecycle Management
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Users have full control over their work, with options to export their final essay, return to editing, or start fresh.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://i.imgur.com/inWwhGi.png" 
                alt="Interactive Text Highlights"
                className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-4"
              />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Interactive Feedback
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                The AI's feedback points are visually linked back to the original text with highlights, making it easy to identify problem areas.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://i.imgur.com/mCxykBW.png" 
                alt="Create New Essay Button"
                className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-4"
              />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Simple Onboarding
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A clear and simple entry point allows users to begin their writing and analysis journey without friction.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Final Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Button>
        </motion.section>

      </div>
    </div>
  );
};

export default CaseStudyArticulateRefine;
