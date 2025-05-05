
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#2563EB] text-white py-16 md:py-24">
      <div className="section-container">
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold mb-8 font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
