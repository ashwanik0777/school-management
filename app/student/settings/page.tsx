"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Layout, 
  Bell, 
  Shield, 
  Palette, 
  Check,
  Save,
  ToggleLeft,
  ToggleRight,
  MousePointer2,
  BarChart3,
  Calendar,
  ClipboardList,
  TrendingUp,
  Target,
  Library as LibraryIcon,
  CreditCard,
  Moon,
  Sun,
  Smartphone
} from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Reusable Switch Component
function Switch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      type="button"
      className={cn(
        "relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
        checked ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSaving, setIsSaving] = useState(false);
  
  // -------------------------
  // MOCK STATES
  // -------------------------
  
  // 1. Dashboard Widgets
  const [widgets, setWidgets] = useState([
    { id: "stats", name: "Academic Stats Cards", enabled: true, icon: BarChart3 },
    { id: "schedule", name: "Today's Schedule", enabled: true, icon: Calendar },
    { id: "assignments", name: "Pending Assignments", enabled: true, icon: ClipboardList },
    { id: "attendance", name: "Attendance Chart", enabled: true, icon: TrendingUp },
    { id: "exams", name: "Upcoming Exams", enabled: false, icon: Target },
    { id: "library", name: "Library Books", enabled: false, icon: LibraryIcon },
    { id: "fees", name: "Fee Status", enabled: true, icon: CreditCard },
  ]);

  const toggleWidget = (id: string) => {
    setWidgets(widgets.map(w => 
      w.id === id ? { ...w, enabled: !w.enabled } : w
    ));
  };

  // 2. Interactions
  const [interactions, setInteractions] = useState([
      { id: "sidebar", title: "Auto-Expand Sidebar", desc: "Show menu labels on hover", enabled: true, icon: ToggleLeft },
      { id: "animations", title: "Smooth Transitions", desc: "Enable page animations", enabled: true, icon: ToggleRight }
  ]);
  
  const toggleInteraction = (id: string) => {
      setInteractions(interactions.map(i => i.id === id ? { ...i, enabled: !i.enabled } : i));
  }

  // 3. Notifications
  const [notifications, setNotifications] = useState([
      { id: "exam", title: "Exam Schedule Updates", desc: "Get notified when exam dates change.", type: "email", enabled: true },
      { id: "homework", title: "New Assignments", desc: "Receive alerts for new homework.", type: "push", enabled: true },
      { id: "fees", title: "Fee Reminders", desc: "Weekly reminders for pending dues.", type: "email", enabled: false },
      { id: "results", title: "Result Announcements", desc: "Instant notification when results are out.", type: "push", enabled: true }
  ]);

  const toggleNotification = (id: string) => {
      setNotifications(notifications.map(n => n.id === id ? { ...n, enabled: !n.enabled } : n));
  }

  // 4. Appearance
  const [themeMode, setThemeMode] = useState("system"); // light, dark, system
  const [themeColor, setThemeColor] = useState("blue");

  const handleSave = () => {
      setIsSaving(true);
      setTimeout(() => setIsSaving(false), 2000);
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Layout },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Top Navigation Tabs */}
      <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:mx-0 hide-scrollbar">
         <div className="flex items-center gap-2 md:gap-4 min-w-max bg-white dark:bg-slate-800 p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mx-auto w-fit">
             {tabs.map((tab) => {
                 const Icon = tab.icon;
                 const isActive = activeTab === tab.id;
                 return (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl font-bold transition-all text-sm whitespace-nowrap",
                            isActive 
                                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md transform scale-100"
                                : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white"
                        )}
                     >
                         <Icon className={cn("w-4 h-4", isActive ? "" : "opacity-70")} />
                         {tab.label}
                     </button>
                 )
             })}
         </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full space-y-6">
          
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                  {/* Widgets Section */}
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl">
                                  <Layout className="w-5 h-5" />
                              </div>
                              <div>
                                  <h2 className="text-lg font-bold text-slate-800 dark:text-white">Active Widgets</h2>
                                  <p className="text-slate-500 text-sm font-medium">Customize your home screen.</p>
                              </div>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {widgets.map((widget) => (
                              <div 
                                key={widget.id}
                                onClick={() => toggleWidget(widget.id)}
                                className={cn(
                                    "relative overflow-hidden flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer hover:border-blue-300 dark:hover:border-blue-700",
                                    widget.enabled
                                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm"
                                        : "border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0"
                                )}
                              >
                                  <div className="flex items-center gap-3 relative z-10">
                                      <div className={cn(
                                          "p-2 rounded-lg transition-colors",
                                          widget.enabled ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm" : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                                      )}>
                                          <widget.icon className="w-5 h-5" />
                                      </div>
                                      <span className={cn(
                                          "font-bold text-sm md:text-base",
                                          widget.enabled ? "text-slate-800 dark:text-white" : "text-slate-500"
                                      )}>{widget.name}</span>
                                  </div>
                                  
                                  {/* Custom Checkbox/Toggle Visual */}
                                  <div className={cn(
                                      "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                      widget.enabled ? "bg-blue-500 border-blue-500 scale-110" : "border-slate-300 dark:border-slate-600 scale-100"
                                  )}>
                                      <Check className={cn("w-3 h-3 text-white transition-transform", widget.enabled ? "scale-100" : "scale-0")} strokeWidth={4} />
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Interactions Section */}
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                       <div className="flex items-center gap-3 mb-6">
                          <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-xl">
                              <MousePointer2 className="w-5 h-5" />
                          </div>
                          <div>
                              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Interactions</h2>
                              <p className="text-slate-500 text-sm font-medium">Fine-tune dashboard behavior.</p>
                          </div>
                      </div>
                      
                      <div className="space-y-3">
                           {interactions.map((item) => (
                               <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                   <div className="flex gap-3 items-center">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-slate-400">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm md:text-base text-slate-800 dark:text-white leading-tight">{item.title}</h3>
                                            <p className="text-xs text-slate-500 font-medium mt-0.5">{item.desc}</p>
                                        </div>
                                   </div>
                                   <Switch checked={item.enabled} onChange={() => toggleInteraction(item.id)} />
                               </div>
                           ))}
                      </div>
                  </div>
              </div>
          )}

          {/* APPEARANCE TAB */}
           {activeTab === 'appearance' && (
               <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-8 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                   
                   {/* Theme Mode */}
                   <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl">
                                <Palette className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Interface Theme</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: 'light', label: 'Light Mode', icon: Sun },
                                { id: 'dark', label: 'Dark Mode', icon: Moon },
                                { id: 'system', label: 'System Default', icon: Smartphone }
                            ].map((mode) => (
                                <button 
                                    key={mode.id}
                                    onClick={() => setThemeMode(mode.id)}
                                    className={cn(
                                        "p-4 rounded-2xl border-2 transition-all text-center space-y-3 group relative",
                                        themeMode === mode.id 
                                            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-800"
                                            : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-[1.02]"
                                    )}
                                >
                                    <div className={cn(
                                        "w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-colors",
                                        themeMode === mode.id ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "bg-white dark:bg-slate-800 text-slate-400 shadow-sm"
                                    )}>
                                        <mode.icon className="w-6 h-6" />
                                    </div>
                                    <span className={cn(
                                        "font-bold text-sm block",
                                        themeMode === mode.id ? "text-blue-700 dark:text-blue-300 scale-105" : "text-slate-600 dark:text-slate-300"
                                    )}>{mode.label}</span>
                                    
                                    {themeMode === mode.id && (
                                        <div className="absolute top-3 right-3 text-blue-600"><Check className="w-5 h-5" /></div>
                                    )}
                                </button>
                            ))}
                        </div>
                   </div>

                   <div className="h-px bg-slate-100 dark:bg-slate-700"></div>

                   {/* Accent Color */}
                   <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Accent Color</h3>
                        <div className="flex flex-wrap gap-3">
                            {['blue', 'purple', 'pink', 'green', 'orange', 'red', 'teal'].map(color => (
                                <button 
                                    key={color}
                                    onClick={() => setThemeColor(color)}
                                    className={cn(
                                        "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm relative group",
                                        themeColor === color ? "ring-2 ring-offset-2 ring-slate-300 dark:ring-slate-600 scale-110" : "hover:ring-2 hover:ring-slate-200"
                                    )}
                                    style={{ backgroundColor: `var(--color-${color}-500, ${getColorHex(color)})` }}
                                >
                                    {themeColor === color && <Check className="text-white w-5 h-5 drop-shadow-md" strokeWidth={3} />}
                                </button>
                            ))}
                        </div>
                   </div>
               </div>
           )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl">
                          <Bell className="w-5 h-5" />
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Notifications</h3>
                          <p className="text-slate-500 text-sm font-medium">Manage alerts & preferences.</p>
                      </div>
                  </div>

                  <div className="divide-y divide-slate-100 dark:divide-slate-700">
                       {notifications.map((item) => (
                           <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors px-2 rounded-xl -mx-2">
                               <div>
                                   <h4 className="font-bold text-sm md:text-base text-slate-800 dark:text-white mb-0.5">{item.title}</h4>
                                   <p className="text-slate-500 text-xs md:text-sm font-medium">{item.desc}</p>
                               </div>
                               <div className="flex items-center gap-3">
                                   <span className={cn(
                                       "hidden md:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg border",
                                       item.type === 'email' ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-purple-50 text-purple-600 border-purple-100"
                                   )}>
                                       {item.type}
                                   </span>
                                   <Switch checked={item.enabled} onChange={() => toggleNotification(item.id)} />
                               </div>
                           </div>
                       ))}
                  </div>
              </div>
          )}

           {/* SECURITY TAB */}
           {activeTab === 'security' && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom-2 duration-300 fade-in">
                   <div className="flex items-center gap-3 mb-6">
                       <div className="p-2.5 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl">
                           <Shield className="w-5 h-5" />
                       </div>
                       <div>
                          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Security</h3>
                          <p className="text-slate-500 text-sm font-medium">Update your password securely.</p>
                       </div>
                   </div>
                   
                   <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-900/50 p-5 md:p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                       <div className="space-y-4">
                           <div>
                               <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">Current Password</label>
                               <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 transition-all font-bold text-slate-800 dark:text-white outline-none text-sm" />
                           </div>
                           <div>
                               <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">New Password</label>
                               <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 transition-all font-bold text-slate-800 dark:text-white outline-none text-sm" />
                           </div>
                           <div>
                               <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">Confirm New Password</label>
                               <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-0 transition-all font-bold text-slate-800 dark:text-white outline-none text-sm" />
                           </div>
                           <div className="pt-2">
                              <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 md:py-3.5 rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm md:text-base active:scale-[0.98]">
                                  Update Password
                              </button>
                           </div>
                       </div>
                   </div>
              </div>
           )}

      </div>
      
      {/* Floating Bottom Bar for Save Actions */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-in slide-in-from-bottom-10 fade-in duration-700">
           <button 
                onClick={handleSave}
                className={cn(
                    "flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-2xl shadow-blue-600/40 transition-all active:scale-95 group backdrop-blur-md",
                    isSaving ? "pl-5 pr-6 bg-green-500 hover:bg-green-600 shadow-green-600/40 cursor-default" : "hover:-translate-y-1"
                )}
            >
                {isSaving ? (
                    <>
                        <Check className="w-5 h-5 md:w-6 md:h-6 animate-in zoom-in spin-in-90 duration-300" />
                        <span className="text-base md:text-lg">Saved!</span>
                    </>
                ) : (
                    <>
                        <Save className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-base md:text-lg">Save Changes</span>
                    </>
                )}
           </button>
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
        orange: '#f97316',
        red: '#ef4444', 
        teal: '#14b8a6'
    };
    return colors[name] || '#3b82f6';
}
