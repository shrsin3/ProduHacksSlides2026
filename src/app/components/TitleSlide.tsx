import { motion } from 'motion/react';
import { Heart, Shield } from 'lucide-react';
import logo from '@/assets/937ad1a56245dc90b89d5720a3ae46d97d7c2e84.png';

export function TitleSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50" />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <img src={logo} alt="ChecKin Logo" className="w-28 h-28 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-black mb-5 bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 bg-clip-text text-transparent"
        >
          ChecKin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-slate-700 mb-3 font-semibold"
        >
          Never Miss a Critical Moment
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          AI-powered health monitoring that keeps your loved ones safe, 
          even when you can't be there
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-full text-white text-sm tracking-wider shadow-lg"
        >
          ProduHacks 2026
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-slate-500 text-sm"
      >
        Press → or Space to continue
      </motion.div>
    </div>
  );
}
