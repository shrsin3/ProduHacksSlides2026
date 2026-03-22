import { motion } from 'motion/react';
import { AlertTriangle, Clock, Users, TrendingUp } from 'lucide-react';

export function ProblemSlide() {
  const stats = [
    { icon: Users, value: '55M', label: 'Adults 65+ in the US', color: 'from-teal-400 to-cyan-400' },
    { icon: TrendingUp, value: '70%', label: 'Live independently', color: 'from-cyan-400 to-blue-400' },
    { icon: Clock, value: '34min', label: 'Average emergency response time', color: 'from-blue-400 to-green-400' },
    { icon: AlertTriangle, value: '1 in 3', label: 'Fall each year', color: 'from-green-400 to-emerald-400' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50" />
      
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
      <div className="relative z-10 px-12 max-w-7xl w-full py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-white border border-teal-200 rounded-full shadow-sm">
            <AlertTriangle className="w-5 h-5 text-teal-600" />
            <span className="text-teal-700 uppercase tracking-wider text-xs font-semibold">The Challenge</span>
          </div>
          
          <h2 className="text-5xl font-black text-slate-800 mb-4">
            Critical Moments Go
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Unnoticed
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl">
            When elderly loved ones live alone, health emergencies often happen 
            without anyone knowing—until it's too late.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-md`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                <div className="text-base text-slate-600">
                  {stat.label}
                </div>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}