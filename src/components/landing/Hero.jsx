import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* --- Advanced Background Visualization --- */}
      <div className="absolute inset-0 bg-[#0B0B15] z-0">
        {/* Main Gradient Mesh */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1f6b7a]/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow delay-2000"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Badge - Neater Look */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:border-primary/50 transition-colors group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold text-gray-300 tracking-widest uppercase group-hover:text-primary transition-colors">
            AI-Powered Recruitment
          </span>
        </div>

        {/* Headline - Mixed Shades & Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white font-sans text-center">
          Hire by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f6b7a] via-cyan-400 to-blue-500 animate-gradient-x">Skills</span>, <br />
          <span className="relative">
            Not Resumes
            {/* Underline Decoration */}
            <svg className="absolute -bottom-2 w-full h-3 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheadline - Better Contrast */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed px-4">
          Replace guesswork with <span className="text-white font-bold">verified data</span>. Our ML engine validates candidate skills in real-time, ensuring you never miss top talent.
        </p>

        {/* Buttons - Modern Glassmorphism */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center pt-6">
          <Link to="/auth">
            <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(31,107,122,0.6)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>Start Hiring Now</span>
              </div>
            </button>
          </Link>
          <Link to="/auth">
            <button className="group px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">search</span>
              <span>Find a Job</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Dashboard Preview - The Visualization Piece */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">

        <div className="relative rounded-2xl border border-white/10 bg-[#15171c]/80 backdrop-blur-xl shadow-2xl overflow-hidden group transform transition-transform hover:scale-[1.01] duration-500">

          {/* Header Bar simulation */}
          <div className="h-8 bg-[#1a1d23] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
          </div>

          <div className="aspect-[16/9] w-full bg-[#0B0B15] relative group-hover:bg-[#0f1115] transition-colors duration-500">
            {/* The Image (Preserved) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-normal transition-opacity group-hover:opacity-100"
              style={{
                backgroundImage: "url('https://placehold.co/1200x800/15171c/3b82f6?text=Live+Data+Visualization')",
              }}
            ></div>

            {/* Modern Gradient Overlay (Color Grading) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B15] via-transparent to-transparent opacity-90"></div>

            {/* Simple Overlay Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 bg-[#15171c]/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold text-white tracking-wide">98.4% Match Accuracy</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;