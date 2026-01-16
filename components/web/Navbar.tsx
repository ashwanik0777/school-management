import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              E
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">EduBalance</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6 mr-4">
              <Link href="/" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/coming-soon" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/coming-soon" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                Admissions
              </Link>
              <Link href="/coming-soon" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="h-6 w-px bg-border mx-2"></div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link 
                href="/coming-soon" 
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm font-medium text-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>Login Portal</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Add Toggle here too if needed, for now just the button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="text-text-primary hover:text-primary p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
