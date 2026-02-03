import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { JobCard } from './CandidateComponents';

export default function CandidateFreshers() {
    const { setSidebarOpen } = useOutletContext();
    const [filters, setFilters] = useState({
        batch: [],
        degree: [],
        role: []
    });

    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const batches = ['2023', '2024', '2025', '2026'];
    const degrees = ['B.Tech', 'B.E.', 'BCA', 'MCA', 'B.Sc', 'MBA'];
    const roles = ['Internship', 'Full-time', 'Trainee'];

    return (
        <>
            <header className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-[#15171c]/95 backdrop-blur-md relative z-20">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="w-10 h-10 rounded-lg bg-[#1f6b7a]/20 border border-[#1f6b7a]/30 flex items-center justify-center text-[#1f6b7a]">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight">Fresher's Hub</h1>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Launch your career</p>
                    </div>
                </div>
                {/* Could add user profile or notification icons here if needed to match Dashboard */}
            </header>

            <main className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar flex flex-col lg:flex-row gap-6">

                {/* Left Sidebar: Filters */}
                <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">

                    {/* Batch Filter */}
                    <div className="bg-[#21242c] rounded-xl border border-white/5 p-4">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#1f6b7a] text-[18px]">calendar_month</span>
                            Batch
                        </h3>
                        <div className="space-y-2">
                            {batches.map(batch => (
                                <label key={batch} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${filters.batch.includes(batch) ? 'bg-[#1f6b7a] border-[#1f6b7a]' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                        {filters.batch.includes(batch) && <span className="material-symbols-outlined text-[12px] text-white">check</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={filters.batch.includes(batch)}
                                        onChange={() => toggleFilter('batch', batch)}
                                    />
                                    <span className={`text-sm ${filters.batch.includes(batch) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{batch}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Degree Filter */}
                    <div className="bg-[#21242c] rounded-xl border border-white/5 p-4">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#1f6b7a] text-[18px]">school</span>
                            Degree
                        </h3>
                        <div className="space-y-2">
                            {degrees.map(degree => (
                                <label key={degree} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${filters.degree.includes(degree) ? 'bg-[#1f6b7a] border-[#1f6b7a]' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                        {filters.degree.includes(degree) && <span className="material-symbols-outlined text-[12px] text-white">check</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={filters.degree.includes(degree)}
                                        onChange={() => toggleFilter('degree', degree)}
                                    />
                                    <span className={`text-sm ${filters.degree.includes(degree) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{degree}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Role Type Filter */}
                    <div className="bg-[#21242c] rounded-xl border border-white/5 p-4">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#1f6b7a] text-[18px]">work</span>
                            Job Type
                        </h3>
                        <div className="space-y-2">
                            {roles.map(role => (
                                <label key={role} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${filters.role.includes(role) ? 'bg-[#1f6b7a] border-[#1f6b7a]' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                        {filters.role.includes(role) && <span className="material-symbols-outlined text-[12px] text-white">check</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={filters.role.includes(role)}
                                        onChange={() => toggleFilter('role', role)}
                                    />
                                    <span className={`text-sm ${filters.role.includes(role) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{role}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                </aside>

                {/* Right Content: Job Listings */}
                <div className="flex-1 space-y-6">

                    {/* Hero Banner for Freshers */}
                    <div className="rounded-2xl bg-gradient-to-r from-[#1f6b7a]/20 to-[#21242c] border border-[#1f6b7a]/20 p-6 md:p-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
                            <span className="material-symbols-outlined text-[150px] text-white">rocket_launch</span>
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-2xl font-bold text-white mb-2">Kickstart Your Career today!</h2>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">Exclusive opportunities for the Class of 2024 & 2025. Apply to top entry-level roles and internships tailored for fresh graduates.</p>
                            <button className="bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white font-bold py-2 px-6 rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all flex items-center gap-2 text-sm">
                                Explore Opportunities <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                        Latest Openings
                        <span className="bg-[#1f6b7a] text-white text-[10px] px-2 py-0.5 rounded-full">New</span>
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                        <JobCard logo="code" role="Graduate Engineer Trainee" company="Tata Consultancy Services • Pan India" tags={['Batch 2024/25', 'B.Tech/MCA']} salary="3.5 - 7 LPA" match="99" />
                        <JobCard logo="data_object" role="ReactJS Intern" company="TechStart Solutions • Remote" tags={['Internship', '6 Months']} salary="₹15k - ₹25k / mo" match="95" />
                        <JobCard logo="terminal" role="Junior Python Developer" company="DataMinds • Bangalore" tags={['Fresher', 'Python', 'SQL']} salary="4 - 6 LPA" match="92" />
                        <JobCard logo="design_services" role="UI/UX Trainee" company="CreativeStudio • Pune" tags={['Design', 'Figma', 'Portfolio']} salary="3 - 5 LPA" match="88" />
                        <JobCard logo="campaign" role="Digital Marketing Associate" company="GrowthHacker • Mumbai" tags={['Marketing', 'Fresher']} salary="3.5 - 5 LPA" match="85" />
                    </div>

                </div>
            </main>
        </>
    );
}
