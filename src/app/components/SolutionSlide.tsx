import { motion } from 'motion/react';
import { Sparkles, Video, Brain, Bell, BarChart3 } from 'lucide-react';

export function SolutionSlide() {
  const features = [
    { icon: Video, label: 'Video Check-ins', color: 'text-teal-400' },
    { icon: Brain, label: 'AI Analysis', color: 'text-cyan-400' },
    { icon: Bell, label: 'Smart Alerts', color: 'text-green-400' },
    { icon: BarChart3, label: 'Health Insights', color: 'text-emerald-400' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-12 max-w-6xl py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-white border border-teal-200 rounded-full shadow-sm">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 uppercase tracking-wider text-xs font-semibold">Our Solution</span>
          </div>
          
          <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
            Proactive Care Through
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">
              AI-Powered Monitoring
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ChecKin uses intelligent video check-ins and real-time health analysis 
            to detect emergencies before they become critical
          </p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap mb-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white backdrop-blur-md border border-teal-200 rounded-2xl flex items-center gap-3 hover:border-teal-400 hover:shadow-lg transition-all"
            >
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
              <span className="text-base text-slate-700 font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="p-6 bg-white border border-teal-200 rounded-3xl shadow-lg"
        >
          <p className="text-xl text-slate-700 italic font-medium">
            "Peace of mind for families, independence for seniors"
          </p>
        </motion.div>
      </div>
    </div>
  );
}