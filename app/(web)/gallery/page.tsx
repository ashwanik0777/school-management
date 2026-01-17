"use client";

import { Image as ImageIcon, Video, Play, Maximize2 } from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
    { type: "image", src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800", category: "Campus", title: "Main Building" },
    { type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Academics", title: "Science Lab" },
    { type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Sports", title: "Football Match" }, // Placeholder duplicate for demo
    { type: "image", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", category: "Library", title: "Reading Corner" },
    { type: "image", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", category: "Events", title: "Annual Day" },
    { type: "image", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800", category: "Classroom", title: "Interactive Learning" },
];

export default function GalleryPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ImageIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">School Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Glimpses of life at EduBalance. From classroom moments to grand celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tags (Placeholder functionality) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['All', 'Campus', 'Academics', 'Sports', 'Events'].map((tag) => (
                  <button key={tag} className="px-5 py-2 rounded-full border border-border hover:bg-primary hover:text-white transition-all text-sm font-medium even:bg-secondary/10">
                      {tag}
                  </button>
              ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                  <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                      <Image 
                        src={item.src} 
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                          <span className="text-xs font-bold uppercase tracking-wider mb-2 bg-primary/80 px-2 py-1 rounded">{item.category}</span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="mt-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                              <Maximize2 className="w-5 h-5" />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>

    </div>
  );
}
