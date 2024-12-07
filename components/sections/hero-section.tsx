"use client";

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxEffect = `translateY(${scrollY * 0.5}px)`; 

  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-black overflow-hidden">
   
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          transform: parallaxEffect,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070"
          alt="Un barbero estilizando un corte moderno en un ambiente elegante."
          fill
          priority
          className="object-cover"
        />
      </div>

      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#96885f] mb-6 font-serif">
          TRANSFORMAMOS TU ESTILO EN CADA CORTE
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-serif">
          En nuestra barbería, cada detalle cuenta. Te ofrecemos cortes personalizados que resaltan lo mejor de tu estilo, con la precisión de los expertos.
        </p>

        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary-dark transition-all duration-300 rounded-full"
        >
          <a href="https://wa.link/4pzr4p" target="_blank" rel="noopener noreferrer">
            Reserva tu cita ahora
          </a>
        </Button>
      </div>
    </section>
  );
}
