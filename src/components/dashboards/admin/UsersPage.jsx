import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, MapPin, ExternalLink, LogOut, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('candidates');

    // Mock Data
    const candidates = [
        { id: 1, name: "Alice Johnson", role: "Software Engineer", location: "New York, USA", email: "alice@example.com", phone: "+1 234 567 890", status: "Active" },
        { id: 2, name: "Bob Smith", role: "Product Manager", location: "San Francisco, USA", email: "bob@example.com", phone: "+1 987 654 321", status: "Active" },
        { id: 3, name: "Charlie Brown", role: "UX Designer", location: "London, UK", email: "charlie@example.com", phone: "+44 20 1234 5678", status: "Inactive" },
        { id: 4, name: "Diana Prince", role: "Data Scientist", location: "Berlin, Germany", email: "diana@example.com", phone: "+49 30 12345678", status: "Active" },
        { id: 5, name: "Ethan Hunt", role: "DevOps Engineer", location: "Toronto, Canada", email: "ethan@example.com", phone: "+1 416 123 4567", status: "Active" },
        { id: 6, name: "Fiona Gallagher", role: "Frontend Dev", location: "Chicago, USA", email: "fiona@example.com", phone: "+1 312 555 0199", status: "Active" },
        { id: 7, name: "George Martin", role: "Backend Dev", location: "Austin, USA", email: "george@example.com", phone: "+1 512 555 0123", status: "Suspended" },
    ];

    const recruiters = [
        { id: 101, name: "Tech Corp Inc.", role: "Enterprise", location: "Silicon Valley", email: "hr@techcorp.com", phone: "+1 800 123 4567", status: "Verified" },
        { id: 102, name: "Startup Hub", role: "Startup", location: "Remote", email: "jobs@startuphub.io", phone: "+1 888 555 0199", status: "Verified" },
        { id: 103, name: "Global Systems", role: "Agency", location: "Tokyo, Japan", email: "contact@globalsys.jp", phone: "+81 3 1234 5678", status: "Pending" },
        { id: 104, name: "Creative Minds", role: "Design Studio", location: "Paris, France", email: "hello@creativeminds.fr", phone: "+33 1 23 45 67 89", status: "Verified" },
    ];

    const displayedUsers = activeTab === 'candidates' ? candidates : recruiters;

    return (
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto z-10 relative h-full">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">User Management</h2>
                    <p className="text-gray-400 text-sm">Manage and view all registered {activeTab}.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium group"
                    >
                        <Home size={16} className="group-hover:text-recruiter-primary transition-colors" />
                        <span>Home</span>
                    </button>

                    <button
                        onClick={() => navigate('/auth')}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-all text-sm font-medium"
                    >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mb-6 border-b border-gray-800/50 pb-1">
                <button
                    onClick={() => setActiveTab('candidates')}
                    className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'candidates' ? 'text-recruiter-primary' : 'text-gray-400 hover:text-white'
                        }`}
                >
                    Candidates
                    {activeTab === 'candidates' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-recruiter-primary shadow-[0_0_8px_#33ddff]"
                        />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('recruiters')}
                    className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'recruiters' ? 'text-recruiter-primary' : 'text-gray-400 hover:text-white'
                        }`}
                >
                    Recruiters
                    {activeTab === 'recruiters' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-recruiter-primary shadow-[0_0_8px_#33ddff]"
                        />
                    )}
                </button>
            </div>

            {/* Users List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode='popLayout'>
                    {displayedUsers.map((user, index) => (
                        <motion.div
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#151A25]/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-5 hover:border-recruiter-primary/30 transition-all group hover:shadow-[0_0_20px_rgba(51,221,255,0.05)]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold border border-white/5
                                        ${activeTab === 'candidates'
                                            ? 'bg-blue-500/10 text-blue-400'
                                            : 'bg-purple-500/10 text-purple-400'
                                        }`}
                                    >
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-sm line-clamp-1">{user.name}</h3>
                                        <p className="text-gray-500 text-xs">{user.role}</p>
                                    </div>
                                </div>
                                <button className="text-gray-600 hover:text-white transition-colors">
                                    <MoreVertical size={16} />
                                </button>
                            </div>

                            <div className="space-y-3 mb-5">
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <MapPin size={14} className="text-gray-600" />
                                    <span>{user.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Mail size={14} className="text-gray-600" />
                                    <span className="truncate">{user.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Phone size={14} className="text-gray-600" />
                                    <span>{user.phone}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${user.status === 'Active' || user.status === 'Verified'
                                    ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                    : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                    }`}>
                                    {user.status.toUpperCase()}
                                </span>

                                <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                    <ExternalLink size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default UsersPage;
