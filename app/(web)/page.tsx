import { ArrowRight, BookOpen, Users, Trophy, Bell } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
              Shaping Future Leaders With Excellence
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
              EduBalance creates an environment where academic innovation meets character building. Join a community dedicated to holistic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/coming-soon" 
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/coming-soon" 
                className="px-8 py-4 bg-white text-primary border border-primary/20 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </section>

      {/* Notices Ticker */}
      <div className="bg-primary text-white overflow-hidden py-3">
        <div className="flex items-center gap-4 max-w-7xl mx-auto px-4">
            <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded shrink-0">
                <Bell className="w-3 h-3" /> Notice
            </span>
            <div className="whitespace-nowrap overflow-x-auto text-sm font-medium scrollbar-hide">
                <span className="mr-8 inline-block">• Admissions open for Academic Year 2026-27</span>
                <span className="mr-8 inline-block">• Annual Sports Day scheduled for Feb 15th</span>
                <span className="mr-8 inline-block">• Parent-Teacher Meeting for Class 10 on Saturday</span>
            </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Why Choose EduBalance?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">We focus on the 360-degree development of every student through modern infrastructure and classic values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-primary" />}
              title="Academic Excellence"
              description="A rigorous curriculum designed to challenge students and foster critical thinking skills."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-accent" />}
              title="Expert Faculty"
              description="Learn from industry experts and passionate educators dedicated to student success."
            />
            <FeatureCard 
              icon={<Trophy className="w-8 h-8 text-warning" />}
              title="Holistic Growth"
              description="Beyond books, we excel in sports, arts, and leadership programs."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                   <StatItem number="25+" label="Years of Excellence" />
                   <StatItem number="150+" label="Expert Teachers" />
                   <StatItem number="2500+" label="Happy Students" />
                   <StatItem number="100%" label="University Placement" />
               </div>
          </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="mb-4 p-3 bg-background rounded-xl w-fit border border-border/50">{icon}</div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div>
            <div className="text-4xl font-extrabold text-primary mb-1">{number}</div>
            <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">{label}</div>
        </div>
    )
}
