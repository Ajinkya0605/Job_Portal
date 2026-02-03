import React, { useState } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/dashboard/candidate' && location.pathname === '/dashboard/candidate') return true;
        if (path !== '/dashboard/candidate' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const menuItems = [
        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard/candidate' },
        { icon: 'search', label: 'Find Jobs', path: '/dashboard/candidate/jobs' },
        { icon: 'send', label: 'Applications', path: '/dashboard/candidate/applications', badge: 4 },
        { icon: 'badge', label: "Fresher's Section", path: '/dashboard/candidate/freshers' },
        { icon: 'chat_bubble', label: 'Messages', path: '/dashboard/candidate/messages' },
        { icon: 'verified_user', label: 'Assessments', path: '/dashboard/candidate/assessments' }
    ];

    return (
        <>
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
                <div
                    className="h-20 flex items-center px-6 border-b border-white/5 bg-[#15171c] cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => navigate('/')}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 text-[#1f6b7a] flex items-center justify-center bg-[#1f6b7a]/20 rounded-full border border-[#1f6b7a]/30 p-0">
                            <span className="material-symbols-outlined text-[32px] leading-none">psychology</span>
                        </div>
                        <h2 className="text-white text-lg font-bold tracking-tight font-sans">SkillHire</h2>
                    </div>
                    <button
                        className="lg:hidden ml-auto text-gray-500 hover:text-white transition-colors focus:outline-none"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        aria-label="Close sidebar"
                    >
                        <span className="material-symbols-outlined text-[28px] leading-none">close</span>
                    </button>
                </div>

                <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                    <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Main Menu</p>

                    {menuItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={onClose}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all group
                  ${active
                                        ? 'font-bold bg-[#1f6b7a]/10 text-[#1f6b7a] border border-[#1f6b7a]/20 shadow-sm'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[20px] ${active ? '' : 'group-hover:text-[#1f6b7a] transition-colors'}`}>{item.icon}</span>
                                {item.label}
                                {item.badge && <span className="ml-auto bg-[#1f6b7a] text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-lg">{item.badge}</span>}
                            </Link>
                        )
                    })}

                    <div className="pt-6 mt-6 border-t border-white/5">
                        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Settings</p>
                        <Link to="/dashboard/candidate/profile" onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
                            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">person</span>
                            Profile
                        </Link>
                        <Link to="/dashboard/candidate/settings" onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all group">
                            <span className="material-symbols-outlined text-[20px] group-hover:text-[#1f6b7a] transition-colors">settings</span>
                            Settings
                        </Link>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5 bg-[#15171c]">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1f6b7a] to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">JD</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">John Doe</p>
                            <p className="text-[10px] text-gray-400 truncate">Full Stack Dev</p>
                        </div>
                        <button
                            className="text-gray-500 hover:text-white transition-colors"
                            onClick={() => navigate('/auth')}
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default function CandidateLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-50 flex flex-col lg:flex-row w-screen h-screen bg-[#15171c] text-white font-sans overflow-hidden selection:bg-[#1f6b7a] selection:text-white">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col w-full min-w-0 h-full relative bg-[#15171c] ml-0 lg:ml-0">
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
                    style={{ background: 'radial-gradient(circle at 60% 40%, rgba(76, 29, 149, 0.15) 0%, rgba(31, 107, 122, 0.1) 40%, rgba(21, 23, 28, 0) 70%)' }}>
                </div>

                <Outlet context={{ setSidebarOpen }} />
            </div>
        </div>
    );
}
