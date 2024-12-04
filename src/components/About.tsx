import React from 'react';
import { Camera, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
            alt="Photographer"
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-600 mb-8">
              With over a decade of experience capturing life's most beautiful moments, 
              I specialize in landscape and nature photography. My work has been featured 
              in numerous galleries and publications worldwide.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Camera className="w-6 h-6 mx-auto mb-2" />
                <p className="font-bold">1000+</p>
                <p className="text-sm text-gray-500">Photoshoots</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-6 h-6 mx-auto mb-2" />
                <p className="font-bold">15</p>
                <p className="text-sm text-gray-500">Awards</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Users className="w-6 h-6 mx-auto mb-2" />
                <p className="font-bold">200+</p>
                <p className="text-sm text-gray-500">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}