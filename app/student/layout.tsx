"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home,
  BookOpen, 
  CalendarCheck, 
  CreditCard, 
  Library, 
  User, 
  LogOut, 
  Settings,
  Menu,
  X,
  GraduationCap,
  Bell,
  Search
} from 'lucide-react';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/student' },
    { name: 'Academics', icon: BookOpen, href: '/student/academics' },
    { name: 'Attendance', icon: CalendarCheck, href: '/student/attendance' },
    { name: 'Fees & Payments', icon: CreditCard, href: '/student/fees' },
    { name: 'Library', icon: Library, href: '/student/library' },
    { name: 'Exams & Result', icon: GraduationCap, href: '/student/exams' },
    { name: 'My Profile', icon: User, href: '/student/profile' },
  ];

  return (
    <div className="min-h-screen bg-background flex font-sans text-text-primary overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 m-4 rounded-3xl bg-secondary/10 dark:bg-card border border-border shadow-2xl backdrop-blur-xl transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[110%] md:translate-x-0'}
      `}>
        {/* Logo Area */}
         <div className="p-8 pb-4 flex justify-between items-center">
             <div className="flex flex-col gap-1">
                 <h1 className="text-2xl font-black text-primary tracking-tight">EDUBALANCE</h1>
                 <p className="text-xs font-medium text-text-secondary uppercase tracking-widest pl-0.5">Student Portal</p>
             </div>
             <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-text-secondary hover:text-primary">
               <X className="w-6 h-6" />
             </button>
         </div>
        
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-hide">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'text-text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                <div className="flex items-center gap-3">
                   <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-text-secondary group-hover:text-primary'}`} />
                   <span>{item.name}</span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 mt-auto">
            <div className="flex items-center justify-between p-3 bg-secondary/20 dark:bg-black/20 border border-border/50 rounded-2xl">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 shrink-0">
                         <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                           AJ
                         </div>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-text-primary truncate">Alex Johnson</span>
                        <span className="text-[10px] uppercase font-semibold text-text-secondary/80 truncate">Class 12-A</span>
                    </div>
                </div>
                
                <Link 
                  href="/login"
                  className="p-2 text-text-secondary hover:text-error hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all shrink-0"
                >
                    <LogOut className="w-5 h-5" />
                </Link>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[17rem] p-4 md:p-8 overflow-y-auto h-screen scrollbar-hide">
          {/* Header (Search & Actions) */}
          <header className="flex items-center justify-between gap-4 mb-8">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 bg-secondary/10 rounded-xl text-text-secondary"
              >
                  <Menu className="w-6 h-6" />
              </button>

              <div className="hidden md:flex flex-1 max-w-xl relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-text-secondary/50 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 rounded-2xl bg-secondary/5 border-none dark:bg-card focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all font-medium placeholder:text-text-secondary/50"
                      placeholder="Search for assignments, subjects..."
                  />
              </div>

              <div className="flex items-center gap-3">
                  <button className="p-3 rounded-2xl hover:bg-secondary/10 text-text-secondary transition-colors relative">
                      <Bell className="w-6 h-6" />
                      <span className="absolute top-3 right-3 w-2 h-2 bg-error rounded-full ring-2 ring-background"></span>
                  </button>
                  <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                      <CreditCard className="w-4 h-4" />
                      <span>Pay Fees</span>
                  </button>
              </div>
          </header>

          {children}
      </main>
    </div>
  );
}
