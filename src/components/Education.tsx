
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title font-extrabold font-inter">Education</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Northern Illinois University — June 2025</p>
              <p className="text-gray-600 dark:text-gray-400 italic">Cumulative GPA: 3.15 | Major GPA: 2.96</p>
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
