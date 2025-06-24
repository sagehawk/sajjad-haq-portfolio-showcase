
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Code, Users, Lightbulb, Zap } from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "haq.sajjad220@gmail.com",
      description: "Best for detailed project discussions",
      action: "mailto:haq.sajjad220@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "224.499.4517",
      description: "Quick calls and consultations",
      action: "tel:224.499.4517"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "South Barrington, IL",
      description: "Available for local meetings",
      action: "#"
    }
  ];

  const workingWithMe = [
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex UI challenges and architectural decisions."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: "Team Player", 
      description: "Experienced in agile environments and collaborative code reviews to raise product quality."
    },
    {
      icon: <Code className="w-5 h-5 text-green-400" />,
      title: "Business-Minded",
      description: "Focused on writing code that directly contributes to business goals and user satisfaction."
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      title: "Fast Learner",
      description: "Adept at quickly mastering new technologies and development best practices."
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build Something <span className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to add a passionate front-end developer to your team? 
              Let's discuss how I can contribute to your next big project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Methods & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Why Work With Me */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  Why Work With Me?
                </h3>
                <div className="space-y-4">
                  {workingWithMe.map((item, index) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-blue-100 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{method.title}</h4>
                      <p className="text-blue-100 font-medium">{method.value}</p>
                      <p className="text-blue-200 text-sm">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-semibold text-white">Quick Response</h4>
                </div>
                <p className="text-emerald-100">I typically respond within 2-4 hours during business days.</p>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Send className="w-6 h-6 text-cyan-400" />
                  Send Me a Message
                </h3>
                <p className="text-blue-100">Tell me about your project and let's get started!</p>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
