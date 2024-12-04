import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1452065656801-6c60b6e7cbc5"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-light mb-4">Capturing Moments</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Nature & Landscape Photography</p>
          <a
            href="#portfolio"
            className="inline-block border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  );
}