import { Button } from '@/components/ui/button';

const filters = [
  { id: 'todos', label: 'Todos' },
  { id: 'cortes', label: 'Cortes' },
  { id: 'barbas', label: 'Barbas' },
  { id: 'peinados', label: 'Peinados' },
  
];

interface GalleryFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function GalleryFilter({ activeFilter, onFilterChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className="min-w-[100px]"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}