import { motion } from 'motion/react';
import { AlertTriangle, Clock, Users, UserX, Heart } from 'lucide-react';

export function ProblemSlide() {
  const stats = [
    { icon: UserX, value: '25%', label: 'of seniors 65+ live alone', color: 'from-teal-400 to-cyan-400' },
    { icon: Clock, value: '1.5-3hrs', label: 'Spent on daily caregiver check-ins', color: 'from-cyan-400 to-blue-400' },
    { icon: Heart, value: 'Unreported', label: 'Seniors hide symptoms', color: 'from-blue-400 to-green-400' },
    { icon: AlertTriangle, value: 'Reactive', label: 'Current solutions (LifeAlert)', color: 'from-green-400 to-emerald-400' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-12 max-w-7xl w-full py-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-white border-2 border-teal-300 rounded-full shadow-sm">
            <AlertTriangle className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 uppercase tracking-wider text-xs font-semibold">The Problem</span>
          </div>
          
          <h2 className="text-5xl font-black text-slate-800 mb-4 leading-tight">
            Seniors at Risk,
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Caregivers Overwhelmed
            </span>
          </h2>
          
          <p className="text-lg text-slate-700 max-w-3xl font-medium leading-relaxed">
            Lack of proactive monitoring misses early warning signs and delays critical intervention
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="p-5 bg-white border-2 border-slate-200 rounded-2xl hover:border-teal-400 hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3 shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                <div className="text-sm text-slate-700 font-semibold">
                  {stat.label}
                </div>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Key Issue Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-4 bg-teal-50 border-2 border-teal-300 rounded-2xl shadow-lg"
        >
          <p className="text-center text-slate-800 font-bold text-base">
            ⚠️ Existing tools can't track <span className="text-teal-600">mood, cognition, and routine patterns</span> — leaving critical health indicators invisible
          </p>
        </motion.div>
      </div>
    </div>
  );
}