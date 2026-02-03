import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
    Users, Shield, Settings, Database, CreditCard, Activity,
    Search, MoreHorizontal, UserCheck, AlertTriangle, Lock,
    CheckCircle2, XCircle, Plus, Edit2, Server, Globe
} from 'lucide-react';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

/* ============================
   MAIN PAGE
============================ */
export default function AdminSettings() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('users');

    const sidebarProps = useOutletContext();
    // If AdminSettings is used as a standalone route wrapped in layout vs direct child
    // In current project structure, Admin pages seem to handle layout themselves or through parent.
    // Based on AdminDashboard, it manages its own layout shell. We will replicate that pattern.
    // NOTE: If sidebar props are missing (direct route), we manage locally.

    return (
        <div className="min-h-screen bg-[#0B0B15] font-sans selection:bg-[#33ddff] selection:text-[#0B0B15] text-gray-200 flex flex-col lg:flex-row overflow-hidden">
            <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activePage="Settings" />

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-h-screen flex flex-col relative w-full min-w-0 lg:ml-64 transition-all duration-300">
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#33ddff]/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                </div>

                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} title="Platform Settings" />

                <div className="flex-1 overflow-y-auto z-10 custom-scrollbar bg-[#0B0B15]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

                        {/* Tabs */}
                        <div className="flex gap-4 border-b border-gray-800 overflow-x-auto pb-1 custom-scrollbar">
                            {[
                                { id: 'users', label: 'User Management', icon: Users },
                                { id: 'platform', label: 'Platform Config', icon: Settings },
                                { id: 'content', label: 'Taxonomy', icon: Database },
                                { id: 'billing', label: 'Billing', icon: CreditCard },
                                { id: 'logs', label: 'System Health', icon: Activity },
                            ].map(tab => {
                                const Icon = tab.icon;
                                const active = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap
                                            ${active
                                                ? 'border-[#33ddff] text-[#33ddff] bg-[#33ddff]/5'
                                                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-700'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Area */}
                        <div className="min-h-[500px] animate-fade-in-up pb-20">
                            {activeTab === 'users' && <UserManagementSection />}
                            {activeTab === 'platform' && <PlatformConfigSection />}
                            {activeTab === 'content' && <TaxonomySection />}
                            {activeTab === 'billing' && <BillingSection />}
                            {activeTab === 'logs' && <SystemHealthSection />}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

/* ============================
   1. USER MANAGEMENT
============================ */
const UserManagementSection = () => {
    return (
        <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard title="Total Users" value="24,892" trend="+12% this week" color="text-[#33ddff]" />
                <StatCard title="Pending Verifications" value="18" trend="Requires Action" color="text-yellow-400" />
                <StatCard title="Flagged Accounts" value="5" trend="Critical" color="text-red-500" />
            </div>

            {/* Combined Table Area */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Main User Table */}
                <div className="xl:col-span-2 bg-[#151A25] border border-gray-800 rounded-xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <Users size={18} className="text-[#33ddff]" /> All Users
                        </h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                            <input className="bg-[#0B0B15] border border-gray-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white focus:border-[#33ddff] outline-none w-full sm:w-48" placeholder="Search users..." />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#1a1f2e] text-[10px] font-bold text-gray-400 uppercase">
                                <tr>
                                    <th className="px-4 py-3">User</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 text-sm">
                                {[
                                    { name: 'John Doe', email: 'john@example.com', role: 'Candidate', status: 'Active' },
                                    { name: 'Sarah Smith', email: 'sarah@tech.com', role: 'Recruiter', status: 'Active' },
                                    { name: 'Mike Ross', email: 'mike@fake.net', role: 'Candidate', status: 'Suspended' },
                                ].map((user, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-4 py-3">
                                            <div className="font-bold text-white">{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-300">{user.role}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${user.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <button className="text-gray-500 hover:text-[#33ddff]">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Verification Queue (Sidebar style) */}
                <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <UserCheck size={18} className="text-yellow-400" /> Verification Queue
                    </h3>
                    <div className="space-y-3">
                        {[1, 2].map((item) => (
                            <div key={item} className="p-3 bg-[#0B0B15] border border-gray-800 rounded-lg flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center font-bold text-xs text-white">TC</div>
                                    <div>
                                        <p className="text-sm font-bold text-white">TechCorp Inc.</p>
                                        <p className="text-[10px] text-gray-500">Recruiter License #9942</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded text-xs font-bold transition-all">Approve</button>
                                    <button className="flex-1 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded text-xs font-bold transition-all">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-2 text-xs font-bold text-gray-400 hover:text-white bg-[#0B0B15] border border-gray-800 rounded-lg">View All Pending</button>
                </div>
            </div>
        </div>
    );
};

/* ============================
   2. PLATFORM CONFIG
============================ */
const PlatformConfigSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Global Announcements */}
            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded bg-blue-500/10 text-blue-400"><Globe size={20} /></div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Global Announcement</h3>
                        <p className="text-xs text-gray-400">Set a site-wide banner message.</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500">Banner Message</label>
                    <input className="w-full bg-[#0B0B15] border border-gray-800 rounded-lg px-4 py-2 text-sm text-white" placeholder="e.g. Maintenance scheduled for Sunday 2AM UTC" />
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#33ddff]" id="banner-active" />
                    <label htmlFor="banner-active" className="text-sm text-gray-300">Activate Banner</label>
                </div>
                <button className="px-4 py-2 bg-[#33ddff] text-[#0B0B15] font-bold text-sm rounded-lg hover:bg-[#25c4e6]">Update Banner</button>
            </div>

            {/* Maintenance Mode */}
            <div className="bg-[#151A25] border border-red-500/20 rounded-xl p-6 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertTriangle size={100} className="text-red-500" />
                </div>
                <div className="flex items-start gap-4 relative z-10">
                    <div className="p-2 rounded bg-red-500/10 text-red-500"><Lock size={20} /></div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Maintenance Mode</h3>
                        <p className="text-xs text-gray-400">Lock the site for all non-admin users.</p>
                    </div>
                </div>
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-lg relative z-10">
                    <p className="text-xs text-red-400 font-bold mb-3">⚠️ DANGER ZONE</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Status: <span className="text-green-400 font-bold">Operational</span></span>
                        <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-lg text-xs font-bold">
                            ENABLE MAINTENANCE
                        </button>
                    </div>
                </div>
            </div>

            {/* Registration Controls */}
            <div className="lg:col-span-2 bg-[#151A25] border border-gray-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2"><UserCheck size={18} /> Registrations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ToggleCard title="Candidate Signups" desc="Allow new candidates to register" active={true} />
                    <ToggleCard title="Recruiter Signups" desc="Allow new companies to register" active={true} />
                </div>
            </div>
        </div>
    );
};

/* ============================
   3. TAXONOMY (SKILL MATRIX)
============================ */
const TaxonomySection = () => {
    return (
        <div className="space-y-6">
            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-white">Global Skill Database</h3>
                        <p className="text-xs text-gray-400">Manage standard skills available in dropdowns.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#33ddff]/10 text-[#33ddff] hover:bg-[#33ddff]/20 border border-[#33ddff]/20 rounded-lg text-xs font-bold transition-all">
                        <Plus size={14} /> Add New Skill
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Svelte', 'Rust', 'Go', 'Figma'].map(skill => (
                        <div key={skill} className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0B15] border border-gray-800 hover:border-[#33ddff]/50 transition-colors">
                            <span className="text-sm text-gray-300">{skill}</span>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-gray-500 hover:text-white"><Edit2 size={12} /></button>
                                <button className="text-gray-500 hover:text-red-400"><XCircle size={12} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-white">Job Categories</h3>
                        <p className="text-xs text-gray-400">Industry sectors and job classifications.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#33ddff]/10 text-[#33ddff] hover:bg-[#33ddff]/20 border border-[#33ddff]/20 rounded-lg text-xs font-bold transition-all">
                        <Plus size={14} /> Add Category
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {['Software Engineering', 'Data Science', 'Product Management', 'Design', 'Marketing', 'Sales'].map(cat => (
                        <div key={cat} className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0B0B15] border border-gray-800">
                            <span className="text-sm font-bold text-gray-300">{cat}</span>
                            <button className="text-gray-600 hover:text-white"><MoreHorizontal size={16} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ============================
   4. BILLING (SUPER ADMIN)
============================ */
const BillingSection = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Subscription Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: 'Starter', price: '$0', users: '1 Recruiter', features: ['5 Job Posts', 'Basic Search'] },
                    { name: 'Pro', price: '$49', users: '5 Recruiters', features: ['Unlimited Jobs', 'Advanced AI Search', 'Verified Badge'], active: true },
                    { name: 'Enterprise', price: 'Custom', users: 'Unlimited', features: ['API Access', 'Dedicated Support', 'SSO'] },
                ].map(plan => (
                    <div key={plan.name} className={`relative p-6 rounded-xl border ${plan.active ? 'bg-[#33ddff]/5 border-[#33ddff]/40' : 'bg-[#151A25] border-gray-800'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                            <button className="text-gray-500 hover:text-white"><Edit2 size={16} /></button>
                        </div>
                        <div className="text-2xl font-bold text-white mb-6">{plan.price}<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-6">
                            {plan.features.map(f => (
                                <li key={f} className="text-xs text-gray-400 flex items-center gap-2">
                                    <CheckCircle2 size={12} className={plan.active ? 'text-[#33ddff]' : 'text-gray-600'} /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-4">Recent Transactions Log</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs bg-[#0B0B15] rounded-lg">
                        <thead className="text-gray-500 border-b border-gray-800">
                            <tr>
                                <th className="p-3">ID</th>
                                <th className="p-3">Company</th>
                                <th className="p-3">Plan</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 text-gray-300">
                            {[1, 2, 3].map(i => (
                                <tr key={i}>
                                    <td className="p-3 font-mono text-gray-500">#INV-202{i}</td>
                                    <td className="p-3 font-bold text-white">Acme Corp</td>
                                    <td className="p-3">Pro Plan</td>
                                    <td className="p-3">$49.00</td>
                                    <td className="p-3">Feb 0{i}, 2026</td>
                                    <td className="p-3 text-green-400">Success</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ============================
   5. SYSTEM HEALTH
============================ */
const SystemHealthSection = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <HealthMetric label="API Uptime" value="99.98%" status="good" />
                <HealthMetric label="DB Latency" value="45ms" status="good" />
                <HealthMetric label="Storage (S3)" value="42% Used" status="neutral" />
                <HealthMetric label="Email Service" value="Operational" status="good" />
            </div>

            <div className="bg-[#151A25] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Server size={18} /> Audit Logs
                    </h3>
                    <button className="text-xs text-[#33ddff] hover:underline">Download CSV</button>
                </div>

                <div className="space-y-4">
                    {[
                        { action: 'User Banned', detail: 'Admin X banned User #8821 (Spam)', time: '10 min ago', type: 'critical' },
                        { action: 'Settings Changed', detail: 'Global Banner updated by Admin Y', time: '1 hour ago', type: 'warn' },
                        { action: 'Login', detail: 'Admin Z logged in from 192.168.1.1', time: '2 hours ago', type: 'info' },
                        { action: 'Skill Added', detail: '"Svelte 5" added to Matrix', time: '5 hours ago', type: 'info' },
                    ].map((log, i) => (
                        <div key={i} className="flex gap-4 p-3 rounded-lg border border-gray-800/50 bg-[#0B0B15]">
                            <div className={`w-1 h-full rounded-full ${log.type === 'critical' ? 'bg-red-500' :
                                    log.type === 'warn' ? 'bg-yellow-400' : 'bg-blue-500'
                                }`}></div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-white mb-0.5">{log.action}</p>
                                <p className="text-xs text-gray-500">{log.detail}</p>
                            </div>
                            <span className="text-[10px] text-gray-600 font-mono whitespace-nowrap">{log.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ============================
   COMPONENTS / HELPERS
============================ */

const StatCard = ({ title, value, trend, color }) => (
    <div className="bg-[#151A25] border border-gray-800 rounded-xl p-5">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{title}</p>
        <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-white">{value}</span>
            <span className={`text-[10px] font-bold ${color} bg-white/5 px-2 py-1 rounded`}>{trend}</span>
        </div>
    </div>
);

const ToggleCard = ({ title, desc, active }) => (
    <div className="flex items-center justify-between p-4 bg-[#0B0B15] border border-gray-800 rounded-lg">
        <div>
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
        <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${active ? 'bg-[#33ddff]' : 'bg-gray-700'}`}>
            <div className={`absolute top-1 w-3 h-3 bg-[#0B0B15] rounded-full transition-all ${active ? 'left-6' : 'left-1'}`}></div>
        </div>
    </div>
);

const HealthMetric = ({ label, value, status }) => (
    <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">{label}</p>
        <p className={`text-lg font-bold ${status === 'good' ? 'text-green-400' :
                status === 'neutral' ? 'text-blue-400' : 'text-red-400'
            }`}>{value}</p>
        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${status === 'good' ? 'bg-green-500 animate-pulse' :
                status === 'neutral' ? 'bg-blue-500' : 'bg-red-500'
            }`}></div>
    </div>
);
