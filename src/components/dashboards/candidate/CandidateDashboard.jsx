import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Shared Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-[#21242c] border border-white/5 rounded-xl relative overflow-hidden shadow-lg ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// --- Sidebar Component (Now Responsive) ---
const Sidebar = ({ isOpen, onClose }) => (
  <>
    {/* Overlay for mobile - high z so menu is visible on small devices */}
    <div
      className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    />
    <aside
      className={`
        fixed z-[60] top-0 left-0
        h-full bg-[#15171c] border-r border-white/5 flex flex-col flex-shrink-0
        w-64 max-w-[85vw] transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:static lg:translate-x-0 lg:w-64 lg:max-w-none
      `}
      aria-hidden={!isOpen}
    >
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 bg-[#15171c]">
        <div className="flex items-center gap-3">
          {/* Increase the logo size and reduce padding */}
          <div className="w-12 h-12 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-full border border-[#1f6b7a]/30 p-0">
            <span className="material-symbols-outlined text-[32px] leading-none">psychology</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight font-sans">SkillHire</h2>
        </div>
        {/* Close button on mobile */}
        <button
          className="lg:hidden ml-auto text-gray-500 hover:text-white transition-colors focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <span className="material-symbols-outlined text-[28px] leading-none">close</span>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Main Menu</p>
        {/* Active Dashboard Link */}
        <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-bold bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20 shadow-sm transition-all">
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          Dashboard
        </a>
        {/* Custom Menu Array to Insert Fresher's Section Below Applications */}
        {[
          { icon: 'search', label: 'Find Jobs' },
          { icon: 'send', label: 'Applications', badge: 4 },
          { icon: 'badge', label: "Fresher's Section" },
          { icon: 'chat_bubble', label: 'Messages' },
          { icon: 'verified_user', label: 'Assessments' }
        ].map((item, index) => {
          return (
            <a key={item.label} href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
              <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">{item.icon}</span>
              {item.label}
              {item.badge && <span className="ml-auto bg-[#1f6b7a] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-lg">{item.badge}</span>}
            </a>
          )
        })}
        <div className="pt-6 mt-6 border-t border-white/5">
          <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Settings</p>
          <Link to="/dashboard/candidate/profile" onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">person</span>
            Profile
          </Link>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">settings</span>
            Settings
          </a>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-white/5 bg-[#15171c]">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1f6b7a] to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">JD</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">John Doe</p>
            <p className="text-[10px] text-gray-400 truncate">Full Stack Dev</p>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  </>
);

// --- Sub-Components ---

const JobCard = ({ logo, role, company, tags, match, salary }) => (
  <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all duration-300 shadow-md">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
      <div className="flex-shrink-0">
        {/* Increase the logo size and reduce the padding */}
        <div className="w-16 h-16 rounded-lg bg-[#1a1d23] border border-white/10 flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-105 transition-transform duration-300 p-0">
          <span className="material-symbols-outlined text-[40px] leading-none">{logo}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 w-full">
        <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#1f6b7a] transition-colors duration-300 truncate">{role}</h4>
        <p className="text-xs text-gray-400 mb-3 truncate">{company}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded bg-[#1a1d23] border border-white/5 text-[10px] font-medium text-gray-300">{tag}</span>
          ))}
          {salary && <span className="px-2.5 py-1 rounded bg-[#1a1d23] border border-white/5 text-[10px] font-medium text-green-400 border-green-400/10">{salary}</span>}
        </div>
      </div>
      <div className="flex flex-row sm:flex-col items-end sm:items-end gap-3 pl-0 sm:pl-5 border-l-0 sm:border-l border-white/5 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex flex-row sm:flex-col items-end">
          <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Match</span>
          <span className="text-xl font-extrabold text-[#1f6b7a] drop-shadow-[0_0_8px_rgba(31,107,122,0.4)] sm:ml-0 ml-3">{match}%</span>
        </div>
        <button className="bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-2 px-5 rounded transition-all shadow-lg shadow-[#1f6b7a]/20 w-full sm:w-auto">Apply</button>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon, label, value, subtext, progress }) => (
  <div className="bg-[#21242c] rounded-xl border border-white/5 p-5 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all shadow-md">
    <div className="relative z-10">
      <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        <span className="material-symbols-outlined text-7xl text-[#1f6b7a]">{icon}</span>
      </div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{label}</p>
          <h3 className="text-4xl font-extrabold text-white">{value}</h3>
        </div>
        <div className="w-12 h-12 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
      </div>
      {progress ? (
        <div className="w-full bg-[#1a1d23] h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#1f6b7a] h-full rounded-full w-[85%] shadow-[0_0_8px_rgba(31,107,122,0.6)]"></div>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded bg-white/5 w-fit border border-white/5">{subtext}</div>
      )}
      {progress && (
        <p className="text-[10px] text-[#2a8a9c] mt-3 font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">info</span> Complete portfolio to reach 100%
        </p>
      )}
    </div>
  </div>
);

// --- Main Layout (with Responsive Sidebar) ---

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex w-screen h-screen bg-[#15171c] text-white font-sans overflow-hidden selection:bg-[#1f6b7a] selection:text-white">
      {/* Sidebar for large screens & mobile drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hamburger Button - only on mobile (now top right) */}
      <button
        className="fixed top-4 right-4 z-[60] flex items-center justify-center w-10 h-10 bg-[#21242c] rounded-lg border border-white/10 lg:hidden hover:bg-[#1a1d23]/80 transition-colors focus:outline-none shadow"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        aria-label="Open sidebar"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="material-symbols-outlined text-2xl text-white">menu</span>
      </button>

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col h-full relative bg-[#15171c] ml-0 lg:ml-0">
        {/* Ambient Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(76, 29, 149, 0.15) 0%, rgba(31, 107, 122, 0.1) 40%, rgba(21, 23, 28, 0) 70%)' }}>
        </div>

        {/* Header */}
        <header className="h-20 flex-shrink-0 flex items-center justify-between px-3 sm:px-6 md:px-8 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 relative z-20">
          <div className="w-1/3 min-w-0 flex items-center">
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
          <div className="w-1/3 flex justify-end items-center gap-3"></div>
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
      </div>
    </div>
  );
}