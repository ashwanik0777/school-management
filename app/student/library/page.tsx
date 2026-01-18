"use client";

import { 
  Search, 
  Book, 
  Clock, 
  AlertCircle,
  Bookmark,
  BookOpen
} from 'lucide-react';

export default function LibraryPage() {
  return (
    <div className="space-y-8">
      
      {/* Search Header */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2">School Library</h1>
              <p className="text-slate-500 mb-8">Browse thousands of books and resources. Manage your borrowed items.</p>
              
              <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for books, authors, or ISBN..." 
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 focus:border-primary focus:ring-0 text-lg font-medium transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                  <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                      Search
                  </button>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Currently Issued */}
          <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Currently Issued
              </h2>
              
              <div className="grid gap-4">
                  <BookCard 
                    title="A Brief History of Time"
                    author="Stephen Hawking"
                    cover="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1000&auto=format&fit=crop"
                    issuedDate="10 Jan, 2026"
                    dueDate="24 Jan, 2026"
                    status="normal"
                  />
                  <BookCard 
                    title="Concepts of Physics - Vol 1"
                    author="H.C. Verma"
                    cover="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop"
                    issuedDate="15 Dec, 2025"
                    dueDate="30 Dec, 2025"
                    status="overdue"
                  />
              </div>

               <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 pt-4">
                  <HistoryIcon className="w-5 h-5 text-slate-400" /> Reading History
              </h2>
               <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 font-bold">
                          <tr>
                              <th className="px-6 py-4">Book Title</th>
                              <th className="px-6 py-4">Returned On</th>
                              <th className="px-6 py-4">Status</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                              <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">To Kill a Mockingbird</td>
                              <td className="px-6 py-4 text-slate-500">05 Jan, 2026</td>
                              <td className="px-6 py-4 text-green-600 font-bold text-xs uppercase">Returned</td>
                          </tr>
                          <tr>
                              <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">1984</td>
                              <td className="px-6 py-4 text-slate-500">20 Dec, 2025</td>
                              <td className="px-6 py-4 text-green-600 font-bold text-xs uppercase">Returned</td>
                          </tr>
                      </tbody>
                  </table>
               </div>
          </div>

          {/* Quick Stats / Wishlist */}
          <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-6">Library Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
                          <p className="text-2xl font-black text-blue-600">12</p>
                          <p className="text-xs font-bold text-slate-500 uppercase mt-1">Books Read</p>
                      </div>
                      <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-center">
                          <p className="text-2xl font-black text-orange-600">₹ 50</p>
                          <p className="text-xs font-bold text-slate-500 uppercase mt-1">Fine Due</p>
                      </div>
                  </div>
              </div>

               <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Bookmark className="w-5 h-5 text-primary" /> My Wishlist
                  </h3>
                   <ul className="space-y-4">
                       <li className="flex items-start gap-3 pb-4 border-b border-dashed border-slate-200 last:border-0 last:pb-0">
                           <div className="w-10 h-14 bg-slate-200 rounded shrink-0"></div>
                           <div>
                               <p className="font-bold text-sm line-clamp-2">Principles of Quantum Mechanics</p>
                               <p className="text-xs text-slate-500 mt-1">R. Shankar</p>
                               <button className="text-xs font-bold text-primary mt-2">Check Availability</button>
                           </div>
                       </li>
                       <li className="flex items-start gap-3 pb-4 border-b border-dashed border-slate-200 last:border-0 last:pb-0">
                           <div className="w-10 h-14 bg-slate-200 rounded shrink-0"></div>
                           <div>
                               <p className="font-bold text-sm line-clamp-2">The Alchemist</p>
                               <p className="text-xs text-slate-500 mt-1">Paulo Coelho</p>
                               <button className="text-xs font-bold text-primary mt-2">Check Availability</button>
                           </div>
                       </li>
                   </ul>
              </div>
          </div>

      </div>
    </div>
  );
}

function BookCard({ title, author, cover, issuedDate, dueDate, status }: any) {
    return (
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${status === 'overdue' ? 'bg-red-500' : 'bg-primary'}`}></div>
            
            <div className="w-20 md:w-24 aspect-[2/3] bg-slate-200 rounded-lg shrink-0 overflow-hidden shadow-sm">
                <img src={cover} alt={title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white line-clamp-1">{title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4">{author}</p>
                
                <div className="flex flex-wrap gap-4 md:gap-8">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Issued On</p>
                        <p className="font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {issuedDate}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Due Date</p>
                        <p className={`font-bold text-sm flex items-center gap-1 ${status === 'overdue' ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            <AlertCircle className="w-3 h-3" /> {dueDate}
                        </p>
                    </div>
                </div>

                {status === 'overdue' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full">
                        Overdue - Fine Applicable
                    </div>
                )}
            </div>
            
            <button className="self-center hidden md:block px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Renew
            </button>
        </div>
    )
}

function HistoryIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" /><path d="M3 3v9h9" /><path d="M12 7v5l4 2" /></svg>
    )
}
