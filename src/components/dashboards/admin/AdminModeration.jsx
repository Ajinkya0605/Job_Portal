import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    ShieldAlert, AlertTriangle, CheckCircle, Smartphone, User,
    FileText, Zap, Search, Filter, ChevronLeft, Flag, ExternalLink,
    AlertOctagon, Check, X
} from 'lucide-react';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

// --- Components ---

/**
 * AI Confidence Score Widget
 * Visualizes the ML Model's confidence in its classification.
 */
const AIScoreWidget = ({ score, classification }) => {
    // Determine color based on score severity
    let color = 'text-green-400 border-green-400/20 bg-green-400/10';
    let label = 'Low Risk';

    if (score > 85) {
        color = 'text-red-500 border-red-500/20 bg-red-500/10';
        label = 'Critical Risk';
    } else if (score > 50) {
        color = 'text-yellow-400 border-yellow-400/20 bg-yellow-400/10';
        label = 'Moderate Risk';
    }

    return (
        <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">AI Classification</p>
                <div className="flex items-center gap-2">
                    <Zap size={16} className={`shrink-0 ${score > 85 ? 'text-red-500' : 'text-[#33ddff]'}`} />
                    <span className="text-base sm:text-lg font-bold text-white truncate">{classification}</span>
                </div>
            </div>
            <div className={`shrink-0 flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 ${score > 85 ? 'border-red-500/30' : 'border-[#33ddff]/30'} bg-[#0B0B15] relative`}>
                <span className={`text-xs sm:text-sm font-bold ${score > 85 ? 'text-red-500' : 'text-[#33ddff]'}`}>{score}%</span>
                <span className="text-[7px] sm:text-[8px] text-gray-500">CONFIDENCE</span>
            </div>
        </div>
    );
};

/**
 * Report Queue Item
 * A summary card for the list view of reports.
 */
const ReportItem = ({ report, isActive, onClick }) => {
    const isCritical = report.aiScore > 85;

    return (
        <div
            onClick={onClick}
            className={`p-4 border-b border-gray-800 cursor-pointer transition-all hover:bg-white/5
                ${isActive ? 'bg-[#33ddff]/5 border-l-2 border-l-[#33ddff] pl-[14px]' : 'border-l-2 border-l-transparent pl-4'}
            `}
        >
            <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-500 font-mono">#{report.id}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${isCritical ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-[#33ddff]/10 text-[#33ddff] border-[#33ddff]/20'}`}>
                    {report.aiScore}% RISK
                </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">{report.reason}</h4>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                    {report.entityType === 'user' ? <User size={12} /> : <FileText size={12} />}
                    {report.entityName}
                </span>
                <span>•</span>
                <span>{report.timeAgo}</span>
            </div>
        </div>
    );
};

// --- Mock Data ---

const mockReports = [
    {
        id: '9921',
        entityType: 'job',
        entityName: 'Senior Rust Developer',
        reportedBy: 'System (Scraper)',
        reason: 'Scraping Anomaly: Fake Job Listing',
        aiScore: 94, // High risk
        aiDetails: 'Pattern matches known scam templates. Domain "g0ogle.com" flagged.',
        contentSnippet: "We are hiring urgency for Google! Send $50 for application processing fee to secure your spot immediatly...",
        timeAgo: '12m ago',
        status: 'pending'
    },
    {
        id: '9920',
        entityType: 'user',
        entityName: 'Alex Morgan',
        reportedBy: 'Sarah Jenkins',
        reason: 'Harassment / Hate Speech',
        aiScore: 88,
        aiDetails: 'NLP Detected toxic sentiment (0.92) and blacklisted keywords.',
        contentSnippet: "Direct Message: [Redacted Content] matching hate speech database.",
        timeAgo: '45m ago',
        status: 'pending'
    },
    {
        id: '9918',
        entityType: 'job',
        entityName: 'Data Entry - WFH',
        reportedBy: 'System (ML)',
        reason: 'Salary Range Anomaly',
        aiScore: 65,
        aiDetails: 'Offer ($200/hr) is 400% above market average for this role.',
        contentSnippet: "Earn $5000/week! No experience needed. Just need a bank account...",
        timeAgo: '1h ago',
        status: 'pending'
    },
    {
        id: '9915',
        entityType: 'user',
        entityName: 'Crypto King',
        reportedBy: 'System (Scraper)',
        reason: 'Spam / Bot Behavior',
        aiScore: 42,
        aiDetails: 'User posted 50 comments in 1 minute. Likely scripted.',
        contentSnippet: "Join my crypto signal group! 1000% gains guaranteed! link.me/xyz...",
        timeAgo: '2h ago',
        status: 'pending'
    }
];

// --- Main Page Component ---

export default function AdminModeration() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedReportId, setSelectedReportId] = useState(mockReports[0].id);
    const [activeTab, setActiveTab] = useState('pending'); // pending, reviewed

    const selectedReport = mockReports.find(r => r.id === selectedReportId) || mockReports[0];

    return (
        <div className="flex-1 flex overflow-hidden relative z-10 h-full">

            {/* LEFT PANEL: Reports List */}
            <div className={`w-full lg:w-96 flex flex-col border-r border-gray-800 bg-[#0f1219] absolute inset-0 lg:relative z-20 font-sans transform transition-transform duration-300 
                ${selectedReportId && window.innerWidth < 1024 ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
            `}>
                {/* Queue Header */}
                <div className="h-14 flex items-center justify-between px-4 border-b border-gray-800 bg-[#151A25]">
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                        <ShieldAlert size={16} className="text-[#33ddff]" />
                        Review Queue
                        <span className="bg-[#33ddff] text-[#0B0B15] text-[10px] px-1.5 py-0.5 rounded font-bold">12</span>
                    </h2>
                    <button className="text-gray-400 hover:text-white"><Filter size={16} /></button>
                </div>

                {/* Queue Filters (Tabs) */}
                <div className="px-2 py-2 flex gap-1 border-b border-gray-800 bg-[#0f1219]">
                    {['pending', 'reviewed'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-1.5 text-xs font-bold rounded capitalize transition-all ${activeTab === tab ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Queue List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {mockReports.map(report => (
                        <ReportItem
                            key={report.id}
                            report={report}
                            isActive={selectedReportId === report.id}
                            onClick={() => setSelectedReportId(report.id)}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT PANEL: Inspector (Detail View) */}
            <div className={`flex-1 flex flex-col bg-[#0B0B15] min-w-0 absolute inset-0 lg:relative z-30 transition-transform duration-300
                         ${selectedReportId ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                    `}>

                {/* Mobile Header for Detail View */}
                <div className="lg:hidden h-14 flex items-center px-4 border-b border-gray-800 bg-[#151A25]">
                    <button onClick={() => setSelectedReportId(null)} className="flex items-center gap-1 text-gray-400 mr-4">
                        <ChevronLeft size={20} /> <span className="text-sm font-bold">Back</span>
                    </button>
                    <span className="text-sm font-bold text-white">Report #{selectedReport?.id}</span>
                </div>

                {/* Detail Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 pb-24">
                    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">

                        {/* 1. AI Analysis Card (Top Priority) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <AIScoreWidget
                                score={selectedReport.aiScore}
                                classification={selectedReport.reason.split(':')[0]}
                            />
                            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 flex flex-col justify-center">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">AI Reasoning</p>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {selectedReport.aiDetails}
                                </p>
                            </div>
                        </div>

                        {/* 2. Evidence / Content Viewer */}
                        <div className="bg-[#151A25] border border-gray-800 rounded-xl overflow-hidden">
                            <div className="p-3 border-b border-gray-800 bg-[#1a1f2e] flex justify-between items-center">
                                <h3 className="text-xs font-bold text-gray-300 uppercase flex items-center gap-2">
                                    <FileText size={14} /> Reported Content
                                </h3>
                                <a href="#" className="text-[#33ddff] text-xs flex items-center gap-1 hover:underline">
                                    View Source <ExternalLink size={12} className="hidden sm:inline" />
                                </a>
                            </div>
                            <div className="p-4 sm:p-6 bg-[#0B0B15]">
                                <div className="p-4 rounded border border-gray-800 bg-[#0f1219] font-mono text-xs sm:text-sm text-gray-300 whitespace-pre-wrap break-words">
                                    {selectedReport.contentSnippet}
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-800 bg-[#151A25] flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs text-gray-400">
                                <span className="truncate">Entity: <strong className="text-white">{selectedReport.entityName}</strong></span>
                                <span className="truncate">Reported by: {selectedReport.reportedBy}</span>
                            </div>
                        </div>

                        {/* 3. User History / Context */}
                        <div className="bg-[#151A25] border border-gray-800 rounded-xl p-5">
                            <h3 className="text-sm font-bold text-white mb-4">Target History</h3>
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-sm">
                                <div className="flex-1 p-2 sm:p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex flex-col items-center justify-center text-center">
                                    <span className="font-bold text-lg sm:text-xl">2</span>
                                    <span className="text-[9px] sm:text-[10px] uppercase">Flags</span>
                                </div>
                                <div className="flex-1 p-2 sm:p-3 rounded bg-green-500/10 border border-green-500/20 text-green-400 flex flex-col items-center justify-center text-center">
                                    <span className="font-bold text-lg sm:text-xl">4.8</span>
                                    <span className="text-[9px] sm:text-[10px] uppercase">Rating</span>
                                </div>
                                <div className="flex-1 p-2 sm:p-3 rounded bg-gray-700/20 border border-gray-700/40 text-gray-400 flex flex-col items-center justify-center text-center">
                                    <span className="font-bold text-lg sm:text-xl">6m</span>
                                    <span className="text-[9px] sm:text-[10px] uppercase">Age</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Action Bar (Fixed Bottom) */}
                <div className="p-3 sm:p-4 border-t border-gray-800 bg-[#0B0B15]/95 backdrop-blur absolute bottom-0 w-full z-40">
                    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2 sm:gap-3">
                        <button className="py-3 px-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm">
                            <AlertOctagon size={16} className="shrink-0" />
                            <span>BAN <span className="hidden sm:inline">USER</span></span>
                        </button>
                        <button className="py-3 px-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm">
                            <AlertTriangle size={16} className="shrink-0" />
                            <span>WARN<span className="hidden sm:inline">ING</span></span>
                        </button>
                        <button className="py-3 px-2 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.4)] text-xs sm:text-sm">
                            <Check size={16} className="shrink-0" />
                            <span>DISMISS <span className="hidden sm:inline">(SAFE)</span></span>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}
