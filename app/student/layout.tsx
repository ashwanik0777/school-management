"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
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
  Search,
  Sun,
  Moon,
  Settings
} from 'lucide-react';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/student' },
    { name: 'Academics', icon: BookOpen, href: '/student/academics' },
    { name: 'Attendance', icon: CalendarCheck, href: '/student/attendance' },
    { name: 'Fees & Payments', icon: CreditCard, href: '/student/fees' },
    { name: 'Library', icon: Library, href: '/student/library' },
    { name: 'Exams & Result', icon: GraduationCap, href: '/student/exams' },
    { name: 'My Profile', icon: User, href: '/student/profile' },
    { name: 'Settings', icon: Settings, href: '/student/settings' },
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
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm group cursor-pointer">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 border-2 border-white dark:border-slate-600 shadow-sm relative">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                </div>
                
                {/* User Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white truncate group-hover:text-blue-600 transition-colors">
                        Alex Johnson
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Student
                    </p>
                </div>

                {/* Logout Button */}
                <Link 
                  href="/login"
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  aria-label="Logout"
                >
                    <LogOut className="w-5 h-5" />
                </Link>
            </div>
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
                      <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                        Hello, Alex! <span className="animate-wave inline-block origin-[70%_70%]">👋</span>
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Welcome back to your control center.</p>
                  </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 md:gap-4 justify-end flex-1">
                  
                  {/* Search Bar */}
                  <div className="hidden lg:flex max-w-sm w-full relative group">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      </div>
                      <input
                          type="text"
                          className="block w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
                          placeholder="Search..."
                      />
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                      {/* Theme Toggle */}
                      <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 relative overflow-hidden group"
                        aria-label="Toggle theme"
                      >
                         <div className="relative w-5 h-5">
                            <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                            <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
                         </div>
                      </button>
                      
                      {/* Bell */}
                      <button className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 relative group">
                          <Bell className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                          <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-800"></span>
                      </button>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3 pl-2">
                       <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border-l border-slate-100 dark:border-slate-700 rounded-2xl p-1.5 pr-5 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                           <Link href="/student/profile" className="w-10 h-10 rounded-full shrink-0 bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                                <img 
                                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                                  alt="Alex"
                                  className="w-full h-full object-cover"
                                />
                           </Link>
                           <div className="hidden sm:block">
                              <p className="text-sm font-bold text-slate-800 dark:text-white leading-none group-hover:text-blue-500 transition-colors">Alex Johnson</p>
                              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">Class 12-A</p>
                           </div>
                       </div>
                  </div>

              </div>
          </header>

          {children}
      </main>
    </div>
  );
}
