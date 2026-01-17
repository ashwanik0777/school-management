"use client";

import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Sparkles,
  Rocket,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-bold rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4 fill-secondary" />
                <span>The Minds Behind The Magic</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
                Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Education</span>
                <br /> For Tomorrow
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                We are a passionate collective of developers, designers, and educators driven by a single mission: to transform the way schools operate through intuitive technology.
            </p>
        </div>

        {/* Founder Focus Card */}
        <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[3rem] opacity-10 blur-xl transform rotate-1 scale-105"></div>
            <div className="relative bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Area */}
                    <div className="w-full md:w-1/3 relative shrink-0">
                         <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-background relative">
                            {/* Replace with actual image */}
                             <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-4xl font-bold text-white relative group-hover:scale-105 transition-transform duration-700">
                                 AK
                                 <img 
                                   src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ashwani&backgroundColor=b6e3f4" 
                                   alt="Ashwani Kushwaha"
                                   className="absolute inset-0 w-full h-full object-cover" 
                                 />
                             </div>
                         </div>
                         {/* Floating Tech Badges */}
                         <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce-slow flex items-center gap-3">
                             <div className="bg-black text-white p-2 rounded-lg"><Code2 className="w-5 h-5" /></div>
                             <div className="text-xs font-bold">
                                 <p>Lead Developer</p>
                                 <p className="text-muted-foreground">Full Stack Architect</p>
                             </div>
                         </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-2/3 space-y-8">
                        <div>
                            <h2 className="text-4xl font-black text-foreground mb-2">Ashwani Kushwaha</h2>
                            <p className="text-xl font-medium text-primary bg-primary/5 inline-block px-3 py-1 rounded-lg">Founder & Lead Innovator</p>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            "I believe that technology shouldn't just be functional; it should be inspiring. With EduBalance, my goal was to stip away the complexity of school management and replace it with a fluid, human-centric experience. Every pixel, every interaction is crafted with the end-user in mind."
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <SkillItem icon={<Rocket className="w-5 h-5 text-blue-500" />} title="Visionary Leadership" desc="Driving product strategy" />
                            <SkillItem icon={<BrainCircuit className="w-5 h-5 text-purple-500" />} title="System Architecture" desc="Scalable backend design" />
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                             <SocialLink icon={<Github className="w-5 h-5" />} label="GitHub" href="#" />
                             <SocialLink icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href="#" />
                             <SocialLink icon={<Twitter className="w-5 h-5" />} label="Twitter" href="#" />
                             <Link href="mailto:contact@ashwani.dev" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                 <Mail className="w-4 h-4" />
                                 Contact Me
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PhilosophyCard 
                number="01"
                title="Design First"
                desc="We prioritize user experience above all else. Validating ideas through prototypes before writing code."
            />
            <PhilosophyCard 
                number="02"
                title="Scalable Tech"
                desc="Built on Next.js 16 and cloud-native architecture to handle thousands of concurrent users effortlessly."
            />
            <PhilosophyCard 
                number="03"
                title="Community Driven"
                desc="We listen to feedback. Our roadmap is defined by the real needs of teachers and students."
            />
        </div>

      </div>
    </div>
  );
}

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
    return (
        <Link href={href} className="flex items-center gap-2 px-4 py-3 bg-secondary/5 border border-border hover:border-primary/50 text-foreground hover:text-primary rounded-xl font-medium transition-all hover:-translate-y-1">
            {icon}
            <span>{label}</span>
        </Link>
    )
}

function SkillItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 bg-background rounded-xl border border-border shadow-sm">{icon}</div>
            <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

function PhilosophyCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-3xl bg-secondary/5 hover:bg-card hover:shadow-xl border border-transparent hover:border-border transition-all duration-300 group">
             <div className="text-6xl font-black text-border/50 mb-4 group-hover:text-primary/20 transition-colors">{number}</div>
             <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
             <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}
