"use client";

import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  CreditCard, 
  ArrowRight, 
  Download,
  HelpCircle,
  Phone
} from 'lucide-react';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-bold mb-6 backdrop-blur-sm">
            Academic Year 2026-2027
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Begin Your Journey <br className="hidden md:block"/> With EduBalance
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
            We are looking for students who are curious, creative, and ready to make a difference. Our admissions process is designed to get to know the whole child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Apply Online Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Prospectus
              </button>
          </div>
        </div>
      </section>

      {/* Admissions Process Steps */}
      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">How to Apply</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">A simple 4-step process to secure your child's future.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connector Line (Desktop) */}
                  <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10"></div>

                  <StepCard 
                    number="01" 
                    icon={<FileText className="w-6 h-6 text-white" />}
                    title="Submit Enquiry"
                    desc="Fill out the online enquiry form or visit our campus admissions office."
                  />
                  <StepCard 
                    number="02" 
                    icon={<Calendar className="w-6 h-6 text-white" />}
                    title="Campus Visit"
                    desc="Schedule a tour and interaction session with our academic counselors."
                  />
                  <StepCard 
                    number="03" 
                    icon={<CheckCircle2 className="w-6 h-6 text-white" />}
                    title="Assessment"
                    desc="Grade-level appropriate written assessment and student interaction."
                  />
                   <StepCard 
                    number="04" 
                    icon={<CreditCard className="w-6 h-6 text-white" />}
                    title="Enrollment"
                    desc="Pay the admission fee and complete documentation to confirm the seat."
                  />
              </div>
          </div>
      </section>

      {/* Eligibility & Info Grid */}
      <section className="py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                   {/* Left: Age Criteria Table */}
                   <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                           <Calendar className="w-6 h-6 text-primary" /> Age Criteria
                       </h3>
                       <p className="text-muted-foreground">For the academic session starting April 2026, the age criteria as of March 31, 2026 are:</p>
                       
                       <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                           <table className="w-full text-left text-sm">
                               <thead className="bg-secondary/10 text-foreground font-bold">
                                   <tr>
                                       <th className="p-4 border-b border-border">Grade</th>
                                       <th className="p-4 border-b border-border">Minimum Age</th>
                                   </tr>
                               </thead>
                               <tbody className="divide-y divide-border">
                                   <tr>
                                       <td className="p-4 font-medium">Nursery</td>
                                       <td className="p-4 text-muted-foreground">3+ Years</td>
                                   </tr>
                                   <tr>
                                       <td className="p-4 font-medium">Kindergarten (KG)</td>
                                       <td className="p-4 text-muted-foreground">4+ Years</td>
                                   </tr>
                                   <tr>
                                       <td className="p-4 font-medium">Grade 1</td>
                                       <td className="p-4 text-muted-foreground">5+ Years</td>
                                   </tr>
                               </tbody>
                           </table>
                           <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 text-xs text-yellow-700 dark:text-yellow-400 font-medium">
                               * Age relaxation of up to 30 days may be considered by the Principal.
                           </div>
                       </div>
                   </div>

                   {/* Right: Documents Required */}
                   <div className="space-y-6">
                       <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                           <FileText className="w-6 h-6 text-primary" /> Documents Required
                       </h3>
                       <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                           <ul className="space-y-4">
                               <DocItem text="Birth Certificate of the student" />
                               <DocItem text="Passport size photographs (Student & Parents)" />
                               <DocItem text="Previous School Report Card (for Grade 2+)" />
                               <DocItem text="Transfer Certificate (TC) from previous school" />
                               <DocItem text="Aadhar Card / ID Proof of parents" />
                               <DocItem text="Medical Fitness Certificate" />
                           </ul>
                           <button className="w-full mt-8 py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                               <Download className="w-4 h-4" /> Download Checklist PDF
                           </button>
                       </div>
                   </div>
               </div>
          </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                  <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                  Our admissions team is here to help guide you through the process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/coming-soon" className="flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-xl font-bold text-foreground transition-all">
                      <HelpCircle className="w-5 h-5" /> Visit FAQ Page
                  </Link>
                   <Link href="/coming-soon" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
                      <Phone className="w-5 h-5" /> Contact Admissions
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
}

function StepCard({ number, icon, title, desc }: { number: string, icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="relative bg-card p-6 pt-12 rounded-3xl border border-border shadow-sm group hover:-translate-y-2 transition-transform duration-300 text-center md:text-left z-10">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="absolute top-4 right-6 text-4xl font-black text-border/40 group-hover:text-primary/10 transition-colors">
                {number}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 mt-4">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}

function DocItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-muted-foreground">
            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium">{text}</span>
        </li>
    )
}
