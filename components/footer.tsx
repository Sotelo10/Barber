import Link from 'next/link';
import { Scissors, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección 1: Logo y Descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110">
              <Scissors className="h-6 w-6" />
              <span className="font-bold text-xl text-gray-800">PerruRapaBarberShop</span>
            </Link>
            <p className="text-sm text-gray-600">
              Estilo y confianza en cada corte. Tu barbería de confianza desde 2024.
            </p>
          </div>

          {/* Sección 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios" 
                  className="text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-nosotros" 
                  className="text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  href="/galeria" 
                  className="text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110"
                >
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección 3: Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.google.com/maps/place/BarberShop+Perru+Rapa-Lince/@-12.0831259,-77.0285087,16.25z/data=!4m6!3m5!1s0x9105c90016e673b7:0x20b2c4b4a3a0221c!8m2!3d-12.0830225!4d-77.0280297!16s%2Fg%2F11y8fv0f7q?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition-all duration-200 ease-in-out transform hover:scale-110"
                >
                  📍Av. Prol. Iquitos 1939, Lince 15076
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.link/4pzr4p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition-all duration-200 ease-in-out transform hover:scale-110"
                >
                  📞 +51 985422874
                </a>
              </li>
              <li className="transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110 text-gray-600">
                ✉️ info@barberstyle.com
              </li>
            </ul>
          </div>

          {/* Sección 4: Redes Sociales */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© 2024 PerruRapaBarberShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
