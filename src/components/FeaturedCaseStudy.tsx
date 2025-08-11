
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Project: The Social Dojo (Concept to MVP)
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This is a deep dive into my process for architecting a user-centric application from the ground up, combining product strategy, UX/UI design, and front-end architecture.
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>The Social Dojo</CardTitle>
              <CardDescription>AI-powered conversation trainer for building social confidence.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This project is the centerpiece of my current work, showcasing my full product development process. It began as a deep dive into solving a real user problem, evolved into a comprehensive UI/UX design in Figma, and is now in the process of being built as my primary portfolio MVP.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><strong>Role:</strong> Product Architect, UX/UI Designer, Front-End Developer</li>
                <li><strong>Core Tech:</strong> React, TypeScript, Supabase, Gemini API, Tailwind CSS</li>
                <li><strong>Status:</strong> In Development (Design & Architecture Complete)</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/case-study/social-dojo">View the Full Case Study</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="https://www.figma.com/design/TZItmQJvb4GYTmP7dZXkqq/The-Social-Dojo?node-id=1-4998&t=VdxrZWnql8wKwIeh-1"   target="_blank"
  rel="noopener noreferrer">Explore the Figma Prototype</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
