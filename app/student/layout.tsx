"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Home,
  BookOpen, 
  CalendarCheck, 
  CreditCard, 
  Library, 
  User, 
  LogOut, 
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
            <Link 
              href="/login"
              className="flex items-center justify-center gap-2 p-3 text-error hover:bg-error/10 hover:text-red-600 rounded-2xl transition-all w-full font-bold text-sm"
            >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
            </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[17rem] p-4 md:p-8 overflow-y-auto h-screen scrollbar-hide">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              
              {/* Left: Mobile Menu & Welcome */}
              <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden p-2 bg-secondary/10 rounded-xl text-text-secondary"
                  >
                      <Menu className="w-6 h-6" />
                  </button>
                  
                  <div>
                      <h2 className="text-xl font-bold text-text-primary">Welcome back, Alex! 👋</h2>
                      <p className="text-sm text-text-secondary hidden md:block">Here is what's happening with your academic life today.</p>
                  </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 md:gap-4 justify-end flex-1">
                  
                  {/* Search Bar */}
                  <div className="hidden lg:flex max-w-sm w-full relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-text-secondary/50 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input
                          type="text"
                          className="block w-full pl-10 pr-3 py-2.5 rounded-2xl bg-secondary/5 border-none dark:bg-card focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all font-medium placeholder:text-text-secondary/50"
                          placeholder="Search..."
                      />
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                      {/* Theme Toggle */}
                      <ThemeToggle />
                      
                      {/* Bell */}
                      <button className="p-2.5 rounded-xl hover:bg-secondary/10 text-text-secondary transition-colors relative">
                          <Bell className="w-5 h-5" />
                          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full ring-2 ring-background"></span>
                      </button>
                  </div>

                  {/* Profile Divider */}
                  <div className="hidden sm:block h-8 w-px bg-border mx-1"></div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3 pl-2">
                       <div className="text-right hidden sm:block">
                          <p className="text-sm font-bold text-text-primary">Alex Johnson</p>
                          <p className="text-xs text-text-secondary font-medium">Class 12-A</p>
                       </div>
                       <Link href="/student/profile" className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 shrink-0 cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                              AJ
                            </div>
                       </Link>
                  </div>

              </div>
          </header>

          {children}
      </main>
    </div>
  );
}
