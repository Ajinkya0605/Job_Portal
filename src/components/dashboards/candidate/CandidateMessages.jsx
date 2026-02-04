import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const users = [
    { id: 1, name: 'Sarah Wilson', role: 'Recruiter at AcmeCorp', avatar: 'SW', online: true, unread: 2, lastMsg: 'Hi John, are you available for a quick call tomorrow?', time: '10:30 AM' },
    { id: 2, name: 'David Chen', role: 'HR Manager at TechStart', avatar: 'DC', online: false, unread: 0, lastMsg: 'Thanks for sending over your portfolio.', time: 'Yesterday' },
    { id: 3, name: 'Emily Davis', role: 'Talent Acquisition', avatar: 'ED', online: true, unread: 0, lastMsg: 'We will get back to you by Friday.', time: 'Mon' },
    { id: 4, name: 'Michael Brown', role: 'Senior Recruiter', avatar: 'MB', online: false, unread: 0, lastMsg: 'The interview feedback was positive!', time: 'Sun' },
];

const messages = [
    { id: 1, sender: 'them', text: 'Hi John, I reviewed your application for the Senior Frontend Engineer role.', time: '10:00 AM' },
    { id: 2, sender: 'them', text: 'Your experience with React and Tailwind looks great. Are you available for a quick screening call tomorrow?', time: '10:01 AM' },
    { id: 3, sender: 'me', text: 'Hi Sarah! Thank you for reaching out.', time: '10:15 AM' },
    { id: 4, sender: 'me', text: 'Yes, I am available tomorrow between 2 PM and 4 PM EST. Does that work for you?', time: '10:16 AM' },
];

export default function CandidateMessages() {
    const { setSidebarOpen } = useOutletContext();
    const [activeChat, setActiveChat] = useState(1);
    const [inputText, setInputText] = useState('');

    const [showMobileChat, setShowMobileChat] = useState(false);

    const activeUser = users.find(u => u.id === activeChat);

    return (
        <div className="flex h-[calc(100vh-80px)] lg:h-screen overflow-hidden bg-[#15171c]">
            {/* LEFT: Chat List */}
            <aside className={`${showMobileChat ? 'hidden' : 'flex'} w-full lg:flex lg:w-80 border-r border-white/5 bg-[#15171c] flex-col z-20`}>

                {/* Header */}
                <div className="h-16 lg:h-20 flex-shrink-0 flex items-center justify-between px-4 lg:px-6 border-b border-white/5 pr-16 lg:pr-6 relative">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden text-gray-400 hover:text-white"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight">Messages</h1>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-[#21242c] hover:bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit_square</span>
                    </button>
                </div>

                {/* Search */}
                <div className="p-3 lg:p-4">
                    <div className="relative group">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1f6b7a] transition-colors material-symbols-outlined text-[20px]">search</span>
                        <input
                            className="w-full bg-[#21242c] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-xs text-white focus:ring-1 focus:ring-[#1f6b7a] focus:border-[#1f6b7a] placeholder-gray-600 transition-all outline-none"
                            placeholder="Search..."
                            type="text"
                        />
                    </div>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-1">
                    {users.map(user => (
                        <div
                            key={user.id}
                            onClick={() => {
                                setActiveChat(user.id);
                                setShowMobileChat(true);
                            }}
                            className={`p-2 lg:p-3 rounded-xl cursor-pointer transition-all flex items-start gap-3 border border-transparent ${activeChat === user.id ? 'bg-[#1f6b7a]/10 border-[#1f6b7a]/20' : 'hover:bg-[#21242c] hover:border-white/5'}`}
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                                    {user.avatar}
                                </div>
                                {user.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#15171c] rounded-full"></div>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h4 className={`text-sm font-bold truncate ${activeChat === user.id ? 'text-white' : 'text-gray-300'}`}>{user.name}</h4>
                                    <span className="text-[10px] text-gray-500 font-mono flex-shrink-0 ml-2">{user.time}</span>
                                </div>
                                <p className={`text-xs truncate ${activeChat === user.id ? 'text-[#1f6b7a]' : 'text-gray-500'}`}>{user.lastMsg}</p>
                            </div>
                            {user.unread > 0 && (
                                <div className="min-w-[16px] h-4 flex items-center justify-center bg-[#1f6b7a] text-white text-[9px] font-bold rounded-full px-1">
                                    {user.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </aside>

            {/* RIGHT: Active Chat Window */}
            <main className={`${showMobileChat ? 'flex' : 'hidden'} lg:flex flex-1 flex-col bg-[#15171c] relative`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                {/* Chat Header */}
                <header className="h-16 lg:h-20 flex-shrink-0 flex items-center justify-between px-3 lg:px-6 border-b border-white/5 bg-[#15171c]/95 backdrop-blur-md z-10">
                    <div className="flex items-center gap-2 lg:gap-3 min-w-0">
                        <button
                            onClick={() => setShowMobileChat(false)}
                            className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="relative flex-shrink-0">
                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#1f6b7a] to-cyan-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-[#1f6b7a]/20">
                                {activeUser?.avatar}
                            </div>
                            {activeUser?.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#15171c] rounded-full"></div>}
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-sm font-bold text-white truncate">{activeUser?.name}</h2>
                            <p className="text-xs text-green-400 font-medium flex items-center gap-1 truncate">
                                {activeUser?.online ? 'Online' : 'Offline'}
                                {activeUser?.role && <span className="hidden sm:inline text-gray-500 truncate">• {activeUser.role}</span>}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-3 flex-shrink-0">
                        <button className="w-8 h-8 hidden min-[380px]:flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">videocam</span>
                        </button>
                        <button className="w-8 h-8 hidden min-[380px]:flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">phone</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                    </div>
                </header>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-3 lg:p-6 space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] lg:max-w-[70%] rounded-2xl p-3 lg:p-4 shadow-md ${msg.sender === 'me' ? 'bg-[#1f6b7a] text-white rounded-br-none' : 'bg-[#21242c] border border-white/5 text-gray-200 rounded-bl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{msg.text}</p>
                                <div className={`text-[10px] mt-1.5 font-medium ${msg.sender === 'me' ? 'text-white/70 text-right' : 'text-gray-500'}`}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-3 lg:p-4 bg-[#15171c] border-t border-white/5 relative z-20">
                    <div className="bg-[#21242c] border border-white/10 rounded-xl p-2 flex items-end gap-2 shadow-lg">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 hidden sm:block">
                            <span className="material-symbols-outlined text-[20px]">attach_file</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 sm:hidden flex-shrink-0">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                        </button>
                        <textarea
                            rows="1"
                            className="flex-1 bg-transparent text-sm text-white focus:outline-none py-2 resize-none max-h-32 placeholder-gray-500 custom-scrollbar min-w-0"
                            placeholder="Type a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button className="p-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white rounded-lg shadow-lg shadow-[#1f6b7a]/20 transition-all flex-shrink-0">
                            <span className="material-symbols-outlined text-[20px] flex items-center">send</span>
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
}
