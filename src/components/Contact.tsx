
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const whyWorkWithMe = [
    {
      title: "Business-Driven Development",
      description: "I focus on features that deliver measurable ROI and drive real business outcomes."
    },
    {
      title: "Pragmatic Problem-Solving", 
      description: "Experience navigating ambiguity to find the most effective solution quickly."
    },
    {
      title: "User-Centric Craft",
      description: "A passion for building scalable, intuitive, and high-performance applications."
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-white dark:bg-gray-800">
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
            open to connecting with other builders, designers, and tech leaders.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Why Work With Me? Section */}
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-6">Why Work With Me?</h3>
            <ul className="space-y-4 text-lg inline-block text-left">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">&#10003;</span>
                <span>I'm a proactive and fast-learning developer passionate about creating intuitive and performant user experiences.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">&#10003;</span>
                <span>My background in UX design and psychology informs my user-centric approach to development.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">&#10003;</span>
                <span>I'm a strong communicator and collaborator, dedicated to team success.</span>
              </li>
            </ul>
            <div className="mt-10">
              <p className="text-xl font-bold mb-6">Prefer to reach out directly?</p>
              <div className="flex justify-center space-x-8">
                <a href="mailto:sajjad.haq@example.com" className="flex items-center text-2xl text-gray-300 hover:text-green-400 transition-colors">
                  <FaEnvelope className="mr-3" />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/sajjad-haq/" target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl text-gray-300 hover:text-green-400 transition-colors">
                  <FaLinkedin className="mr-3" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
