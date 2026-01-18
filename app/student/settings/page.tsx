"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Layout, 
  Bell, 
  Shield, 
  Moon, 
  Palette,
  Monitor,
  Check,
  Save,
  ToggleLeft,
  ToggleRight,
  MousePointer2
} from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock State for Settings
  const [widgets, setWidgets] = useState([
    { id: "stats", name: "Academic Stats Cards", enabled: true, icon: "📊" },
    { id: "schedule", name: "Today's Schedule", enabled: true, icon: "📅" },
    { id: "assignments", name: "Pending Assignments", enabled: true, icon: "📝" },
    { id: "attendance", name: "Attendance Chart", enabled: true, icon: "📈" },
    { id: "exams", name: "Upcoming Exams", enabled: false, icon: "🎯" },
    { id: "library", name: "Library Books", enabled: false, icon: "📚" },
    { id: "fees", name: "Fee Status", enabled: true, icon: "💳" },
  ]);

  const [themeColor, setThemeColor] = useState("blue");
  
  const toggleWidget = (id: string) => {
    setWidgets(widgets.map(w => 
      w.id === id ? { ...w, enabled: !w.enabled } : w
    ));
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Layout },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Settings</h1>
           <p className="text-slate-500 font-medium">Customize your student portal experience.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden sticky top-8">
                 <div className="p-3 space-y-1">
                     {tabs.map((tab) => {
                         const Icon = tab.icon;
                         const isActive = activeTab === tab.id;
                         return (
                             <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-sm",
                                    isActive 
                                        ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                                        : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-700"
                                )}
                             >
                                 <Icon className={cn("w-5 h-5", isActive ? "text-blue-500" : "opacity-70")} />
                                 {tab.label}
                             </button>
                         )
                     })}
                 </div>
             </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
              
              {/* DASHBOARD TAB */}
              {activeTab === 'dashboard' && (
                  <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
                                  <Layout className="w-6 h-6" />
                              </div>
                              <div>
                                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">Dashboard Widgets</h2>
                                  <p className="text-sm text-slate-500 font-medium">Choose what you want to see on your home screen.</p>
                              </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {widgets.map((widget) => (
                                  <div 
                                    key={widget.id}
                                    onClick={() => toggleWidget(widget.id)}
                                    className={cn(
                                        "group flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer",
                                        widget.enabled
                                            ? "border-blue-500 bg-blue-50/10 dark:bg-blue-900/5"
                                            : "border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 opacity-70 hover:opacity-100"
                                    )}
                                  >
                                      <div className="flex items-center gap-3">
                                          <span className="text-2xl">{widget.icon}</span>
                                          <span className={cn(
                                              "font-bold",
                                              widget.enabled ? "text-slate-800 dark:text-white" : "text-slate-500"
                                          )}>{widget.name}</span>
                                      </div>
                                      <div className={cn(
                                          "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                          widget.enabled ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-transparent"
                                      )}>
                                          <Check className="w-4 h-4" strokeWidth={3} />
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                           <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-2xl">
                                  <MousePointer2 className="w-6 h-6" />
                              </div>
                              <div>
                                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">Interaction Settings</h2>
                                  <p className="text-sm text-slate-500 font-medium">Manage how you interact with the dashboard.</p>
                              </div>
                          </div>
                          
                          <div className="space-y-4">
                               <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                                   <div>
                                       <h3 className="font-bold text-slate-800 dark:text-white">Auto-Expand Sidebar</h3>
                                       <p className="text-xs text-slate-500 font-medium mt-0.5">Sidebar expands when you hover over it.</p>
                                   </div>
                                   <button className="text-slate-300 hover:text-blue-500 transition-colors">
                                       <ToggleLeft className="w-10 h-10" />
                                   </button>
                               </div>
                               <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                                   <div>
                                       <h3 className="font-bold text-slate-800 dark:text-white">Animation Effects</h3>
                                       <p className="text-xs text-slate-500 font-medium mt-0.5">Show transition animations between pages.</p>
                                   </div>
                                   <button className="text-blue-500">
                                       <ToggleRight className="w-10 h-10" />
                                   </button>
                               </div>
                          </div>
                      </div>
                  </div>
              )}

              {/* APPEARANCE TAB */}
               {activeTab === 'appearance' && (
                   <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 space-y-8">
                       
                       {/* Theme Mode */}
                       <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Color Mode</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all text-center space-y-2 group">
                                    <div className="w-full h-24 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors relative overflow-hidden">
                                        <div className="absolute top-2 left-2 w-16 h-8 bg-white rounded-lg shadow-sm"></div>
                                        <div className="absolute top-12 left-2 w-10 h-10 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span className="font-bold text-slate-600 block">Light</span>
                                </button>
                                <button className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all text-center space-y-2 group">
                                    <div className="w-full h-24 bg-slate-900 rounded-xl group-hover:bg-slate-800 transition-colors relative overflow-hidden">
                                        <div className="absolute top-2 left-2 w-16 h-8 bg-slate-800 rounded-lg shadow-sm border border-slate-700"></div>
                                        <div className="absolute top-12 left-2 w-10 h-10 bg-slate-800 rounded-full shadow-sm border border-slate-700"></div>
                                    </div>
                                    <span className="font-bold text-slate-600 dark:text-slate-400 block">Dark</span>
                                </button>
                                 <button className="p-4 rounded-2xl border-2 border-blue-500 bg-blue-50/10 text-center space-y-2 relative">
                                    <div className="absolute top-3 right-3 text-blue-500"><Check className="w-5 h-5" /></div>
                                    <div className="w-full h-24 bg-gradient-to-br from-slate-100 to-slate-900 rounded-xl relative overflow-hidden opacity-50">
                                    </div>
                                    <span className="font-bold text-blue-600 block">System</span>
                                </button>
                            </div>
                       </div>

                       {/* Accent Color */}
                       <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Accent Color</h3>
                            <div className="flex flex-wrap gap-4">
                                {['blue', 'purple', 'pink', 'green', 'orange'].map(color => (
                                    <button 
                                        key={color}
                                        onClick={() => setThemeColor(color)}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110",
                                            themeColor === color ? "ring-4 ring-offset-2 ring-slate-200 dark:ring-slate-700" : ""
                                        )}
                                        style={{ backgroundColor: `var(--color-${color}-500, ${getColorHex(color)})` }}
                                    >
                                        {themeColor === color && <Check className="text-white w-6 h-6" />}
                                    </button>
                                ))}
                            </div>
                       </div>
                   </div>
               )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === 'notifications' && (
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Notification Preferences</h3>
                      <div className="space-y-6">
                           {[
                               { title: "Exam Schedule Updates", desc: "Get notified when exam dates change.", type: "email" },
                               { title: "New Assignments", desc: "Receive alerts for new homework.", type: "push" },
                               { title: "Fee Reminders", desc: "Weekly reminders for pending dues.", type: "email" },
                               { title: "Result Announcements", desc: "Instant notification when results are out.", type: "push" }
                           ].map((item, i) => (
                               <div key={i} className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-700 last:border-0">
                                   <div>
                                       <h4 className="font-bold text-slate-800 dark:text-white">{item.title}</h4>
                                       <p className="text-sm text-slate-500">{item.desc}</p>
                                   </div>
                                   <div className="flex items-center gap-3">
                                       <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                                           {item.type}
                                       </span>
                                       <button className="text-blue-500">
                                            <ToggleRight className="w-10 h-10" />
                                       </button>
                                   </div>
                               </div>
                           ))}
                      </div>
                  </div>
              )}

               {/* SECURITY TAB */}
               {activeTab === 'security' && (
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                       <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Security Settings</h3>
                       <div className="grid gap-6 max-w-lg">
                           <div>
                               <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Current Password</label>
                               <input type="password" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700" />
                           </div>
                           <div>
                               <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">New Password</label>
                               <input type="password" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700" />
                           </div>
                           <div>
                               <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Confirm New Password</label>
                               <input type="password" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700" />
                           </div>
                           <button className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                               Update Password
                           </button>
                       </div>
                  </div>
               )}

          </div>
      </div>
    </div>
  );
}

// Helper for color mocks
function getColorHex(name: string) {
    const colors: Record<string, string> = {
        blue: '#3b82f6',
        purple: '#8b5cf6',
        pink: '#ec4899',
        green: '#22c55e',
        orange: '#f97316'
    };
    return colors[name];
}
