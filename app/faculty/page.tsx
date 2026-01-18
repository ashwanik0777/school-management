"use client";

import React from "react";
import { 
  Users, 
  GraduationCap, 
  ClipboardList, 
  AlertCircle, 
  Clock, 
  ArrowRight,
  TrendingUp,
  MoreVertical,
  Calendar,
  CheckCircle2,
  XCircle,
  Plus,
  MessageSquare
} from "lucide-react";

// Mock Data for Charts
const performanceData = [
  { name: 'Mon', avg: 82 },
  { name: 'Tue', avg: 85 },
  { name: 'Wed', avg: 78 },
  { name: 'Thu', avg: 88 },
  { name: 'Fri', avg: 86 },
  { name: 'Sat', avg: 90 },
];

export default function FacultyDashboard() {
  return (
    <div className="space-y-8 pb-10">
      
      {/* 1. Overview Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
              { label: "Total Students", value: "142", sub: "Across 4 Classes", icon: Users, color: "blue" },
              { label: "Avg. Attendance", value: "94%", sub: "+2.5% vs last month", icon: TrendingUp, color: "green" },
              { label: "Pending Grading", value: "28", sub: "Assignments to review", icon: ClipboardList, color: "orange" },
              { label: "Upcoming Classes", value: "03", sub: "Remaining today", icon: Clock, color: "purple" }
          ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-2xl bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600`}>
                          <stat.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg bg-${stat.color}-50 dark:bg-${stat.color}-900/10 text-${stat.color}-600 dark:text-${stat.color}-400`}>
                          {stat.sub.includes('+') ? '↑' : '•'} {stat.sub.split(' ')[0]}
                      </span>
                  </div>
                  <div>
                      <h3 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight mb-1">{stat.value}</h3>
                      <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                  </div>
              </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. Today's Schedule (Main Focus) */}
          <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                     <Calendar className="w-5 h-5 text-indigo-500" /> Today's Schedule
                  </h2>
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">View Calendar</button>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl p-1 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="space-y-1">
                      {[
                          { time: "09:00 AM", class: "Class 10-A", subject: "Mathematics", topic: "Quadratic Equations", room: "Room 302", status: "Completed", students: 34 },
                          { time: "11:30 AM", class: "Class 12-B", subject: "Physics", topic: "Electromagnetism", room: "Lab 2", status: "Live", students: 28 },
                          { time: "02:00 PM", class: "Class 9-C", subject: "Mathematics", topic: "Intro to Geometry", room: "Room 105", status: "Upcoming", students: 40 },
                      ].map((session, i) => (
                          <div key={i} className={`flex flex-col md:flex-row gap-4 md:gap-6 p-5 rounded-2xl transition-all ${session.status === 'Live' ? 'bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                              <div className="min-w-[5rem] flex flex-col justify-center">
                                  <span className="text-lg font-bold text-slate-900 dark:text-white">{session.time}</span>
                                  <span className={`text-xs font-bold uppercase tracking-wider w-fit px-2 py-0.5 rounded-md mt-1 ${
                                      session.status === 'Live' ? 'bg-green-100 text-green-700 animate-pulse' : 
                                      session.status === 'Completed' ? 'bg-slate-100 text-slate-500' : 'bg-indigo-100 text-indigo-600'
                                  }`}>
                                      {session.status}
                                  </span>
                              </div>
                              
                              <div className="flex-1 border-l-2 border-slate-100 dark:border-slate-700 pl-4 md:pl-6 py-1">
                                  <div className="flex justify-between items-start mb-2">
                                      <div>
                                          <h4 className="text-lg font-bold text-slate-800 dark:text-white">{session.subject}</h4>
                                          <p className="text-slate-500 text-sm font-medium">{session.class} • {session.room}</p>
                                      </div>
                                      <div className="flex -space-x-2">
                                          {[1,2,3].map(n => (
                                              <div key={n} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 overflow-hidden">
                                                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${n * i * 35}`} alt="" />
                                              </div>
                                          ))}
                                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                              +{session.students - 3}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg w-fit pr-4">
                                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                      Topic: <span className="font-semibold">{session.topic}</span>
                                  </div>
                              </div>

                              <div className="flex items-center md:flex-col justify-center gap-2 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-4 md:pt-0 md:pl-4">
                                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                                      <CheckCircle2 className="w-4 h-4" /> Attendance
                                  </button>
                                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 hover:bg-slate-50 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 text-sm font-bold rounded-xl transition-all">
                                      <MoreVertical className="w-4 h-4" />
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

               {/* Performance Chart Area */}
               <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-white">Class Performance Trends</h3>
                      <select className="bg-slate-50 dark:bg-slate-900 border-none text-sm font-bold text-slate-600 dark:text-slate-300 rounded-xl px-3 py-2 cursor-pointer outline-none">
                          <option>This Week</option>
                          <option>Last Week</option>
                      </select>
                  </div>
                  <div className="h-64 w-full">
                       {/* This would be a recharts component in real implementation, using a placeholder for now to keep it lightweight if libs aren't fully set up, but I included the import. */}
                       <div className="flex items-end justify-between h-full gap-4 px-2">
                           {performanceData.map((d, i) => (
                               <div key={i} className="flex flex-col items-center gap-2 group w-full">
                                   <div className="w-full bg-indigo-50 dark:bg-indigo-900/20 rounded-t-xl relative h-48 overflow-hidden">
                                        <div 
                                            className="absolute bottom-0 left-0 right-0 bg-indigo-500/80 group-hover:bg-indigo-600 transition-all duration-500 rounded-t-xl"
                                            style={{ height: `${d.avg}%` }}
                                        ></div>
                                   </div>
                                   <span className="text-xs font-bold text-slate-400">{d.name}</span>
                               </div>
                           ))}
                       </div>
                  </div>
              </div>

          </div>

          {/* 3. Right Sidebar (Quick Actions & Notifications) */}
          <div className="space-y-8">
              
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-2xl shadow-indigo-600/30">
                  <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-all active:scale-95 group">
                          <Plus className="w-8 h-8 mb-2 text-indigo-100 group-hover:text-white" />
                          <span className="text-xs font-bold text-indigo-100">Add Assignment</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-all active:scale-95 group">
                          <MessageSquare className="w-8 h-8 mb-2 text-indigo-100 group-hover:text-white" />
                          <span className="text-xs font-bold text-indigo-100">Broadcast Msg</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-all active:scale-95 group">
                          <ClipboardList className="w-8 h-8 mb-2 text-indigo-100 group-hover:text-white" />
                          <span className="text-xs font-bold text-indigo-100">Create Report</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-all active:scale-95 group">
                          <Calendar className="w-8 h-8 mb-2 text-indigo-100 group-hover:text-white" />
                          <span className="text-xs font-bold text-indigo-100">Schedule Class</span>
                      </button>
                  </div>
              </div>

              {/* Pending Actions List */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-white">To Do List</h3>
                      <span className="bg-orange-100 text-orange-600 text-xs font-black px-2 py-1 rounded-lg">3 PENDING</span>
                  </div>
                  
                  <div className="space-y-4">
                      {[
                          { title: "Grading: Physics Mid-Term", due: "Due Today", type: "urgent" },
                          { title: "Approve Leave Requests", due: "2 Requests", type: "normal" },
                          { title: "Submit Monthly Report", due: "Tomorrow", type: "normal" }
                      ].map((task, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                               <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.type === 'urgent' ? 'border-orange-500' : 'border-slate-300'}`}>
                                   <div className={`w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity`} />
                               </div>
                               <div>
                                   <h4 className={`font-bold text-sm ${task.type === 'urgent' ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>{task.title}</h4>
                                   <p className="text-xs font-bold text-slate-400 mt-1">{task.due}</p>
                               </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Recent Submission */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                   <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-6">Recent Submissions</h3>
                   <div className="space-y-4">
                       {[1,2,3].map((n) => (
                           <div key={n} className="flex items-center gap-3">
                               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Student${n}`} className="w-10 h-10 rounded-full bg-slate-100" alt="" />
                               <div className="flex-1 min-w-0">
                                   <p className="font-bold text-sm text-slate-800 dark:text-white truncate">Sarah Miller</p>
                                   <p className="text-xs text-slate-400 truncate">Physics Assignment 3</p>
                               </div>
                               <button className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg hover:bg-indigo-100">
                                   Grade
                               </button>
                           </div>
                       ))}
                   </div>
                   <button className="w-full mt-6 py-3 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors border-t border-slate-100 dark:border-slate-700">
                       View all submissions
                   </button>
              </div>

          </div>
      </div>
    </div>
  );
}
