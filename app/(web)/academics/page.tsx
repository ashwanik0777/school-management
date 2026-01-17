"use client";

import { 
  BookOpen, 
  BrainCircuit, 
  Microscope, 
  Palette, 
  Globe, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function AcademicsPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mathematics.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-bold mb-6 backdrop-blur-sm">
            Excellence in Education
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Curriculum & <br className="hidden md:block"/> Methodology
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
            Our academic framework is designed to challenge, inspire, and prepare students for a rapidly changing world through a blend of traditional values and modern pedagogy.
          </p>
        </div>
      </section>

      {/* Philosophy / Methodology */}
      <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Our Teaching Philosophy</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">We believe in a holistic learning approach where 'how we learn' is just as important as 'what we learn'.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <MethodCard 
                    icon={<BrainCircuit className="w-8 h-8" />} 
                    title="Inquiry-Based Learning" 
                    desc="Encouraging curiosity and critical thinking by asking questions rather than just providing answers."
                  />
                  <MethodCard 
                    icon={<Layers className="w-8 h-8" />} 
                    title="Interdisciplinary Approach" 
                    desc="Connecting subjects like Math, Art, and Science to show real-world applications of knowledge."
                  />
                  <MethodCard 
                    icon={<Sparkles className="w-8 h-8" />} 
                    title="Holistic Development" 
                    desc="Focusing on emotional intelligence, leadership, and physical well-being alongside academics."
                  />
              </div>
          </div>
      </section>

      {/* Academic Levels */}
      <section className="py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Academic Levels</h2>
               
               <div className="space-y-12">
                   {/* Pre-Primary */}
                   <LevelSection 
                        title="Early Years (Pre-Primary)"
                        grade="Nursery - KG"
                        desc="A play-based curriculum focusing on sensory development, social skills, and foundational literacy and numeracy. We create a nurturing environment where learning is exploring."
                        subjects={["Montessori Method", "Phonics", "Sensory Play", "Arts & Crafts"]}
                        image="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800"
                        reversed={false}
                   />

                   {/* Primary */}
                   <LevelSection 
                        title="Primary School"
                        grade="Grade 1 - 5"
                        desc="Building core competencies in languages, mathematics, and sciences while introducing structured learning. Emphasis is placed on reading habits and logical reasoning."
                        subjects={["English & Regional Lang", "Mathematics", "Environmental Science", "Coding Basics"]}
                        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                        reversed={true}
                   />

                   {/* Middle & Senior */}
                   <LevelSection 
                        title="Middle & Senior School"
                        grade="Grade 6 - 12"
                        desc="Advanced academic rigor preparing students for board exams and higher education. Specialized streams in Science, Commerce, and Humanities with career counseling."
                        subjects={["Advanced Sciences", "Social Sciences", "Robotics & AI", "Debate & Rhetoric"]}
                        image="https://images.unsplash.com/photo-1427504743055-b72976e3d2ce?auto=format&fit=crop&q=80&w=800"
                        reversed={false}
                   />
               </div>
          </div>
      </section>

      {/* Beyond Classroom */}
      <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1 space-y-6">
                      <h2 className="text-3xl font-bold">Beyond the Classroom</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Academics isn't just about textbooks. Our labs, libraries, and makerspaces provide the perfect environment for practical application of knowledge.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          <Badge icon={<Microscope className="w-4 h-4"/>} text="Science Labs" />
                          <Badge icon={<Cpu className="w-4 h-4"/>} text="Robotics Lab" />
                          <Badge icon={<Palette className="w-4 h-4"/>} text="Art Studio" />
                          <Badge icon={<Globe className="w-4 h-4"/>} text="Language Lab" />
                          <Badge icon={<BookOpen className="w-4 h-4"/>} text="Digital Library" />
                      </div>
                      <div className="pt-4">
                        <Link href="/admissions" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Apply for Admission <span className="text-xl">→</span>
                        </Link>
                      </div>
                  </div>
                  <div className="flex-1 w-full relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                       {/* Placeholder for a video or collage */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-indigo-600 opacity-90"></div>
                       <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">21st Century Skills</h3>
                                <p className="opacity-80">Preparing students for jobs that don't exist yet.</p>
                            </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
}

function MethodCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}

function LevelSection({ title, grade, desc, subjects, image, reversed }: any) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full space-y-4">
                <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                    {grade}
                </div>
                <h3 className="text-3xl font-bold text-foreground">{title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {desc}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-4">
                    {subjects.map((sub: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            {sub}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full relative aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-xl">
                 {/* Using div as placeholder for Image component to avoid import issues if not needed, but here we use standard img or Next Image */}
                 <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
    )
}

function Badge({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
            {icon}
            {text}
        </span>
    )
}
