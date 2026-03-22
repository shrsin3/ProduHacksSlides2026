import { motion } from 'motion/react';
import { Sparkles, Cloud, Database, Zap } from 'lucide-react';

export function TechStackSlide() {
  const technologies = [
    {
      category: 'AI/ML',
      icon: Sparkles,
      items: ['Gemini AI', 'Computer Vision', 'Natural Language Processing'],
      color: 'from-teal-500 to-cyan-500',
      glow: 'teal-500',
    },
    {
      category: 'Cloud & Storage',
      icon: Cloud,
      items: ['AWS S3', 'Real-time Streaming', 'Secure Data Pipeline'],
      color: 'from-cyan-500 to-blue-500',
      glow: 'cyan-500',
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Video Processing', 'Emergency Alerts', 'Analytics Engine'],
      color: 'from-green-500 to-emerald-500',
      glow: 'green-500',
    },
    {
      category: 'Frontend',
      icon: Zap,
      items: ['React', 'WebRTC', 'Real-time Dashboard'],
      color: 'from-emerald-500 to-lime-500',
      glow: 'emerald-500',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50" />
      
      {/* Animated Tech Grid */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-12 max-w-7xl w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="text-5xl font-black text-slate-800 mb-3">
            Tech <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-slate-600">Powered by cutting-edge technologies</p>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-teal-300 hover:shadow-lg transition-all">
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 bg-gradient-to-br ${tech.color} rounded-2xl shadow-md`}>
                    <tech.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800">
                    {tech.category}
                  </h3>
                </div>

                {/* Tech Items */}
                <div className="space-y-2.5">
                  {tech.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2.5 group/item"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                      <span className="text-sm text-slate-600 group-hover/item:text-slate-800 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 bg-${tech.glow} opacity-0 group-hover:opacity-10 blur-3xl rounded-3xl transition-opacity -z-10`}
                style={{
                  background: `radial-gradient(circle, ${
                    tech.glow === 'teal-500' ? 'rgba(20, 184, 166, 0.2)' :
                    tech.glow === 'cyan-500' ? 'rgba(6, 182, 212, 0.2)' :
                    tech.glow === 'green-500' ? 'rgba(34, 197, 94, 0.2)' :
                    'rgba(16, 185, 129, 0.2)'
                  }, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-teal-200 rounded-full shadow-sm">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-slate-700 font-medium text-sm">Built in 24 hours for this hackathon</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}