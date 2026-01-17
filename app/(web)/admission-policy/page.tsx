"use client";

import { FileText, Check, AlertTriangle } from 'lucide-react';

export default function AdmissionPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Admission Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, merit-based, and inclusive guidelines governing the admission process at EduBalance International School.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
              
              <PolicyBlock title="1. Overview">
                  <p>
                      Admissions at EduBalance International School are open to all students irrespective of caste, creed, gender, or nationality. 
                      However, admission is subject to the availability of seats and meeting the eligibility criteria.
                  </p>
              </PolicyBlock>

              <PolicyBlock title="2. Entry Levels">
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li><strong>Nursery:</strong> Primary entry point. Age 3+ as of March 31st.</li>
                      <li><strong>Kindergarten to Grade 9:</strong> Subject to vacancy. Admission is based on previous school records and an assessment.</li>
                      <li><strong>Grade 11:</strong> Based strictly on Grade 10 Board results and an aptitude test/interview.</li>
                  </ul>
              </PolicyBlock>

              <PolicyBlock title="3. Selection Process">
                  <p>The selection process is designed to be fair and transparent:</p>
                  <div className="mt-4 space-y-4">
                      <div className="flex gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          <p><strong>Pre-Primary:</strong> Interaction with parents and child. No formal written test.</p>
                      </div>
                      <div className="flex gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          <p><strong>Grade 1 and above:</strong> Written assessment in English, Math, and Science followed by an interview.</p>
                      </div>
                  </div>
              </PolicyBlock>

              <PolicyBlock title="4. Reservation of Seats">
                  <p>
                       EduBalance adheres to the Right to Education (RTE) Act guidelines. 25% of seats in entry-level classes are reserved for EWS (Economically Weaker Section) category candidates as per government norms.
                  </p>
              </PolicyBlock>

              <PolicyBlock title="5. Withdrawal Policy">
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30 flex gap-3 text-sm text-red-800 dark:text-red-300">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <div>
                          <p className="font-bold mb-1">Notice Period</p>
                          <p>A clear one calendar month notice in writing or a month's fee in lieu thereof is required for withdrawal of a student from the school.</p>
                      </div>
                  </div>
              </PolicyBlock>

          </div>
      </section>
      
    </div>
  );
}

function PolicyBlock({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
            <div className="text-muted-foreground leading-relaxed">
                {children}
            </div>
        </div>
    )
}
