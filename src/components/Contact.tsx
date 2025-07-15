
import { motion } from 'framer-motion';

const Contact = () => {
  const whyWorkWithMe = [
    {
      title: "Business-Driven Development",
      description: "My experience as a founder gives me a unique understanding of how to build features that deliver real business outcomes and measurable ROI."
    },
    {
      title: "High-Fidelity Implementation", 
      description: "I specialize in translating high-fidelity designs from Figma into clean, performant, and pixel-perfect React applications. My keen eye for detail ensures the final product is a faithful execution of the creative vision."
    },
    {
      title: "A Meticulous Collaborator",
      description: "I thrive on collaborating closely with design and product teams to bring their work to life, catching edge cases and ensuring a robust, polished final product."
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm actively seeking Front-End Developer roles in the Chicago area and am always 
            open to connecting with product teams, designers, and engineers who are passionate about building exceptional user experiences.
          </p>
        </motion.div>

        {/* Why Work With Me? Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Why Work With Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whyWorkWithMe.map((item, index) => (
              <motion.div 
                key={item.title}
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
