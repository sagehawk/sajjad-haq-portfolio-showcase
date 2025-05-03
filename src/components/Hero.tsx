
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container flex flex-col items-center text-center">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Sajjad Haq — Front-End Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            I build clean, responsive websites that balance business goals with thoughtful UI.
          </p>
          <Button 
            className="bg-navy hover:bg-navy/90 text-white px-6 py-6 text-lg"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
