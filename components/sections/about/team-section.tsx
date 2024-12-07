import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const team = [
  {
    name: 'Luis Derky',
    role: 'Barbero',
    image: '/luis.jpeg',
    description: 'Luis Derky es un barbero altamente experimentado, apasionado por el arte del corte de cabello y el diseño de barba. Con años de trayectoria, se especializa en cortes clásicos y modernos, siempre manteniendo un enfoque meticuloso en los detalles y la precisión. Su habilidad para crear estilos personalizados ha hecho que se convierta en un referente dentro de la industria. En PerruRapa BarberShop, Luis se dedica a ofrecer una experiencia única a cada cliente, asegurándose de que cada corte no solo cumpla con sus expectativas, sino que supere sus deseos, brindando un servicio de alta calidad y haciendo que todos se sientan completamente cuidados y satisfechos.'
  }
];

export function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Nuestro Equipo</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {team.map((member, index) => (
            <Card key={index} className="flex w-full md:w-full max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
              
              <div className="relative w-full md:w-[50%] h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
             
              <CardContent className="w-full md:w-[50%] pl-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">{member.name}</h3>
                <p className="text-lg font-medium text-indigo-600 mb-6">{member.role}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
