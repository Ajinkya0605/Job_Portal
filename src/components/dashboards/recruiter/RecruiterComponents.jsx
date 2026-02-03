import React from 'react';

// 1. Stat Card
export const StatCard = ({ icon, label, value, trend, trendUp }) => (
    <div className="bg-[#21242c] rounded-xl border border-white/5 p-4 relative overflow-hidden group hover:border-[#1f6b7a]/30 transition-all shadow-md">
        <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{label}</p>
                    <div className="flex items-end gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{value}</h3>
                        {trend && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border mb-1 flex items-center ${trendUp ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-red-400 bg-red-400/10 border-red-400/20'}`}>
                                <span className="material-symbols-outlined text-[10px] mr-0.5">{trendUp ? 'trending_up' : 'trending_down'}</span>
                                {trend}
                            </span>
                        )}
                    </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#1f6b7a]/10 flex items-center justify-center text-[#1f6b7a] border border-[#1f6b7a]/20">
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                </div>
            </div>
        </div>
    </div>
);

// 2. Applicant Row
export const ApplicantRow = ({ name, role, applied, score, status, statusColor }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-3 hover:bg-white/5 rounded-lg transition-all border-b border-white/5 last:border-0 group cursor-pointer relative">
        {/* Mobile: Top Row (Avatar + Name + Score) | Desktop: Col 1 */}
        <div className="flex items-center justify-between w-full sm:w-1/3 min-w-[200px] mb-3 sm:mb-0">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-[#1a1d23] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-300 group-hover:text-[#1f6b7a] group-hover:border-[#1f6b7a]/30 transition-colors flex-shrink-0">
                    {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="min-w-0">
                    <p className="text-sm sm:text-xs font-bold text-white truncate group-hover:text-[#1f6b7a] transition-colors">{name}</p>
                    <p className="text-xs sm:text-[10px] text-gray-500 truncate">{role}</p>
                </div>
            </div>

            {/* Mobile Score Display (Hidden on Desktop) */}
            <div className="sm:hidden flex flex-col items-end">
                <span className="text-base font-extrabold text-[#1f6b7a]">{score}%</span>
                <span className="text-[9px] text-gray-600 font-bold uppercase">Match</span>
            </div>
        </div>

        {/* Mobile: Middle Row (Status) | Desktop: Col 3 */}
        <div className="w-full sm:w-1/4 mb-3 sm:mb-0">
            <span className={`inline-flex items-center px-2.5 py-1 sm:px-2 sm:py-0.5 rounded text-[10px] font-bold border ${statusColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${statusColor.replace('text-', 'bg-').replace('border-', '')}`}></span>
                {status}
            </span>
        </div>

        {/* Mobile: Bottom Row (Applied) | Desktop: Col 2 */}
        <div className="flex items-center justify-between sm:block w-full sm:w-1/6 text-xs sm:text-[10px] text-gray-400">
            <span className="sm:hidden text-gray-600 font-bold uppercase text-[9px]">Applied</span>
            <span>{applied}</span>
        </div>

        {/* Desktop Score Display (Hidden on Mobile) */}
        <div className="hidden sm:flex w-1/6 items-center gap-2">
            <div className="flex-1 h-1.5 bg-[#1a1d23] rounded-full overflow-hidden">
                <div className="h-full bg-[#1f6b7a] rounded-full" style={{ width: `${score}%` }}></div>
            </div>
            <span className="text-xs font-bold text-[#1f6b7a] w-8 text-right">{score}%</span>
        </div>

        {/* Menu (Desktop Only for cleanliness, or mobile absolute if needed, but row is clickable) */}
        <div className="hidden sm:block w-10 text-right">
            <button className="text-gray-500 hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
        </div>
    </div>
);

// 3. Glass Card Helper
export const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-[#21242c] border border-white/5 rounded-xl relative overflow-hidden shadow-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);
