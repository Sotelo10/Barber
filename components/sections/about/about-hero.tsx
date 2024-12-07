import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-6 text-[#96885f]">Nuestra Historia</h1> {/* Título dorado */}
            <p className="text-lg text-white mb-6 font-serif leading-relaxed">
              PerruRapaBarberShop nació en 2024 con el objetivo de transformar la experiencia de la 
              barbería en un espacio moderno y acogedor. Aunque somos nuevos en el sector,
              contamos con un equipo altamente capacitado que fusiona lo mejor de la tradición 
              con las últimas tendencias en cortes y estilos. Nos comprometemos a brindar un servicio 
              excepcional, haciendo que cada visita sea una experiencia única para nuestros clientes.
            </p>
            <p className="text-lg text-white font-serif leading-relaxed">
              Hoy, nos enorgullece estar creciendo y mejorar la atención a diario para nuestros clientes,
              manteniendo siempre nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/FotoBarberia.png"
              alt="Interior de la barbería"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
