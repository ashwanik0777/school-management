"use client";

import { 
  CreditCard, 
  History, 
  Download, 
  AlertCircle,
  Banknote,
  CheckCircle2
} from 'lucide-react';

export default function FeesPage() {
  return (
    <div className="space-y-8">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Outstanding Balance */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
               <div className="relative z-10">
                   <div className="flex justify-between items-start mb-8">
                       <div>
                           <p className="text-white/60 font-medium mb-1">Total Outstanding</p>
                           <h2 className="text-4xl md:text-5xl font-black">₹ 12,500</h2>
                           <p className="text-orange-400 font-bold mt-2 flex items-center gap-2">
                               <AlertCircle className="w-4 h-4" /> Due by 30th Jan, 2026
                           </p>
                       </div>
                       <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                           <CreditCard className="w-8 h-8 text-white" />
                       </div>
                   </div>

                   <div className="space-y-4">
                       <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                               <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                               <span className="font-medium">Tuition Fee (Q4)</span>
                           </div>
                           <span className="font-bold">₹ 8,500</span>
                       </div>
                       <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                               <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                               <span className="font-medium">Transport Fee (Jan-Mar)</span>
                           </div>
                           <span className="font-bold">₹ 4,000</span>
                       </div>
                   </div>

                   <div className="mt-8">
                       <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-black/20 transition-all transform active:scale-[0.98]">
                           Pay Now Securely
                       </button>
                   </div>
               </div>
          </div>

          {/* Payment Methods / Info */}
          <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-6 text-slate-800 dark:text-white">Payment Methods</h3>
                  <div className="space-y-3">
                      <div className="flex items-center gap-4 p-3 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 w-auto" alt="Visa"/>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex-1">Visa ending in 4242</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 w-auto" alt="Mastercard"/>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex-1">Mastercard ending in 8899</span>
                      </div>
                      <button className="w-full py-2 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-500 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all">
                          + Add New Method
                      </button>
                  </div>
              </div>

               <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                        <Banknote className="w-5 h-5"/> Need Help?
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mb-4">
                        For any discrepancies in the fee structure, please contact the accounts department.
                    </p>
                    <a href="mailto:accounts@school.com" className="text-sm font-bold text-blue-800 underline">Contact Accounts</a>
                </div>
          </div>

      </div>

      {/* Transaction History */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-slate-400" /> Payment History
              </h3>
              <div className="flex gap-2">
                   <select className="bg-slate-50 dark:bg-slate-900 border-none text-sm font-bold text-slate-600 rounded-lg focus:ring-primary">
                       <option>Last 6 Months</option>
                       <option>2025-2026</option>
                       <option>All Time</option>
                   </select>
                   <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
                       <Download className="w-4 h-4" />
                   </button>
              </div>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 font-bold uppercase text-xs">
                      <tr>
                          <th className="px-6 py-4">Transaction ID</th>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4">Description</th>
                          <th className="px-6 py-4">Amount</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Receipt</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {[
                          { id: "TXN102938", date: "15 Oct 2025", desc: "Term 3 Fees", amount: "12,500", status: "success" },
                          { id: "TXN102456", date: "10 Jul 2025", desc: "Term 2 Fees + Transport", amount: "16,500", status: "success" },
                          { id: "TXN101112", date: "05 Apr 2025", desc: "Term 1 Fees + Admission", amount: "25,000", status: "success" },
                      ].map((txn, i) => (
                          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                              <td className="px-6 py-4 font-bold text-slate-500">#{txn.id}</td>
                              <td className="px-6 py-4 font-medium">{txn.date}</td>
                              <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">{txn.desc}</td>
                              <td className="px-6 py-4 font-bold text-slate-800 dark:text-white">₹ {txn.amount}</td>
                              <td className="px-6 py-4">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                                      <CheckCircle2 className="w-3 h-3" /> Paid
                                  </span>
                              </td>
                              <td className="px-6 py-4">
                                  <button className="text-primary hover:underline font-bold text-xs flex items-center gap-1">
                                      <Download className="w-3 h-3" /> PDF
                                  </button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>

    </div>
  );
}
