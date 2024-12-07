'use client'; 

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    text: "El servicio recibido en esta barbería es excepcional. Los barberos son altamente capacitados y brindan un trato profesional en todo momento.",
    rating: 5
  },
  {
    name: "David García",
    text: "He sido cliente de esta barbería durante varios años y siempre he recibido una atención de primera calidad. Sin duda, la mejor opción para un corte perfecto.",
    rating: 5
  },
  {
    name: "Miguel Ángel",
    text: "La experiencia en esta barbería es siempre impecable. El ambiente es profesional y acogedor, lo que hace que cada visita sea placentera.",
    rating: 5
  },
  {
    name: "Juan Pérez",
    text: "El nivel de atención y detalle que brindan es sobresaliente. Cada corte se adapta perfectamente a lo que busco, siempre salgo satisfecho.",
    rating: 5
  },
  {
    name: "Luis Gómez",
    text: "Un lugar de confianza donde la calidad del servicio es constante. Los barberos tienen una gran habilidad para captar lo que quiero y ofrecerme un corte de calidad.",
    rating: 5
  },
  {
    name: "Alejandro Díaz",
    text: "Cada visita es una experiencia positiva. El servicio es de primer nivel y siempre me siento bien atendido, lo que me hace regresar constantemente.",
    rating: 5
  },
  {
    name: "José Martín",
    text: "Recomiendo esta barbería sin dudar. La atención es personalizada y siempre me voy con la sensación de haber recibido un servicio de excelencia.",
    rating: 5
  },
  {
    name: "Raúl Hernández",
    text: "Desde que llegué a esta barbería, siempre he recibido un trato excelente. Los barberos son amables y tienen un gran ojo para el detalle.",
    rating: 5
  },
  {
    name: "Fernando López",
    text: "Me encanta cómo cuidan cada aspecto de mi corte. Es evidente que son profesionales y siempre tengo la confianza de salir con el mejor look.",
    rating: 5
  },
  {
    name: "Antonio Sánchez",
    text: "La atención al cliente aquí es de primera. Siempre me hacen sentir cómodo y, lo más importante, el corte es exactamente lo que busco.",
    rating: 5
  },
  {
    name: "Victor Molina",
    text: "Una barbería con un ambiente increíble y un servicio que nunca falla. Siempre me dejan el corte que quiero, sin importar lo específico que sea.",
    rating: 5
  },
  {
    name: "José Luis Fernández",
    text: "Las mejores manos para cortar cabello. Siempre me sorprenden con su precisión y el ambiente relajado que tienen, lo hace una experiencia única.",
    rating: 5
  },
  {
    name: "Marco Álvarez",
    text: "El servicio es increíblemente rápido y eficiente. Me encanta cómo personalizan cada corte según lo que quiero y siempre quedan perfectos.",
    rating: 5
  },
  {
    name: "Ricardo Martínez",
    text: "La calidad del servicio y la profesionalidad de los barberos siempre superan mis expectativas. La mejor barbería de la ciudad.",
    rating: 5
  },
  {
    name: "Pablo Martínez",
    text: "He probado muchas barberías, pero ninguna como esta. Cada corte se adapta exactamente a lo que busco, y siempre salgo más que satisfecho.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const itemsPerPage = 5; // Número de testimonios visibles por página
  const totalPages = Math.ceil(testimonials.length / itemsPerPage); // Total de páginas de testimonios
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Testimonios de nuestros clientes
        </h2>
        <div className="overflow-hidden">
          <div className="flex space-x-4">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6 pb-8">
                    <p className="text-gray-700 mb-4 text-lg italic">
                      {testimonial.text}
                    </p>
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="text-yellow-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 12.746l-3.547 2.115 1.017-4.292L1 6.771l4.321-.379L8 2.354l2.679 4.038L15 6.771l-4.47 3.798 1.017 4.292L8 12.746z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-medium text-gray-800">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrev}
            aria-label="Página anterior"
            className="mx-2 text-gray-600 hover:text-gray-800"
          >
            &lt; Anterior
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              aria-label={`Página ${index + 1}`}
              className={`mx-2 h-2 w-2 rounded-full transition-transform duration-300 ${
                index === currentPage ? 'bg-gray-800 scale-125' : 'bg-gray-400'
              }`}
            />
          ))}
          <button
            onClick={handleNext}
            aria-label="Página siguiente"
            className="mx-2 text-gray-600 hover:text-gray-800"
          >
            Siguiente &gt;
          </button>
        </div>
      </div>
    </section>
  );
}