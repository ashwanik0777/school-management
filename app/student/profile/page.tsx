"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield,
  BookOpen,
  Award,
  Edit2,
  Camera,
  GraduationCap,
  Sparkles,
  Activity,
  Droplets,
  Fingerprint,
  Heart,
  Share2,
  Download
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const student = {
    name: "Alex Johnson",
    rollNo: "12-A-24",
    class: "XII - Sci",
    section: "A",
    admissionNo: "ADM-2022-001",
    email: "alex.johnson@school.edu",
    phone: "+1 (555) 000-0000",
    dob: "15 Aug 2006",
    bloodGroup: "O+",
    address: "123 School Lane, Education City, ST 12345",
    fatherName: "Robert Johnson",
    motherName: "Sarah Johnson",
    emergencyContact: "+1 (555) 999-9999",
    house: "Red House (Mars)",
    bio: "Aspiring computer scientist with a passion for AI and robotics. Debate team captain and science club secretary.",
    stats: {
      attendance: "94%",
      gpa: "3.8",
      rank: "#5",
      points: "1,250"
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. Modern Header Banner */}
      <div className="relative group rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-800">
        {/* Banner Cover - Gradient Mesh */}
        <div className="h-48 md:h-64 w-full bg-[#ff9a9e] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#fad0c4] via-[#ffd1ff] to-[#a18cd1] relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
            <div className="absolute top-0 right-0 p-10 opacity-30 transform translate-x-10 -translate-y-10">
               <Sparkles className="w-40 h-40 text-white" />
            </div>
            
            {/* Action Buttons Top Right */}
            <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl text-white transition-all shadow-sm ring-1 ring-white/30">
                    <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl text-white transition-all shadow-sm ring-1 ring-white/30">
                    <Edit2 className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Profile Info Overlay */}
        <div className="px-6 md:px-10 pb-8">
            <div className="flex flex-col md:flex-row gap-6 relative">
                
                {/* Avatar */}
                <div className="-mt-20 md:-mt-24 relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-white dark:bg-gray-800 p-2 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-300">
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700">
                            <img 
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <button className="absolute bottom-2 right-2 p-2.5 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-110 transition-all ring-4 ring-white dark:ring-gray-800">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>

                {/* Name & Basic Badge */}
                <div className="flex-1 mt-2 md:mt-4 md:ml-4">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-wider dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                    Student
                                </span>
                                <span className="px-3 py-1 rounded-full bg-purple-100/50 text-purple-700 text-xs font-bold uppercase tracking-wider dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                    {student.house}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white tracking-tight mb-2">
                                {student.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <GraduationCap className="w-5 h-5" />
                                    {student.class}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                <span>Roll No: {student.rollNo}</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-3">
                           <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
                                <Download className="w-4 h-4" />
                                <span>Download ID</span>
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Personal Stats & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8 hidden lg:block">
              
              {/* Stats Card */}
              <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-500" />
                      Academic Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-3xl bg-blue-50/50 dark:bg-blue-900/10 text-center border border-blue-100 dark:border-blue-900/20">
                          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-1">{student.stats.attendance}</div>
                          <div className="text-[10px] font-bold text-blue-600/60 uppercase tracking-widest">Attendance</div>
                      </div>
                      <div className="p-4 rounded-3xl bg-green-50/50 dark:bg-green-900/10 text-center border border-green-100 dark:border-green-900/20">
                          <div className="text-2xl font-black text-green-600 dark:text-green-400 mb-1">{student.stats.gpa}</div>
                          <div className="text-[10px] font-bold text-green-600/60 uppercase tracking-widest">GPA</div>
                      </div>
                      <div className="p-4 rounded-3xl bg-purple-50/50 dark:bg-purple-900/10 text-center border border-purple-100 dark:border-purple-900/20">
                          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mb-1">{student.stats.rank}</div>
                          <div className="text-[10px] font-bold text-purple-600/60 uppercase tracking-widest">Rank</div>
                      </div>
                       <div className="p-4 rounded-3xl bg-orange-50/50 dark:bg-orange-900/10 text-center border border-orange-100 dark:border-orange-900/20">
                          <div className="text-2xl font-black text-orange-600 dark:text-orange-400 mb-1">{student.stats.points}</div>
                          <div className="text-[10px] font-bold text-orange-600/60 uppercase tracking-widest">Points</div>
                      </div>
                  </div>
              </div>

              {/* Personal Details */}
              <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                      <Fingerprint className="w-5 h-5 text-purple-500" />
                      About Info
                  </h3>
                  
                  <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors border border-gray-100 dark:border-gray-700">
                              <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Date of Birth</p>
                              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{student.dob}</p>
                          </div>
                      </div>

                      <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors border border-gray-100 dark:border-gray-700">
                              <Droplets className="w-5 h-5" />
                          </div>
                          <div>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Blood Group</p>
                              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{student.bloodGroup}</p>
                          </div>
                      </div>

                      <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500 transition-colors border border-gray-100 dark:border-gray-700">
                              <Shield className="w-5 h-5" />
                          </div>
                          <div>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Admission ID</p>
                              <p className="text-base font-bold text-gray-700 dark:text-gray-200">{student.admissionNo}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column - Tabs & Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
              
               {/* Bio Card */}
               <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                       <User className="w-48 h-48" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">About Me</h3>
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium">
                       "{student.bio}"
                   </p>
               </div>
               
               {/* Contact & Family Info */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-green-500" />
                            Contact Details
                        </h3>
                        <div className="space-y-4 flex-1">
                            <div className="p-4 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-200 transition-colors group">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                                <p className="text-sm font-bold text-gray-800 dark:text-white truncate group-hover:text-blue-600 transition-colors">{student.email}</p>
                            </div>
                            <div className="p-4 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-green-200 transition-colors group">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                                <p className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors">{student.phone}</p>
                            </div>
                             <div className="p-4 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                                <p className="text-sm font-bold text-gray-800 dark:text-white">{student.address}</p>
                            </div>
                        </div>
                   </div>

                   <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-pink-500" />
                            Family Info
                        </h3>
                        <div className="space-y-6 flex-1">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-lg ring-4 ring-blue-50 dark:ring-blue-900/10">F</div>
                                <div>
                                    <p className="text-base font-bold text-gray-800 dark:text-white">{student.fatherName}</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Father</p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-gray-700/50 border-t border-dashed"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 font-black text-lg ring-4 ring-pink-50 dark:ring-pink-900/10">M</div>
                                <div>
                                    <p className="text-base font-bold text-gray-800 dark:text-white">{student.motherName}</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Mother</p>
                                </div>
                            </div>
                            <div className="mt-auto pt-6">
                               <div className="p-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm font-bold rounded-2xl flex items-center gap-3 border border-red-100 dark:border-red-900/20">
                                  <div className="p-2 bg-red-200 dark:bg-red-800/30 rounded-full">
                                    <Phone className="w-4 h-4" /> 
                                  </div>
                                  <div>
                                      <p className="text-[10px] uppercase tracking-wide opacity-70">Emergency Contact</p>
                                      <p>{student.emergencyContact}</p>
                                  </div>
                               </div>
                            </div>
                        </div>
                   </div>
               </div>

          </div>

      </div>
    </div>
  );
}
