
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { sendContactEmail } from '@/utils/contactService';

const ContactForm = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      await sendContactEmail(formData);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '', hp_email: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
        <Mail className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
