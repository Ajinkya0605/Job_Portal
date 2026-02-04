import React, { useState } from 'react';
import {
    Inbox,
    Filter,
    Search,
    ChevronLeft,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    User,
    MessageSquare,
    AlertCircle,
    Paperclip,
    Send,
    Tag,
    History,
    Smile
} from 'lucide-react';

// --- Mock Data ---

const tickets = [
    {
        id: 'T-1004',
        user: 'Jane Doe',
        role: 'Candidate',
        subject: 'Cannot upload resume',
        status: 'open', // open, pending, resolved
        priority: 'high',
        lastUpdate: '10m ago',
        messages: [
            { id: 1, sender: 'user', text: 'Hi, I keep getting an error when uploading my PDF resume.', time: '10:00 AM' },
        ]
    },
    {
        id: 'T-1003',
        user: 'TechCorp HR',
        role: 'Recruiter',
        subject: 'Billing discrepancy',
        status: 'pending',
        priority: 'medium',
        lastUpdate: '2h ago',
        messages: [
            { id: 1, sender: 'user', text: 'My invoice for this month shows $59 instead of $49.', time: 'Yesterday' },
            { id: 2, sender: 'admin', text: 'Hello, checking your account details now.', time: 'Yesterday' },
        ]
    },
    {
        id: 'T-1002',
        user: 'Mike Smith',
        role: 'Candidate',
        subject: 'Delete account request',
        status: 'resolved',
        priority: 'low',
        lastUpdate: '1d ago',
        messages: []
    }
];

// --- Status Badge Component ---

const StatusBadge = ({ status }) => {
    const styles = {
        open: 'bg-green-500/10 text-green-500 border-green-500/20',
        pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        resolved: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    };

    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${styles[status]}`}>
            {status}
        </span>
    );
};

// --- Main Component ---

export default function AdminSupport() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTicketId, setActiveTicketId] = useState(tickets[0].id);
    const [filter, setFilter] = useState('all'); // all, open, resolved
    const [replyText, setReplyText] = useState('');

    const activeTicket = tickets.find(t => t.id === activeTicketId) || tickets[0];

    return (
        <div className="flex-1 flex overflow-hidden relative z-10 h-full">

            {/* LEFT: Ticket List */}
            <div className={`
                w-full lg:w-96 flex flex-col border-r border-gray-800 bg-[#0f1219] absolute inset-0 lg:relative z-20 font-sans transform transition-transform duration-300 
                ${activeTicketId && window.innerWidth < 1024 ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
            `}>
                {/* List Header */}
                <div className="p-4 border-b border-gray-800 bg-[#151A25] space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                            <Inbox size={16} className="text-[#33ddff]" />
                            Inbox
                        </h2>
                        <div className="flex gap-1">
                            <button className="p-1.5 hover:bg-white/5 rounded text-gray-400"><Search size={16} /></button>
                            <button className="p-1.5 hover:bg-white/5 rounded text-gray-400"><Filter size={16} /></button>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="flex gap-1 bg-[#0B0B15] p-1 rounded-lg">
                        {['all', 'open', 'resolved'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded transition-all ${filter === f ? 'bg-[#33ddff]/10 text-[#33ddff]' : 'text-gray-500 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Ticket Items */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {tickets.map(ticket => (
                        <div
                            key={ticket.id}
                            onClick={() => setActiveTicketId(ticket.id)}
                            className={`p-4 border-b border-gray-800 cursor-pointer transition-all hover:bg-white/5 group
                                        ${activeTicket.id === ticket.id ? 'bg-[#33ddff]/5 border-l-2 border-l-[#33ddff] pl-[14px]' : 'border-l-2 border-l-transparent pl-4'}
                                    `}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-[10px] font-bold text-gray-400">{ticket.id}</span>
                                <span className="text-[10px] text-gray-600">{ticket.lastUpdate}</span>
                            </div>
                            <h4 className={`text-sm font-bold mb-1 truncate ${activeTicket.id === ticket.id ? 'text-white' : 'text-gray-300'}`}>{ticket.subject}</h4>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                        {ticket.user.charAt(0)}
                                    </div>
                                    <span className="text-xs text-gray-500">{ticket.user}</span>
                                </div>
                                <StatusBadge status={ticket.status} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Ticket Details */}
            <div className={`
                        flex-1 flex flex-col bg-[#0B0B15] min-w-0 absolute inset-0 lg:relative z-30 transition-transform duration-300
                        ${activeTicketId ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                    `}>
                {/* Detail Header */}
                <div className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 border-b border-gray-800 bg-[#151A25]">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setActiveTicketId(null)} className="lg:hidden text-gray-400 hover:text-white mr-2">
                            <ChevronLeft size={24} />
                        </button>
                        <div>
                            <h2 className="text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">{activeTicket.subject}</h2>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>#{activeTicket.id}</span>
                                <span>•</span>
                                <span>via Email</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <StatusBadge status={activeTicket.status} />
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar space-y-6">

                    {/* User Info Card */}
                    <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-white border border-gray-600">
                                {activeTicket.user.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{activeTicket.user}</p>
                                <p className="text-xs text-gray-500">{activeTicket.role} • 12 Previous Tickets</p>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none py-1.5 px-3 rounded bg-[#33ddff]/10 text-[#33ddff] text-xs font-bold border border-[#33ddff]/20 hover:bg-[#33ddff]/20">
                                View Profile
                            </button>
                            <button className="flex-1 sm:flex-none py-1.5 px-3 rounded bg-gray-800 text-gray-400 text-xs font-bold hover:text-white border border-gray-700">
                                History
                            </button>
                        </div>
                    </div>

                    {/* Thread */}
                    <div className="space-y-6 relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800/50 -z-10"></div>

                        {activeTicket.messages.map(msg => (
                            <div key={msg.id} className="flex gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 bg-[#0B0B15] ${msg.sender === 'user' ? 'border-gray-600 text-gray-400' : 'border-[#33ddff] text-[#33ddff]'}`}>
                                    {msg.sender === 'user' ? <User size={14} /> : <div className="w-2 h-2 bg-[#33ddff] rounded-full"></div>}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className={`text-xs font-bold ${msg.sender === 'admin' ? 'text-[#33ddff]' : 'text-gray-300'}`}>
                                            {msg.sender === 'admin' ? 'Support Agent' : activeTicket.user}
                                        </span>
                                        <span className="text-[10px] text-gray-600">{msg.time}</span>
                                    </div>
                                    <div className="p-3 bg-[#151A25] border border-gray-800 rounded-lg text-sm text-gray-300 leading-relaxed shadow-sm">
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Reply Box */}
                <div className="p-4 border-t border-gray-800 bg-[#151A25] z-20">
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0B15] border border-gray-800 rounded text-xs text-gray-400 hover:text-white">
                            <AlertCircle size={14} /> Canned Responses
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0B15] border border-gray-800 rounded text-xs text-gray-400 hover:text-white">
                            <Tag size={14} /> Add Tag
                        </button>
                    </div>

                    <div className="relative border border-gray-800 rounded-xl bg-[#0B0B15] focus-within:border-[#33ddff] transition-colors">
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your reply..."
                            className="w-full bg-transparent text-sm text-white p-3 min-h-[80px] outline-none resize-none placeholder-gray-600"
                        />
                        <div className="flex items-center justify-between p-2 border-t border-gray-800 bg-[#0f1219] rounded-b-xl">
                            <div className="flex gap-1">
                                <button className="p-1.5 hover:bg-white/5 rounded text-gray-400"><Paperclip size={18} /></button>
                                <button className="p-1.5 hover:bg-white/5 rounded text-gray-400"><Smile size={18} /></button>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 rounded text-xs font-bold text-gray-400 hover:text-white bg-gray-800">Internal Note</button>
                                <button className="px-3 py-1.5 rounded text-xs font-bold text-[#0B0B15] bg-[#33ddff] hover:bg-[#25c4e6] flex items-center gap-2">
                                    Send Reply <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
