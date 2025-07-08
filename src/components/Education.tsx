
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Northern Illinois University
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              B.S. in Computer Science, 2025
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
