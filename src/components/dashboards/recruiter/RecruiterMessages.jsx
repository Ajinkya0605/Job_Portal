import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    Search,
    Send,
    MoreVertical,
    Phone,
    Video,
    Paperclip,
    Image,
    FileText,
    Smile,
    ChevronLeft,
    Clock,
    CheckCircle2,
    Calendar,
    Briefcase,
    Zap
} from 'lucide-react';

const users = [
    { id: 1, name: 'John Doe', role: 'Frontend Dev', avatar: 'JD', status: 'online', lastMessage: 'Sure, I am available for the interview.', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Sarah Smith', role: 'UI/UX Designer', avatar: 'SS', status: 'offline', lastMessage: 'Here is my updated portfolio.', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Mike Ross', role: 'Backend Dev', avatar: 'MR', status: 'online', lastMessage: 'Thanks for reaching out!', time: 'Mon', unread: 0 },
    { id: 4, name: 'Emily Blunt', role: 'Product Manager', avatar: 'EB', status: 'offline', lastMessage: 'Is the position remote?', time: 'Sun', unread: 1 },
];

const messages = [
    { id: 1, sender: 'them', text: 'Hi! I saw your job posting for the Senior React Developer role.', time: '10:00 AM' },
    { id: 2, sender: 'me', text: 'Hello John! Yes, we are still looking. Your profile seems like a great fit.', time: '10:05 AM' },
    { id: 3, sender: 'them', text: 'That is great to hear! I have 5 years of experience with React and Node.js.', time: '10:10 AM' },
    { id: 4, sender: 'me', text: 'Perfect. Would you be available for a quick screening call tomorrow?', time: '10:15 AM' },
    { id: 5, sender: 'them', text: 'Sure, I am available for the interview.', time: '10:30 AM' },
];

const QuickAction = ({ icon: Icon, label }) => (
    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
        <Icon size={14} />
        {label}
    </button>
);

export default function RecruiterMessages() {
    const { setIsSidebarOpen } = useOutletContext();
    const [activeChat, setActiveChat] = useState(1);
    const [inputText, setInputText] = useState('');
    const [showMobileList, setShowMobileList] = useState(true);
    const [showInfoPanel, setShowInfoPanel] = useState(true); // Default open on desktop
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const activeUser = users.find(u => u.id === activeChat);

    const handleUserClick = (id) => {
        setActiveChat(id);
        setShowMobileList(false);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#15171c] relative z-10 w-full">
            {/* LEFT: Chat List */}
            <div className={`
                flex-col w-full md:w-80 lg:w-96 border-r border-white/5 bg-[#15171c] h-full
                ${showMobileList ? 'flex' : 'hidden md:flex'}
            `}>
                {/* Header */}
                <div className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden text-gray-400 hover:text-white"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <h1 className="text-xl font-bold text-white tracking-tight">Messages</h1>
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1f6b7a]/10 text-[#1f6b7a] hover:bg-[#1f6b7a]/20 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit_square</span>
                    </button>
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search candidates..."
                            className="w-full bg-[#0B0B15] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#1f6b7a] focus:ring-1 focus:ring-[#1f6b7a] outline-none transition-all"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1 custom-scrollbar">
                        <button className="px-3 py-1 rounded-full bg-[#1f6b7a]/10 text-[#1f6b7a] text-xs font-bold border border-[#1f6b7a]/20 whitespace-nowrap">All</button>
                        <button className="px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-white/5 hover:border-white/10 whitespace-nowrap">Unread</button>
                        <button className="px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:text-white text-xs font-medium border border-white/5 hover:border-white/10 whitespace-nowrap">Interviews</button>
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {users.map(user => (
                        <div
                            key={user.id}
                            onClick={() => handleUserClick(user.id)}
                            className={`flex items-center gap-4 p-4 cursor-pointer transition-colors border-l-2
                                ${activeChat === user.id
                                    ? 'bg-[#1f6b7a]/5 border-[#1f6b7a]'
                                    : 'border-transparent hover:bg-white/5'
                                }`}
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                                    {user.avatar}
                                </div>
                                {user.status === 'online' && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#15171c]"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={`text-sm truncate ${activeChat === user.id ? 'font-bold text-white' : 'font-medium text-gray-200'}`}>
                                        {user.name}
                                    </h3>
                                    <span className="text-[10px] text-gray-500">{user.time}</span>
                                </div>
                                <p className={`text-xs truncate ${user.unread > 0 ? 'text-white font-medium' : 'text-gray-500'}`}>
                                    {user.lastMessage}
                                </p>
                            </div>
                            {user.unread > 0 && (
                                <div className="w-5 h-5 rounded-full bg-[#1f6b7a] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 shadow-lg shadow-[#1f6b7a]/20">
                                    {user.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* MIDDLE: Chat Area */}
            <div className={`
                flex-1 flex-col h-full bg-[#15171c] min-w-0
                ${showMobileList ? 'hidden md:flex' : 'flex'}
            `}>
                {/* Chat Header */}
                <div className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-[#15171c]/95 backdrop-blur z-20">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowMobileList(true)}
                            className="md:hidden text-gray-400 hover:text-white"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        {/* Profile Click Trigger */}
                        <div
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => setIsProfileOpen(true)}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white border border-white/10 group-hover:border-[#1f6b7a] transition-colors">
                                    {activeUser?.avatar}
                                </div>
                                {activeUser?.status === 'online' && (
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#15171c]"></div>
                                )}
                            </div>
                            <div>
                                <h2 className="text-sm font-bold text-white group-hover:text-[#1f6b7a] transition-colors">{activeUser?.name}</h2>
                                <p className="text-xs text-green-500 font-medium">Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowInfoPanel(!showInfoPanel)}
                            className={`p-2 rounded-lg transition-colors hidden xl:block ${showInfoPanel ? 'text-[#1f6b7a] bg-[#1f6b7a]/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <Briefcase size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Phone size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Video size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] sm:max-w-[70%] group`}>
                                <div className={`
                                    p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative
                                    ${msg.sender === 'me'
                                        ? 'bg-[#1f6b7a] text-white rounded-br-none'
                                        : 'bg-[#21242c] text-gray-200 border border-white/5 rounded-bl-none'
                                    }
                                `}>
                                    {msg.text}
                                </div>
                                <div className={`text-[10px] text-gray-500 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.time}
                                    {msg.sender === 'me' && <span className="material-symbols-outlined text-[12px]">done_all</span>}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Timestamp Separator */}
                    <div className="flex items-center gap-4 py-4">
                        <div className="h-px bg-white/5 flex-1"></div>
                        <span className="text-[10px] uppercase font-bold text-gray-500">Today</span>
                        <div className="h-px bg-white/5 flex-1"></div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/5 bg-[#15171c]/95 backdrop-blur z-20">
                    {/* Productivity Bar */}
                    <div className="flex gap-2 mb-3 overflow-x-auto custom-scrollbar pb-1">
                        <QuickAction icon={Zap} label="Template" />
                        <QuickAction icon={Calendar} label="Schedule Interview" />
                        <QuickAction icon={FileText} label="Request Resume" />
                    </div>

                    <div className="flex items-end gap-2 bg-[#0B0B15] border border-white/10 rounded-xl p-2 relative focus-within:border-[#1f6b7a] transition-colors">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 resize-none outline-none py-2 max-h-32 min-h-[40px]"
                            rows={1}
                        />
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Smile size={20} />
                        </button>
                        <button className="p-2 bg-[#1f6b7a] hover:bg-[#1a5c68] text-white rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all active:scale-95">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT: Info Panel (Context) - Responsive Overlay logic */}
            {isProfileOpen && (
                <div className="fixed inset-0 bg-black/80 z-40 xl:hidden backdrop-blur-sm" onClick={() => setIsProfileOpen(false)} />
            )}

            <div className={`
                w-full xl:w-80 border-l border-white/5 bg-[#15171c] h-full flex-col overflow-y-auto custom-scrollbar flex-shrink-0 transition-transform duration-300
                ${showInfoPanel ? 'hidden xl:flex' : 'hidden'}
                ${isProfileOpen ? 'fixed inset-y-0 right-0 z-50 shadow-2xl translate-x-0 !flex' : 'fixed inset-y-0 right-0 z-50 translate-x-full xl:static xl:translate-x-0'}
            `}>
                <div className="p-6 flex flex-col items-center border-b border-white/5 relative">
                    {/* Mobile Close Button */}
                    <button
                        onClick={() => setIsProfileOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white xl:hidden"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-2xl font-bold text-white border-2 border-white/10 mb-4 shadow-xl">
                        {activeUser?.avatar}
                    </div>
                    <h2 className="text-lg font-bold text-white mb-1">{activeUser?.name}</h2>
                    <p className="text-sm text-gray-400 mb-4">{activeUser?.role}</p>

                    <div className="flex gap-2 w-full">
                        <button className="flex-1 py-2 rounded-lg bg-[#33ddff]/10 text-[#33ddff] text-xs font-bold border border-[#33ddff]/20 hover:bg-[#33ddff]/20 transition-all">
                            View Profile
                        </button>
                        <button className="px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:border-white/10">
                            <MoreVertical size={16} />
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Application</h4>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-xs text-gray-300 font-bold mb-1">Senior React Developer</p>
                            <p className="text-[10px] text-green-400 font-mono mb-2">Applied 2 days ago • Match: 94%</p>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1f6b7a]/20 text-[#1f6b7a] border border-[#1f6b7a]/30">Shortlisted</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Documents</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
                                <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400">
                                    <FileText size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-white truncate">Resume_JohnDoe.pdf</p>
                                    <p className="text-[10px] text-gray-500">2.4 MB</p>
                                </div>
                                <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white">
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Recent Notes</h4>
                        <div className="bg-[#0B0B15] border border-white/5 rounded-lg p-3 text-xs text-gray-400 italic">
                            "Candidate has strong communication skills. Asked good questions about our deployment pipeline."
                        </div>
                        <button className="w-full mt-2 py-1.5 text-xs text-gray-500 hover:text-white flex items-center justify-center gap-1 bg-white/5 rounded hover:bg-white/10 transition-all">
                            <span className="material-symbols-outlined text-[14px]">edit</span> Add Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
