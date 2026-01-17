import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">EduBalance High School</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Empowering the next generation of leaders with world-class education and values driven learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            {/* Unique Visitor Counter */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/5 rounded-full border border-border mt-4">
                <Eye className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-text-secondary">
                    Unique Visitors: <span className="font-bold text-primary tabular-nums">1,245,678</span>
                </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Academic Calendar</Link></li>
              <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Admission Policy</Link></li>
              <li><Link href="/coming-soon" className="hover:text-primary transition-colors">School Gallery</Link></li>
              <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/coming-soon" className="hover:text-primary transition-colors">Digital Library</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Knowledge Park, Education City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>admissions@edubalance.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
           <div>
            <h4 className="font-semibold text-text-primary mb-4">Stay Updated</h4>
            <p className="text-xs text-text-secondary mb-3">Subscribe to our newsletter for latest updates.</p>
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
              <p className="text-xs text-text-secondary mb-2 md:mb-0">
                © {new Date().getFullYear()} EduBalance School Management System. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs text-text-secondary/80 justify-center md:justify-start mt-2">
                  <Link href="/coming-soon" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
                  <Link href="/coming-soon" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Terms of Use</Link>
                  <Link href="/coming-soon" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Cookie Policy</Link>
              </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium bg-secondary/5 px-4 py-2 rounded-full border border-border/50">
             <span>Designed & Developed with</span>
             <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
             <span>by</span>
             <a href="#" className="text-primary hover:underline font-bold">Ashwani Kushwaha</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
