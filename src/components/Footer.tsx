import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> by Ramadan Mohamed
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Ramadan Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}