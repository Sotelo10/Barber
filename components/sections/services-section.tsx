import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image'; 
import Link from 'next/link';

const services = [
  {
    title: "Corte de Cabello",
    description: "Cortes personalizados que resaltan tu mejor versión",
    image: "/Corte.png"
  },
  {
    title: "Arreglo de Barba",
    description: "Diseño y mantenimiento profesional de tu barba",
    image: "/barba.png"
  },
  {
    title: "Diseño de Cejas",
    description: "Define tu estilo con un diseño de cejas que resalte tus facciones.",
    image: "/cejas.png"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-xl border border-transparent hover:border-primary rounded-lg overflow-hidden"
            >
              <CardHeader className="text-center pt-6">
                <div className="w-58 h-58 mx-auto mb-4 overflow-hidden border-2 border-primary rounded-md aspect-square">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={150} // Ajusta según tus necesidades
                    height={150} // Ajusta según tus necesidades
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white transition-all"
                >
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
