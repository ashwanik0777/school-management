"use client";

import Link from 'next/link';
import { 
  Home, 
  Info, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Phone, 
  Shield, 
  FileText,
  LayoutGrid
} from 'lucide-react';

export default function SitemapPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <LayoutGrid className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-black mb-4">Sitemap</h1>
          <p className="text-muted-foreground">An overview of the content available on our website.</p>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              <SitemapGroup title="Main Pages">
                  <SitemapLink href="/" label="Home Page" icon={<Home className="w-4 h-4"/>} />
                  <SitemapLink href="/about" label="About Us" icon={<Info className="w-4 h-4"/>} />
                  <SitemapLink href="/contact" label="Contact Us" icon={<Phone className="w-4 h-4"/>} />
              </SitemapGroup>

              <SitemapGroup title="Academics & Faculty">
                  <SitemapLink href="/academics" label="Curriculum Overview" icon={<BookOpen className="w-4 h-4"/>} />
                  <SitemapLink href="/teachers" label="Teachers Directory" icon={<Users className="w-4 h-4"/>} />
                  <SitemapLink href="/admissions" label="Admissions Process" icon={<GraduationCap className="w-4 h-4"/>} />
              </SitemapGroup>

              <SitemapGroup title="Legal & Policy">
                  <SitemapLink href="/privacy-policy" label="Privacy Policy" icon={<Shield className="w-4 h-4"/>} />
                  <SitemapLink href="/terms" label="Terms of Use" icon={<FileText className="w-4 h-4"/>} />
              </SitemapGroup>

          </div>
      </section>

    </div>
  );
}

function SitemapGroup({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border text-foreground">{title}</h2>
            <ul className="space-y-4">
                {children}
            </ul>
        </div>
    )
}

function SitemapLink({ href, label, icon }: { href: string, label: string, icon: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-1 font-medium">
                <span className="p-2 bg-secondary/20 rounded-lg text-foreground/70">{icon}</span>
                {label}
            </Link>
        </li>
    )
}
