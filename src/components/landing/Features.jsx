import React from 'react';

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 border-b border-white/5 pb-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 font-sans tracking-tight">
              ML-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Our platform uses advanced machine learning to ensure every match is authentic, verified, and unbiased.
            </p>
          </div>
          <button className="text-white hover:text-primary font-bold flex items-center gap-2 transition-colors text-base group px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 shrink-0">
            View all features
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* Bento Grid Layout - Neat & Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Card 1: Skill Verification (Tall Card) */}
          <div className="md:col-span-2 md:row-span-2 bg-[#15171c]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 relative overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(31,107,122,0.1)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="size-14 rounded-2xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">verified_user</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Skill Verification Engine</h3>
                <p className="text-gray-400 text-lg max-w-md">Real-time code assessments and portfolio analysis to validate claims with 99.9% accuracy.</p>
              </div>

              {/* Visual Element: User Verification Bar */}
              <div className="w-full mt-8 bg-[#0B0B15] rounded-xl border border-white/5 p-4 flex items-center gap-4 shadow-xl">
                <div className="size-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-gray-300">person</span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 w-1/3 bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="h-2.5 w-3/4 bg-gray-800 rounded-full"></div>
                </div>
                <div className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-lg font-mono flex items-center gap-2 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  VERIFIED
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Fraud Detection */}
          <div className="md:col-span-1 md:row-span-1 bg-[#15171c]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 relative overflow-hidden group hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors"></div>

            <div className="relative z-10">
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-red-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]">lock</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fraud Detection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Advanced pattern recognition blocks resume fraud instantly.</p>
            </div>
          </div>

          {/* Card 3: ML Matching */}
          <div className="md:col-span-1 md:row-span-1 bg-[#15171c]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>

            <div className="relative z-10">
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-blue-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">hub</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ML Matching</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Smart algorithms that match potential with opportunity.</p>
            </div>
          </div>

          {/* Card 4: Instant Hiring Flows */}
          <div className="md:col-span-3 md:row-span-1 bg-[#15171c]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-500">

            <div className="relative z-10 flex-1">
              <div className="size-12 rounded-xl bg-[#0B0B15] border border-white/10 flex items-center justify-center mb-6 text-yellow-400 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">bolt</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Instant Hiring Flows</h3>
              <p className="text-gray-400 max-w-sm">Reduce time-to-hire by 60% with automated screening and scheduling.</p>
            </div>

            {/* Visual: Bar Chart */}
            <div className="relative z-10 w-full max-w-md bg-[#0B0B15] rounded-xl border border-white/5 p-6 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-gray-500 tracking-wider">EFFICIENCY GAIN</span>
                <span className="text-sm font-bold text-green-400">+14h Saved</span>
              </div>
              <div className="flex items-end gap-2 h-20">
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[30%] hover:bg-gray-700 transition-colors relative group/bar">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">Day 1</div>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[45%] hover:bg-gray-700 transition-colors"></div>
                <div className="flex-1 bg-gray-800/50 rounded-t-sm h-[40%] hover:bg-gray-700 transition-colors"></div>
                <div className="flex-1 bg-primary/30 rounded-t-sm h-[70%] hover:bg-primary/50 transition-colors"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(31,107,122,0.5)] hover:h-[95%] transition-all"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;