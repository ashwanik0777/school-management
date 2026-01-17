"use client";

import { Shield, Lock, Eye, FileText, Server } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            At EduBalance, we value your trust and are committed to protecting the privacy of our students, parents, and staff.
          </p>
          <p className="mt-4 text-sm opacity-70">
            Last Updated: January 17, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
              
              <PolicySection 
                title="1. Information We Collect" 
                icon={<FileText className="w-6 h-6 text-primary"/>}
              >
                  <p>We collect information to provide better educational services and ensure campus safety. This includes:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
                      <li><strong>Personal Information:</strong> Names, contact details, dates of birth, and identification documents of students and guardians.</li>
                      <li><strong>Academic Records:</strong> Grades, attendance, disciplinary records, and evaluation reports.</li>
                      <li><strong>Health Information:</strong> Medical history and allergy information relevant to student safety.</li>
                      <li><strong>Digital Usage Data:</strong> Login logs, IP addresses, and device information when accessing our portal.</li>
                  </ul>
              </PolicySection>

              <PolicySection 
                title="2. How We Use Your Information" 
                icon={<Eye className="w-6 h-6 text-primary"/>}
              >
                  <p>The collected data is strictly used for school administration and educational purposes:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
                      <li>To process admissions and enrollments.</li>
                      <li>To communicate important announcements, progress reports, and emergency alerts.</li>
                      <li>To maintain a safe and secure environment (e.g., visitor logs).</li>
                      <li>To improve our digital infrastructure and learning management systems.</li>
                  </ul>
              </PolicySection>

              <PolicySection 
                title="3. Data Protection & Security" 
                icon={<Lock className="w-6 h-6 text-primary"/>}
              >
                  <p>
                      We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
                      Our student database is encrypted and accessible only to authorized personnel.
                  </p>
              </PolicySection>

              <PolicySection 
                title="4. Sharing of Information" 
                icon={<Server className="w-6 h-6 text-primary"/>}
              >
                  <p>We do not sell or rent personal information. We may share data only in the following circumstances:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
                      <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation.</li>
                      <li><strong>Service Providers:</strong> With trusted third-party vendors (e.g., transport, cafeteria services) under strict confidentiality agreements.</li>
                  </ul>
              </PolicySection>

              <div className="bg-secondary/10 p-6 rounded-2xl border border-border mt-8">
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="text-muted-foreground text-sm">
                      If you have any questions about this Privacy Policy, please contact our administrative office at 
                      <a href="mailto:privacy@edubalance.edu" className="text-primary font-bold hover:underline ml-1">privacy@edubalance.edu</a>.
                  </p>
              </div>

          </div>
      </section>

    </div>
  );
}

function PolicySection({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            </div>
            <div className="text-foreground/80 leading-relaxed">
                {children}
            </div>
        </div>
    )
}
