"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  MessageSquare,
  Settings,
  LogOut, 
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Bell,
  ClipboardList
} from 'lucide-react';

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/faculty' },
    { name: 'My Classes', icon: Users, href: '/faculty/classes' },
    { name: 'Attendance', icon: CalendarCheck, href: '/faculty/attendance' },
    { name: 'Assignments', icon: ClipboardList, href: '/faculty/assignments' },
    { name: 'Gradebook', icon: GraduationCap, href: '/faculty/grades' },
    { name: 'Schedule', icon: Calendar, href: '/faculty/schedule' },
    { name: 'Messages', icon: MessageSquare, href: '/faculty/messages' },
    { name: 'Settings', icon: Settings, href: '/faculty/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 m-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[110%] md:translate-x-0'}
      `}>
        {/* Logo Area */}
         <div className="p-8 pb-4 flex justify-between items-center">
             <div className="flex flex-col gap-1">
                 <h1 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">EDUBALANCE</h1>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-0.5">Faculty Portal</p>
             </div>
             <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-slate-400 hover:text-indigo-600">
               <X className="w-6 h-6" />
             </button>
         </div>
        
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-hide">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center justify-between px-5 py-3.5 text-sm font-bold rounded-2xl transition-all duration-200 
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 translate-x-1' 
                    : 'text-slate-500 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
              >
                <div className="flex items-center gap-3.5">
                   <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'}`} />
                   <span>{item.name}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </Link>
            )
          })}
        </div>

        {/* Bottom Actions (Profile) */}
        <div className="p-4 mt-auto">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-900 shadow-sm group cursor-pointer">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/40 overflow-hidden shrink-0 border-2 border-white dark:border-slate-600 shadow-sm relative">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=ProfessorX&clothing=blazerAndShirt&top=shortHair" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                </div>
                
                {/* User Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white truncate group-hover:text-indigo-600 transition-colors">
                        Prof. Albus D.
                    </h4>
                    <p className="text-[10px] font-bold text-indigo-500/80 uppercase tracking-widest">
                        Faculty Head
                    </p>
                </div>

                {/* Logout Button */}
                <Link 
                  href="/login"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  aria-label="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </Link>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[20rem] p-4 md:p-8 overflow-y-auto h-screen scrollbar-hide">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              
              {/* Left: Mobile Menu & Breadcrumbs */}
              <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden p-2 bg-white dark:bg-slate-800 rounded-xl text-slate-500 shadow-sm border border-slate-200 dark:border-slate-700"
                  >
                      <Menu className="w-6 h-6" />
                  </button>
                  
                  <div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                        Good Morning! <span className="animate-pulse">☀️</span>
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">You have <span className="text-indigo-600 font-bold">3 classes</span> scheduled for today.</p>
                  </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3 md:gap-4 justify-end">
                  
                  {/* Search Bar */}
                  <div className="hidden lg:flex max-w-xs w-full relative group">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                          <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                      <input
                          type="text"
                          className="block w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold placeholder:text-slate-400 text-sm"
                          placeholder="Search students, classes..."
                      />
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                      {/* Theme Toggle */}
                      <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 relative overflow-hidden group"
                        aria-label="Toggle theme"
                      >
                         <div className="relative w-5 h-5">
                            <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                            <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-500" />
                         </div>
                      </button>
                      
                      {/* Bell */}
                      <button className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 relative group">
                          <Bell className="w-5 h-5 group-hover:text-indigo-500 transition-colors" />
                          <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-800"></span>
                      </button>
                  </div>
              </div>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
      </main>
    </div>
  );
}
