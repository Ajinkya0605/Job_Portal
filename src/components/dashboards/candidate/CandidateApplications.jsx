import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const applications = [
    {
        id: 1,
        role: 'Senior Frontend Engineer',
        company: 'AcmeCorp',
        location: 'Remote',
        logo: 'diamond',
        appliedDate: 'Jan 28, 2026',
        status: 'Interview',
        statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
        timeline: [
            { status: 'Applied', date: 'Jan 28', completed: true },
            { status: 'Screening', date: 'Jan 30', completed: true },
            { status: 'Interview', date: 'Feb 02', completed: false, current: true },
            { status: 'Offer', date: 'Pending', completed: false },
        ]
    },
    {
        id: 2,
        role: 'Product Designer',
        company: 'Vertex Inc.',
        location: 'New York',
        logo: 'change_history',
        appliedDate: 'Jan 25, 2026',
        status: 'Screening',
        statusColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
        timeline: [
            { status: 'Applied', date: 'Jan 25', completed: true },
            { status: 'Screening', date: 'In Progress', completed: false, current: true },
            { status: 'Interview', date: 'Pending', completed: false },
            { status: 'Offer', date: 'Pending', completed: false },
        ]
    },
    {
        id: 3,
        role: 'Backend Developer',
        company: 'ServerLess',
        location: 'Remote',
        logo: 'terminal',
        appliedDate: 'Jan 20, 2026',
        status: 'Rejected',
        statusColor: 'text-red-400 bg-red-400/10 border-red-400/20',
        timeline: [
            { status: 'Applied', date: 'Jan 20', completed: true },
            { status: 'Screening', date: 'Jan 22', completed: true },
            { status: 'Rejected', date: 'Jan 23', completed: true, failed: true },
        ]
    },
    {
        id: 4,
        role: 'ML Engineer',
        company: 'HexaTech',
        location: 'Austin, TX',
        logo: 'hexagon',
        appliedDate: 'Jan 15, 2026',
        status: 'Offer',
        statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
        timeline: [
            { status: 'Applied', date: 'Jan 15', completed: true },
            { status: 'Screening', date: 'Jan 18', completed: true },
            { status: 'Interview', date: 'Jan 22', completed: true },
            { status: 'Offer', date: 'Jan 25', completed: true, current: true },
        ]
    }
];

export default function CandidateApplications() {
    const { setSidebarOpen } = useOutletContext();
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

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
                    <h1 className="text-xl font-bold text-white tracking-tight">My Applications</h1>
                </div>
                <div className="flex bg-[#21242c] rounded-lg p-1 border border-white/5">
                    <button className="px-4 py-1.5 rounded text-xs font-bold bg-[#1f6b7a] text-white shadow-lg">Active</button>
                    <button className="px-4 py-1.5 rounded text-xs font-bold text-gray-400 hover:text-white transition-colors">Archived</button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar">
                <div className="space-y-4 max-w-4xl mx-auto">
                    {applications.map((app) => (
                        <div key={app.id} className="bg-[#21242c] rounded-xl border border-white/5 overflow-hidden transition-all hover:border-white/10">
                            {/* Main Card Content */}
                            <div className="p-5 flex flex-col md:flex-row items-start md:items-center gap-5 cursor-pointer" onClick={() => toggleExpand(app.id)}>
                                <div className="w-12 h-12 rounded-lg bg-[#1a1d23] border border-white/10 flex items-center justify-center text-white shrink-0">
                                    <span className="material-symbols-outlined text-[28px]">{app.logo}</span>
                                </div>

                                <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
                                    <div className="md:col-span-4">
                                        <h3 className="font-bold text-white text-base truncate">{app.role}</h3>
                                        <p className="text-xs text-gray-400 truncate">{app.company} • {app.location}</p>
                                    </div>
                                    <div className="md:col-span-3 flex items-center">
                                        <p className="text-xs text-gray-500 font-mono">Applied: {app.appliedDate}</p>
                                    </div>
                                    <div className="md:col-span-3 flex items-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${app.statusColor}`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <div className="md:col-span-2 flex items-center justify-end">
                                        <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${expandedId === app.id ? 'rotate-180' : ''}`}>expand_more</span>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Timeline Section */}
                            {expandedId === app.id && (
                                <div className="px-5 pb-6 pt-2 border-t border-white/5 bg-[#1a1d23]/50">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Application Status Timeline</h4>
                                    <div className="relative flex items-center justify-between px-4">
                                        {/* Connecting Line */}
                                        <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-700 -z-0"></div>

                                        {app.timeline.map((step, index) => (
                                            <div key={index} className="relative z-10 flex flex-col items-center">
                                                <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-colors duration-500
                                            ${step.completed || step.current ? 'bg-[#1f6b7a] border-[#1f6b7a] text-white' : 'bg-[#1a1d23] border-gray-600 text-gray-600'}
                                            ${step.failed ? '!bg-red-500 !border-red-500 !text-white' : ''}
                                        `}>
                                                    {step.completed || step.failed ? (
                                                        <span className="material-symbols-outlined text-[14px]">{step.failed ? 'close' : 'check'}</span>
                                                    ) : (
                                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                                    )}
                                                </div>
                                                <p className={`text-[10px] font-bold mt-2 ${step.current ? 'text-white' : 'text-gray-500'}`}>{step.status}</p>
                                                <p className="text-[9px] text-gray-600 font-mono">{step.date}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex justify-end gap-3">
                                        <button className="px-4 py-2 rounded-lg border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                            View Job Details
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-xs font-bold transition-colors">
                                            Contact Recruiter
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
