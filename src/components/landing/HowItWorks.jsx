import React from 'react';

const steps = [
  {
    title: 'Create Profile & Connect',
    desc: 'Upload your resume or connect your GitHub/Portfolio. Our system instantly parses your history.',
    image: "/create-profile.png",
  },
  {
    title: 'AI Skill Analysis',
    desc: 'Our engine runs 50+ data point checks to verify your skills against industry standards.',
    image: "/ai-analysis.png",
  },
  {
    title: 'Secure Match',
    desc: 'Get matched with companies looking exactly for your verified skill set. No bias, just data.',
    image: "/secure-match.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-gray-400 font-medium">Simple, transparent, and built for speed.</p>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on mobile, Center on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1f6b7a] via-[#3b82f6] to-transparent -ml-[1px] opacity-30"></div>
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1f6b7a] via-[#3b82f6] to-transparent -ml-[1px] blur-[2px] opacity-50"></div>

          <div className="flex flex-col gap-16 sm:gap-28">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot Marker - Hidden on mobile or centered if you prefer, but reducing clutter on mobile is often better. Let's keep it but simplified or hidden if it relies on absolute positioning. 
                   Actually, let's keep it visible ONLY on desktop to simplify mobile "center" view as per request.
                */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <div className="w-4 h-4 rounded-full bg-[#15171c] border-2 border-primary shadow-[0_0_10px_rgba(31,107,122,1)] relative z-10"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse-slow"></div>
                </div>

                {/* Text Section */}
                <div className={`w-full md:w-1/2 text-center md:text-left ${idx % 2 !== 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="inline-block p-2 rounded-lg bg-surface-dark border border-white/5 mb-4 shadow-sm">
                    <span className="text-xs font-bold text-primary font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{step.desc}</p>
                </div>

                {/* Image Section */}
                <div className={`w-full md:w-1/2 ${idx % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="w-full aspect-video rounded-xl bg-[#15171c]/50 backdrop-blur-sm border border-white/10 overflow-hidden relative shadow-2xl group hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {/* Gradient Overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171c] via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;