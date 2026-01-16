"use client";

import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ModulePlaceholderProps {
  moduleName: string;
  description?: string;
}

export default function ModulePlaceholder({ moduleName, description }: ModulePlaceholderProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
          <Construction className="w-12 h-12 text-primary relative z-10" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">{moduleName}</h1>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary">
            {description || "This module is currently under active development. Our engineering team is working hard to bring this feature to life."}
          </p>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-warning/50 bg-warning/10 text-warning text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-warning mr-2 animate-pulse"></span>
          Coming Soon
        </div>

        {/* Action */}
        <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
