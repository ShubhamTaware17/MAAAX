import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Product } from '@/data/catalog';
import { getCategoryBySlug } from '@/data/catalog';
import { buildWhatsAppLink, productEnquiryMessage } from '@/utils/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);
  const waLink = buildWhatsAppLink(
    productEnquiryMessage({
      productName: product.name,
      colors: product.colors,
      sizes: product.sizes,
    }),
  );

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-ivory-100">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {product.isDemo && (
          <span className="absolute left-3 top-3 bg-ivory-50/90 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-widest text-ink-500 backdrop-blur-sm">
            Demo
          </span>
        )}

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center bg-ink-950 text-ivory-50 opacity-0 transition-all duration-300 hover:bg-[#25D366] group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Enquire about ${product.name} on WhatsApp`}
        >
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        {category && (
          <span className="text-[0.65rem] font-medium uppercase tracking-widest text-champagne-600">
            {category.name}
          </span>
        )}
        <h3 className="mt-1 font-serif text-lg leading-tight">
          <Link
            to={`/product/${product.slug}`}
            className="link-underline text-ink-900 hover:text-champagne-600"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-500">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-ink-700 transition-colors hover:text-champagne-600"
          >
            View Details
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="text-xs font-medium text-ink-400">Enquire for price</span>
        </div>
      </div>
    </article>
  );
}
