"use client";

import Image from 'next/image';
import { 
  Target, 
  Lightbulb, 
  Heart, 
  ShieldCheck, 
  Users, 
  Globe2, 
  ArrowRight, 
  BookOpen,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left scale-110"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-card border border-border shadow-sm rounded-full text-sm font-bold text-primary mb-8 animate-fade-in-up">
                <Award className="w-4 h-4" />
                <span>Celebrating 25 Years of Excellence</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
                Where Tradition Meets <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Innovation</span>
             </h1>
             <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                EduBalance is more than just a school. It is a vibrant ecosystem designed to nurture the intellectual, physical, and emotional growth of every student.
             </p>
          </div>
        </div>
      </section>

      {/* Our Story Grid */}
      <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-[3rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-card">
                          <img 
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                            alt="School History" 
                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                              <p className="font-bold text-xl">Established 1998</p>
                              <p className="opacity-80">Our first campus building</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="space-y-8">
                      <div>
                          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">Our Journey</h2>
                          <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                      </div>
                      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                          <p>
                              Founded in 1998 with just 50 students and a vision to redefine education, EduBalance has grown into a premier institution hosting over 2,500 scholars. We started with a simple belief: <strong className="text-foreground">every child is unique.</strong>
                          </p>
                          <p>
                              Over the decades, we have consistently evolved, integrating modern technology like Smart Labs and AI-driven personalized learning while keeping our roots firmly planted in timeless values of integrity and empathy.
                          </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 pt-4">
                          <div className="p-4 bg-secondary/5 rounded-2xl border border-border">
                              <div className="text-3xl font-black text-primary mb-1">98%</div>
                              <div className="text-sm font-bold text-muted-foreground uppercase">College Acceptance</div>
                          </div>
                          <div className="p-4 bg-secondary/5 rounded-2xl border border-border">
                              <div className="text-3xl font-black text-primary mb-1">50+</div>
                              <div className="text-sm font-bold text-muted-foreground uppercase">Global Partners</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <VisionCard 
                    icon={<Target className="w-10 h-10 text-white" />}
                    title="Our Mission"
                    description="To empower students to acquire, demonstrate, articulate, and value knowledge and skills that will support them as life-long learners and global citizens."
                    gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
                    pattern="bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
                  />
                  <VisionCard 
                    icon={<Lightbulb className="w-10 h-10 text-white" />}
                    title="Our Vision"
                    description="To be a global leader in education, recognized for academic excellence, holistic development, and the cultivation of compassionate leaders who drive positive change."
                    gradient="bg-gradient-to-br from-purple-500 to-pink-600"
                    pattern="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
                  />
              </div>
          </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">The EduBalance Way</span>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-6">Core Values</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">The pillars that uphold our community and guide our every action.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ValueCard icon={<ShieldCheck className="w-8 h-8" />} title="Integrity" desc="We do the right thing, even when no one is watching." color="text-blue-500" />
                  <ValueCard icon={<Heart className="w-8 h-8" />} title="Compassion" desc="We treat everyone with kindness, respect, and empathy." color="text-red-500" />
                  <ValueCard icon={<Globe2 className="w-8 h-8" />} title="Inclusivity" desc="We celebrate diversity and welcome unique perspectives." color="text-green-500" />
                  <ValueCard icon={<BookOpen className="w-8 h-8" />} title="Excellence" desc="We strive for the highest standards in all endeavors." color="text-orange-500" />
              </div>
          </div>
      </section>

      {/* Interactive Infrastructure Showcase */}
      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                      <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">World-Class Campus</h2>
                      <p className="text-muted-foreground max-w-xl">Designed to inspire creativity, collaboration, and comfort.</p>
                  </div>
                  <Link href="/coming-soon" className="group flex items-center gap-2 font-bold text-primary px-6 py-3 bg-primary/5 rounded-xl hover:bg-primary hover:text-white transition-all">
                      Explore Facilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                   <FacilityCard 
                      size="md:col-span-2" 
                      image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2574&auto=format&fit=crop"
                      title="The Innovation Hub"
                      subtitle="Robotics & AI Labs"
                   />
                   <FacilityCard 
                      size="md:col-span-1" 
                      image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2600&auto=format&fit=crop"
                      title="Smart Classrooms"
                      subtitle="Interactive Learning"
                   />
                   <FacilityCard 
                      size="md:col-span-1" 
                      image="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=2670&auto=format&fit=crop"
                      title="Olympic Swimming Pool"
                      subtitle="Professional Sports Training"
                   />
                   <FacilityCard 
                      size="md:col-span-2" 
                      image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2669&auto=format&fit=crop"
                      title="Auditorium"
                      subtitle="Seats 1000+ for Arts & Culture"
                   />
               </div>
          </div>
      </section>

    </div>
  );
}

function VisionCard({ icon, title, description, gradient, pattern }: { icon: React.ReactNode, title: string, description: string, gradient: string, pattern: string }) {
    return (
        <div className={`relative p-10 rounded-[2.5rem] shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ${gradient}`}>
            {/* Pattern Overlay */}
            <div className={`absolute inset-0 opacity-10 ${pattern}`}></div>
            
            <div className="relative z-10 text-white">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-8 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3 className="text-3xl font-black mb-6">{title}</h3>
                <p className="text-lg opacity-90 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    )
}

function ValueCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
    return (
        <div className="bg-background hover:bg-secondary/5 p-8 rounded-3xl border border-transparent hover:border-border transition-all duration-300 group text-center md:text-left">
            <div className={`${color} mb-6 inline-block p-4 bg-background rounded-2xl shadow-sm border border-border/50 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}

function FacilityCard({ size, image, title, subtitle }: { size: string, image: string, title: string, subtitle: string }) {
    return (
        <div className={`${size} relative group rounded-3xl overflow-hidden cursor-pointer`}>
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">{title}</h3>
                <p className="text-white/80 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">{subtitle}</p>
            </div>
        </div>
    )
}
