"use client";

import React from "react";
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
  Camera
} from "lucide-react";

export default function ProfilePage() {
  const student = {
    name: "Alex Johnson",
    rollNo: "12-A-24",
    class: "Class 12 - Section A",
    admissionNo: "ADM-2022-001",
    email: "alex.johnson@school.edu",
    phone: "+1 (555) 000-0000",
    dob: "15 Aug 2006",
    bloodGroup: "O+",
    address: "123 School Lane, Education City, ST 12345",
    fatherName: "Robert Johnson",
    motherName: "Sarah Johnson",
    emergencyContact: "+1 (555) 999-9999",
    house: "Red House (Mars)"
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden dark:bg-card dark:border-border">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-primary/80 to-primary/40 relative">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg dark:bg-card">
                <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-muted">
                    {/* Placeholder Avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                        AJ
                    </div>
                </div>
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-white text-gray-600 rounded-full shadow-md border border-gray-200 hover:text-primary transition-colors dark:bg-card dark:border-border dark:text-gray-400">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm dark:bg-card dark:border-border dark:text-gray-300 dark:hover:bg-muted">
              <Edit2 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{student.name}</h1>
            <p className="text-gray-500">{student.class} • Roll No: {student.rollNo}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Quick Info */}
        <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 dark:bg-card dark:border-border">
                <h3 className="font-semibold text-gray-900 mb-4 dark:text-gray-100">Quick Information</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg dark:bg-blue-900/20 dark:text-blue-400">
                            <Mail className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Email Address</p>
                            <p className="text-gray-900 font-medium dark:text-gray-200">{student.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg dark:bg-green-900/20 dark:text-green-400">
                            <Phone className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Phone Number</p>
                            <p className="text-gray-900 font-medium dark:text-gray-200">{student.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg dark:bg-purple-900/20 dark:text-purple-400">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Date of Birth</p>
                            <p className="text-gray-900 font-medium dark:text-gray-200">{student.dob}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Stats Summary Mock */}
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-sm p-6 text-white">
                <h3 className="font-semibold mb-4">Academic Status</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                        <p className="text-xs text-white/60">Attendance</p>
                        <p className="text-xl font-bold">92%</p>
                    </div>
                     <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                        <p className="text-xs text-white/60">Avg Grade</p>
                        <p className="text-xl font-bold">A</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* General Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-card dark:border-border">
                <div className="p-4 border-b border-gray-100 flex items-center gap-2 dark:border-border">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Personal Details</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Full Name</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.name}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Admission Number</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.admissionNo}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Father's Name</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.fatherName}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Mother's Name</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.motherName}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Blood Group</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.bloodGroup}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">House</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.house}</p>
                    </div>
                </div>
            </div>

            {/* Address */}
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-card dark:border-border">
                <div className="p-4 border-b border-gray-100 flex items-center gap-2 dark:border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Address & Emergency</h3>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Permanent Address</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.address}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Emergency Contact</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">{student.emergencyContact}</p>
                    </div>
                </div>
            </div>

            {/* School Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-card dark:border-border">
                <div className="p-4 border-b border-gray-100 flex items-center gap-2 dark:border-border">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">School Information</h3>
                </div>
                 <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                     <div>
                        <p className="text-sm text-gray-500 mb-1">Class Teacher</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">Mrs. Anderson</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-1">House Master</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">Mr. Wilson</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Transport Route</p>
                        <p className="font-medium text-gray-900 dark:text-gray-200">Route 12 (Bus B-4)</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
