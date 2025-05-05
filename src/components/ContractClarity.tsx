
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const ContractClarity = () => {
  return (
    <section id="contract-clarity" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto mb-16">Contract Clarity</h2>
        
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
                <CardTitle className="text-2xl font-bold text-emerald">Contracts Section</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full mb-4">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="https://i.imgur.com/wEo5YRv.png" 
                        alt="Contract Clarity Dashboard" 
                        className="w-full h-auto rounded-md shadow-md" 
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="https://i.imgur.com/1NJvKwY.png" 
                        alt="Contracts Section" 
                        className="w-full h-auto rounded-md shadow-md" 
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                  <CarouselNext className="right-2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700" />
                </Carousel>
                <p className="text-gray-700 dark:text-gray-300">
                  Clear visualization of contract statuses, prioritized by importance and deadline. Users can quickly access, sort, and take action on time-sensitive items.
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
                <CardTitle className="text-2xl font-bold text-royal">Alerts Section</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://i.imgur.com/JPu2Utp.png" 
                  alt="Alerts Section" 
                  className="w-full h-auto rounded-md mb-4 shadow-md" 
                />
                <p className="text-gray-700 dark:text-gray-300">
                  Real-time notification system that prioritizes critical events, allowing users to stay informed about important changes without overwhelming them with unnecessary information.
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
