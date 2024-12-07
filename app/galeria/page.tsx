"use client";

import { useState } from 'react';
import { GalleryGrid } from '@/components/sections/gallery/gallery-grid';
import { GalleryFilter } from '@/components/sections/gallery/gallery-filter';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-[#96885f] font-montserrat">
          Nuestra Galería
        </h1> {/* Título dorado con Montserrat */}
        <p className="text-lg text-white max-w-2xl mx-auto font-montserrat">
          Explora nuestra colección de trabajos y descubre el estilo que mejor se adapta a ti.
        </p>
      </div>
      
      <GalleryFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <GalleryGrid activeFilter={activeFilter} />
    </div>
  );
}
