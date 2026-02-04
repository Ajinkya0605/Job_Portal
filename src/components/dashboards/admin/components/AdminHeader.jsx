import React from 'react';
import { Search, Bell, ShieldCheck, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AdminHeader = ({ onMenuClick }) => {
    const location = useLocation();

    const getTitle = () => {
        const path = location.pathname;
        if (path.includes('users')) return 'User Management';
        if (path.includes('moderation')) return 'Moderation Console';
        if (path.includes('support')) return 'Support Desk';
        if (path.includes('settings')) return 'Settings';
        if (path.includes('reports')) return 'Reports';
        return 'Admin Dashboard';
    };

    const title = getTitle();

    return (
        <header className="h-16 border-b border-gray-800/50 bg-[#0B0B15] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">

            {/* Left: Mobile Menu + Title */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden text-gray-400 hover:text-white p-2 -ml-2"
                >
                    <Menu size={24} />
                </button>

                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-white flex items-center gap-2">
                        {title}
                    </h1>
                    <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        SYSTEM OPERATIONAL
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Search */}
                <div className="relative group hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-recruiter-primary transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-[#151A25] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-recruiter-primary/50 focus:ring-1 focus:ring-recruiter-primary/50 w-48 xl:w-64 transition-all"
                    />
                </div>
                {/* Mobile Search Icon */}
                <button className="sm:hidden p-2 text-gray-400 hover:text-white">
                    <Search size={20} />
                </button>

                <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-recruiter-primary shadow-[0_0_8px_#33ddff]"></span>
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;
