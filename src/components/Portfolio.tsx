import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Nature"
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Landscape"
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Waterfall"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Mountains"
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Forest"
  },
  {
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Plains"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-light">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}