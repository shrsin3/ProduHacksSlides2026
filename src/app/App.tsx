import { useState, useEffect } from 'react';
import { TitleSlide } from './components/TitleSlide';
import { ProblemSlide } from './components/ProblemSlide';
import { SolutionSlide } from './components/SolutionSlide';
import { HowItWorksSlide } from './components/HowItWorksSlide';
import { PlatformSlide } from './components/PlatformSlide';
import { TechStackSlide } from './components/TechStackSlide';
import { ImpactSlide } from './components/ImpactSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  HowItWorksSlide,
  PlatformSlide,
  TechStackSlide,
  ImpactSlide,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <CurrentSlideComponent />

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/90 backdrop-blur-sm border border-teal-200 text-teal-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-50 hover:border-teal-300 transition-all shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-teal-500 to-green-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-white/90 backdrop-blur-sm border border-teal-200 text-teal-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-50 hover:border-teal-300 transition-all shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-slate-500 text-sm z-50 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}