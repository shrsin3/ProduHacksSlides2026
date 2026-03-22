import { motion } from 'motion/react';
import { Rocket, Users, Zap, TrendingUp } from 'lucide-react';

const phases = [
  {
    number: 1,
    name: 'Prototype (MVP)',
    timeline: 'Months 1-3',
    icon: Rocket,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    gate: 'Core check-in flow validated with test users',
    highlights: [
      'Daily AI-guided check-ins',
      'Real-time caregiver alerts',
      '≥60% completion rate'
    ]
  },
  {
    number: 2,
    name: 'Pilot',
    timeline: 'Months 4-6',
    icon: Users,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    gate: 'Product-market fit confirmed via pilot cohort',
    highlights: [
      '50-100 real users',
      '≥65% retention at 30 days',
      '≥80% caregiver satisfaction'
    ]
  },
  {
    number: 3,
    name: 'Functional Product',
    timeline: 'Months 7-12',
    icon: Zap,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    gate: 'Advanced AI check-ins and dashboard live',
    highlights: [
      'NLP-powered conversations',
      'Sentiment analysis',
      '500+ active users'
    ]
  },
  {
    number: 4,
    name: 'Scalable Product',
    timeline: 'Months 13-18',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    gate: 'Multi-household support and integrations',
    highlights: [
      '10,000+ active users',
      'Wearable integrations',
      'Multilingual support'
    ]
  }
];

export function RoadmapSlide() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <motion.div
        className="absolute top-10 -left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-xl text-slate-600">
            From prototype to scale in 18 months
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <div className="absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-300 z-0" />
                )}

                {/* Phase Card */}
                <div className={`${phase.bgColor} ${phase.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col`}>
                  {/* Icon and Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                      {phase.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-semibold mb-3">
                    {phase.timeline}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 flex-grow">
                    {phase.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color} mt-1.5 flex-shrink-0`} />
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 mb-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-teal-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500" />
              <span className="text-sm font-semibold text-slate-700">MVP: Month 3</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="text-sm font-semibold text-slate-700">Pilot: Month 6</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-slate-700">500+ Users: Month 12</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-slate-700">10K+ Users: Month 18</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}