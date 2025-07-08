
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Why Work With Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Why Work With Me?
            </h3>
            
            <div className="space-y-4">
              {whyWorkWithMe.map((item, index) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Prefer to reach out directly?
              </h4>
              
              <div className="space-y-3">
                <a 
                  href="mailto:haq.sajjad220@gmail.com"
                  className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Mail className="h-5 w-5" />
                  haq.sajjad220@gmail.com
                </a>
                
                <a 
                  href="https://linkedin.com/in/sajjadhaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let's discuss how I can contribute to your team.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
