import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    image: '/corteclasico.jpeg',
    title: "Corte Clásico",
    description: "Corte tradicional con acabado moderno",
    price: "S/20"
  },
  {
    image: '/barba.jpeg',
    title: "Arreglo de Barba",
    description: "Perfilado y diseño personalizado de barba",
    price: "S/5-10"
  },
  {
    image: '/Mascarilla.jpg',
    title: "Mascarilla Carbon",
    description: "Mascarilla para quitar el puntos negros",
    price: "S/10"
  },
  {
    image: '/C+B.jpg',
    title: "Corte + Barba",
    description: "Servicio completo de corte y arreglo de barba",
    price: "S/25-30"
  },
  {
    image: '/C+M.jpeg',
    title: "Corte + Mascarilla",
    description: "Servicio completo de corte y Mascarilla facial",
    price: "S/27"
  },
  {
    image: '/gel.jpg',
    title: "Venta de Productos",
    description: "Venta de productos de Barberia",
    price: "S/5-30"
  }
];

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-[#96885f]">Nuestros Servicios</h1> {/* Color dorado */}
        <p className="text-white max-w-2xl mx-auto text-lg font-semibold">
          Ofrecemos una amplia gama de servicios profesionales para mantener tu imagen impecable.
          Todos nuestros servicios incluyen consulta personalizada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-2xl rounded-lg overflow-hidden">
            <CardHeader className="relative">
              <Image
                src={service.image}
                alt={`Imagen de ${service.title}`}
                width={400}
                height={224}
                className="object-cover w-full h-56 rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="text-center p-6 bg-white">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-semibold text-gray-800 mb-4">{service.price}</p>
              <Button variant="outline" className="w-full">
                <Link href="https://wa.link/4pzr4p">
                  Reserva Cita
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
