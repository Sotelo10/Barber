import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, Trophy, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Profesionalismo',
    description: 'Nuestro equipo está altamente capacitado y en constante actualización.'
  },
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y se refleja en cada servicio que ofrecemos.'
  },
  {
    icon: Trophy,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada corte y en cada experiencia.'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Creamos vínculos duraderos con nuestros clientes y la comunidad.'
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200 bg-white"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <value.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
