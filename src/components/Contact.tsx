
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hp_email: '' // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if honeypot field is filled (bot detection)
    if (formData.hp_email !== '') {
      console.log('Bot detected');
      // Silently reject the submission but show success message to the bot
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '', hp_email: '' });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create form data for the email submission
    const mailData = new FormData();
    mailData.append('name', formData.name);
    mailData.append('email', formData.email);
    mailData.append('message', formData.message);
    
    // In a real implementation, you would send an email to haq.sajjad220@gmail.com
    // For this example, we'll simulate the email sending
    
    setTimeout(() => {
      // Here you would typically make a fetch/axios call to your backend
      // to send the email to haq.sajjad220@gmail.com
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '', hp_email: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="w-20 font-medium">Email:</span>
                <a href="mailto:haq.sajjad220@gmail.com" className="text-white hover:text-blue-200 underline underline-offset-4">
                  haq.sajjad220@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="w-20 font-medium">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/sajjadhaq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-200 underline underline-offset-4"
                >
                  <Linkedin className="mr-1 h-5 w-5" />
                  sajjadhaq
                </a>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from real users but bots will fill it */}
              <div className="hidden">
                <label htmlFor="hp_email" aria-hidden="true" className="sr-only">Do not fill this field</label>
                <input
                  type="text"
                  id="hp_email"
                  name="hp_email"
                  value={formData.hp_email}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="min-h-[120px] bg-white/10 border-white/20 placeholder:text-white/50 text-white"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white text-[#2563EB] hover:bg-blue-100 transition-colors duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
