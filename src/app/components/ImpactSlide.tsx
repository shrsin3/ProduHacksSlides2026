import { motion } from 'motion/react';
import { Heart, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import logo from "../../assets/937ad1a56245dc90b89d5720a3ae46d97d7c2e84.png";

export function ImpactSlide() {
  const impacts = [
    { icon: Clock, value: '90%', label: 'Faster Emergency Detection', color: 'from-teal-400 to-cyan-400' },
    { icon: Users, value: '24/7', label: 'Continuous Monitoring', color: 'from-cyan-400 to-blue-400' },
    { icon: TrendingUp, value: '3x', label: 'More Check-ins', color: 'from-green-400 to-emerald-400' },
    { icon: Heart, value: '100%', label: 'Peace of Mind', color: 'from-emerald-400 to-green-400' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50" />
      
      {/* Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-10 max-w-6xl w-full py-8">
        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-5xl font-black text-slate-800 mb-5 text-center">
            The <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-5 bg-white border border-slate-200 rounded-2xl text-center hover:border-teal-300 hover:shadow-xl transition-all group"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${impact.color} rounded-xl mb-3 shadow-md`}>
                  <impact.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                  {impact.value}
                </div>
                
                <div className="text-base text-slate-600">
                  {impact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-black text-slate-800 mb-3">
            Because Every Second Matters
          </h3>
          
          <p className="text-base text-slate-600 mb-6 max-w-3xl mx-auto">
            ChecKin bridges the gap between independence and safety, 
            ensuring your loved ones are never alone in an emergency
          </p>

          <div className="flex gap-5 justify-center items-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl text-white text-base font-bold flex items-center gap-2.5 shadow-xl hover:shadow-2xl transition-shadow"
            >
              Join the Mission
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-2.5"
            >
              <img src={logo} alt="ChecKin" className="w-9 h-9" />
              <span className="text-slate-500 text-base font-medium">#ChecKin</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '-10%',
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.4, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          >
            <Heart className="w-6 h-6 text-green-400" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}