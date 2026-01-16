import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-xl mb-4">
            E
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Welcome Back</h1>
          <p className="text-text-secondary">Sign in to your EduBalance account</p>
        </div>

        <div className="space-y-4">
            <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Email</label>
                <input 
                    type="email" 
                    placeholder="admin@school.com" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    disabled
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Password</label>
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    disabled
                />
            </div>
            
            <Link 
                href="/dashboard"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
                Sign In (Demo)
            </Link>
        </div>

        <div className="text-center">
            <Link href="/" className="text-sm text-text-secondary hover:text-primary flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Website
            </Link>
        </div>
      </div>
    </div>
  );
}
