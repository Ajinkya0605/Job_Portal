import React, { useState } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/dashboard/recruiter' && location.pathname === '/dashboard/recruiter') return true;
        if (path !== '/dashboard/recruiter' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-[#15171c] border-r border-white/5">
            {/* Logo Area */}
            <div
                className="h-16 flex items-center px-6 border-b border-white/5 bg-[#15171c] cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => navigate('/')}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">psychology</span>
                    </div>
                    <h2 className="text-white text-lg font-bold tracking-tight">SkillHire</h2>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="ml-auto lg:hidden text-gray-400 hover:text-white"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
                <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 mt-2">Recruitment</p>

                <Link to="/dashboard/recruiter" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive('/dashboard/recruiter') ? 'font-bold bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20 shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined text-[20px]">dashboard</span>
                    Overview
                </Link>

                {[
                    { icon: 'work', label: 'Jobs', path: '/dashboard/recruiter/jobs', badge: 2 },
                    { icon: 'group', label: 'Candidates', path: '/dashboard/recruiter/applications', badge: 12 },
                    { icon: 'chat', label: 'Messages', path: '/dashboard/recruiter/messages', badge: 4 },
                    { icon: 'analytics', label: 'Analytics', path: '/dashboard/recruiter/analytics' },
                    { icon: 'schedule', label: 'Interviews', path: '/dashboard/recruiter/interviews' }
                ].map((item) => (
                    <Link key={item.label} to={item.path} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${isActive(item.path) ? 'bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                        <span className={`material-symbols-outlined text-[20px] transition-colors ${isActive(item.path) ? '' : 'group-hover:text-[#1f6b7a]'}`}>{item.icon}</span>
                        {item.label}
                        {item.badge && <span className="ml-auto bg-[#1f6b7a] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-lg">{item.badge}</span>}
                    </Link>
                ))}

                <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Admin</p>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
                        <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">domain</span>
                        Company Profile
                    </a>
                    <Link to="/dashboard/recruiter/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
                        <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">settings</span>
                        Settings
                    </Link>
                </div>
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t border-white/5 bg-[#15171c]">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1f6b7a] to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">AM</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">Alex Morgan</p>
                        <p className="text-[10px] text-gray-400 truncate">Senior Recruiter</p>
                    </div>
                    <button
                        className="text-gray-500 hover:text-white transition-colors"
                        onClick={() => navigate('/auth')}
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

export default function RecruiterLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-50 flex flex-col lg:flex-row w-screen h-screen bg-[#15171c] text-white font-sans overflow-hidden selection:bg-[#1f6b7a] selection:text-white">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full min-w-0 h-full relative bg-[#15171c]">
                {/* Ambient Glow */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
                    style={{ background: 'radial-gradient(circle at 60% 40%, rgba(76, 29, 149, 0.15) 0%, rgba(31, 107, 122, 0.1) 40%, rgba(21, 23, 28, 0) 70%)' }}>
                </div>

                <Outlet context={{ isSidebarOpen, setIsSidebarOpen }} />

            </div>
        </div>
    );
}
