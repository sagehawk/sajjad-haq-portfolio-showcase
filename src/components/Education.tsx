
import { motion } from "framer-motion";
import { GraduationCap, Book, Award, Calendar } from "lucide-react";

const Education = () => {
  const coursework = [
    "Data Structures & Algorithm Analysis",
    "UNIX & Network Programming", 
    "Software Engineering",
    "Computer Security Basics",
    "Database Systems",
    "Operating Systems"
  ];

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Enhanced background with campus image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
        <img 
          src="https://www.commonapp.org/static/8ba4e8f60b77281b4c703086258a54fc/northern-illinois-university_1112_gallery1.jpg"
          alt="NIU Campus"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
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
              Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Foundation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building expertise through comprehensive computer science education and hands-on learning.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - University Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* University Logo and Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="mb-6">
                  <img 
                    src="https://assets.concept3d.com/assets/249/NIU_xhorz_3Clr-rev-web.png" 
                    alt="NIU Logo" 
                    className="h-16 mb-6"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-gray-300 font-medium">Northern Illinois University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Expected Graduation: June 2025</span>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Academic Focus
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Specializing in software engineering, web technologies, and system design. 
                  My coursework combines theoretical computer science foundations with practical, 
                  industry-relevant programming skills.
                </p>
              </div>
            </motion.div>
            
            {/* Right Column - Coursework */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Book className="w-6 h-6 text-purple-400" />
                  Relevant Coursework
                </h3>
                
                <div className="grid gap-4">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl text-center border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">CS</div>
                  <div className="text-sm text-blue-300">Major Focus</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl text-center border border-purple-400/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2025</div>
                  <div className="text-sm text-purple-300">Graduation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
