import Link from 'next/link';
import { 
  Home,
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Users,
  Bell,
  LogOut,
  Settings,
  Search
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: 'Home', icon: Home, href: '/dashboard' },
    { name: 'Homework', icon: BookOpen, href: '/dashboard/materials' },
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard/reports' }, 
    { name: 'Chat', icon: MessageSquare, href: '/dashboard/communication', badge: 2 },
    { name: 'Students', icon: Users, href: '/dashboard/users' },
    { name: 'Notifications', icon: Bell, href: '/dashboard/communication', badge: 7 },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-background flex font-sans text-text-primary">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col fixed h-full z-10 m-4 rounded-3xl bg-secondary/10 dark:bg-card border border-border shadow-sm backdrop-blur-sm">
        {/* Logo Area */}
         <div className="p-8 pb-4">
             <div className="flex flex-col gap-1">
                 <h1 className="text-2xl font-black text-primary tracking-tight">EDUBALANCE</h1>
                 <p className="text-xs font-medium text-text-secondary uppercase tracking-widest pl-0.5">School System</p>
             </div>
         </div>
        
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 text-text-secondary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
            >
              <div className="flex items-center gap-3">
                 <item.icon className="w-5 h-5" />
                 <span>{item.name}</span>
              </div>
              {item.badge && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                      {item.badge}
                  </span>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 space-y-2 mt-auto">
           <Link 
             href="/auth/login"
             className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-text-secondary hover:text-error hover:bg-error/10 rounded-2xl transition-colors w-full"
            >
               <LogOut className="w-5 h-5" />
               Log out
           </Link>
           
           <div className="flex items-center gap-3 px-4 py-3 mt-2">
             <ThemeToggle />
             <span className="text-sm font-medium text-text-secondary">Switch Theme</span>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 overflow-y-auto h-screen relative">
         {/* Top Header - Mobile Responsive */}
         <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
             <div className="space-y-1">
                 <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Hello, Ashwani! 👋</h2>
                 <p className="text-text-secondary">Welcome back to your control center.</p>
             </div>
             
             <div className="flex items-center gap-4">
                 {/* Search Bar */}
                 <div className="relative hidden md:block">
                     <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                     <input 
                        type="text" 
                        placeholder="Search something..." 
                        className="pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                     />
                 </div>
                 
                 {/* User Profile Component - Simplified */}
                 <div className="flex items-center gap-3 pl-4 border-l border-border hover:bg-card p-2 rounded-xl cursor-pointer transition-colors">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" /> 
                     </div>
                     <div className="hidden lg:block text-left">
                         <p className="text-sm font-bold text-text-primary leading-none">Ashwani K.</p>
                         <p className="text-xs text-text-secondary mt-1">Admin</p>
                     </div>
                 </div>
             </div>
         </header>

         {/* Page Content */}
         <div className="space-y-6">
            {children}
         </div>
      </main>
    </div>
  );
}
