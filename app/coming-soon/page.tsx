import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="bg-card max-w-lg w-full p-8 rounded-2xl shadow-sm border border-border text-center">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Under Construction
        </h1>
        
        <p className="text-text-secondary mb-8">
          We are currently working on this module to bring you a seamless academic experience. Please check back later!
        </p>

        <div className="space-y-3">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <p className="text-xs text-text-secondary mt-4">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
