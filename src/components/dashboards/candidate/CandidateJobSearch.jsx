import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { JobCard } from './CandidateComponents';

export default function CandidateJobSearch() {
    const { setSidebarOpen } = useOutletContext();
    const [activeTab, setActiveTab] = useState('recommended');

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
                    <h1 className="text-xl font-bold text-white tracking-tight">Find Jobs</h1>
                </div>
                {/* Could add user profile or notification icons here if needed to match Dashboard */}
            </header>

            <main className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar">
                {/* Search Section */}
                <div className="bg-[#21242c] rounded-xl border border-white/5 p-6 mb-8 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1f6b7a]/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Find your dream job</h2>
                        <p className="text-gray-400 text-sm mb-6">Browse through thousands of job openings tailored to your skills.</p>

                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="flex-1 relative group">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1f6b7a] transition-colors material-symbols-outlined">search</span>
                                <input
                                    type="text"
                                    placeholder="Job title, keywords, or company"
                                    className="w-full bg-[#15171c] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#1f6b7a] focus:border-[#1f6b7a] transition-all outline-none"
                                />
                            </div>
                            <div className="flex-1 relative group">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1f6b7a] transition-colors material-symbols-outlined">location_on</span>
                                <input
                                    type="text"
                                    placeholder="City, state, or remote"
                                    className="w-full bg-[#15171c] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#1f6b7a] focus:border-[#1f6b7a] transition-all outline-none"
                                />
                            </div>
                            <button className="bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                                Search
                            </button>
                        </div>

                        {/* Simple Tags/Filters */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Remote', 'Full-time', 'Engineering', 'Design', 'Product'].map(tag => (
                                <button key={tag} className="px-3 py-1.5 rounded-lg bg-[#15171c] border border-white/5 text-xs text-gray-400 hover:text-white hover:border-[#1f6b7a]/50 transition-all">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Jobs List */}
                <div className="space-y-6">
                    <div className="flex items-center gap-6 border-b border-white/5 pb-1">
                        <button
                            onClick={() => setActiveTab('recommended')}
                            className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'recommended' ? 'text-[#1f6b7a] border-[#1f6b7a]' : 'text-gray-400 border-transparent hover:text-white'}`}
                        >
                            Recommended for you
                        </button>
                        <button
                            onClick={() => setActiveTab('recent')}
                            className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'recent' ? 'text-[#1f6b7a] border-[#1f6b7a]' : 'text-gray-400 border-transparent hover:text-white'}`}
                        >
                            Recent Searches
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <JobCard logo="diamond" role="Senior Frontend Engineer" company="AcmeCorp • Remote" tags={['React', 'TypeScript']} salary="$140k - $180k" match="98" />
                        <JobCard logo="change_history" role="Product Designer" company="Vertex Inc. • New York" tags={['Figma', 'UI/UX']} match="94" />
                        <JobCard logo="hexagon" role="ML Engineer" company="HexaTech • Austin, TX" tags={['Python', 'PyTorch']} salary="$160k+" match="89" />
                        <JobCard logo="code_blocks" role="Full Stack Developer" company="StackFlow • Remote" tags={['Next.js', 'Node']} match="82" />
                        {/* Additional mock jobs */}
                        <JobCard logo="cloud" role="DevOps Engineer" company="CloudScale • San Francisco" tags={['AWS', 'Kubernetes']} salary="$150k - $190k" match="91" />
                        <JobCard logo="terminal" role="Backend Developer" company="ServerLess • Remote" tags={['Go', 'Microservices']} match="88" />
                    </div>
                </div>
            </main>
        </>
    );
}
