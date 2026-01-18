"use client";

import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Book,
  MoreVertical,
  ArrowRight,
  User,
  MoreHorizontal,
  BookOpen
} from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      
      {/* 1. Subjects/Performance Section (Matching 'Your Courses') */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary">My Subjects</h3>
          <button className="p-2 hover:bg-card rounded-full transition-colors text-text-secondary">
             <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Card 1 - Mathematics */}
           <div className="p-6 rounded-3xl bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30 relative overflow-hidden group hover:shadow-lg transition-all">
               <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-white dark:bg-pink-900/50 rounded-2xl shadow-sm text-pink-500">
                       <BookOpen className="w-6 h-6" />
                   </div>
                   <div className="w-16 h-16 bg-pink-200/50 rounded-full blur-2xl absolute -top-4 -right-4"></div>
               </div>
               <h4 className="text-xl font-bold text-gray-800 dark:text-pink-100 mb-1">Mathematics</h4>
               <p className="text-sm text-gray-500 dark:text-pink-300/80 mb-6">Advanced Algebra & Calculus</p>
               
               <div className="flex items-end justify-between">
                   <div className="flex -space-x-2">
                       {/* Mock student avatars or indicators */}
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-pink-500 border-2 border-pink-50">95%</div>
                       <span className="text-xs font-medium text-pink-600 self-center pl-3">Attendance</span>
                   </div>
                   <div className="text-right">
                       <span className="text-2xl font-black text-pink-500">A+</span>
                       <div className="w-24 h-1.5 bg-white dark:bg-pink-900/50 rounded-full mt-1 overflow-hidden">
                           <div className="h-full bg-pink-500 w-[95%] rounded-full"></div>
                       </div>
                   </div>
               </div>
           </div>

           {/* Card 2 - Science */}
            <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden group hover:shadow-lg transition-all">
               <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-white dark:bg-blue-900/50 rounded-2xl shadow-sm text-blue-500">
                       <TrendingUp className="w-6 h-6" />
                   </div>
                   {/* Decorative Stripes */}
                   <div className="absolute top-4 right-4 flex gap-1">
                       <div className="w-1 h-8 bg-blue-200/50 rotate-12 rounded"></div>
                       <div className="w-1 h-8 bg-blue-200/50 rotate-12 rounded"></div>
                   </div>
               </div>
               <h4 className="text-xl font-bold text-gray-800 dark:text-blue-100 mb-1">Physics Lab</h4>
               <p className="text-sm text-gray-500 dark:text-blue-300/80 mb-6">Applied Physics & Mechanics</p>
               
               <div className="flex items-end justify-between">
                   <div className="flex -space-x-3">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-blue-500 border-2 border-blue-50">88%</div>
                       <span className="text-xs font-medium text-blue-600 self-center pl-5">Attendance</span>
                   </div>
                   <div className="text-right">
                       <span className="text-2xl font-black text-blue-500">A</span>
                       <div className="w-24 h-1.5 bg-white dark:bg-blue-900/50 rounded-full mt-1 overflow-hidden">
                           <div className="h-full bg-blue-500 w-[88%] rounded-full"></div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* 2. Middle Row: Schedule & Notices */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Today's Schedule */}
          <div className="lg:col-span-1 bg-card border border-border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-text-primary">Today's Schedule</h3>
                <div className="flex gap-2 text-text-secondary">
                    <button className="hover:text-primary"><Clock className="w-4 h-4" /></button>
                </div>
              </div>
              
              <div className="space-y-4">
                  <div className="p-4 bg-background rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors cursor-pointer border border-border/50">
                      <div>
                          <p className="text-xs text-text-secondary mb-1">08:30 AM</p>
                          <h4 className="font-bold text-text-primary text-sm group-hover:text-primary">Mathematics</h4>
                          <span className="text-xs text-text-secondary">Room 302</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                   <div className="p-4 bg-primary/5 rounded-2xl flex items-center justify-between group border border-primary/10">
                       <div>
                          <p className="text-xs text-text-secondary mb-1">09:30 AM</p>
                          <h4 className="font-bold text-text-primary text-sm text-primary">English Lit (Ongoing)</h4>
                          <span className="text-xs text-text-secondary">Room 205</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                   </div>
                   <div className="p-4 bg-background rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors cursor-pointer border border-border/50">
                       <div>
                          <p className="text-xs text-text-secondary mb-1">10:45 AM</p>
                          <h4 className="font-bold text-text-primary text-sm group-hover:text-primary">Physics Lab</h4>
                          <span className="text-xs text-text-secondary">Lab 2</span>
                      </div>
                      <Clock className="w-4 h-4 text-text-secondary" />
                   </div>
              </div>
          </div>

          {/* Right: Notices & Stats */}
          <div className="lg:col-span-2 space-y-6">
               {/* Quick Stats Row */}
               <div className="grid grid-cols-2 gap-4">
                   <div className="p-5 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/20">
                       <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-white rounded-xl text-purple-600 shadow-sm"><AlertCircle className="w-5 h-5" /></div>
                           <span className="text-sm font-bold text-purple-900 dark:text-purple-200">Fees Due</span>
                       </div>
                       <p className="text-2xl font-black text-purple-600">₹ 5,000</p>
                       <p className="text-xs text-purple-400 mt-1">Due by 30th Jan</p>
                   </div>
                   <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-100 dark:border-orange-900/20">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-white rounded-xl text-orange-600 shadow-sm"><Book className="w-5 h-5" /></div>
                           <span className="text-sm font-bold text-orange-900 dark:text-orange-200">Library</span>
                       </div>
                       <p className="text-2xl font-black text-orange-600">2 Books</p>
                       <p className="text-xs text-orange-400 mt-1">1 Overdue</p>
                   </div>
               </div>

               {/* Notice Board */}
               <div className="bg-card border border-border rounded-3xl p-6 shadow-sm h-min">
                   <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-text-primary">Notice Board</h3>
                        <button className="text-xs font-bold text-primary hover:underline">View All</button>
                   </div>
                   <div className="space-y-4">
                        <div className="flex gap-4 items-center p-3 hover:bg-secondary/5 rounded-2xl transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex flex-col items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold uppercase text-text-secondary">Jan</span>
                                <span className="text-lg font-black text-text-primary">18</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-primary text-sm line-clamp-1">School closed tomorrow due to rain</h4>
                                <p className="text-xs text-text-secondary mt-0.5">By Admin • Urgent</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center p-3 hover:bg-secondary/5 rounded-2xl transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex flex-col items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold uppercase text-text-secondary">Jan</span>
                                <span className="text-lg font-black text-text-primary">15</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-primary text-sm line-clamp-1">Sports Day Registration Open</h4>
                                <p className="text-xs text-text-secondary mt-0.5">By Sports Dept • Info</p>
                            </div>
                        </div>
                   </div>
               </div>
          </div>
      </section>

    </div>
  );
}
