"use client";

import React, { useState } from "react";
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  MoreVertical, 
  Plus,
  FileText,
  CheckCircle,
  TrendingUp,
  Mail,
  MessageCircle,
  GraduationCap
} from "lucide-react";

// Mock Data for a Single Class
const classDetails = {
    id: "10-a-math",
    name: "Class 10-A",
    subject: "Mathematics",
    room: "Room 302",
    schedule: "Mon, Wed, Fri • 09:00 AM",
    nextClass: "Today, 09:00 AM",
    image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&q=80&w=800",
    stats: {
        students: 34,
        avgGrade: "B+",
        attendance: "92%",
        assignments: 12
    }
};

const students = [
    { id: 1, name: "Alex Johnson", roll: "101", attendance: 95, grade: "A", status: "Present", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
    { id: 2, name: "Sam Smith", roll: "102", attendance: 88, grade: "B+", status: "Absent", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam" },
    { id: 3, name: "Jordan Lee", roll: "103", attendance: 92, grade: "A-", status: "Present", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" },
    { id: 4, name: "Casey West", roll: "104", attendance: 78, grade: "C+", status: "Late", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey" },
    { id: 5, name: "Taylor Swift", roll: "105", attendance: 98, grade: "A+", status: "Present", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor" },
];

export default function ClassDetailsPage({ params }: { params: { classId: string } }) {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="space-y-8 pb-20">
            {/* Hero Section */}
            <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent z-10" />
                <img 
                    src={classDetails.image} 
                    alt="Class Cover" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-indigo-200 font-bold text-sm mb-2 uppercase tracking-wide">
                                <span className="bg-indigo-500/30 px-2 py-1 rounded text-white backdrop-blur-md">{classDetails.subject}</span>
                                <span>•</span>
                                <span>{classDetails.room}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{classDetails.name}</h1>
                            <div className="flex items-center gap-4 mt-2 text-indigo-100 font-medium">
                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {classDetails.schedule}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                             <button className="px-4 py-2.5 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg active:scale-95">
                                 Take Attendance
                             </button>
                             <button className="p-2.5 bg-indigo-600/50 backdrop-blur-md text-white rounded-xl hover:bg-indigo-600 transition-colors border border-white/10">
                                 <MoreVertical className="w-5 h-5" />
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-slate-200 dark:border-slate-700">
                <nav className="flex space-x-8" aria-label="Tabs">
                    {['Overview', 'Students', 'Assignments', 'Grades', 'Settings'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`
                                py-4 px-1 inline-flex items-center gap-2 border-b-2 font-bold text-sm transition-all
                                ${activeTab === tab.toLowerCase() 
                                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    {activeTab === 'overview' && (
                        <>
                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Students</div>
                                    <div className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                                        {classDetails.stats.students}
                                        <Users className="w-4 h-4 text-indigo-500" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Avg Grade</div>
                                    <div className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                                        {classDetails.stats.avgGrade}
                                        <GraduationCap className="w-4 h-4 text-green-500" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Attendance</div>
                                    <div className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                                        {classDetails.stats.attendance}
                                        <CheckCircle className="w-4 h-4 text-blue-500" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Assignments</div>
                                    <div className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                                        {classDetails.stats.assignments}
                                        <FileText className="w-4 h-4 text-orange-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity / Agenda */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Activity</h3>
                                    <button className="text-indigo-600 font-bold text-sm hover:underline">View All</button>
                                </div>
                                <div className="space-y-6 border-l-2 border-slate-100 dark:border-slate-700 ml-3 pl-6 relative">
                                    <div className="relative">
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800" />
                                        <p className="text-xs font-bold text-slate-400 mb-0.5">Today, 10:30 AM</p>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Assignment "Quadratic Formula" Posted</h4>
                                        <p className="text-sm text-slate-500 mt-1">Due date set for Friday, 24th Oct.</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-slate-800" />
                                        <p className="text-xs font-bold text-slate-400 mb-0.5">Today, 09:00 AM</p>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Class Session Completed</h4>
                                        <p className="text-sm text-slate-500 mt-1">Attendance marked: 32/34 present.</p>
                                    </div>
                                     <div className="relative">
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-800" />
                                        <p className="text-xs font-bold text-slate-400 mb-0.5">Yesterday</p>
                                        <h4 className="font-bold text-slate-800 dark:text-white">New Gradebook Entry</h4>
                                        <p className="text-sm text-slate-500 mt-1">Quiz #3 grades have been finalized.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'students' && (
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input type="text" placeholder="Search students..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20" />
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors">
                                    <Plus className="w-4 h-4" /> Add Student
                                </button>
                            </div>
                            <table className="w-full">
                                <thead className="bg-slate-50 dark:bg-slate-900/50">
                                    <tr>
                                        <th className="text-left py-3 px-6 text-xs font-bold text-slate-400 uppercase">Student</th>
                                        <th className="text-left py-3 px-6 text-xs font-bold text-slate-400 uppercase">Roll No</th>
                                        <th className="text-left py-3 px-6 text-xs font-bold text-slate-400 uppercase">Attendance</th>
                                        <th className="text-left py-3 px-6 text-xs font-bold text-slate-400 uppercase">Grade</th>
                                        <th className="text-right py-3 px-6 text-xs font-bold text-slate-400 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {students.map((student) => (
                                        <tr key={student.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="py-3 px-6">
                                                <div className="flex items-center gap-3">
                                                    <img src={student.image} className="w-8 h-8 rounded-full bg-slate-200" alt="" />
                                                    <span className="font-bold text-slate-800 dark:text-white text-sm">{student.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 font-medium text-slate-500 text-sm">#{student.roll}</td>
                                            <td className="py-3 px-6">
                                                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${student.status === 'Present' ? 'bg-green-100 text-green-700' : student.status === 'Absent' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {student.attendance}% ({student.status})
                                                </span>
                                            </td>
                                            <td className="py-3 px-6 font-bold text-slate-800 dark:text-white">{student.grade}</td>
                                            <td className="py-3 px-6 text-right">
                                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Sidebar (Right) */}
                <div className="space-y-6">
                    {/* Performance Chart Placeholder */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Class Performance</h3>
                        <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-800 border-dashed">
                             <div className="text-center">
                                 <TrendingUp className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                                 <p className="text-slate-400 text-sm font-medium">Chart visualization here</p>
                             </div>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-600/20">
                         <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                         <div className="space-y-3">
                             <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold text-sm">
                                 <Mail className="w-4 h-4" /> Email All Parents
                             </button>
                             <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold text-sm">
                                 <MessageCircle className="w-4 h-4" /> Broadcast Message
                             </button>
                             <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold text-sm">
                                 <FileText className="w-4 h-4" /> Generate Report
                             </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}