import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Category } from '@/data/catalog';

export default function CollectionCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  return (
    <Link
      to={`/collections?category=${category.slug}`}
      className="group relative block overflow-hidden"
    >
      <div className="aspect-[4/5] overflow-hidden bg-ivory-100">
        <img
          src={category.image}
          alt={category.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[0.65rem] font-medium uppercase tracking-widest text-ivory-50/70">
          {count} {count === 1 ? 'piece' : 'pieces'}
        </p>
        <h3 className="mt-1 flex items-center gap-2 font-serif text-xl text-ivory-50">
          {category.name}
          <ArrowUpRight className="h-5 w-5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </h3>
        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ivory-50/70">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
