import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Trophy, 
  Bell, 
  Calendar, 
  Star,
  Quote,
  CheckCircle2,
  Play,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 animate-fade-in-up">
                <Star className="w-4 h-4 fill-primary" />
                <span>Admission Open for 2026-27</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight mb-6 leading-[1.1]">
                Empowering <span className="text-primary transparent-text-stroke">Future</span> Leaders
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                EduBalance provides a world-class environment where academic innovation meets character building. Join us to shape a brighter tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/coming-soon" 
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/coming-soon" 
                  className="px-8 py-4 bg-background border-2 border-border text-foreground rounded-xl font-bold hover:bg-muted transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Watch Video
                </Link>
              </div>
            </div>
            
            {/* Hero Image/Illustration Placeholder */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                 <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-primary/20 to-indigo-500/20 rotate-6 absolute inset-0 blur-3xl" />
                 <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 border border-white/20">
                    <img 
                      src="https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?semt=ais_hybrid&w=740&q=80" 
                      alt="Students Learning" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                        <p className="font-bold text-lg">🎓 Class of 2025</p>
                        <p className="text-sm opacity-90">Celebrating 100% Passing Rate</p>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 
            </div>
          </div>
        </div>
      </section>

      {/* Running Notice Board (Marquee) */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-3 shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto flex items-center">
            <div className="bg-primary-foreground text-primary font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-r-full absolute left-0 z-10 shadow-md">
                Latest Updates
            </div>
            <div className="flex overflow-hidden w-full mask-linear">
                 <div className="animate-marquee whitespace-nowrap flex items-center gap-12 pl-32 text-sm font-bold">
                    <span className="flex items-center gap-2"><Bell className="w-4 h-4" /> Admissions are exclusively open for Grade 1 to 9. Apply before Feb 28th!</span>
                    <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Our Debate Team won the National Championship 2025!</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Parent-Teacher Meeting scheduled for March 15th, 2026.</span>
                    <span className="flex items-center gap-2"><Star className="w-4 h-4" /> Special Science Exhibition "Future Tech" starting next Monday.</span>
                    {/* Duplicate for seamless loop */}
                    <span className="flex items-center gap-2"><Bell className="w-4 h-4" /> Admissions are exclusively open for Grade 1 to 9. Apply before Feb 28th!</span>
                    <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Our Debate Team won the National Championship 2025!</span>
                 </div>
            </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                   <StatItem number="25+" label="Years of Excellence" icon={<Calendar className="w-6 h-6" />} />
                   <StatItem number="150+" label="Expert Faculty" icon={<Users className="w-6 h-6" />} />
                   <StatItem number="2.5k+" label="Active Students" icon={<GraduationCap className="w-6 h-6" />} />
                   <StatItem number="100%" label="University Placement" icon={<Trophy className="w-6 h-6" />} />
               </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Features</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-6">Why Choose EduBalance?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">We focus on the 360-degree development of every student through modern infrastructure and classic values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <FeatureCard 
              icon={<BookOpen className="w-10 h-10 text-white" />}
              color="bg-blue-500"
              title="Academic Excellence"
              description="A rigorous curriculum designed to challenge students and foster critical thinking skills with modern methodology."
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-white" />}
              color="bg-purple-500"
              title="Expert Mentorship"
              description="Learn from industry experts and passionate educators dedicated to student success and personal guidance."
            />
            <FeatureCard 
              icon={<Trophy className="w-10 h-10 text-white" />}
              color="bg-orange-500"
              title="Holistic Development"
              description="Beyond books, we excel in sports, arts, robotics, and leadership programs to build character."
            />
          </div>
        </div>
      </section>

       {/* Principal Message Section */}
       <section className="py-24 bg-secondary/5 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                   <div className="w-full md:w-1/2 relative">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -translate-x-10 -translate-y-10"></div>
                        <div className="relative aspect-[4/5] md:aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-card rotate-3 hover:rotate-0 transition-all duration-500">
                             <img 
                               src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop" 
                               alt="Principal" 
                               className="w-full h-full object-cover"
                             />
                        </div>
                   </div>
                   <div className="w-full md:w-1/2">
                       <Quote className="w-12 h-12 text-primary/40 mb-6" />
                       <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                           "Education is not just about learning facts, but training the mind to think."
                       </h2>
                       <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                           At EduBalance, we believe in nurturing the unique potential of every child. Our goal is to Create responsible global citizens who are rooted in values and ready for the future. We invite you to be part of this exciting journey.
                       </p>
                       <div>
                           <div className="font-bold text-xl text-foreground">Dr. Sarah Mitchell</div>
                           <div className="text-primary font-medium">Principal, EduBalance High School</div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

      {/* Campus Life Gallery Preview */}
      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                      <span className="text-primary font-bold tracking-wider uppercase text-sm">Life at EduBalance</span>
                      <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2">Beyond the Classroom</h2>
                  </div>
                  <Link href="/coming-soon" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
                      View Full Gallery <ArrowRight className="w-5 h-5" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-96">
                  <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
                      <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Library" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-bold text-lg">World Class Library</p>
                      </div>
                  </div>
                  <div className="relative group rounded-3xl overflow-hidden cursor-pointer">
                      <img src="https://images.unsplash.com/photo-1546955121-d0ba6a56fdea?q=80&w=2600&auto=format&fit=crop" alt="Sports" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-bold text-lg">Sports Complex</p>
                      </div>
                  </div>
                  <div className="relative group rounded-3xl overflow-hidden cursor-pointer">
                      <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2600&auto=format&fit=crop" alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-bold text-lg">Smart Classrooms</p>
                      </div>
                  </div>
                  <div className="md:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
                      <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Science Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-bold text-lg">Advanced Science Labs</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground">Stories of Success</h2>
                    <p className="text-muted-foreground mt-2">Hear from our community of parents and students.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <TestimonialCard 
                     quote="The best decision we made for our daughter. The faculty is incredibly supportive and the curriculum is world-class."
                     author="Priya Sharma"
                     role="Parent of Class 10 Student"
                     bg="bg-red-50 dark:bg-red-900/10"
                   />
                   <TestimonialCard 
                     quote="EduBalance gave me the confidence to pursue my dream of becoming an engineer. The robotics club was a game changer."
                     author="Rahul Verma"
                     role="Alumni, Batch of 2024"
                     bg="bg-blue-50 dark:bg-blue-900/10"
                   />
                   <TestimonialCard 
                     quote="A perfect blend of modern education and traditional values. Very satisfied with my son's progress."
                     author="Michael Chang"
                     role="Parent of Class 5 Student"
                     bg="bg-green-50 dark:bg-green-900/10"
                   />
               </div>
           </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Start Your Journey?</h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Admissions are closing soon for the upcoming academic year. Secure your spot today and give your child the best foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                      Apply for Admission
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                      Download Brochure
                  </button>
              </div>
          </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, color, title, description }: { icon: React.ReactNode, color: string, title: string, description: string }) {
  return (
    <div className="group p-8 bg-card rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
      
      <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
          Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}

function StatItem({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) {
    return (
        <div className="text-center group cursor-default">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tight">{number}</div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{label}</div>
        </div>
    )
}

function TestimonialCard({ quote, author, role, bg }: { quote: string, author: string, role: string, bg: string }) {
    return (
        <div className={`p-8 rounded-3xl ${bg} relative`}>
            <Quote className="w-8 h-8 text-black/10 absolute top-8 right-8" />
            <p className="text-lg font-medium text-foreground mb-6 relative z-10 leading-relaxed">"{quote}"</p>
            <div>
                <p className="font-bold text-foreground">{author}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
            </div>
        </div>
    )
}
