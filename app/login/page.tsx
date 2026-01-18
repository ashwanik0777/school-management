"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  User, 
  Lock, 
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'staff'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (role === 'student') {
        router.push('/student');
      } else {
        // Redirect to Faculty Dashboard
        router.push('/faculty');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-6 transform origin-top-left scale-150"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link href="/" className="flex justify-center items-center gap-3 mb-8 group">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">EduBalance</h2>
        </Link>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-slate-800 dark:text-slate-200">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Welcome back! Please enter your credentials to continue.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] relative z-10">
        <div className="bg-white dark:bg-slate-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 border border-slate-200 dark:border-slate-800">
          
          {/* Role Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl mb-8">
              <button 
                onClick={() => setRole('student')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  role === 'student' 
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <User className="w-4 h-4" /> Student
              </button>
              <button 
                onClick={() => setRole('staff')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  role === 'staff' 
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Staff / Admin
              </button>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-bold leading-6 text-slate-900 dark:text-white">
                {role === 'student' ? 'Student ID / Admission No.' : 'Employee ID / Email'}
              </label>
              <div className="mt-2 relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-xl border-0 py-3.5 pl-4 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-800 transition-all font-medium"
                  placeholder={role === 'student' ? 'e.g. STU2026001' : 'e.g. emp@edubalance.edu'}
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold leading-6 text-slate-900 dark:text-white">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full rounded-xl border-0 py-3.5 pl-4 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-800 transition-all font-medium"
                  placeholder="••••••••"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="mt-2 flex justify-end">
                <a href="#" className="font-semibold text-primary hover:text-primary/80 text-xs">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-xl bg-primary px-3 py-3.5 text-sm font-bold leading-6 text-white shadow-lg hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? 'Authenticating...' : 'Sign in to Dashboard'} <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>

          {role === 'student' && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">First time login?</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500">
                        Default password is your <span className="font-bold text-slate-700 dark:text-slate-300">Date of Birth (DDMMYYYY)</span>. 
                        Please change it after first login.
                    </p>
                </div>
              </div>
          )}
        </div>
        
        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          Having trouble?{' '}
          <a href="/contact" className="font-bold leading-6 text-primary hover:text-primary/80">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
