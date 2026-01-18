"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Calendar, 
  Trophy, 
  Download, 
  ChevronRight,
  Target,
  Clock,
  AlertCircle
} from "lucide-react";

export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState("schedule");

  // Mock Data: Exam Schedule
  const examSchedule = [
    {
      id: 1,
      subject: "Mathematics",
      code: "MTH-101",
      date: "2024-03-15",
      time: "09:00 AM - 12:00 PM",
      room: "Hall A",
      syllabus: "Chapter 1 to 10",
      status: "upcoming"
    },
    {
      id: 2,
      subject: "Physics",
      code: "PHY-101",
      date: "2024-03-17",
      time: "09:00 AM - 12:00 PM",
      room: "Hall B",
      syllabus: "Motion, Force, Energy",
      status: "upcoming"
    },
    {
      id: 3,
      subject: "Chemistry",
      code: "CHM-101",
      date: "2024-03-19",
      time: "09:00 AM - 12:00 PM",
      room: "Lab 2",
      syllabus: "Organic Chemistry Basics",
      status: "upcoming"
    },
    {
      id: 4,
      subject: "Computer Science",
      code: "CS-101",
      date: "2024-03-21",
      time: "10:00 AM - 01:00 PM",
      room: "Computer Lab",
      syllabus: "Programming in Python",
      status: "upcoming"
    }
  ];

  // Mock Data: Results
  const results = [
    {
      id: 1,
      examName: "Mid-Term Examination 2023",
      date: "Oct 2023",
      grade: "A",
      percentage: "88%",
      remarks: "Excellent performance",
      subjects: [
        { name: "Mathematics", marks: 92, total: 100, grade: "A+" },
        { name: "Physics", marks: 85, total: 100, grade: "A" },
        { name: "Chemistry", marks: 78, total: 100, grade: "B+" },
        { name: "English", marks: 88, total: 100, grade: "A" },
        { name: "Computer Science", marks: 95, total: 100, grade: "A+" },
      ]
    },
    {
      id: 2,
      examName: "Unit Test I",
      date: "Aug 2023",
      grade: "B+",
      percentage: "79%",
      remarks: "Good, needs improvement in Chemistry",
      subjects: [
        { name: "Mathematics", marks: 40, total: 50, grade: "A" },
        { name: "Physics", marks: 38, total: 50, grade: "B+" },
        { name: "Chemistry", marks: 32, total: 50, grade: "B" },
        { name: "English", marks: 45, total: 50, grade: "A+" },
        { name: "Computer Science", marks: 48, total: 50, grade: "A+" },
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Exams & Results</h1>
          <p className="text-gray-500">View your exam schedules and download report cards</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Admit Card</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === "schedule"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Exam Schedule
        </button>
        <button
          onClick={() => setActiveTab("results")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === "results"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Results History
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "schedule" ? (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg dark:bg-orange-900/50 dark:text-orange-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Next Exam</p>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Mathematics</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>09:00 AM (3 Hours)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>Hall A • Seat 42</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-card dark:border-border">
              <div className="p-6 border-b border-gray-100 dark:border-border">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Annual Examination Date Sheet</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium dark:bg-muted/50 dark:text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4">Subject</th>
                      <th className="px-6 py-4">Date & Time</th>
                      <th className="px-6 py-4">Room No</th>
                      <th className="px-6 py-4">Syllabus</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-border">
                    {examSchedule.map((exam) => (
                      <tr key={exam.id} className="hover:bg-gray-50 transition-colors dark:hover:bg-muted/30">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">{exam.subject}</p>
                            <span className="text-xs text-gray-500">{exam.code}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{exam.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{exam.time}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-secondary dark:text-secondary-foreground">
                            {exam.room}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {exam.syllabus}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            Upcoming
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((result) => (
              <div 
                key={result.id} 
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-card dark:border-border"
              >
                <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 dark:border-border dark:bg-muted/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-xl dark:bg-green-900/30 dark:text-green-400">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{result.examName}</h3>
                      <p className="text-sm text-gray-500">Declared on {result.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Percentage</p>
                      <p className="font-bold text-gray-900 dark:text-gray-100">{result.percentage}</p>
                    </div>
                    <div className="h-10 w-px bg-gray-200 dark:bg-border"></div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Grade</p>
                      <p className="font-bold text-green-600 dark:text-green-400">{result.grade}</p>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors ml-2">
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 dark:text-gray-100">Subject-wise Breakdown</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {result.subjects.map((sub, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50/50 dark:bg-muted/20 dark:border-border/50">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{sub.name}</p>
                          <p className="text-xs text-gray-500">Max: {sub.total}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900 dark:text-gray-100">{sub.marks}</p>
                          <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                            sub.grade.startsWith('A') 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {sub.grade}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-border">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">Remarks: </span>
                      {result.remarks}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
