import React from 'react';
import { Filter, Download, User, Smartphone, Monitor } from 'lucide-react';

const SeverityBadge = ({ level }) => {
    const styles = {
        CRITICAL: 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.2)]',
        HIGH: 'bg-orange-500/10 text-orange-500 border-orange-500/20 shadow-[0_0_8px_rgba(249,115,22,0.2)]',
        MEDIUM: 'bg-lime-400/10 text-lime-400 border-lime-400/20 shadow-[0_0_8px_rgba(163,230,53,0.2)]',
    };

    const colors = {
        CRITICAL: 'bg-red-500',
        HIGH: 'bg-orange-500',
        MEDIUM: 'bg-lime-400',
    };

    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold border ${styles[level] || styles.MEDIUM} uppercase tracking-wider`}>
            <div className={`w-1.5 h-1.5 rounded-full ${colors[level] || colors.MEDIUM} animate-pulse`}></div>
            {level}
        </div>
    );
};

const UserEntity = ({ name, type }) => (
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-[#222528] flex items-center justify-center text-gray-400 border border-gray-700">
            {type === 'mobile' ? <Smartphone size={16} /> : <User size={16} />}
        </div>
        <span className="font-bold text-sm text-gray-200">{name}</span>
    </div>
);

const MobileTaskCard = ({ task }) => (
    <div className="bg-[#151A25] border border-gray-800 rounded-xl p-4 mb-4 flex flex-col gap-3 relative overflow-hidden">
        {/* Top Row: ID + Severity */}
        <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#33ddff] font-mono">{task.id}</span>
            <SeverityBadge level={task.severity} />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#222528] flex items-center justify-center text-gray-400 border border-gray-700 shrink-0">
                {task.type === 'mobile' ? <Smartphone size={18} /> : <User size={18} />}
            </div>
            <div>
                <p className="font-bold text-sm text-white">{task.user}</p>
                <p className="text-xs text-gray-500">{task.reason}</p>
            </div>
        </div>

        {/* Bottom Row: Time + Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {task.time}
            </span>

            {task.action === 'resolve' ? (
                <button className="px-4 py-1.5 rounded bg-[#33ddff] text-[#0B0B15] text-xs font-bold hover:bg-[#25c4e6] shadow-[0_0_10px_rgba(51,221,255,0.4)] transition-all uppercase">
                    Resolve
                </button>
            ) : (
                <button className="px-4 py-1.5 rounded bg-gray-700 text-white text-xs font-bold hover:bg-gray-600 border border-gray-600 transition-all uppercase">
                    Review
                </button>
            )}
        </div>
    </div>
);

const PriorityTaskList = () => {
    const tasks = [
        { id: '#9921', user: 'Alex Morgan', type: 'mobile', reason: 'Harassment / Hate Speech', severity: 'CRITICAL', time: '12m 30s', action: 'resolve' },
        { id: '#9920', user: 'Sarah Jenkins', type: 'user', reason: 'Spam Distribution', severity: 'HIGH', time: '45m 12s', action: 'review' },
        { id: '#9918', user: 'Michael Chen', type: 'mobile', reason: 'Fake Identity', severity: 'MEDIUM', time: '1h 05m', action: 'review' },
    ];

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-[#33ddff] rounded-full shadow-[0_0_10px_#33ddff]"></div>
                    <h2 className="text-xl font-bold text-white">Priority Task List</h2>
                </div>

                <div className="sm:ml-auto flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800 transition-colors uppercase">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800 transition-colors uppercase">
                        <Download size={14} /> Export
                    </button>
                </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full overflow-x-auto rounded-xl border border-gray-800 bg-[#151A25]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 bg-[#1a1f2e]">
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">User Entity</th>
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Flag Reason</th>
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Severity</th>
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Time Elapsed</th>
                            <th className="p-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {tasks.map((task) => (
                            <tr key={task.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 text-xs font-bold text-[#33ddff]">{task.id}</td>
                                <td className="p-4">
                                    <UserEntity name={task.user} type={task.type} />
                                </td>
                                <td className="p-4 text-sm text-gray-300">{task.reason}</td>
                                <td className="p-4">
                                    <SeverityBadge level={task.severity} />
                                </td>
                                <td className="p-4 text-xs font-mono text-gray-400">{task.time}</td>
                                <td className="p-4 text-right">
                                    {task.action === 'resolve' ? (
                                        <button className="px-4 py-1.5 rounded bg-[#33ddff] text-[#0B0B15] text-xs font-bold hover:bg-[#25c4e6] shadow-[0_0_10px_rgba(51,221,255,0.4)] transition-all uppercase">
                                            RESOLVE
                                        </button>
                                    ) : (
                                        <button className="px-4 py-1.5 rounded bg-gray-700 text-white text-xs font-bold hover:bg-gray-600 border border-gray-600 transition-all uppercase">
                                            REVIEW
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="sm:hidden space-y-4">
                {tasks.map(task => (
                    <MobileTaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default PriorityTaskList;

