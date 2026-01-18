"use client";

import React, { useState } from "react";
import { 
  Users, 
  BookOpen, 
  ArrowRight, 
  Search,
  MoreVertical,
  Calendar,
  Grid,
  List,
  GraduationCap,
  Clock,
  MapPin,
  Filter
} from "lucide-react";
import Link from 'next/link';

// Mock Data for Classes
const classes = [
    {
        id: "10-a-math",
        name: "Class 10-A",
        subject: "Mathematics",
        students: 34,
        room: "Room 302",
        schedule: "Mon, Wed, Fri • 09:00 AM",
        nextClass: "Today, 09:00 AM",
        topic: "Quadratic Equations",
        avgPerformance: 85,
        attendance: 92,
        image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "12-b-phy",
        name: "Class 12-B",
        subject: "Physics",
        students: 28,
        room: "Lab 2",
        schedule: "Tue, Thu • 11:30 AM",
        nextClass: "Today, 11:30 AM",
        topic: "Electromagnetism",
        avgPerformance: 78,
        attendance: 88,
        image: "https://images.unsplash.com/photo-1581093458791-9e20a0b271b9?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "9-c-math",
        name: "Class 9-C",
        subject: "Mathematics",
        students: 40,
        room: "Room 105",
        schedule: "Mon-Fri • 02:00 PM",
        nextClass: "Today, 02:00 PM",
        topic: "Intro to Geometry",
        avgPerformance: 82,
        attendance: 95,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "11-a-phy",
        name: "Class 11-A",
        subject: "Physics",
        students: 32,
        room: "Room 304",
        schedule: "Mon, Wed • 10:00 AM",
        nextClass: "Tomorrow, 10:00 AM",
        topic: "Kinematics",
        avgPerformance: 90,
        attendance: 89,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    }
];

export default function MyClassesPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchTerm, setSearchTerm] = useState("");

    const filteredClasses = classes.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-20">
            {/* Header Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                     <h1 className="text-3xl font-black text-slate-800 dark:text-white">My Classes</h1>
                     <p className="text-slate-500 font-medium">Manage your {classes.length} active classes</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Filter classes..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none w-full md:w-64 transition-all"
                        />
                    </div>
                    
                    <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button 
                             onClick={() => setViewMode('list')}
                             className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                        <Filter className="w-4 h-4" /> 
                        <span className="hidden sm:inline">Sort</span>
                    </button>
                </div>
            </div>

            {/* Classes Grid */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredClasses.map((cls) => (
                        <div key={cls.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                             {/* Cover Image */}
                             <div className="h-32 bg-slate-200 relative overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                  <img 
                                    src={cls.image} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    alt={cls.name}
                                  />
                                  <div className="absolute bottom-4 left-4 z-20 text-white">
                                      <h3 className="text-xl font-black tracking-tight">{cls.name}</h3>
                                      <p className="text-white/90 text-sm font-medium flex items-center gap-1.5">
                                          <BookOpen className="w-3.5 h-3.5" /> {cls.subject}
                                      </p>
                                  </div>
                                  <button className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg text-white transition-colors">
                                      <MoreVertical className="w-5 h-5" />
                                  </button>
                             </div>

                             {/* Card Body */}
                             <div className="p-6 flex-1 flex flex-col gap-4">
                                 
                                 {/* Stats */}
                                 <div className="flex items-center justify-between text-sm">
                                     <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                                         <Users className="w-4 h-4 text-indigo-500" /> {cls.students} Students
                                     </div>
                                     <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                                         <MapPin className="w-4 h-4 text-indigo-500" /> {cls.room}
                                     </div>
                                 </div>

                                 {/* Next Session */}
                                 <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                     <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Next Session</p>
                                     <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white">
                                              <Clock className="w-4 h-4 text-orange-500" /> {cls.nextClass}
                                          </div>
                                          {cls.nextClass.startsWith("Today") && (
                                              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                          )}
                                     </div>
                                 </div>

                                 {/* Action Buttons */}
                                 <div className="mt-auto pt-2 grid grid-cols-2 gap-3">
                                     <Link 
                                        href={`/faculty/classes/${cls.id}`} 
                                        className="col-span-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-center shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                                     >
                                         Manage Class
                                     </Link>
                                     <button className="py-2.5 px-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-200 rounded-xl font-bold text-sm transition-all hover:text-indigo-600 dark:hover:text-indigo-400">
                                         Attendance
                                     </button>
                                     <button className="py-2.5 px-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-200 rounded-xl font-bold text-sm transition-all hover:text-indigo-600 dark:hover:text-indigo-400">
                                         Grades
                                     </button>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
                                <tr>
                                    <th className="text-left py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Class Name</th>
                                    <th className="text-left py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Schedule</th>
                                    <th className="text-left py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Stats</th>
                                    <th className="text-left py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Current Topic</th>
                                    <th className="text-right py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {filteredClasses.map((cls) => (
                                    <tr key={cls.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200">
                                                    <img src={cls.image} className="w-full h-full object-cover" alt="" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 dark:text-white text-base">{cls.name}</div>
                                                    <div className="text-xs font-medium text-slate-500">{cls.subject} • {cls.room}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-slate-700 dark:text-slate-300 text-sm">{cls.schedule}</div>
                                            <div className="text-xs font-medium text-orange-500 mt-1 flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> Next: {cls.nextClass}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs font-bold text-slate-500">{cls.students} Students</span>
                                                <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${cls.attendance}%` }} />
                                                </div>
                                                <span className="text-[10px] font-bold text-green-600">{cls.attendance}% Avg Att.</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                                                <BookOpen className="w-3 h-3" /> {cls.topic}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <Link href={`/faculty/classes/${cls.id}`} className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
