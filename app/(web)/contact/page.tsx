"use client";

import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Bus,
  FileText,
  BadgeHelp,
  ChevronDown,
  CalendarCheck
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-zinc-950/85"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-bold mb-6 backdrop-blur-sm animate-fade-in">
            We're Here to Help
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
             Let's Start a <br className="hidden md:block"/> Conversation
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're looking for admissions information, interested in joining our faculty, or just want to say hello, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Quick Contact & Departments Grid */}
      <section className="py-16 mt-6 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <QuickContactCard 
                    icon={<FileText className="w-6 h-6"/>}
                    title="Admissions"
                    desc="For enrolment inquiries and campus tours."
                    contact="+91 11 2345 6789"
                    email="admissions@edubalance.edu"
                    color="bg-blue-500"
                  />
                  <QuickContactCard 
                    icon={<Bus className="w-6 h-6"/>}
                    title="Transport Desk"
                    desc="Bus routes, timings and safety queries."
                    contact="+91 11 2345 6790"
                    email="transport@edubalance.edu"
                    color="bg-yellow-500"
                  />
                  <QuickContactCard 
                    icon={<BadgeHelp className="w-6 h-6"/>}
                    title="General Inquiry"
                    desc="Front desk and administrative support."
                    contact="+91 98765 43210"
                    email="info@edubalance.edu"
                    color="bg-green-500"
                  />
              </div>
          </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Form */}
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg">
                  <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-2 text-foreground">Write to Us</h2>
                      <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                  </div>

                  <form className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <InputField label="First Name" placeholder="Rahul" type="text" />
                          <InputField label="Last Name" placeholder="Sharma" type="text" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <InputField label="Email" placeholder="rahul@example.com" type="email" />
                          <InputField label="Phone" placeholder="+91 98765 43210" type="tel" />
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">I am interested in</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                              <option>Admissions Information</option>
                              <option> scheduling a Campus Visit</option>
                              <option>Student Support</option>
                              <option>Careers / Job Application</option>
                              <option>Feedback / Suggestion</option>
                          </select>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                      </div>

                      <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 group">
                          Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                  </form>
              </div>

              {/* Right Column: Detailed Info & Map */}
              <div className="space-y-12">
                  
                  {/* Visit Us */}
                  <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                          <MapPin className="w-6 h-6 text-primary" /> Visit Our Campus
                      </h3>
                      <div className="bg-secondary/10 p-6 rounded-2xl border border-border/50">
                          <p className="text-lg font-medium mb-2">EduBalance International School</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                              123 Education Lane, Knowledge Park III,<br/>
                              Greater Noida, Delhi NCR - 201306
                          </p>
                          <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" /> Mon-Sat: 8:00 AM - 4:00 PM
                                </div>
                          </div>
                      </div>
                  </div>

                  {/* Connect Socially */}
                  <div>
                      <h3 className="text-2xl font-bold mb-6">Connect Socially</h3>
                      <div className="flex gap-4">
                          <SocialBtn icon={<Facebook className="w-5 h-5"/>} label="Facebook" />
                          <SocialBtn icon={<Twitter className="w-5 h-5"/>} label="Twitter" />
                          <SocialBtn icon={<Instagram className="w-5 h-5"/>} label="Instagram" />
                          <SocialBtn icon={<Linkedin className="w-5 h-5"/>} label="LinkedIn" />
                      </div>
                  </div>

                  {/* FAQ Teaser */}
                  <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                      <div className="divide-y divide-border">
                          <FAQItem question="What are the office hours for admissions?" answer="The admission office is open Monday to Saturday from 9:00 AM to 3:00 PM." />
                          <FAQItem question="Is school transport available for all routes?" answer="We cover most major routes in Delhi NCR. Check the transport desk above for specific details." />
                          <FAQItem question="How can I schedule a dedicated tour?" answer="You can use the contact form on this page and select 'Campus Visit' or call our admissions hotline." />
                      </div>
                  </div>

              </div>
          </div>
      </section>

       {/* Map Section */}
       <section className="h-[500px] w-full bg-secondary/10 relative border-t border-border">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.684260682857!2d77.2065874749557!3d28.61393907567491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36a9926315%3A0xe6c4c51576974797!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1705663675000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) opacity(0.9)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Overlay Card on Map */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl border border-border max-w-xs animate-fade-in-up hidden md:block">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Easy Navigation</h4>
                        <p className="text-xs text-muted-foreground mb-3">Click on 'Directions' in the map to find the best route to our campus.</p>
                        <a href="https://maps.google.com" target="_blank" className="text-primary text-sm font-bold hover:underline">Get Directions →</a>
                    </div>
                </div>
            </div>
      </section>

    </div>
  );
}

function InputField({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{label}</label>
            <input 
                type={type} 
                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50" 
                placeholder={placeholder} 
            />
        </div>
    )
}

function QuickContactCard({ icon, title, desc, contact, email, color }: any) {
    return (
        <div className="bg-card p-6 rounded-2xl border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
            <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-10 flex items-center justify-center text-${color.split('-')[1]}-600 mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{desc}</p>
            <div className="space-y-1">
                <p className="font-bold text-foreground text-sm flex items-center gap-2">
                    <Phone className="w-3 h-3" /> {contact}
                </p>
                <p className="font-bold text-primary text-sm flex items-center gap-2 hover:underline cursor-pointer">
                    <Mail className="w-3 h-3" /> {email}
                </p>
            </div>
        </div>
    )
}

function SocialBtn({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <a href="#" className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all hover:-translate-y-1 group" title={label}>
            <div className="group-hover:scale-110 transition-transform">
                {icon}
            </div>
        </a>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
       <div className="py-4 border-b border-border last:border-0">
           <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-left font-semibold text-foreground hover:text-primary transition-colors"
           >
               {question}
               <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
           </button>
           <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}>
               <p className="text-muted-foreground text-sm leading-relaxed pr-4">
                   {answer}
               </p>
           </div>
       </div>
    )
}
