import React from 'react';
import StatsGrid from './components/StatsGrid';
import { ReportsVolumeChart, FlagReasonsChart } from './components/AdminCharts';
import PriorityTaskList from './components/PriorityTaskList';

const AdminOverview = () => {
    return (
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto z-10 relative">
            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    {/* Fixed height for chart area consistency */}
                    <div className="h-[400px]">
                        <ReportsVolumeChart />
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="h-[400px]">
                        <FlagReasonsChart />
                    </div>
                </div>
            </div>

            <PriorityTaskList />
        </div>
    );
};

export default AdminOverview;
