import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Helpers ---
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-[#151A25] border border-white/5 rounded-xl relative overflow-hidden shadow-lg ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// --- Components ---

// 1. Sidebar (Responsive)
// 1. Sidebar (Responsive)
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0B0B15] border-r border-white/5">
      {/* Logo Area */}
      <div
        className="h-16 flex items-center px-6 border-b border-white/5 bg-[#0B0B15] cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => navigate('/')}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-lg">
            <span className="material-symbols-outlined text-[20px]">psychology</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">SkillHire</h2>
        </div>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="ml-auto lg:hidden text-gray-400 hover:text-white">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 mt-2">Recruitment</p>

        <Link to="/dashboard/recruiter" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20 shadow-sm transition-all">
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          Overview
        </Link>

        {[
          { icon: 'work', label: 'Jobs', badge: 2 },
          { icon: 'group', label: 'Candidates', badge: 12 },
          { icon: 'analytics', label: 'Analytics' },
          { icon: 'schedule', label: 'Interviews' }
        ].map((item) => (
          <a key={item.label} href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">{item.icon}</span>
            {item.label}
            {item.badge && <span className="ml-auto bg-[#1f6b7a] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-lg">{item.badge}</span>}
          </a>
        ))}

        <div className="pt-4 mt-4 border-t border-white/5">
          <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Admin</p>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">domain</span>
            Company Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">settings</span>
            Settings
          </a>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-white/5 bg-[#0B0B15]">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1f6b7a] to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">AM</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">Alex Morgan</p>
            <p className="text-[10px] text-gray-400 truncate">Senior Recruiter</p>
          </div>
          <button
            className="text-gray-500 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate('/auth'); }}
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:flex w-64 flex-col h-full flex-shrink-0 z-50">
        <SidebarContent />
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
          <div className="absolute inset-y-0 left-0 w-64 shadow-2xl animate-fade-in-right">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
};

// 2. Stat Card
const StatCard = ({ icon, label, value, trend, trendUp }) => (
  <div className="bg-[#151A25] rounded-xl border border-white/5 p-4 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all shadow-md">
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{label}</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{value}</h3>
            {trend && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border mb-1 flex items-center ${trendUp ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-red-400 bg-red-400/10 border-red-400/20'}`}>
                <span className="material-symbols-outlined text-[10px] mr-0.5">{trendUp ? 'trending_up' : 'trending_down'}</span>
                {trend}
              </span>
            )}
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
      </div>
    </div>
  </div>
);

// 3. Applicant Row
const ApplicantRow = ({ name, role, applied, score, status, statusColor }) => (
  <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0 group">
    <div className="flex items-center gap-3 w-1/3 min-w-[120px]">
      <div className="w-8 h-8 rounded-full bg-[#151A25] border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-300 group-hover:text-[#1f6b7a] group-hover:border-[#1f6b7a]/30 transition-colors flex-shrink-0">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-white truncate">{name}</p>
        <p className="text-[10px] text-gray-500 truncate">{role}</p>
      </div>
    </div>

    <div className="hidden sm:block w-1/6 text-[10px] text-gray-400">{applied}</div>

    <div className="w-1/4 sm:w-1/4">
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold border ${statusColor}`}>
        <span className={`w-1 h-1 rounded-full mr-1.5 ${statusColor.replace('text-', 'bg-').replace('border-', '')}`}></span>
        {status}
      </span>
    </div>

    <div className="w-1/6 text-right">
      <span className="text-xs font-extrabold text-[#1f6b7a]">{score}%</span>
    </div>

    <div className="hidden sm:block w-10 text-right">
      <button className="text-gray-500 hover:text-white">
        <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
    </div>
  </div>
);

// --- MAIN LAYOUT ---

export default function RecruiterDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0B0B15] text-white font-sans overflow-hidden selection:bg-[#1f6b7a] selection:text-white">

      {/* 1. Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* 2. Main Content */}
      <div className="flex-1 flex flex-col h-full relative bg-[#0B0B15]">

        {/* Ambient Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(76, 29, 149, 0.15) 0%, rgba(31, 107, 122, 0.1) 40%, rgba(21, 23, 28, 0) 70%)' }}>
        </div>

        {/* 3. Header */}
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 bg-[#0B0B15]/95 backdrop-blur-md border-b border-white/5 relative z-20">

          <div className="w-1/3 flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white mr-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-[#1f6b7a]/10 border border-[#1f6b7a]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[10px] font-bold text-[#1f6b7a] uppercase tracking-wider">System Optimal</span>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-center justify-center text-center">
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight whitespace-nowrap">Recruiter Console</h1>
            <p className="text-[10px] text-gray-400 hidden sm:block">Manage your hiring pipeline</p>
          </div>

          <div className="w-1/3 flex justify-end items-center gap-2 sm:gap-3">
            {/* Post Job Button Linked */}
            <Link to="/dashboard/recruiter/post-job">
              <button className="flex items-center gap-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all">
                <span className="material-symbols-outlined text-[14px]">add</span>
                <span className="hidden sm:inline">Post Job</span>
              </button>
            </Link>
            <div className="hidden sm:block h-6 w-[1px] bg-white/10 mx-1"></div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg bg-[#151A25] border border-white/5 hover:border-white/10 transition-all">
              <span className="material-symbols-outlined text-[18px]">notifications</span>
            </button>
          </div>
        </header>

        {/* 4. Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative z-10 custom-scrollbar">
          <div className="w-full space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon="work" label="Active Jobs" value="12" trend="2%" trendUp={true} />
              <StatCard icon="group_add" label="New Applicants" value="48" trend="12%" trendUp={true} />
              <StatCard icon="calendar_month" label="Interviews Today" value="06" />
              <StatCard icon="timelapse" label="Avg. Time to Hire" value="14d" trend="5%" trendUp={true} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
              <div className="xl:col-span-2">
                <div className="bg-[#151A25] rounded-xl border border-white/5 overflow-hidden shadow-md h-full flex flex-col">
                  <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#151A25]/50">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1f6b7a] text-[18px]">feed</span>
                      Applicant Feed
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-[10px] font-bold text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/5 transition-colors">Filter</button>
                      <button className="text-[10px] font-bold text-[#1f6b7a] px-2 py-1 rounded bg-[#1f6b7a]/10 border border-[#1f6b7a]/20 transition-colors">Export</button>
                    </div>
                  </div>

                  <div className="p-2 overflow-y-auto flex-1 min-h-[300px]">
                    <div className="hidden sm:flex justify-between px-3 py-2 text-[9px] font-bold text-gray-500 uppercase tracking-wider border-b border-white/5 mb-2">
                      <span className="w-1/3">Candidate</span>
                      <span className="w-1/6">Applied</span>
                      <span className="w-1/4">Status</span>
                      <span className="w-1/6 text-right">Match</span>
                      <span className="w-10"></span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <ApplicantRow name="John Doe" role="Senior Frontend Dev" applied="2m ago" score="98" status="New" statusColor="text-blue-400 border-blue-400/20 bg-blue-400/10" />
                      <ApplicantRow name="Alice Smith" role="Product Designer" applied="15m ago" score="94" status="Reviewing" statusColor="text-yellow-400 border-yellow-400/20 bg-yellow-400/10" />
                      <ApplicantRow name="Marcus Reed" role="DevOps Engineer" applied="1h ago" score="85" status="Interview" statusColor="text-purple-400 border-purple-400/20 bg-purple-400/10" />
                      <ApplicantRow name="Elena Lou" role="Marketing Lead" applied="3h ago" score="60" status="Screening" statusColor="text-gray-400 border-gray-400/20 bg-gray-400/10" />
                      <ApplicantRow name="David Chen" role="Backend Engineer" applied="5h ago" score="88" status="New" statusColor="text-blue-400 border-blue-400/20 bg-blue-400/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#151A25] rounded-xl border border-white/5 p-5 relative overflow-hidden shadow-md">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h3 className="text-sm font-bold text-white">Pipeline</h3>
                      <p className="text-[10px] text-gray-400">Weekly conversion</p>
                    </div>
                    <button className="text-gray-500 hover:text-[#1f6b7a] transition-colors"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
                  </div>

                  <div className="space-y-4 relative z-10">
                    {[
                      { label: 'Applied', count: 142, pct: '100%', color: 'bg-[#1f6b7a]' },
                      { label: 'Screened', count: 86, pct: '60%', color: 'bg-[#1f6b7a]' },
                      { label: 'Interview', count: 24, pct: '25%', color: 'bg-[#1f6b7a]' },
                      { label: 'Offer', count: 8, pct: '10%', color: 'bg-green-400' }
                    ].map((stage) => (
                      <div key={stage.label}>
                        <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wide">
                          <span>{stage.label}</span>
                          <span className="text-white">{stage.count}</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#151A25] rounded-full overflow-hidden">
                          <div className={`h-full ${stage.color} opacity-80 rounded-full`} style={{ width: stage.pct }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#151A25] rounded-xl border border-white/5 p-5 shadow-md">
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Priority Tasks
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#151A25] border border-white/5 hover:border-[#1f6b7a]/30 cursor-pointer transition-colors group">
                      <span className="material-symbols-outlined text-gray-500 group-hover:text-[#1f6b7a] text-[18px] mt-0.5">assignment_ind</span>
                      <div>
                        <p className="text-xs font-bold text-gray-200 group-hover:text-white">Review tech assessment</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">Candidate: M. Johnson â€¢ Due Today</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#151A25] border border-white/5 hover:border-[#1f6b7a]/30 cursor-pointer transition-colors group">
                      <span className="material-symbols-outlined text-gray-500 group-hover:text-[#1f6b7a] text-[18px] mt-0.5">send</span>
                      <div>
                        <p className="text-xs font-bold text-gray-200 group-hover:text-white">Send offer letter</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">Candidate: Sarah K. â€¢ Due 2h</p>
                      </div>
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
