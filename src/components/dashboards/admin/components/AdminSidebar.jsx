import React from 'react';
import {
    LayoutGrid,
    Users,
    ShieldAlert,
    BarChart2,
    Settings,
    LogOut
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const activePage = location.pathname;

    const menuItems = [
        { icon: <LayoutGrid size={20} />, label: 'Dashboard', id: 'Dashboard', path: '/dashboard/admin' },
        { icon: <Users size={20} />, label: 'Users', id: 'Users', path: '/dashboard/admin/users' },
        { icon: <ShieldAlert size={20} />, label: 'Moderation', id: 'Moderation', path: '/dashboard/admin/moderation', badge: 12 },
        { icon: <BarChart2 size={20} />, label: 'Reports', id: 'Reports', path: '/dashboard/admin/reports' },
        { icon: <Settings size={20} />, label: 'Settings', id: 'Settings', path: '/dashboard/admin/settings' },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 w-64 bg-navy-sidebar border-r border-gray-800/50 flex flex-col z-50 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Logo Area */}
            <div
                className="h-16 flex items-center px-6 border-b border-gray-800/50 cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => navigate('/')}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-recruiter-primary/20 flex items-center justify-center text-recruiter-primary border border-recruiter-primary/30">
                        <ShieldAlert size={18} />
                    </div>
                    <span className="text-xl font-bold text-white font-sans tracking-tight">SkillHire</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    // Check if active: exact match for most, or loose match if needed. 
                    // For now, simple exact match or check if it starts with the path for sub-routes
                    const isActive = activePage === item.path;

                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group
                ${isActive
                                    ? 'bg-recruiter-primary/10 text-recruiter-primary'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                            {item.badge && (
                                <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20">
                                    {item.badge}
                                </span>
                            )}
                            {isActive && (
                                <div className="w-1 h-6 rounded-full bg-recruiter-primary absolute left-0 shadow-[0_0_10px_#33ddff]"></div>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-800/50">
                <div
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0B15] border border-gray-800/50 hover:border-gray-700 transition-colors group cursor-pointer"
                    onClick={() => navigate('/auth')}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-recruiter-primary to-purple-500 p-[1px]">
                        <div className="w-full h-full rounded-full bg-[#0B0B15] flex items-center justify-center">
                            <span className="font-bold text-xs text-white">AD</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className="text-sm font-bold text-white truncate">Admin User</h4>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] text-gray-500">Online</span>
                        </div>
                    </div>
                    <LogOut size={16} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;

