import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export function TechStackSlide() {
  const technologies = [
    {
      name: 'Gemini API',
      logo: (
        <svg viewBox="0 0 24 24" className="w-16 h-16">
          <defs>
            <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72F2" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
          <path fill="url(#geminiGrad)" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.47l7 3.51v7.84l-7-3.5V9.47zm16 0v7.85l-7 3.5v-7.84l7-3.51z"/>
        </svg>
      ),
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: 'AWS S3',
      logo: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <path fill="#FF9900" d="M32 10L8 20v24l24 10 24-10V20z"/>
          <path fill="#FF6600" d="M32 54L8 44V20l24 10z" opacity="0.7"/>
          <path fill="#FFCC00" d="M32 30l24-10-24-10-24 10z"/>
        </svg>
      ),
      color: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'Railway',
      logo: (
        <svg viewBox="0 0 24 24" className="w-16 h-16">
          <rect width="24" height="24" rx="6" fill="#0B0D0E"/>
          <path d="M6 6L12 12L6 18M12 6L18 12L12 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'from-slate-800 to-slate-600',
    },
    {
      name: 'Express.js',
      logo: (
        <svg viewBox="0 0 32 32" className="w-16 h-16">
          <path fill="#353535" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/>
        </svg>
      ),
      color: 'from-gray-800 to-gray-600',
    },
    {
      name: 'Twilio',
      logo: (
        <svg viewBox="0 0 30 30" className="w-16 h-16">
          <circle cx="15" cy="15" r="15" fill="#F22F46"/>
          <circle cx="10" cy="10" r="3" fill="white"/>
          <circle cx="20" cy="10" r="3" fill="white"/>
          <circle cx="10" cy="20" r="3" fill="white"/>
          <circle cx="20" cy="20" r="3" fill="white"/>
        </svg>
      ),
      color: 'from-red-600 to-red-500',
    },
    {
      name: 'Next.js',
      logo: (
        <svg viewBox="0 0 180 180" className="w-16 h-16">
          <mask id="nextMask">
            <circle cx="90" cy="90" r="90" fill="white"/>
          </mask>
          <g mask="url(#nextMask)">
            <circle cx="90" cy="90" r="90" fill="black"/>
            <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="white"/>
            <path d="M115 54h12v72h-12z" fill="white"/>
          </g>
        </svg>
      ),
      color: 'from-black to-gray-800',
    },
    {
      name: 'React',
      logo: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      color: 'from-cyan-500 to-blue-400',
    },
    {
      name: 'Computer Vision',
      logo: (
        <svg viewBox="0 0 24 24" className="w-16 h-16">
          <defs>
            <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="3" fill="url(#visionGrad)"/>
          <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="url(#visionGrad)" opacity="0.5"/>
        </svg>
      ),
      color: 'from-teal-500 to-green-500',
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
      <div className="relative z-10 px-12 max-w-7xl w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-5xl font-black text-slate-800 mb-3">
            Tech <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-slate-600">Powered by industry-leading technologies</p>
        </motion.div>

        {/* Tech Logos Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl hover:border-teal-400 hover:shadow-2xl transition-all h-full flex flex-col items-center justify-center gap-4">
                {/* Logo */}
                <div className="relative">
                  {tech.logo}
                </div>
                
                {/* Tech Name */}
                <h3 className="text-sm font-bold text-slate-800 text-center">
                  {tech.name}
                </h3>
              </div>

              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl rounded-2xl transition-opacity -z-10 bg-gradient-to-br ${tech.color}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-teal-300 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-800 font-bold text-sm">Built in 24 hours for this hackathon</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}