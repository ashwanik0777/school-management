"use client";

import { CalendarCheck, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';

const events = [
    {
        month: "April 2026",
        items: [
            { date: "01", day: "Wed", event: "New Academic Session Begins", type: "academic" },
            { date: "14", day: "Tue", event: "Dr. Ambedkar Jayanti (Holiday)", type: "holiday" },
            { date: "22", day: "Wed", event: "Earth Day Celebration", type: "activity" }
        ]
    },
    {
        month: "May 2026",
        items: [
            { date: "01", day: "Fri", event: "Labor Day", type: "holiday" },
            { date: "15", day: "Fri", event: "Summer Break Begins (Pre-Primary)", type: "holiday" },
            { date: "25", day: "Mon", event: "Unit Test I Begins (Grade 1-12)", type: "exam" }
        ]
    },
    {
        month: "June 2026",
        items: [
            { date: "01", day: "Mon", event: "Summer Vacation Begins (All Grades)", type: "holiday" },
            { date: "21", day: "Sun", event: "International Yoga Day (Online)", type: "activity" }
        ]
    },
    {
        month: "July 2026",
        items: [
            { date: "05", day: "Mon", event: "School Reopens after Summer Break", type: "academic" },
            { date: "25", day: "Sat", event: "Investiture Ceremony", type: "activity" }
        ]
    }
];

export default function AcademicCalendarPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <CalendarCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Academic Calendar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with key dates, examinations, holidays, and school events for the Academic Session 2026-27.
          </p>
          <a href="/calendar.pdf" download className="mt-8 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-primary/30">
              <Download className="w-5 h-5" /> Download PDF Calendar
          </a>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
              {events.map((monthData, idx) => (
                  <div key={idx} className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
                      <div className="bg-secondary/10 px-8 py-4 border-b border-border flex justify-between items-center">
                          <h3 className="text-xl font-bold text-foreground">{monthData.month}</h3>
                      </div>
                      <div className="divide-y divide-border">
                          {monthData.items.map((item, i) => (
                              <div key={i} className="flex items-center p-6 hover:bg-secondary/5 transition-colors">
                                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/5 rounded-2xl border border-primary/10 mr-6 shrink-0">
                                      <span className="text-xl font-black text-primary">{item.date}</span>
                                      <span className="text-xs font-bold text-muted-foreground uppercase">{item.day}</span>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="text-lg font-bold text-foreground mb-1">{item.event}</h4>
                                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                                          item.type === 'holiday' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                          item.type === 'exam' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                          item.type === 'activity' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                      }`}>
                                          {item.type}
                                      </span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </section>

    </div>
  );
}
