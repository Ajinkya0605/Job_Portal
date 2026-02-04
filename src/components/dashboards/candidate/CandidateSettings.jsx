import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    Lock, Shield, Bell, Trash2, Eye, EyeOff, Save, AlertTriangle,
    FileText, Upload, Briefcase, MapPin, DollarSign,
    Download, MoreHorizontal, ChevronDown
} from 'lucide-react';

export default function CandidateSettings() {
    const { setSidebarOpen } = useOutletContext();
    const [activeTab, setActiveTab] = useState('documents');

    return (
        <>
            {/* Header */}
            <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 bg-[#15171c]/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-lg font-bold text-white">Settings</h1>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-[#15171c] relative z-10 custom-scrollbar">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-white/10 overflow-x-auto custom-scrollbar">
                        {[
                            { id: 'general', label: 'Account', icon: Shield },
                            { id: 'preferences', label: 'Preferences', icon: Briefcase },
                            { id: 'documents', label: 'Documents', icon: FileText },
                            { id: 'notifications', label: 'Notifications', icon: Bell },
                        ].map(tab => {
                            const Icon = tab.icon;
                            // Shorten labels on mobile if needed, but currently keeping as is or simplifying
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap
                                    ${activeTab === tab.id
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
                    <div className="min-h-[400px] animate-fade-in-up">
                        {activeTab === 'general' && <GeneralSection />}
                        {activeTab === 'preferences' && <PreferencesSection />}
                        {activeTab === 'documents' && <DocumentsSection />}
                        {activeTab === 'notifications' && <NotificationsSection />}
                    </div>
                </div>
            </div>
        </>
    );
}

/* ============================
   1. ACCOUNT & SECURITY
============================ */
const GeneralSection = () => {
    const [showPassword, setShowPassword] = useState({
        current: false, new: false, confirm: false
    });
    const [privacy, setPrivacy] = useState('recruiter');
    const [twoFactor, setTwoFactor] = useState(false);
    const [searchable, setSearchable] = useState(true);

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className="space-y-6">

            {/* Security */}
            <section className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl shadow-lg">
                <div className="p-4 sm:p-6 border-b border-[#2a2d36] flex gap-3">
                    <IconBadge><Lock size={20} /></IconBadge>
                    <div>
                        <h2 className="text-lg font-bold text-white">Account Security</h2>
                        <p className="text-xs text-gray-500">
                            Update your password and secure your account
                        </p>
                    </div>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                    <h3 className="text-sm font-bold text-gray-300 uppercase">Change Password</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {['current', 'new', 'confirm'].map(field => (
                            <div key={field}>
                                <label className="text-[11px] font-bold text-gray-500 capitalize">
                                    {field} Password
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        type={showPassword[field] ? 'text' : 'password'}
                                        className="w-full bg-[#0f1115] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-[#1f6b7a] outline-none"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        onClick={() => togglePasswordVisibility(field)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                    >
                                        {showPassword[field] ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full sm:w-auto px-5 py-2 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-xs font-bold rounded-lg shadow-lg">
                        <Save size={14} className="inline mr-2" />
                        Update Password
                    </button>

                    <Divider />

                    <ToggleRow
                        title="Two-Factor Authentication"
                        desc="Add an extra layer of security."
                        value={twoFactor}
                        onChange={() => setTwoFactor(!twoFactor)}
                    />
                </div>
            </section>

            {/* Privacy */}
            <section className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl shadow-lg">
                <div className="p-4 sm:p-6 border-b border-[#2a2d36] flex gap-3">
                    <IconBadge><Shield size={20} /></IconBadge>
                    <div>
                        <h2 className="text-lg font-bold text-white">Privacy & Visibility</h2>
                        <p className="text-xs text-gray-500">Control who can see your profile</p>
                    </div>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Public', 'Recruiter Only', 'Private'].map(option => {
                            const value = option.toLowerCase().replace(' ', '');
                            return (
                                <button
                                    key={option}
                                    onClick={() => setPrivacy(value)}
                                    className={`py-3 rounded-lg border text-sm font-bold
                                    ${privacy === value
                                            ? 'bg-[#1f6b7a]/10 border-[#1f6b7a] text-[#1f6b7a]'
                                            : 'bg-[#0f1115] border-gray-800 text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    <Divider />

                    <ToggleRow
                        title="Searchability"
                        desc="Allow recruiters to find me via email."
                        value={searchable}
                        onChange={() => setSearchable(!searchable)}
                    />
                </div>
            </section>

            {/* Danger Zone */}
            <section className="bg-[#1a1d23] border border-red-500/30 rounded-xl shadow-lg">
                <div className="p-4 sm:p-6 border-b border-red-500/10 bg-red-500/5 flex gap-3">
                    <IconBadge danger><AlertTriangle size={20} /></IconBadge>
                    <div>
                        <h2 className="text-lg font-bold text-red-500">Danger Zone</h2>
                        <p className="text-xs text-red-400">Irreversible actions</p>
                    </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-500 max-w-sm">
                        Deleting your account permanently removes all data.
                    </p>
                    <button className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold rounded-lg border border-red-500/20">
                        <Trash2 size={14} className="inline mr-2" />
                        Delete Account
                    </button>
                </div>
            </section>
        </div>
    );
};

/* ============================
   2. JOB PREFERENCES
============================ */
const PreferencesSection = () => (
    <section className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl shadow-lg">
        <SectionHeader icon={<Briefcase size={20} />} title="Job Preferences"
            desc="Tailor your job feed to match your career goals" />

        <div className="p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Desired Job Titles" placeholder="Frontend Developer, UI Designer" />
                <IconInput icon={<MapPin size={16} />} label="Target Location" placeholder="Remote, Bangalore" />
                <IconInput icon={<DollarSign size={16} />} label="Expected Salary" placeholder="80,000" />
                <Select label="Preferred Company Size" />
            </div>

            <Divider />

            <div>
                <label className="text-xs font-bold text-gray-500">Work Mode</label>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-2">
                    {['Remote', 'Hybrid', 'On-Site', 'Relocation'].map(mode => (
                        <span key={mode} className="px-4 py-2 bg-[#0f1115] border border-gray-800 rounded-lg text-sm text-gray-300 text-center">
                            {mode}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-[#1f6b7a] hover:bg-[#2a8a9c] text-white text-sm font-bold rounded-lg shadow-lg">
                    <Save size={16} className="inline mr-2" />
                    Save Preferences
                </button>
            </div>
        </div>
    </section>
);

/* ============================
   3. DOCUMENTS
============================ */
const DocumentsSection = () => (
    <section className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl shadow-lg">
        <SectionHeader icon={<FileText size={20} />} title="Resumes & Documents"
            desc="Manage your CVs and cover letters" />

        <div className="p-4 sm:p-6 space-y-6">
            <div className="border-2 border-dashed border-gray-700 bg-[#15171c] rounded-xl p-8 text-center">
                <Upload size={32} className="mx-auto mb-3 text-gray-500" />
                <p className="text-sm text-white font-bold">Upload a New Resume</p>
                <p className="text-xs text-gray-500">PDF or DOCX</p>
            </div>

            {[
                'Alex_Chen_Frontend_CV.pdf',
                'Alex_Chen_FullStack.pdf',
                'Cover_Letter_Generic.pdf'
            ].map((file, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-[#0f1115] border border-gray-800 rounded-xl">
                    <span className="text-sm text-white truncate flex-1">{file}</span>
                    <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                        <IconButton><Download size={18} /></IconButton>
                        <IconButton danger><Trash2 size={18} /></IconButton>
                        <IconButton><MoreHorizontal size={18} /></IconButton>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

/* ============================
   4. NOTIFICATIONS
============================ */
const NotificationsSection = () => (
    <section className="bg-[#1a1d23] border border-[#2a2d36] rounded-xl shadow-lg">
        <SectionHeader icon={<Bell size={20} />} title="Notification Preferences"
            desc="Manage what emails and alerts you receive" />

        <div className="p-4 sm:p-6 space-y-6">
            {['Job Alerts', 'Application Updates', 'Direct Messages', 'Newsletter'].map(item => (
                <ToggleRow key={item} title={item} desc="Notification preference" />
            ))}
        </div>
    </section>
);

/* ============================
   HELPERS
============================ */
const IconBadge = ({ children, danger }) => (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center
        ${danger ? 'bg-red-500/10 text-red-500' : 'bg-[#1f6b7a]/10 text-[#1f6b7a]'}`}>
        {children}
    </div>
);

const Divider = () => <div className="h-px bg-[#2a2d36]" />;

const ToggleRow = ({ title, desc, value, onChange }) => (
    <div className="flex justify-between items-center gap-4">
        <div>
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
        <button
            onClick={onChange}
            className={`w-12 h-6 rounded-full relative ${value ? 'bg-[#1f6b7a]' : 'bg-[#2a2d36]'}`}
        >
            <span className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${value ? 'left-7' : 'left-1'}`} />
        </button>
    </div>
);

const SectionHeader = ({ icon, title, desc }) => (
    <div className="p-4 sm:p-6 border-b border-[#2a2d36] flex gap-3">
        <IconBadge>{icon}</IconBadge>
        <div>
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    </div>
);

const Input = ({ label, placeholder }) => (
    <div>
        <label className="text-xs font-bold text-gray-500">{label}</label>
        <input className="w-full mt-1 bg-[#0f1115] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white" placeholder={placeholder} />
    </div>
);

const IconInput = ({ label, placeholder, icon }) => (
    <div>
        <label className="text-xs font-bold text-gray-500">{label}</label>
        <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
            <input className="w-full pl-10 bg-[#0f1115] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white" placeholder={placeholder} />
        </div>
    </div>
);

const Select = ({ label }) => (
    <div>
        <label className="text-xs font-bold text-gray-500">{label}</label>
        <div className="relative mt-1">
            <select className="w-full bg-[#0f1115] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white appearance-none">
                <option>Early Stage Startup</option>
                <option>Mid Size</option>
                <option>Enterprise</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
    </div>
);

const IconButton = ({ children, danger }) => (
    <button className={`p-2 rounded-lg ${danger ? 'text-red-400' : 'text-gray-400'} hover:text-white`}>
        {children}
    </button>
);
