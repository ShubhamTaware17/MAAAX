import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, PackageSearch } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/catalog';

type SortKey = 'name-asc' | 'name-desc' | 'category';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'category', label: 'Category' },
];

export default function CollectionsPage() {
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get('category') || 'all';
  const query = params.get('q') || '';
  const sort = (params.get('sort') as SortKey) || 'name-asc';

  const [searchInput, setSearchInput] = useState(query);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const updateParams = (updates: Record<string, string | null>) => {
    const next = new URLSearchParams(params);
    Object.entries(updates).forEach(([key, val]) => {
      if (val === null || val === '') next.delete(key);
      else next.set(key, val);
    });
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    switch (sort) {
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'category':
        list.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
        break;
    }
    return list;
  }, [activeCategory, query, sort]);

  const categoryTabs = [{ slug: 'all', name: 'All Products' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

  return (
    <>
      <Seo
        title="Collections | Maaax Wholesaler"
        description="Browse our wholesale clothing collections — men's shirts, t-shirts, trousers, casual wear, formal wear and more. Enquire for wholesale pricing."
        path="/collections"
      />

      {/* Page header */}
      <section className="bg-ink-950 py-24 text-ivory-50 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Wholesale Catalogue
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Our Collections
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory-50/70">
              Explore our wholesale apparel categories. All products are shown as
              demonstration items — please enquire for real-time availability, sizes, and
              wholesale pricing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          {/* Search + Sort bar */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  updateParams({ q: e.target.value || null });
                }}
                placeholder="Search products..."
                className="input-field !pl-11"
                aria-label="Search products"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="inline-flex items-center gap-2 border border-ink-200 px-4 py-3 text-xs font-medium uppercase tracking-widest text-ink-700 transition-colors hover:border-ink-950 lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <label className="flex items-center gap-2">
                <span className="hidden text-xs font-medium uppercase tracking-widest text-ink-500 sm:inline">
                  Sort
                </span>
                <select
                  value={sort}
                  onChange={(e) => updateParams({ sort: e.target.value })}
                  className="input-field !w-auto !py-3"
                  aria-label="Sort products"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Category tabs - desktop */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-2 border-b border-ink-200 pb-px">
              {categoryTabs.map((c) => {
                const active = activeCategory === c.slug;
                return (
                  <button
                    key={c.slug}
                    onClick={() => updateParams({ category: c.slug === 'all' ? null : c.slug })}
                    className={`relative px-4 py-3 text-xs font-medium uppercase tracking-widest transition-colors ${
                      active ? 'text-champagne-600' : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {c.name}
                    {active && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 bg-champagne-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category filters - mobile drawer */}
          {showFilters && (
            <div className="mb-6 lg:hidden">
              <div className="flex items-center justify-between border-b border-ink-200 pb-2">
                <span className="text-xs font-medium uppercase tracking-widest text-ink-500">
                  Categories
                </span>
                <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                  <X className="h-4 w-4 text-ink-500" />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {categoryTabs.map((c) => {
                  const active = activeCategory === c.slug;
                  return (
                    <button
                      key={c.slug}
                      onClick={() => {
                        updateParams({ category: c.slug === 'all' ? null : c.slug });
                        setShowFilters(false);
                      }}
                      className={`border px-3 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                        active
                          ? 'border-ink-950 bg-ink-950 text-ivory-50'
                          : 'border-ink-200 text-ink-600'
                      }`}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Active filter indicator */}
          <div className="mt-4 flex items-center gap-3 text-xs text-ink-400">
            <span>
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
            </span>
            {activeCategory !== 'all' && (
              <button
                onClick={() => updateParams({ category: null })}
                className="inline-flex items-center gap-1 text-champagne-600 hover:underline"
              >
                Clear category
                <X className="h-3 w-3" />
              </button>
            )}
            {query && (
              <button
                onClick={() => updateParams({ q: null })}
                className="inline-flex items-center gap-1 text-champagne-600 hover:underline"
              >
                Clear search
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
              <PackageSearch className="h-12 w-12 text-ink-300" />
              <h3 className="mt-4 heading-md">No products found</h3>
              <p className="mt-2 text-sm text-ink-500">
                Try a different search or category, or enquire directly on WhatsApp.
              </p>
              <button
                onClick={() => updateParams({ category: null, q: null })}
                className="btn-outline mt-6"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
