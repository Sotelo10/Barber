"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/galeria', label: 'Galería' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <div className="fixed top-[-20px] left-1/2 transform -translate-x-1/2 z-20 md:top-[-40px]">
        <Image
          src="https://i.ibb.co/WxKS6Jf/logoperru.png"
          alt="PerruRapaBarberShop Logo"
          width={150}
          height={150}
          className="object-cover rounded-full"
          priority
        />
      </div>

      {/* Navbar con fondo semi-transparente */}
      <nav className="fixed top-0 left-0 right-0 z-10 container mx-auto px-4 h-16 flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg border-b">
        {/* Logo y nombre */}
        <Link href="/" className="flex items-center space-x-3">
          <Scissors className="h-8 w-8 text-primary" />
          <span className="text-lg font-semibold text-gray-900">PerruRapaBarberShop</span>
        </Link>

        {/* Navegación en desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out transform hover:text-primary hover:scale-110 active:scale-110"
            >
              {item.label}
            </Link>
          ))}

          {/* Botón de Reservar Cita */}
          <a
            href="https://wa.link/4pzr4p"
            target="_blank"
            className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Reservar Cita
          </a>
        </div>

        {/* Navegación móvil */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg p-6" // Fondo semitransparente
          >
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out transform hover:text-primary hover:scale-110 active:scale-110"
                  onClick={() => setIsOpen(false)} // Cerrar el menú
                >
                  {item.label}
                </Link>
              ))}

              {/* Botón de Reservar Cita en el menú móvil */}
              <a
                href="https://wa.link/4pzr4p"
                target="_blank"
                className="w-full bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Reservar Cita
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
