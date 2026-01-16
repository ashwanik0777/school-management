import Link from 'next/link';
import { ArrowLeft, UserCog, GraduationCap, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Hero/Brand */}
        <div className="md:w-1/2 bg-primary p-12 flex flex-col justify-between text-primary-foreground relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
           
           <div className="relative z-10">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
               <span className="text-2xl font-bold">E</span>
             </div>
             <h2 className="text-4xl font-bold mb-4">Welcome back!</h2>
             <p className="text-primary-foreground/80 leading-relaxed">
               Streamline your school management experience. Access your dashboard, track progress, and stay connected.
             </p>
           </div>
           
           <div className="relative z-10 text-sm text-primary-foreground/60 mt-12">
             © 2026 EduBalance System
           </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl font-bold text-text-primary mb-2">Login to your account</h1>
              <p className="text-text-secondary">Select your role to continue</p>
            </div>

            <div className="space-y-4 mb-8">
               <div className="grid grid-cols-1 gap-3">
                  <Link 
                    href="/dashboard?role=admin"
                    className="flex items-center p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <UserCog className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-text-primary">Admin Login</h3>
                      <p className="text-xs text-text-secondary">For Principals & Administrators</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/dashboard?role=teacher"
                    className="flex items-center p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-text-primary">Teacher Login</h3>
                      <p className="text-xs text-text-secondary">For Faculty & Staff</p>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/dashboard?role=student"
                    className="flex items-center p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-text-primary">Student/Parent Login</h3>
                      <p className="text-xs text-text-secondary">Check grades, attendance & fees</p>
                    </div>
                  </Link>
               </div>
            </div>

            <div className="text-center md:text-left">
                <Link href="/" className="text-sm text-text-secondary hover:text-primary flex items-center justify-center md:justify-start gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Website
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
