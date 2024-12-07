import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800",
    alt: "Corte moderno",
    category: "cortes",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800",
    alt: "Diseño de barba",
    category: "barbas",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=800",
    alt: "Peinado elegante",
    category: "peinados",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    alt: "Coloración",
    category: "color",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800",
    alt: "Corte clásico",
    category: "cortes",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800",
    alt: "Barba estilizada",
    category: "barbas",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800",
    alt: "Peinado moderno",
    category: "peinados",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800",
    alt: "Coloración creativa",
    category: "color",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800",
    alt: "Corte fade",
    category: "cortes",
  },
];

interface GalleryGridProps {
  activeFilter: string;
}

export function GalleryGrid({ activeFilter }: GalleryGridProps) {
  const filteredItems = activeFilter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredItems.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}