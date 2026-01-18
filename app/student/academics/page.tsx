"use client";

import { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  User, 
  FileText, 
  CheckCircle2, 
  Circle,
  Download
} from 'lucide-react';

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<'timetable' | 'subjects' | 'homework'>('timetable');

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row  items-start md:items-center gap-4">
        <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <TabButton active={activeTab === 'timetable'} onClick={() => setActiveTab('timetable')} label="Timetable" />
            <TabButton active={activeTab === 'subjects'} onClick={() => setActiveTab('subjects')} label="Subjects & Syllabus" />
            <TabButton active={activeTab === 'homework'} onClick={() => setActiveTab('homework')} label="Homework" />
        </div>
      </div>

      {activeTab === 'timetable' && <TimetableView />}
      {activeTab === 'subjects' && <SubjectsView />}
      {activeTab === 'homework' && <HomeworkView />}

    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
    return (
        <button 
            onClick={onClick}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                active 
                ? 'bg-primary text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
        >
            {label}
        </button>
    )
}

function TimetableView() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const periods = [
        { time: "08:30 - 09:30", mon: "Maths", Tue: "Physics", Wed: "English", Thu: "Maths", Fri: "History" },
        { time: "09:30 - 10:30", mon: "English", Tue: "Chemistry", Wed: "Maths", Thu: "Biology", Fri: "Geography" },
        { time: "10:30 - 11:00", type: "break", label: "Morning Break" },
        { time: "11:00 - 12:00", mon: "Physics", Tue: "Biology", Wed: "Computer", Thu: "English", Fri: "Maths" },
        { time: "12:00 - 01:00", mon: "History", Tue: "Maths", Wed: "Physics", Thu: "Library", Fri: "Sports" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 dark:text-white">Class 10-A Weekly Schedule</h3>
                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
                    <Download className="w-4 h-4" /> Download PDF
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-6 py-4 font-bold">Time Slot</th>
                            {days.map(d => <th key={d} className="px-6 py-4 font-bold">{d}</th>)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {periods.map((period: any, i) => (
                            <tr key={i} className={period.type === 'break' ? 'bg-orange-50/50 dark:bg-orange-900/10' : ''}>
                                <td className="px-6 py-4 font-bold md:whitespace-nowrap flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                    <Clock className="w-4 h-4 opacity-70" /> {period.time}
                                </td>
                                {period.type === 'break' ? (
                                    <td colSpan={5} className="px-6 py-4 text-center font-bold text-orange-600 dark:text-orange-400 tracking-wider text-xs uppercase">
                                        ☕ {period.label}
                                    </td>
                                ) : (
                                    days.map(d => {
                                        const subject = period[d.substring(0, 3)] || period[d];
                                        return (
                                            <td key={d} className="px-6 py-4">
                                                <div className={`inline-block px-3 py-1 rounded-lg font-bold text-xs ${
                                                    subject === 'Maths' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                    subject === 'Physics' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                                                    subject === 'Sports' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                                                }`}>
                                                    {subject}
                                                </div>
                                            </td>
                                        )
                                    })
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function SubjectsView() {
    const subjects = [
        { name: "Mathematics", teacher: "Mr. David Chen", progress: 75, grade: "A", topics: "Calculus, Algebra, Geometry" },
        { name: "Physics", teacher: "Prof. James Alistair", progress: 60, grade: "B+", topics: "Mechanics, Optics, Thermodynamics" },
        { name: "English Literature", teacher: "Mrs. Sarah Mitchell", progress: 90, grade: "A+", topics: "Shakespeare, Modern Poetry" },
        { name: "Computer Science", teacher: "Ms. Tech Lead", progress: 45, grade: "A", topics: "Python, Algorithms, Web Dev" },
        { name: "History", teacher: "Mr. History Guy", progress: 85, grade: "A-", topics: "World Wars, Industrial Revolution" },
        { name: "Chemistry", teacher: "Dr. Chemist", progress: 70, grade: "B", topics: "Bonding, Periodic Table" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((sub, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                            {sub.name[0]}
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Current Grade</span>
                            <span className={`text-xl font-black ${
                                sub.grade.startsWith('A') ? 'text-green-600' : 
                                sub.grade.startsWith('B') ? 'text-blue-600' : 'text-orange-600'
                            }`}>{sub.grade}</span>
                        </div>
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{sub.name}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mb-6">
                        <User className="w-3 h-3" /> {sub.teacher}
                    </p>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-500">
                            <span>Syllabus Completion</span>
                            <span>{sub.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${sub.progress}%` }}></div>
                        </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                        <p className="text-xs text-slate-400 mb-1 font-bold uppercase">Current Topics</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-1">{sub.topics}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function HomeworkView() {
    const assignments = [
        { title: "Lab Report: Optics Analysis", subject: "Physics", assigned: "17 Jan", due: "20 Jan", status: "pending" },
        { title: "Essay: Macbeth's Ambition", subject: "English", assigned: "15 Jan", due: "22 Jan", status: "pending" },
        { title: "Chapter 5: Quadratic Equations", subject: "Maths", assigned: "10 Jan", due: "15 Jan", status: "submitted" },
        { title: "World War II Timeline", subject: "History", assigned: "05 Jan", due: "12 Jan", status: "graded" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {assignments.map((task, i) => (
                    <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 ${
                                task.status === 'pending' ? 'border-orange-200 bg-orange-50 text-orange-600' :
                                task.status === 'submitted' ? 'border-blue-200 bg-blue-50 text-blue-600' :
                                'border-green-200 bg-green-50 text-green-600'
                            }`}>
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">{task.title}</h4>
                                <div className="flex flex-wrap gap-4 mt-1 text-sm text-slate-500">
                                    <span className="font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">{task.subject}</span>
                                    <span>Assigned: {task.assigned}</span>
                                    <span className="text-red-500 font-medium">Due: {task.due}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            {task.status === 'pending' ? (
                                <button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-slate-900/20">
                                    Upload Work
                                </button>
                            ) : task.status === 'submitted' ? (
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-xl font-bold text-sm">
                                    <CheckCircle2 className="w-4 h-4" /> Submitted
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-xl font-bold text-sm">
                                    <CheckCircle2 className="w-4 h-4" /> Graded (A)
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
