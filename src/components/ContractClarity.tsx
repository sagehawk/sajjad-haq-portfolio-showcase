
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { GalleryHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const ContractClarity = () => {
  const [contractsActiveSlide, setContractsActiveSlide] = useState(0);
  
  const contractsImages = [
    { src: "https://i.imgur.com/wEo5YRv.png", alt: "Contract Clarity Dashboard" },
    { src: "https://i.imgur.com/1NJvKwY.png", alt: "Contracts Section" }
  ];

  // Handler to properly set the active slide index
  const handleThumbnailClick = (index: number) => {
    document.querySelector(`#contract-clarity [data-carousel-index="${index}"]`)?.scrollIntoView();
    setContractsActiveSlide(index);
  };

  // Remove the incompatible handleCarouselSelect function
  // Instead, we'll set up an effect to sync with the Carousel's API

  // Reference to the carousel API
  const [api, setApi] = useState<any>(null);

  // Subscribe to carousel's select event to update active slide
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      // Get the selected index from the carousel API
      const selectedIndex = api.selectedScrollSnap();
      setContractsActiveSlide(selectedIndex);
    };

    // Subscribe to the select event
    api.on("select", onSelect);
    
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="contract-clarity" className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-6">Making Your Document Management Effortless</h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
          You deserve tools that simplify your workflow, not complicate it. Here's how we've designed Contract Clarity with your productivity in mind.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contracts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-emerald">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-emerald">Never Miss a Deadline Again</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel 
                  className="w-full mb-4"
                  setApi={setApi}
                >
                  <CarouselContent>
                    {contractsImages.map((image, index) => (
                      <CarouselItem key={index} data-carousel-index={index}>
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto rounded-md shadow-md" 
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                  <CarouselNext className="right-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                </Carousel>
                
                <div className="flex justify-center mt-2 mb-4 gap-2">
                  {contractsImages.map((image, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-16 h-12 rounded overflow-hidden border-2 cursor-pointer transition-all",
                        contractsActiveSlide === index 
                          ? "border-blue-500 opacity-100 scale-105" 
                          : "border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100"
                      )}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img 
                        src={image.src} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300">
                  We've created a clear visualization of your contract statuses, prioritized by importance and deadline, so you can quickly take action on time-sensitive items and stay ahead of your commitments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Alerts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-royal">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-royal">Stay Informed, Not Overwhelmed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src="https://i.imgur.com/JPu2Utp.png" 
                    alt="Alerts Section" 
                    className="w-full h-auto rounded-md shadow-md" 
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Our real-time notification system prioritizes what matters to you, ensuring you're always informed about important changes without being bombarded with unnecessary information.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContractClarity;
