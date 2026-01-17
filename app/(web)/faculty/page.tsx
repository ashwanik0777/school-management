"use client";

import { 
  Linkedin, 
  Mail, 
  Award, 
  BookOpen, 
  GraduationCap,
  User
} from 'lucide-react';
import Image from 'next/image';

const faculty = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Principal",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        bio: "With over 20 years of experience in educational leadership, Dr. Mitchell is dedicated to fostering a culture of excellence and inclusivity.",
        specialty: "Educational Administration",
        education: "Ph.D. in Education, Harvard University"
    },
    {
        name: "Prof. James Alistair",
        role: "Head of Sciences",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        bio: "Passionate about making complex scientific concepts accessible. Leads our STEM initiatives and robotics club.",
        specialty: "Physics & Astronomy",
        education: "M.Sc. Physics, MIT"
    },
    {
        name: "Mrs. Elena Rodriguez",
        role: "Senior Art Coordinator",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        bio: "Believes that every child is an artist. Her curriculum integrates classical techniques with modern digital art.",
        specialty: "Fine Arts & Design",
        education: "B.F.A., Rhode Island School of Design"
    },
    {
        name: "Mr. David Chen",
        role: "Mathematics Dept. Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        bio: "Makes math fun through gamification and real-world problem solving. Coach of the National Math Olympiad team.",
        specialty: "Advanced Calculus",
        education: "M.Ed., Stanford University"
    },
    {
        name: "Mrs. Priya Sharma",
        role: "Head of Languages",
        image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?auto=format&fit=crop&q=80&w=800",
        bio: "A polyglot who speaks 5 languages. She encourages cultural immersion alongside language learning.",
        specialty: "English Literature & French",
        education: "M.A. English, Oxford University"
    },
     {
        name: "Mr. Marcus Johnson",
        role: "Sports Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        bio: "Former national athlete focused on building character, discipline, and teamwork through sports.",
        specialty: "Physical Education",
        education: "B.Sc. Sports Science, UCLA"
    }
];

export default function FacultyPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            Meet Our <span className="text-primary">Mentors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our faculty consists of passionate educators, industry experts, and lifelong learners dedicated to shaping the future of every student.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {faculty.map((member, idx) => (
                  <FacultyCard key={idx} member={member} />
              ))}
          </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <BookOpen className="w-12 h-12 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Are you a passionate educator?</h2>
                <p className="opacity-90 max-w-xl mx-auto mb-8 text-lg">
                    We are always looking for talented individuals to join our growing family. Check our careers page for open positions.
                </p>
                <button className="px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                    View Career Opportunities
                </button>
           </div>
      </section>

    </div>
  );
}

function FacultyCard({ member }: { member: any }) {
    return (
        <div className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {member.image ? (
                    <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-muted-foreground group-hover:bg-secondary/30 transition-colors">
                        <User className="w-24 h-24 opacity-50" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium opacity-90 mb-1 flex items-center gap-1">
                        <Award className="w-4 h-4 text-primary" /> {member.role}
                    </p>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
               <div className="flex items-start gap-2">
                   <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                       <GraduationCap className="w-4 h-4" />
                   </div>
                   <div>
                       <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">Education</p>
                       <p className="text-sm font-medium text-foreground">{member.education}</p>
                   </div>
               </div>
               
               <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                   "{member.bio}"
               </p>

               <div className="flex items-center gap-3 pt-2">
                   <a href="#" className="p-2 rounded-full bg-secondary/10 text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                       <Linkedin className="w-4 h-4" />
                   </a>
                   <a href="#" className="p-2 rounded-full bg-secondary/10 text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                       <Mail className="w-4 h-4" />
                   </a>
               </div>
            </div>
        </div>
    )
}
