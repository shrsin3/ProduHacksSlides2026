import { motion } from 'motion/react';
import { UserPlus, Bell, Video, Brain, AlertCircle, LayoutDashboard } from 'lucide-react';

export function HowItWorksSlide() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Setup Contact',
      description: 'Add Grandma as a trusted contact in the app',
      color: 'from-teal-400 to-cyan-400',
      delay: 0.2,
    },
    {
      icon: Bell,
      title: 'Smart Notification',
      description: 'Grandma receives a friendly check-in notification',
      color: 'from-cyan-400 to-blue-400',
      delay: 0.3,
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Interactive call with questions and recording',
      color: 'from-blue-400 to-green-400',
      delay: 0.4,
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Gemini analyzes video for health indicators',
      color: 'from-green-400 to-emerald-400',
      delay: 0.5,
    },
    {
      icon: AlertCircle,
      title: 'Emergency Alert',
      description: 'Instant notification to caretaker if needed',
      color: 'from-emerald-400 to-lime-400',
      delay: 0.6,
    },
    {
      icon: LayoutDashboard,
      title: 'Caretaker Dashboard',
      description: 'View recordings, analysis, and health trends',
      color: 'from-lime-400 to-green-500',
      delay: 0.7,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-green-50" />
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 100 300 Q 300 200 500 300 T 900 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-1/4 left-10 w-48 h-48 bg-teal-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-12 max-w-7xl w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-5xl font-black text-slate-800 mb-3">
            How It <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-slate-600">A seamless flow from check-in to emergency response</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: step.delay + 0.3 }}
                  className="absolute top-10 left-full w-4 h-0.5 bg-gradient-to-r from-teal-300 to-transparent origin-left hidden xl:block"
                />
              )}

              <div className="p-5 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all h-full">
                {/* Step Number */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`inline-flex p-2.5 bg-gradient-to-br ${step.color} rounded-xl shadow-md`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-teal-300 text-xs font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-2xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}