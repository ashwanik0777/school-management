"use client";

import { useState } from 'react';
import { 
  CalendarCheck, 
  XCircle, 
  MinusCircle, 
  ChevronLeft, 
  ChevronRight,
  PieChart
} from 'lucide-react';

export default function AttendancePage() {
  const [currentMonth, setCurrentMonth] = useState('January 2026');

  // Dummy Calendar Data generator
  // 1 = Present, 0 = Absent, 2 = Holiday, 3 = Weekend, 4 = Leave
  const calendarDays = Array.from({ length: 31 }, (_, i) => {
      const day = i + 1;
      const dow = (i + 4) % 7; // simplified day of week logic
      if (dow === 0 || dow === 6) return { day, status: 3 }; // Weekend
      if (day === 26) return { day, status: 2, label: 'Republic Day' }; // Holiday
      if (day === 14) return { day, status: 0 }; // Absent
      if (day === 15) return { day, status: 4 }; // Leave
      return { day, status: 1 }; // Present
  });

  return (
    <div className="space-y-8">
      
       {/* Stats Overview */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <AttendanceStat 
             label="Overall Attendance" 
             value="92.5%" 
             color="text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
             icon={<PieChart className="w-6 h-6" />}
           />
           <AttendanceStat 
             label="Present Days" 
             value="145" 
             color="text-blue-600 bg-blue-50 dark:bg-blue-900/20"
             icon={<CalendarCheck className="w-6 h-6" />}
           />
           <AttendanceStat 
             label="Absent Days" 
             value="5" 
             color="text-red-600 bg-red-50 dark:bg-red-900/20"
             icon={<XCircle className="w-6 h-6" />}
           />
           <AttendanceStat 
             label="Leaves Taken" 
             value="3" 
             color="text-orange-600 bg-orange-50 dark:bg-orange-900/20"
             icon={<MinusCircle className="w-6 h-6" />}
           />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Calendar View */}
           <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                   <h2 className="text-xl font-bold text-slate-800 dark:text-white">Monthly Record</h2>
                   <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-700/50 p-1 rounded-xl">
                       <button className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg shadow-sm transition-all"><ChevronLeft className="w-4 h-4" /></button>
                       <span className="font-bold text-sm min-w-[100px] text-center">{currentMonth}</span>
                       <button className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg shadow-sm transition-all"><ChevronRight className="w-4 h-4" /></button>
                   </div>
               </div>

               {/* Calendar Grid */}
               <div className="grid grid-cols-7 gap-y-8 gap-x-2 text-center mb-4">
                   {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                       <div key={d} className="text-xs font-bold text-slate-400 uppercase tracking-wider">{d}</div>
                   ))}
               </div>
               <div className="grid grid-cols-7 gap-2">
                   {/* Empty slots for start of month (simplified) */}
                   <div className="aspect-square"></div>
                   <div className="aspect-square"></div>
                   <div className="aspect-square"></div>
                   <div className="aspect-square"></div>

                   {calendarDays.map((date, idx) => (
                       <div key={idx} className="aspect-square flex flex-col items-center justify-center relative group">
                           <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-sm font-bold border-2 transition-all ${
                               date.status === 1 ? 'bg-emerald-100 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400' :
                               date.status === 0 ? 'bg-red-100 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400' :
                               date.status === 2 ? 'bg-yellow-100 border-yellow-200 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-400' : // Holiday
                               date.status === 3 ? 'bg-slate-50 border-transparent text-slate-400 dark:bg-slate-800/50 dark:text-slate-600' : // Weekend
                               'bg-orange-100 border-orange-200 text-orange-700 dark:bg-orange-900/30 dark:border-orange-800 dark:text-orange-400' // Leave
                           }`}>
                               {date.day}
                           </div>
                           {/* Tooltip for Holidays/Leaves */}
                           {(date.status === 2 || date.status === 4 || date.status === 0) && (
                               <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                   {date.label || (date.status === 0 ? 'Absent' : 'Leave')}
                               </div>
                           )}
                       </div>
                   ))}
               </div>
               
               {/* Legend */}
               <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 justify-center">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                       <div className="w-3 h-3 rounded bg-emerald-500"></div> Present
                   </div>
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                       <div className="w-3 h-3 rounded bg-red-500"></div> Absent
                   </div>
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                       <div className="w-3 h-3 rounded bg-yellow-500"></div> Holiday
                   </div>
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                       <div className="w-3 h-3 rounded bg-orange-500"></div> Leave
                   </div>
               </div>
           </div>

           {/* Leave Application */}
           <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-6 text-slate-800 dark:text-white">Apply for Leave</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Leave Type</label>
                            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-medium focus:ring-primary">
                                <option>Sick Leave</option>
                                <option>Personal</option>
                                <option>Family Function</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">From</label>
                                <input type="date" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-medium focus:ring-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">To</label>
                                <input type="date" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-medium focus:ring-primary" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Reason</label>
                            <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm font-medium focus:ring-primary h-24 resize-none" placeholder="Brief explanation..."></textarea>
                        </div>
                        <button className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Submit Application
                        </button>
                    </form>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Note:</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                        Attendance below 75% may result in disqualification from final exams. Please maintain regular attendance.
                    </p>
                </div>
           </div>

       </div>
    </div>
  );
}

function AttendanceStat({ label, value, color, icon }: any) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{label}</p>
                <p className="text-2xl font-black text-slate-800 dark:text-white mt-1">{value}</p>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                {icon}
            </div>
        </div>
    )
}
