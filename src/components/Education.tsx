
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background campus image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90 dark:opacity-95"></div>
        <img 
          src="https://www.commonapp.org/static/8ba4e8f60b77281b4c703086258a54fc/northern-illinois-university_1112_gallery1.jpg"
          alt="NIU Campus"
          className="w-full h-full object-cover opacity-20 dark:opacity-15"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="section-title font-extrabold font-inter text-white">Education</h2>
          {/* NIU logo next to heading */}
        </div>
        <img 
            src="https://assets.concept3d.com/assets/249/NIU_xhorz_3Clr-rev-web.png" 
            alt="NIU Logo" 
            width="150" 
            height="150" 
            className="inline-block filter dark:invert"
          />
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center text-xl font-bold text-white">
                <GraduationCap className="mr-2 h-5 w-5" />
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-lg font-medium text-gray-300">Northern Illinois University — June 2025</p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Relevant Coursework</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Data Structures & Algorithm Analysis (CSCI 340)</li>
                <li>• UNIX & Network Programming (CSCI 330)</li>
                <li>• Databases (CSCI 466)</li>
                <li>• Software Engineering (CSCI 467)</li>
                <li>• Computer Security Basics (CSCI 350)</li>
                <li>• Principles of Operating Systems (CSCI 480)</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
