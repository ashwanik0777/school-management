"use client";

import { FileCheck, AlertCircle, Scale, Gavel } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Terms of Use</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using the EduBalance website and digital portal.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
              
              <TermSection title="1. Acceptance of Terms">
                  <p>
                      By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                      If you do not agree to abide by these terms, please do not use this service.
                  </p>
              </TermSection>

              <TermSection title="2. User Conduct">
                  <p>In using our website and student portal, you agree NOT to:</p>
                  <ul className="list-decimal pl-5 space-y-2 mt-4 text-muted-foreground">
                      <li>Use the service for any unlawful purpose or in violation of school policies.</li>
                      <li>Attempt to gain unauthorized access to our computer systems or student records.</li>
                      <li>Harass, abuse, or harm another person via our communication channels.</li>
                      <li>Upload malicious code, viruses, or potentially harmful content.</li>
                  </ul>
              </TermSection>

              <TermSection title="3. Intellectual Property">
                  <p>
                      All content provided on this website, including but not limited to the logo, text, graphics, and curriculum materials, is the property of EduBalance International School.
                      You may not reproduce, duplicate, copy, sell, or exploit any portion of the content without express written permission.
                  </p>
              </TermSection>

              <TermSection title="4. Disclaimer of Liability">
                  <p>
                      The materials on EduBalance's website are provided "as is". EduBalance makes no warranties, expressed or implied. 
                      While we strive for accuracy, the school is not liable for any damages arising from the use or inability to use the materials on the website.
                  </p>
              </TermSection>

              <TermSection title="5. Code of Conduct">
                  <div className="flex gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-xl text-sm text-yellow-800 dark:text-yellow-200">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <div>
                          <p className="font-bold mb-1">Important Note for Students & Parents</p>
                          <p>
                              Use of the school portal is also governed by the Student Handbook and IT Acceptable Use Policy signed at the time of admission. 
                              Violations may result in disciplinary action.
                          </p>
                      </div>
                  </div>
              </TermSection>

              <TermSection title="6. Governing Law">
                  <p>
                      These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the jurisdiction of the courts in New Delhi.
                  </p>
              </TermSection>

          </div>
      </section>

    </div>
  );
}

function TermSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="group">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                <div className="w-2 h-8 bg-secondary rounded-full group-hover:bg-primary transition-colors"></div>
                {title}
            </h2>
            <div className="text-muted-foreground leading-relaxed pl-4 border-l border-border ml-1">
                {children}
            </div>
        </div>
    )
}
