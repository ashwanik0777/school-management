"use client";

import { Search, Book, Video, Headphones, Download, Filter } from 'lucide-react';

const resources = [
    { title: "Introduction to Calculus", type: "ebook", author: "Mathematics Dept.", size: "2.4 MB" },
    { title: "History of Ancient India", type: "video", author: "History Channel", size: "150 MB" },
    { title: "Shakespeare's Othello - Audio Play", type: "audio", author: "BBC Radio", size: "45 MB" },
    { title: "Physics Lab Manual - Grade 11", type: "ebook", author: "NCERT", size: "5.1 MB" },
    { title: "Organic Chemistry Basics", type: "video", author: "Khan Academy", size: "200 MB" },
    { title: "Environmental Science Project Guide", type: "ebook", author: "Science Dept.", size: "1.2 MB" },
];

export default function DigitalLibraryPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Search Header */}
      <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-black mb-6">Digital Library</h1>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Access thousands of educational resources, e-books, and multimedia content from anywhere.</p>
              
              <div className="relative max-w-2xl mx-auto">
                  <input 
                    type="text" 
                    placeholder="Search for books, videos, or topics..." 
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-black text-lg focus:outline-none focus:ring-4 focus:ring-white/20 shadow-xl"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              </div>
          </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 space-y-6">
                  <div className="bg-card p-6 rounded-2xl border border-border">
                      <h3 className="font-bold flex items-center gap-2 mb-4">
                          <Filter className="w-5 h-5" /> Filters
                      </h3>
                      
                      <div className="space-y-4">
                          <FilterGroup title="Format">
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> E-Books</label>
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> Video Lectures</label>
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> Audio Books</label>
                          </FilterGroup>
                          
                          <FilterGroup title="Subject">
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> Science</label>
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> Mathematics</label>
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> History</label>
                              <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" className="rounded text-primary focus:ring-primary" /> Languages</label>
                          </FilterGroup>
                      </div>
                  </div>
              </div>

              {/* Resources Grid */}
              <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-6">Popular Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {resources.map((res, idx) => (
                          <div key={idx} className="bg-card p-5 rounded-2xl border border-border hover:shadow-lg transition-all group">
                              <div className="flex items-start justify-between mb-4">
                                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                                      {res.type === 'ebook' ? <Book className="w-6 h-6" /> : 
                                       res.type === 'video' ? <Video className="w-6 h-6" /> : 
                                       <Headphones className="w-6 h-6" />}
                                  </div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary/10 px-2 py-1 rounded">{res.type}</span>
                              </div>
                              <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">{res.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">by {res.author}</p>
                              
                              <a href="/brochure.pdf" download className="w-full py-2 rounded-lg border border-border text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2">
                                  <Download className="w-4 h-4" /> Download ({res.size})
                              </a>
                          </div>
                      ))}
                  </div>
              </div>

          </div>
      </section>

    </div>
  );
}

function FilterGroup({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground/80 border-b border-border pb-1 mb-2">{title}</h4>
            {children}
        </div>
    )
}
