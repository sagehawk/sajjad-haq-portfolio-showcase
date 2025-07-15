
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

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
    <section id="contact" className="py-16 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking Front-End Developer roles in the Chicago area and am always 
            open to connecting with product teams, designers, and engineers who are passionate about building exceptional user experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Why Work With Me? Section */}
          <motion.div 
            className="bg-card border border-border rounded-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Why Work With Me?</h3>
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
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl font-semibold mb-6 text-foreground">Prefer to reach out directly?</p>
            <div className="flex justify-center space-x-8">
              <a 
                href="mailto:haq.sajjad220@gmail.com" 
                className="flex items-center text-xl text-muted-foreground hover:text-green-500 transition-colors"
              >
                <FaEnvelope className="mr-3" />
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/sajjadhaq/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-xl text-muted-foreground hover:text-green-500 transition-colors"
              >
                <FaLinkedin className="mr-3" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
