"use client";

import { Briefcase, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

const positions = [
    {
        title: "Senior Mathematics Teacher",
        dept: "High School (Grades 9-12)",
        type: "Full Time",
        location: "Main Campus"
    },
    {
        title: "Lab Assistant (Physics)",
        dept: "Science Dept.",
        type: "Part Time",
        location: "Main Campus"
    },
    {
        title: "Primary School Coordinator",
        dept: "Administration",
        type: "Full Time",
        location: "Junior Wing"
    }
];

export default function CareersPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
                We are always looking for passionate educators and staff to help us shape the future.
            </p>
         </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Work at EduBalance?</h2>
              <p className="text-muted-foreground">More than just a job, it's a calling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard 
                icon={<Users className="w-8 h-8"/>}
                title="Collaborative Culture"
                desc="Work with a supportive team of expert educators who share resources and ideas."
              />
              <BenefitCard 
                icon={<Star className="w-8 h-8"/>}
                title="Professional Growth"
                desc="Regular workshops, training sessions, and opportunities for higher education sponsorship."
              />
              <BenefitCard 
                icon={<CheckCircle className="w-8 h-8"/>}
                title="World-Class Facilities"
                desc="Access to modern labs, digital libraries, and smart classrooms to aid your teaching."
              />
          </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/5 border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" /> Current Openings
              </h2>

              <div className="space-y-4">
                  {positions.map((pos, idx) => (
                      <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                          <div>
                              <h3 className="text-xl font-bold text-foreground">{pos.title}</h3>
                              <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                                  <span>{pos.dept}</span>
                                  <span>•</span>
                                  <span>{pos.type}</span>
                                  <span>•</span>
                                  <span>{pos.location}</span>
                              </div>
                          </div>
                          <a href="mailto:careers@edubalance.edu" className="px-6 py-2 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 self-start md:self-auto">
                              Apply Now <ArrowRight className="w-4 h-4" />
                          </a>
                      </div>
                  ))}
              </div>

               <div className="mt-12 text-center p-8 bg-card border border-border rounded-3xl">
                  <h3 className="text-xl font-bold mb-2">Don't see a fitting role?</h3>
                  <p className="text-muted-foreground mb-6">We are always interested in meeting talented individuals.</p>
                  <a href="mailto:careers@edubalance.edu" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/80 transition-all">
                      Send us your Resume
                  </a>
              </div>
          </div>
      </section>

    </div>
  );
}

function BenefitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    )
}
