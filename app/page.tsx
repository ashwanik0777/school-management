import React from 'react';

export default function EduBalanceShowcase() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      {/* Navigation / Header */}
      <nav className="bg-primary text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded md:rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-semibold text-xl tracking-tight">EduBalance ERP</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium bg-primary/90 hover:bg-white/10 transition-colors">Dashboard</a>
              <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors opacity-90">Academics</a>
              <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors opacity-90">Students</a>
              <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors opacity-90">Reports</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
                <span className="sr-only">Notifications</span>
                 <svg className="w-6 h-6 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold border-2 border-white/20">
                AD
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Welcome back, Principal Anderson</h1>
          <p className="mt-2 text-text-secondary">Here's what's happening in your school today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Total Students" 
            value="2,450" 
            change="+5% from last term" 
            trend="up"
            icon={<svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          />
          <MetricCard 
            title="Avg. Attendance" 
            value="94.2%" 
            change="-1.2% from yesterday" 
            trend="down"
            icon={<svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <MetricCard 
            title="Fee Collection" 
            value="$45,231" 
            change="Keep it up!" 
            trend="neutral"
            icon={<svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <MetricCard 
            title="Pending Leaves" 
            value="12" 
            change="Requires attention" 
            trend="attention"
            icon={<svg className="w-6 h-6 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area - Recent Activities / Chart Placeholder */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-lg font-semibold text-text-primary">Recent Notice Board</h2>
                 <button className="text-sm text-primary hover:text-primary/80 font-medium">View All</button>
              </div>
              <div className="space-y-4">
                 <NoticeItem 
                    category="Academic" 
                    title="Mid-Term Examination Schedule Released" 
                    date="Today, 10:30 AM" 
                    urgent={true}
                 />
                 <NoticeItem 
                    category="Event" 
                    title="Annual Sports Day Registration Open" 
                    date="Yesterday" 
                    urgent={false}
                 />
                 <NoticeItem 
                    category="System" 
                    title="Scheduled Maintenance Breakdown" 
                    date="2 days ago" 
                    urgent={false}
                 />
              </div>
            </div>

             <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <ActionButton label="Add Student" color="primary" />
                 <ActionButton label="Create Exam" color="secondary" />
                 <ActionButton label="Send SMS" color="accent" />
                 <ActionButton label="Update Fees" color="warning" />
              </div>
            </div>
          </div>

          {/* Sidebar - Schedule */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Today's Schedule</h2>
            <div className="space-y-6">
              <ScheduleItem time="08:00 AM" title="Morning Assembly" type="General" />
              <ScheduleItem time="09:15 AM" title="Staff Meeting (Room 101)" type="Meeting" active />
              <ScheduleItem time="11:30 AM" title="Class 10-B Inspection" type="Academic" />
              <ScheduleItem time="02:00 PM" title="Parent Meeting - Mr. Gupta" type="Meeting" />
            </div>
            <div className="mt-8 pt-6 border-t border-border">
               <div className="bg-background rounded-lg p-4 border border-border/50">
                  <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-2">Quote of the day</h4>
                  <p className="text-text-primary italic text-sm">"Education is the most powerful weapon which you can use to change the world."</p>
               </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// Sub-components for Atomic Design alignment

function MetricCard({ title, value, change, icon, trend }: { title: string, value: string, change: string, icon: React.ReactNode, trend: 'up' | 'down' | 'neutral' | 'attention' }) {
  const trendColor = {
    up: 'text-accent',
    down: 'text-error',
    neutral: 'text-text-secondary',
    attention: 'text-warning'
  }[trend];

  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-background rounded-lg border border-border/50">{icon}</div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-background ${trendColor}`}>{change}</span>
      </div>
      <h3 className="text-text-secondary text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-text-primary mt-1">{value}</p>
    </div>
  );
}

function NoticeItem({ category, title, date, urgent }: { category: string, title: string, date: string, urgent: boolean }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors border border-transparent hover:border-border/50 group">
            <div className={`w-1 h-12 rounded-full ${urgent ? 'bg-error' : 'bg-primary/40'}`}></div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">{category}</span>
                    <span className="text-xs text-text-secondary">{date}</span>
                </div>
                <h4 className="text-text-primary font-medium group-hover:text-primary transition-colors">{title}</h4>
            </div>
        </div>
    )
}

function ScheduleItem({ time, title, type, active }: { time: string, title: string, type: string, active?: boolean }) {
    return (
        <div className={`relative flex gap-4 ${active ? 'opacity-100' : 'opacity-70'}`}>
             <div className="flex flex-col items-center">
                 <div className={`w-3 h-3 rounded-full border-2 ${active ? 'bg-primary border-primary ring-2 ring-primary/20' : 'bg-background border-text-secondary'}`}></div>
                 <div className="w-0.5 h-full bg-border flex-1 my-1"></div>
             </div>
             <div className="pb-4">
                 <p className="text-xs font-medium text-text-secondary mb-0.5">{time}</p>
                 <p className="text-text-primary font-medium">{title}</p>
                 <span className="text-xs text-text-secondary bg-background px-2 py-0.5 rounded border border-border inline-block mt-2">{type}</span>
             </div>
        </div>
    )
}

function ActionButton({ label, color }: { label: string, color: string }) {
    // Mapping internal logic to class names would normally be precise, relying on dynamic template strings
    // But for Tailwind v3/v4 dynamic classes needs to be full strings usually, or safelisted. 
    // I'll stick to specific manual mapping for optimized code to avoid compilation misses.
    
    let btnClass = "flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer text-center h-full";
    let iconClass = "w-8 h-8 mb-2 rounded-full flex items-center justify-center";
    let svgIcon = null;

    if (color === 'primary') {
        btnClass += " bg-white border-primary/20 hover:border-primary/50 group";
        iconClass += " bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors";
        svgIcon = <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
    } else if (color === 'secondary') {
        btnClass += " bg-white border-secondary/20 hover:border-secondary/50 group";
        iconClass += " bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors";
        svgIcon = <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    } else if (color === 'accent') {
         btnClass += " bg-white border-accent/20 hover:border-accent/50 group";
         iconClass += " bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors";
         svgIcon = <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
    } else {
        btnClass += " bg-white border-warning/20 hover:border-warning/50 group";
        iconClass += " bg-warning/10 text-warning group-hover:bg-warning group-hover:text-white transition-colors";
        svgIcon = <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    }

    return (
        <button className={btnClass}>
            <div className={iconClass}>
                {svgIcon}
            </div>
            <span className="text-sm font-medium text-text-primary">{label}</span>
        </button>
    )
}
