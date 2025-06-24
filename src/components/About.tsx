
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, TrendingUp, Award, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "High-Performance Applications",
      description: "Built 50+ responsive web apps with sub-700ms load times"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Impact",
      description: "Increased client conversion rates by 18% through optimized UX"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Scaled 42+ businesses to $50K+ additional revenue"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Development",
      description: "Delivered production-ready projects in under 2 weeks"
    }
  ];

  const technologies = [
    "React & TypeScript",
    "Next.js",
    "Tailwind CSS", 
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Supabase & Firebase",
    "Node.js & Express",
    "Git & GitHub"
  ];

  return (
    <section id="about" className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate front-end developer who transforms ideas into exceptional digital experiences. 
              With a focus on performance, accessibility, and user satisfaction, I create solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  My Mission
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I believe great software should be invisible to the user but transformative for the business. 
                  Every line of code I write is focused on creating seamless experiences that convert visitors into customers.
                </p>
              </div>

              {/* Business Impact Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">41%</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Higher Form Fills</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50%</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">More Booked Calls</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">25%</div>
                  <div className="text-sm text-emerald-700 dark:text-emerald-300">Fewer No-Shows</div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  Core Technologies
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
