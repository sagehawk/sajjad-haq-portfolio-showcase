
import { motion } from 'framer-motion';

const Contact = () => {
  const whyWorkWithMe = [
    {
      title: "A Fast Learner",
      description: "I have a proven ability to dive into new concepts and apply them to real projects quickly and effectively."
    },
    {
      title: "A Proactive Builder", 
      description: "I don't wait to be told what to do. My founder background has taught me to identify problems and proactively design and build solutions."
    },
    {
      title: "A Collaborative Mindset",
      description: "I'm excited to learn from senior engineers, participate in code reviews, and be a productive, positive member of a professional development team."
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
            Ready to Contribute
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm actively seeking an internship or 'Early in Careers' role where I can bring my passion for building and learning to a collaborative team. I'm eager to contribute to enterprise-scale products and grow as an engineer at a company like Grainger.
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
