import { Bell, BookOpen, Clock, MoreHorizontal, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* 1. Courses Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary">Your Courses</h3>
          <button className="p-2 hover:bg-card rounded-full transition-colors text-text-secondary">
             <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Card 1 - UX/UI */}
           <div className="p-6 rounded-3xl bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30 relative overflow-hidden group hover:shadow-lg transition-all">
               <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-white dark:bg-pink-900/50 rounded-2xl shadow-sm text-pink-500">
                       <BookOpen className="w-6 h-6" />
                   </div>
                   <div className="w-16 h-16 bg-pink-200/50 rounded-full blur-2xl absolute -top-4 -right-4"></div>
               </div>
               <h4 className="text-xl font-bold text-gray-800 dark:text-pink-100 mb-1">UX/UI Design</h4>
               <p className="text-sm text-gray-500 dark:text-pink-300/80 mb-6">Advanced Interface Principles</p>
               
               <div className="flex items-end justify-between">
                   <div className="flex -space-x-3">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs font-bold text-white">+17</div>
                   </div>
                   <div className="text-right">
                       <span className="text-2xl font-black text-pink-500">70%</span>
                       <div className="w-24 h-1.5 bg-white dark:bg-pink-900/50 rounded-full mt-1 overflow-hidden">
                           <div className="h-full bg-pink-500 w-[70%] rounded-full"></div>
                       </div>
                   </div>
               </div>
           </div>

           {/* Card 2 - HTML/CSS */}
            <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden group hover:shadow-lg transition-all">
               <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-white dark:bg-blue-900/50 rounded-2xl shadow-sm text-blue-500">
                       <TrendingUp className="w-6 h-6" />
                   </div>
                   {/* Decorative Stripes */}
                   <div className="absolute top-4 right-4 flex gap-1">
                       <div className="w-1 h-8 bg-blue-200/50 rotate-12 rounded"></div>
                       <div className="w-1 h-8 bg-blue-200/50 rotate-12 rounded"></div>
                       <div className="w-1 h-8 bg-blue-200/50 rotate-12 rounded"></div>
                   </div>
               </div>
               <h4 className="text-xl font-bold text-gray-800 dark:text-blue-100 mb-1">HTML/CSS Guide</h4>
               <p className="text-sm text-gray-500 dark:text-blue-300/80 mb-6">Frontend Fundamentals</p>
               
               <div className="flex items-end justify-between">
                   <div className="flex -space-x-3">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                   </div>
                   <div className="text-right">
                       <span className="text-2xl font-black text-blue-500">50%</span>
                       <div className="w-24 h-1.5 bg-white dark:bg-blue-900/50 rounded-full mt-1 overflow-hidden">
                           <div className="h-full bg-blue-500 w-[50%] rounded-full"></div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* 2. Middle Row: Stats Grid + Event List */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Events */}
          <div className="lg:col-span-1 bg-card border border-border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-text-primary">Events</h3>
                <div className="flex gap-2 text-text-secondary">
                    <button className="hover:text-primary"><Clock className="w-4 h-4" /></button>
                </div>
              </div>
              
              <div className="space-y-4">
                  <div className="p-4 bg-background rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors cursor-pointer">
                      <div>
                          <p className="text-xs text-text-secondary mb-1">10:30 AM</p>
                          <h4 className="font-bold text-text-primary text-sm group-hover:text-primary">Design Festival</h4>
                          <span className="text-xs text-text-secondary">Auditorium Hall A</span>
                      </div>
                      <Bell className="w-4 h-4 text-text-secondary group-hover:text-primary" />
                  </div>
                   <div className="p-4 bg-background rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors cursor-pointer">
                       <div>
                          <p className="text-xs text-text-secondary mb-1">02:00 PM</p>
                          <h4 className="font-bold text-text-primary text-sm group-hover:text-primary">Cyber Security Workshop</h4>
                          <span className="text-xs text-text-secondary">Lab 3</span>
                      </div>
                      <Bell className="w-4 h-4 text-text-secondary group-hover:text-primary" />
                  </div>
              </div>
          </div>

          {/* Right: Quick Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
               <StatCard label="Homeworks" value="8 / 12" />
               <StatCard label="Rewards" value="9 / 10" />
               <StatCard label="Attendance" value="95%" />
               <StatCard label="English Lessons" value="16 / 32" />

               <div className="col-span-2 sm:col-span-4 bg-card border border-border rounded-3xl p-6 mt-2 relative overflow-hidden">
                   <div className="flex justify-between items-center mb-4">
                       <h3 className="font-bold text-text-primary">Learning Hours</h3>
                       <select className="text-xs bg-transparent border-none text-text-secondary focus:ring-0 cursor-pointer">
                           <option>Weekly</option>
                           <option>Monthly</option>
                       </select>
                   </div>
                   
                   {/* Simple Bar Chart Visualization */}
                   <div className="flex items-end justify-between h-32 px-2 gap-2">
                       {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => (
                           <div key={day} className="flex flex-col items-center gap-2 group w-full">
                               <div 
                                 className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 ${i === 2 || i === 4 ? 'bg-primary' : 'bg-border'}`}
                                 style={{ height: `${[40, 60, 100, 50, 80, 20, 30][i]}%` }}
                               ></div>
                               <span className="text-xs font-medium text-text-secondary">{day}</span>
                           </div>
                       ))}
                   </div>
               </div>
          </div>
      </section>
      
    </div>
  );
}

function StatCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-card border border-border p-5 rounded-3xl flex flex-col justify-center items-center text-center shadow-sm hover:translate-y-[-2px] transition-transform">
            <h4 className="text-2xl font-black text-primary mb-1">{value}</h4>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-tight">{label}</p>
        </div>
    )
}
