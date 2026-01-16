import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  FileText, 
  Calendar, 
  BookOpen, 
  CreditCard, 
  MessageSquare, 
  BarChart3, 
  Settings,
  LogOut
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'User Management', icon: Users, href: '/dashboard/users' },
    { name: 'Academics', icon: GraduationCap, href: '/dashboard/academics' },
    { name: 'Attendance', icon: CalendarCheck, href: '/dashboard/attendance' },
    { name: 'Exams & Marks', icon: FileText, href: '/dashboard/exams' },
    { name: 'Timetable', icon: Calendar, href: '/dashboard/timetable' },
    { name: 'Study Material', icon: BookOpen, href: '/dashboard/materials' },
    { name: 'Fees & Finance', icon: CreditCard, href: '/dashboard/finance' },
    { name: 'Communication', icon: MessageSquare, href: '/dashboard/communication' },
    { name: 'Reports', icon: BarChart3, href: '/dashboard/reports' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col fixed h-full z-10 transition-colors">
        <div className="p-6 border-b border-border flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              E
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">EduBalance</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-text-secondary rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-border space-y-2">
           <div className="flex items-center justify-between px-3 py-2">
             <span className="text-sm font-medium text-text-secondary">Theme</span>
             <ThemeToggle />
           </div>
           <Link 
             href="/auth/login"
             className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-error hover:bg-error/10 rounded-lg transition-colors w-full"
            >
               <LogOut className="w-5 h-5" />
               Sign Out
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}
