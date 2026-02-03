import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { JobCard, StatCard } from './CandidateComponents';

export default function Dashboard() {
  const { setSidebarOpen } = useOutletContext();

  return (
    <>
      {/* Header */}
      <header className="h-20 flex-shrink-0 flex items-center justify-between px-3 sm:px-6 md:px-8 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 relative z-20">
        <div className="w-1/3 min-w-0 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="relative hidden md:block group w-full max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1f6b7a] transition-colors material-symbols-outlined text-[20px]">search</span>
            <input
              className="w-full bg-[#1a1d23] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white focus:ring-1 focus:ring-[#1f6b7a] focus:border-[#1f6b7a] placeholder-gray-600 transition-all outline-none"
              placeholder="Search jobs, skills..."
              type="text"
            />
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center text-center min-w-0">
          <h1 className="text-lg font-bold text-white tracking-tight truncate">Welcome back, John</h1>
          <p className="text-[11px] text-gray-400 hidden sm:block truncate">Here's what's happening today</p>
        </div>
        {/* Removed notification icon */}
        <div className="w-1/3 flex justify-end items-center gap-3">
          <Link to="/dashboard/candidate/settings" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg bg-[#1a1d23] border border-white/5 hover:border-white/10 transition-all">
            <span className="material-symbols-outlined text-[18px]">settings</span>
          </Link>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg bg-[#1a1d23] border border-white/5 hover:border-white/10 transition-all">
            <span className="material-symbols-outlined text-[18px]">notifications</span>
          </button>
        </div>
      </header>

      {/* Dashboard Body - Adjusted Layout & Spacing */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 relative z-10 custom-scrollbar">
        <div className="w-full space-y-6 sm:space-y-8">

          {/* Stats Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <StatCard icon="edit_note" label="Profile Status" value="85%" progress={true} />
            <StatCard icon="auto_awesome" label="Matching Jobs" value="12" subtext={<><span className="text-green-400 material-symbols-outlined text-[14px] mr-1">trending_up</span> +4 new today</>} />
            <StatCard icon="rocket_launch" label="Applications" value="8" subtext={<><span className="text-yellow-400 material-symbols-outlined text-[14px] mr-1">pending</span> 2 pending review</>} />
          </div>

          {/* Split Row */}
          <div className="grid grid-cols-1 gap-8 h-full lg:grid-cols-3">

            {/* Left: Job Feed */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-1 gap-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f6b7a] text-[20px]">recommend</span>
                  Recommended Jobs
                </h3>
                <button className="text-xs text-[#1f6b7a] hover:text-white font-bold transition-colors flex items-center gap-1 w-max">
                  View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
              <div className="space-y-4">
                <JobCard logo="diamond" role="Senior Frontend Engineer" company="AcmeCorp • Remote" tags={['React', 'TypeScript']} salary="$140k - $180k" match="98" />
                <JobCard logo="change_history" role="Product Designer" company="Vertex Inc. • New York" tags={['Figma', 'UI/UX']} match="94" />
                <JobCard logo="hexagon" role="ML Engineer" company="HexaTech • Austin, TX" tags={['Python', 'PyTorch']} salary="$160k+" match="89" />
                <JobCard logo="code_blocks" role="Full Stack Developer" company="StackFlow • Remote" tags={['Next.js', 'Node']} match="82" />
              </div>
            </div>

            {/* Right: Widgets */}
            <div className="space-y-6">
              {/* Skill Verification */}
              <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden shadow-md">
                <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f6b7a] text-[20px]">verified_user</span>
                  Skill Verification
                </h3>
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="w-9 h-9 rounded bg-[#e34c26]/10 flex items-center justify-center text-[#e34c26] border border-[#e34c26]/20">
                        <span className="material-symbols-outlined text-base">html</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">JavaScript</p>
                        <p className="text-[10px] text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-green-400 border border-green-400/20 px-2 py-0.5 rounded bg-green-400/10">PASSED</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="w-9 h-9 rounded bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
                        <span className="material-symbols-outlined text-base">database</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">System Design</p>
                        <p className="text-[10px] text-gray-500">Not attempted</p>
                      </div>
                    </div>
                    <button className="text-[9px] font-bold text-white border border-[#1f6b7a]/50 px-2.5 py-1 rounded bg-[#1f6b7a] hover:bg-[#2a8a9c] transition-all w-full sm:w-auto">START</button>
                  </div>
                </div>
                <button className="w-full mt-6 py-2.5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all">View Report</button>
              </div>

              {/* Upcoming Interview */}
              <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden shadow-md">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-400 text-[20px]">calendar_month</span>
                  Upcoming
                </h3>
                <div className="bg-[#1a1d23] rounded-lg p-4 border border-white/5">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <div className="text-[9px] font-bold text-[#1f6b7a] bg-[#1f6b7a]/10 px-2 py-0.5 rounded border border-[#1f6b7a]/20">TOMORROW</div>
                    <span className="text-[10px] text-gray-400 font-mono">10:00 AM</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-0.5">AcmeCorp</h4>
                  <p className="text-[11px] text-gray-400 mb-4">Tech Screen w/ Sarah</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-2 rounded-md shadow-lg transition-all">Join</button>
                    <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold py-2 rounded-md border border-white/10 transition-all">Reschedule</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
