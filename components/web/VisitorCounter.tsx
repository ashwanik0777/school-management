"use client";

import { Eye, TrendingUp, Users, Globe } from 'lucide-react';

export default function VisitorCounter() {
  return (
    <div className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 w-full max-w-[280px] shadow-sm hover:shadow-md transition-all duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <TrendingUp className="w-16 h-16 text-primary rotate-12" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Traffic
            </span>
            <Globe className="w-3 h-3 text-text-secondary" />
        </div>
        
        <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-primary tabular-nums tracking-tight dark:text-white group-hover:scale-105 transition-transform origin-left">
                1,245,678
            </span>
            <span className="text-xs font-medium text-text-secondary mb-1.5 ">Visits</span>
        </div>

        <div className="mt-3 flex items-center gap-3 text-[10px] text-text-secondary/70 bg-card/50 p-1.5 rounded-lg border border-border/30">
            <div className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-primary" />
                <span>+124 Today</span>
            </div>
            <div className="h-3 w-px bg-border"></div>
            <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-accent" />
                <span>24 Active</span>
            </div>
        </div>
      </div>
    </div>
  );
}
