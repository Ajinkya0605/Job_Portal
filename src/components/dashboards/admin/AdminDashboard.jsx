import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0B0B15] font-sans selection:bg-[#33ddff] selection:text-[#0B0B15] text-gray-200 flex flex-col lg:flex-row overflow-hidden">
            <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-h-screen flex flex-col relative w-full min-w-0 lg:ml-64 transition-all duration-300">
                {/* Subtle background glow similar to the image's dark neomorphic feel */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#33ddff]/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                </div>

                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;
