import { motion } from 'motion/react';
import { Play, Activity, TrendingUp, Calendar, MessageSquare, FileVideo } from 'lucide-react';

export function PlatformSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-teal-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 px-8 max-w-7xl w-full py-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <h2 className="text-3xl font-black text-slate-800 mb-1">
            Caretaker <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Platform</span>
          </h2>
          <p className="text-sm text-slate-600">Complete visibility into your loved one's wellbeing</p>
        </motion.div>

        {/* Dashboard Preview */}
        <div className="grid grid-cols-12 gap-3">
          {/* Main Video Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-8 row-span-2 bg-white border border-slate-200 rounded-2xl p-4 relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-base font-bold text-slate-800">Recent Check-in</h3>
                <p className="text-slate-500 text-xs">March 21, 2026 - 2:30 PM</p>
              </div>
              <button className="p-2 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-all">
                <Play className="w-4 h-4 text-teal-600" />
              </button>
            </div>

            {/* Video Preview */}
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center border border-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-300/20 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                <FileVideo className="w-10 h-10 text-slate-400" />
              </motion.div>
              
              {/* Status Badge */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-green-100 border border-green-300 rounded-full">
                <span className="text-green-700 text-xs font-medium">✓ Healthy</span>
              </div>
            </div>

            {/* AI Analysis Summary */}
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="p-2 bg-teal-50 rounded-lg border border-teal-100">
                <Activity className="w-3.5 h-3.5 text-teal-600 mb-1" />
                <p className="text-xs text-slate-500">Movement</p>
                <p className="text-sm font-bold text-slate-800">Normal</p>
              </div>
              <div className="p-2 bg-cyan-50 rounded-lg border border-cyan-100">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-600 mb-1" />
                <p className="text-xs text-slate-500">Speech</p>
                <p className="text-sm font-bold text-slate-800">Clear</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg border border-green-100">
                <TrendingUp className="w-3.5 h-3.5 text-green-600 mb-1" />
                <p className="text-xs text-slate-500">Trend</p>
                <p className="text-sm font-bold text-slate-800">Stable</p>
              </div>
            </div>
          </motion.div>

          {/* Health Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg"
          >
            <h3 className="text-sm font-bold text-slate-800 mb-2">Health Score</h3>
            
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="rgba(148,163,184,0.2)"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="url(#healthGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.87 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  strokeDasharray="201"
                />
                <defs>
                  <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-black text-slate-800">87%</span>
              </div>
            </div>
            
            <p className="text-center text-slate-600 text-xs">Overall wellness score</p>
          </motion.div>

          {/* Activity History */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-600" />
              <h3 className="text-sm font-bold text-slate-800">This Week</h3>
            </div>
            
            <div className="space-y-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-6">{day}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal-400 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${85 + i * 3}%` }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                    />
                  </div>
                  <span className="text-xs text-green-600">✓</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}