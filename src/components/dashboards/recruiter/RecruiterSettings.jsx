import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    CreditCard, Users, FileText, Plus, MoreHorizontal,
    CheckCircle2, AlertCircle, Trash2, Save, Download,
    Building2, Bell, Mail, Globe, MapPin, Upload, Search
} from 'lucide-react';

/* ---------------- MAIN PAGE ---------------- */

export default function RecruiterSettings() {
    const { setIsSidebarOpen } = useOutletContext();
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: Building2 },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'templates', label: 'Templates', icon: Mail },
        { id: 'billing', label: 'Billing', icon: CreditCard },
    ];

    return (
        <>
            {/* Header */}
            <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-lg font-bold text-white">
                        Organization Settings
                    </h1>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto bg-[#15171c] custom-scrollbar">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 pb-20">

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-white/10 overflow-x-auto">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const active = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap
                    ${active
                                            ? 'border-[#1f6b7a] text-[#1f6b7a]'
                                            : 'border-transparent text-gray-500 hover:text-white hover:border-white/20'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="animate-fade-in-up">
                        {activeTab === 'general' && <GeneralSection />}
                        {activeTab === 'team' && <TeamSection />}
                        {activeTab === 'notifications' && <NotificationsSection />}
                        {activeTab === 'templates' && <TemplatesSection />}
                        {activeTab === 'billing' && <BillingSection />}
                    </div>

                </div>
            </div>
        </>
    );
}

/* ---------------- GENERAL ---------------- */

const GeneralSection = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main */}
            <div className="xl:col-span-2 p-6 bg-[#1a1d23] border border-white/5 rounded-xl space-y-6">
                <h3 className="text-lg font-bold text-white">Company Profile</h3>

                {/* Logo */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-24 h-24 rounded-xl bg-[#21242c] border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-500 hover:border-[#1f6b7a] hover:text-[#1f6b7a] transition cursor-pointer">
                        <Upload size={22} />
                        <span className="text-[10px] font-bold mt-1">UPLOAD LOGO</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">Company Logo</p>
                        <p className="text-xs text-gray-400 mb-3">
                            Recommended size: 400×400 PNG/JPG
                        </p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg">
                                Change
                            </button>
                            <button className="px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Company Name" value="TechCorp Inc." />
                    <Input label="Industry" value="Software Development" />
                    <Input label="Website" value="https://techcorp.com" icon={Globe} />
                    <Input label="Location" value="San Francisco, CA" icon={MapPin} />
                    <div className="sm:col-span-2">
                        <label className="text-xs font-bold text-gray-500">Description</label>
                        <textarea
                            rows="4"
                            className="w-full mt-1 bg-[#0f1115] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-[#1f6b7a] outline-none resize-none"
                            defaultValue="Leading the way in innovative tech solutions..."
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1f6b7a] hover:bg-[#2a8a9c] rounded-lg text-sm font-bold text-white">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Social */}
            <div className="p-6 bg-[#1a1d23] border border-white/5 rounded-xl space-y-4">
                <h3 className="text-sm font-bold text-white">Social Links</h3>
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map(s => (
                    <input
                        key={s}
                        placeholder={`Add ${s} link`}
                        className="w-full bg-[#0f1115] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#1f6b7a] outline-none"
                    />
                ))}
            </div>
        </div>
    );
};

/* ---------------- TEAM (Restored) ---------------- */

const TeamSection = () => {
    const users = [
        { id: 1, name: "Alex Morgan", email: "alex@techcorp.com", role: "Owner", status: "Active", avatar: "AM" },
        { id: 2, name: "Sarah Chen", email: "sarah@techcorp.com", role: "Admin", status: "Active", avatar: "SC" },
        { id: 3, name: "Mike Ross", email: "mike@techcorp.com", role: "Recruiter", status: "Active", avatar: "MR" },
        { id: 4, name: "Emily Blunt", email: "emily@techcorp.com", role: "Viewer", status: "Invited", avatar: "EB" }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Team Members</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-[#1f6b7a]/20">
                    <Plus size={16} />
                    Invite Member
                </button>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#1a1d23] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#21242c] border-b border-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.role === 'Owner' ? 'bg-purple-900/30 text-purple-400 border-purple-800' :
                                            user.role === 'Admin' ? 'bg-blue-900/30 text-blue-400 border-blue-800' :
                                                'bg-gray-800 text-gray-300 border-gray-700'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold flex items-center gap-1.5 ${user.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-500 hover:text-white transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ---------------- NOTIFICATIONS ---------------- */

const NotificationsSection = () => {
    return (
        <div className="max-w-3xl bg-[#1a1d23] border border-white/5 rounded-xl p-6 space-y-6">
            <div>
                <h3 className="text-lg font-bold text-white">Email Notifications</h3>
                <p className="text-xs text-gray-400">
                    Choose what you want to be notified about.
                </p>
            </div>

            {[
                ['New Hires & Applications', 'Candidate applies or moves stage'],
                ['Candidate Messages', 'Replies to your messages'],
                ['Job Post Status', 'Post approved or expired'],
                ['Weekly Digest', 'Weekly hiring summary'],
            ].map(([title, desc]) => (
                <NotificationToggle key={title} title={title} desc={desc} />
            ))}
        </div>
    );
};

const NotificationToggle = ({ title, desc }) => {
    const [on, setOn] = useState(true);
    return (
        <div className="flex justify-between items-start gap-4">
            <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <button
                onClick={() => setOn(!on)}
                className={`w-12 h-6 rounded-full relative transition-colors ${on ? 'bg-[#1f6b7a]' : 'bg-[#2a2d36]'
                    }`}
            >
                <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${on ? 'left-7' : 'left-1'
                        }`}
                />
            </button>
        </div>
    );
};

/* ---------------- TEMPLATES (Restored) ---------------- */

const TemplatesSection = () => {
    const templates = [
        { id: 1, name: "Initial Interview Invite", subject: "Invitation to Interview at TechCorp", type: "Email" },
        { id: 2, name: "Standard Rejection", subject: "Update on your application", type: "Email" },
        { id: 3, name: "Offer Letter", subject: "Offer of Employment", type: "Document" },
        { id: 4, name: "Technical Assessment", subject: "Coding Challenge Link", type: "Email" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Message Templates</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-[#1f6b7a]/20">
                    <Plus size={16} />
                    Create Template
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map(tpl => (
                    <div key={tpl.id} className="p-4 rounded-xl bg-[#1a1d23] border border-white/5 hover:border-[#1f6b7a]/50 transition-all group cursor-pointer">
                        <div className="flex justify-between items-start mb-3">
                            <div className="p-2 rounded-lg bg-[#21242c] text-[#1f6b7a] group-hover:bg-[#1f6b7a] group-hover:text-white transition-colors">
                                <FileText size={20} />
                            </div>
                            <button className="text-gray-500 hover:text-white">
                                <MoreHorizontal size={18} />
                            </button>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">{tpl.name}</h4>
                        <p className="text-xs text-gray-500 border-l-2 border-white/10 pl-2 italic">Subject: {tpl.subject}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ---------------- BILLING (Restored) ---------------- */

const BillingSection = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Current Plan */}
                <div className="p-4 sm:p-6 rounded-xl bg-[#1a1d23] border border-white/5 space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-[#1f6b7a]/10 text-[#1f6b7a]">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Pro Plan</h3>
                                <p className="text-xs text-gray-500">$49/month • Billed monthly</p>
                            </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">Active</span>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-gray-400">Job Postings Used</span>
                            <span className="text-white">8 / 10</span>
                        </div>
                        <div className="h-2 w-full bg-[#15171c] rounded-full overflow-hidden border border-white/5">
                            <div className="h-full w-[80%] bg-[#1f6b7a] rounded-full"></div>
                        </div>
                        <p className="text-[10px] text-gray-500">Plan resets on Feb 1, 2026</p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex gap-3">
                        <button className="flex-1 py-2 rounded-lg bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-xs font-bold transition-colors">Upgrade Plan</button>
                        <button className="flex-1 py-2 rounded-lg bg-[#15171c] border border-white/10 hover:border-white/20 text-gray-300 text-xs font-bold transition-colors">Cancel Subscription</button>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="p-4 sm:p-6 rounded-xl bg-[#1a1d23] border border-white/5 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Payment Method</h3>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#15171c] border border-white/5">
                            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                                {/* Simple Visa shape representation */}
                                <span className="text-[10px] font-black text-blue-800 italic">VISA</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-white">Visa ending in 4242</p>
                                <p className="text-xs text-gray-500">Expires 12/28</p>
                            </div>
                            <CheckCircle2 size={18} className="text-green-500" />
                        </div>
                    </div>
                    <button className="w-full py-2 mt-4 rounded-lg bg-[#15171c] border border-white/10 hover:border-white/20 text-gray-300 text-xs font-bold transition-colors">
                        Update Payment Method
                    </button>
                </div>
            </div>

            {/* Invoices */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Billing History</h3>
                <div className="rounded-xl border border-white/5 bg-[#1a1d23] overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[#21242c] border-b border-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { date: 'Jan 1, 2026', amount: '$49.00', status: 'Paid' },
                                { date: 'Dec 1, 2025', amount: '$49.00', status: 'Paid' },
                                { date: 'Nov 1, 2025', amount: '$49.00', status: 'Paid' }
                            ].map((invoice, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-300">{invoice.date}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-white">{invoice.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-500 hover:text-[#1f6b7a] transition-colors flex items-center gap-1 justify-end w-full">
                                            <Download size={14} />
                                            <span className="text-xs">PDF</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ---------------- SMALL INPUT ---------------- */

const Input = ({ label, value, icon: Icon }) => (
    <div>
        <label className="text-xs font-bold text-gray-500">{label}</label>
        <div className="relative mt-1">
            {Icon && (
                <Icon
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
            )}
            <input
                defaultValue={value}
                className={`w-full bg-[#0f1115] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-[#1f6b7a] outline-none ${Icon ? 'pl-10' : ''
                    }`}
            />
        </div>
    </div>
);
