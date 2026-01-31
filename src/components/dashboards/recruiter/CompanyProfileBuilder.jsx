import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  Building2,
  Briefcase,
  Users,
  BarChart2,
  Settings,
  Menu,
  X,
  Plus,
  Image as ImageIcon,
  CheckCircle2,
  Linkedin,
  Github,
  MessageSquare, // For Slack
  Code,
  Cloud,
  Terminal,
  Save,
  TrendingUp,
  Info,
  Zap // For Upgrade icon
} from 'lucide-react';

const CompanyProfileBuilder = () => {
  const navigate = useNavigate();

  // --- THEME CONFIGURATION ---
  const theme = {
    bg: "bg-[#0B0B15]",
    cardBg: "bg-[#151A25]",
    inputBg: "bg-[#0f1115]",
    accent: "bg-[#1f6b7a]",
    accentHover: "hover:bg-[#185662]",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    border: "border-gray-800",
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- LOGO COMPONENT (Preserved) ---
  const BrandLogo = () => (
    <div
      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => navigate('/')}
    >
      <div className="w-8 h-8 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-full border border-[#1f6b7a]/30">
        <span className="material-symbols-outlined text-[20px] font-bold">P</span>
      </div>
      <h2 className="text-white text-xl font-bold tracking-tight font-sans">SkillHire</h2>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textPrimary} font-sans flex flex-col lg:block selection:bg-[#1f6b7a] selection:text-white`}>

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800 bg-[#0B0B15] sticky top-0 z-30">
        <BrandLogo />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 border-r ${theme.border} bg-[#0B0B15] flex flex-col p-6 
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:fixed
      `}>
        {/* Desktop Logo */}
        <div className="h-16 flex items-center px-2 border-b border-white/5 bg-[#0B0B15] hidden lg:flex mb-6">
          <BrandLogo />
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-1 overflow-y-auto">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Main Menu</p>
          <NavButton icon={<LayoutGrid size={18} />} label="Dashboard" />
          <NavButton icon={<Building2 size={18} />} label="Company Profile" active />
          <NavButton icon={<Briefcase size={18} />} label="Job Listings" />
          <NavButton icon={<Users size={18} />} label="Candidate Pipeline" />
          <NavButton icon={<BarChart2 size={18} />} label="Analytics" />

          <div className="pt-6 mt-6 border-t border-gray-800">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Settings</p>
            <NavButton icon={<Settings size={18} />} label="Account Settings" />
          </div>
        </nav>

        {/* Recruiter Pro Upgrade Card */}
        <div className={`mt-auto p-4 rounded-xl bg-gradient-to-br from-[#151A25] to-[#0B0B15] border ${theme.border} relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#1f6b7a]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-[#1f6b7a]/20 text-[#1f6b7a]">
              <Zap size={16} fill="currentColor" />
            </div>
            <span className="font-bold text-sm">Recruiter Pro</span>
          </div>
          <p className="text-[10px] text-gray-400 mb-3 leading-relaxed">
            Unlock advanced ML fraud detection and unlimited listings.
          </p>
          <button className={`w-full py-2 rounded-lg ${theme.accent} ${theme.accentHover} text-xs font-bold text-white transition-colors`}>
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="lg:ml-64 flex-1 p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* CENTER COLUMN */}
        <div className="col-span-1 lg:col-span-8 space-y-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-gray-800/50">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Company Profile Builder</h1>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-[#1f6b7a]"></div>
                </div>
                <span className="text-sm font-medium text-[#1f6b7a]">85% Complete</span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="text-sm font-medium text-gray-400 hover:text-white px-4 py-2">Discard</button>
              <button className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl ${theme.accent} ${theme.accentHover} font-bold shadow-lg shadow-teal-900/20 transition-all`}>
                <Save size={18} />
                Save Company Profile
              </button>
            </div>
          </div>

          {/* Section 1: Company Identity */}
          <div className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Building2 size={20} className="text-[#1f6b7a]" />
                Company Identity
              </h3>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f6b7a]/10 border border-[#1f6b7a]/20">
                <CheckCircle2 size={12} className="text-[#1f6b7a]" />
                <span className="text-[10px] font-bold text-[#1f6b7a] tracking-wide">VERIFIED RECRUITER</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Logo Upload */}
              <div className="flex flex-col gap-3 shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-[#111316] border-2 border-dashed border-gray-700 flex flex-col items-center justify-center group cursor-pointer hover:border-[#1f6b7a] transition-colors">
                  <div className="p-3 rounded-full bg-gray-800 text-gray-500 group-hover:bg-[#1f6b7a] group-hover:text-white transition-colors mb-2">
                    <ImageIcon size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Company Logo</span>
                </div>
                <button className="text-xs font-bold text-gray-400 border border-gray-700 py-2 rounded-lg hover:text-white hover:border-gray-500 transition-colors">
                  Change
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex-1 space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    defaultValue="TechNova Solutions"
                    className={`w-full px-4 py-3 rounded-xl ${theme.inputBg} border ${theme.border} text-sm focus:outline-none focus:border-[#1f6b7a] transition-colors text-white font-medium`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Industries</label>
                  <div className="flex flex-wrap gap-2">
                    <Tag text="FinTech" />
                    <Tag text="SaaS" />
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-dashed border-gray-600 text-xs text-gray-400 hover:text-white hover:border-gray-400 transition-all">
                      <Plus size={12} /> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: About Us */}
          <div className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-[#1f6b7a]" />
              About Us
            </h3>
            <div className="relative">
              <textarea
                className={`w-full h-32 rounded-xl ${theme.inputBg} border ${theme.border} p-4 text-sm text-gray-300 focus:outline-none focus:border-[#1f6b7a] transition-colors resize-none leading-relaxed`}
                defaultValue="TechNova Solutions is at the forefront of financial engineering, building robust SaaS platforms that empower modern enterprises. Our culture is built on transparency, technical excellence, and radical innovation."
              ></textarea>
              <span className="absolute bottom-4 right-4 text-[10px] text-gray-600 font-mono">184 / 1000 characters</span>
            </div>
          </div>

          {/* Section 3: Tech Stack */}
          <div className={`p-6 md:p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Code size={20} className="text-[#1f6b7a]" />
                Our Tech Stack
              </h3>
              <span className="text-xs text-gray-500">6 Tools Selected</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TechCard icon={<Code size={20} />} name="React" color="text-cyan-400" />
              <TechCard icon={<Cloud size={20} />} name="AWS" color="text-orange-400" />
              <TechCard icon={<Terminal size={20} />} name="Node.js" color="text-green-500" />

              {/* Add Button */}
              <button className="h-24 rounded-xl border border-dashed border-gray-700 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-white hover:border-[#1f6b7a] hover:bg-[#1f6b7a]/5 transition-all group">
                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-[#1f6b7a] group-hover:text-white transition-colors">
                  <Plus size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">Add Tech</span>
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Widgets) */}
        <div className="col-span-1 lg:col-span-4 space-y-6">

          {/* Widget 1: Recruitment Stats */}
          <div className={`p-6 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Recruitment Stats</h3>

            <div className="space-y-6">
              <StatItem
                label="Profile Visibility"
                value="2,480"
                unit="views/mo"
                trend="+12.5%"
                isPositive
              />
              <StatItem
                label="Avg. Application Rate"
                value="18.4%"
                unit=""
                trend="+4.2%"
                isPositive
              />
            </div>

            <button className="w-full mt-6 py-3 rounded-xl border border-gray-700 text-xs font-bold text-gray-300 hover:bg-gray-800 hover:text-white transition-colors uppercase tracking-wide">
              Detailed Analytics
            </button>
          </div>

          {/* Widget 2: Connected Platforms */}
          <div className={`p-6 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Connected Platforms</h3>
            <div className="space-y-3">
              <PlatformItem icon={<Linkedin size={18} />} name="LinkedIn" status="CONNECTED" statusColor="text-[#1f6b7a]" />
              <PlatformItem icon={<MessageSquare size={18} />} name="Slack" status="ACTIVE" statusColor="text-green-500" />
              <PlatformItem icon={<Github size={18} />} name="GitHub" status="CONNECT" statusColor="text-gray-500" />
            </div>
          </div>

          {/* Widget 3: Profile Tip */}
          <div className={`p-6 rounded-3xl bg-[#111316] border border-gray-800`}>
            <div className="flex items-center gap-2 mb-3 text-[#1f6b7a]">
              <Info size={18} />
              <span className="font-bold text-sm">Profile Tip</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Companies with complete tech stacks see <span className="text-white font-bold">40% higher engagement</span> from top-tier talent. Add at least 5 tools to your profile.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

// --- SUB COMPONENTS ---

const NavButton = ({ icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all text-left ${active ? 'bg-[#1f6b7a]/10 text-[#1f6b7a] font-medium' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);

const Tag = ({ text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2a2d36] border border-gray-700 text-xs text-gray-300 font-medium">
    {text}
    <X size={12} className="cursor-pointer hover:text-white" />
  </div>
);

const TechCard = ({ icon, name, color }) => (
  <div className="h-24 rounded-xl bg-[#111316] border border-gray-800 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#1f6b7a]/50 transition-all">
    <div className={`p-2 rounded-lg bg-[#151A25] ${color}`}>
      {icon}
    </div>
    <span className="text-xs font-bold text-gray-300">{name}</span>
  </div>
);

const StatItem = ({ label, value, unit, trend, isPositive }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-gray-500">{label}</span>
      <div className={`flex items-center gap-1 text-[10px] font-bold ${isPositive ? 'text-[#1f6b7a]' : 'text-red-500'}`}>
        <TrendingUp size={12} />
        {trend}
      </div>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-gray-500">{unit}</span>
    </div>
  </div>
);

const PlatformItem = ({ icon, name, status, statusColor }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-[#111316] border border-gray-800">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-[#151A25] text-white">
        {icon}
      </div>
      <span className="text-sm font-bold text-gray-300">{name}</span>
    </div>
    <span className={`text-[10px] font-bold uppercase tracking-wide ${statusColor}`}>
      {status}
    </span>
  </div>
);

export default CompanyProfileBuilder;
