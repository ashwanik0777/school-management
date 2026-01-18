"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn, ChevronRight, Home, Info, GraduationCap, Phone, Users, BookOpen } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Admissions', href: '/admissions', icon: GraduationCap },
    { name: 'Academics', href: '/academics', icon: BookOpen },
    { name: 'Faculty', href: '/faculty', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                E
            </div>
            <span className="text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
              EduBalance
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-semibold text-muted-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border/50"></div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link 
                href="/login" 
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl shadow-md shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold text-sm active:scale-95"
              >
                <LogIn className="w-4 h-4" />
                <span>Login Portal</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 text-foreground hover:text-primary active:scale-95 transition-transform"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 right-0 z-[60] w-[80%] max-w-[300px] bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col h-[100dvh]
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
          {/* Sidebar Header */}
          <div className="p-5 flex items-center justify-between border-b border-border bg-card">
              <span className="text-lg font-black text-foreground">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                </Link>
              ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-5 border-t border-border bg-muted/20">
              <Link 
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95"
              >
                  <LogIn className="w-5 h-5" />
                  Access Portal
              </Link>
              <p className="text-center text-xs text-muted-foreground mt-4">
                  © 2026 EduBalance System
              </p>
          </div>
      </div>
    </nav>
  );
}
