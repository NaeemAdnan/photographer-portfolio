import React from 'react';
import { Camera } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-6 h-6" />
          <span className="text-xl font-light">LENS</span>
        </div>
        <div className="flex gap-8">
          <a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}