import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Search,
  Send,
  CheckCircle2,
  PackageCheck,
  ClipboardList,
  Handshake,
  Phone,
  MapPin,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CollectionCard from '@/components/CollectionCard';
import ProductCard from '@/components/ProductCard';
import StoreLocation from '@/components/StoreLocation';
import { businessConfig } from '@/config/business';
import {
  categories,
  getFeaturedProducts,
  getProductsByCategory,
} from '@/data/catalog';
import { defaultWhatsAppLink, buildTelLink } from '@/utils/whatsapp';

const heroImage =
  'https://images.pexels.com/photos/7679784/pexels-photo-7679784.jpeg?auto=compress&cs=tinysrgb&w=1600';
const trustImage =
  'https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&w=1200';

const steps = [
  {
    icon: Search,
    title: 'Explore Products',
    desc: 'Browse our wholesale collections and identify the pieces that suit your retail shelves.',
  },
  {
    icon: Send,
    title: 'Send Enquiry',
    desc: 'Reach out via WhatsApp or our enquiry form with your requirements, sizes, and quantities.',
  },
  {
    icon: PackageCheck,
    title: 'Confirm & Order',
    desc: 'We confirm availability, wholesale pricing, and delivery details. You place your order.',
  },
];

const trustPoints = [
  'A curated range of men\u2019s shirts, t-shirts, trousers, formal and casual wear.',
  'Flexible quantities for retailers, resellers, and bulk buyers.',
  'Direct conversation with the store for availability and pricing.',
  'Conveniently located in Hadapsar, Pune for in-store visits.',
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Seo
        title="Maaax Wholesaler | Premium Clothing Wholesale in Hadapsar, Pune"
        description="Wholesale fashion for retailers, resellers and bulk buyers. Men's shirts, t-shirts, trousers, formal and casual wear in Hadapsar, Pune, Maharashtra."
        path="/"
      />

      {/* Hero */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Customers browsing apparel in a modern clothing store"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-ink-950/30" />
        </div>

        <div className="container-wide relative z-10 pb-20 pt-32 lg:pb-28">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-xs font-medium uppercase tracking-widest text-champagne-300">
              {businessConfig.category} · Hadapsar, Pune
            </p>
            <h1 className="mt-4 animate-fade-up animate-delay-100 font-serif text-4xl leading-[1.05] text-ivory-50 sm:text-5xl lg:text-6xl xl:text-7xl">
              Wholesale Fashion.
              <br />
              <span className="text-champagne-300">Retail-Ready Style.</span>
            </h1>
            <p className="mt-6 max-w-lg animate-fade-up animate-delay-200 text-base leading-relaxed text-ivory-50/80">
              {businessConfig.name} ({businessConfig.marathiName}) supplies premium clothing to
              retailers, resellers, boutique owners, and bulk buyers. Discover quality apparel
              and enquire directly for wholesale pricing.
            </p>
            <div className="mt-8 flex flex-col gap-3 animate-fade-up animate-delay-300 sm:flex-row">
              <Link to="/collections" className="btn-gold">
                Explore Collections
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-ivory-50/10 bg-ink-950/40 py-4 text-center backdrop-blur-sm lg:block">
          <p className="text-xs uppercase tracking-widest text-ivory-50/60">
            Scroll to explore
          </p>
        </div>
      </section>

      {/* Trust / Intro */}
      <section className="py-20 lg:py-28">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={trustImage}
                alt="Bright boutique interior with neatly arranged garments"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <span className="section-label">Why Retailers Choose Us</span>
              <h2 className="mt-3 heading-lg">
                A wholesale partner for your retail shelves
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                {businessConfig.name} serves clothing retailers, resellers, boutique owners,
                and bulk buyers with a curated selection of apparel. We focus on helping you
                discover suitable products for your store and connecting you directly with our
                team for availability and wholesale pricing.
              </p>
              <ul className="mt-6 space-y-3">
                {trustPoints.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Link to="/about" className="btn-outline">
                  About Us
                </Link>
                <Link to="/collections" className="btn-primary">
                  View Collections
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="container-wide">
          <Reveal className="mb-12 text-center">
            <span className="section-label">Browse by Category</span>
            <h2 className="mt-3 heading-lg">Featured Collections</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-500">
              A curated selection of wholesale apparel categories. Tap any collection to view
              the products and enquire about availability.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <CollectionCard category={c} count={getProductsByCategory(c.slug).length} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="section-label">Most Enquired</span>
              <h2 className="mt-3 heading-lg">Popular Products</h2>
            </div>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-700 transition-colors hover:text-champagne-600"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale section */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-ivory-50 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest text-champagne-400">
                Wholesale Purchasing
              </span>
              <h2 className="mt-3 heading-lg text-ivory-50">
                Bulk enquiries, directly to the source
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-50/70">
                We work with retailers, resellers, and bulk buyers to fulfil wholesale orders.
                Enquire about available sizes, colours, quantities, and wholesale pricing —
                and our team will confirm availability and details directly with you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/wholesale-enquiry" className="btn-gold">
                  Submit Enquiry
                </Link>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: PackageCheck, label: 'Available Sizes', value: 'Confirmed on enquiry' },
                  { icon: ClipboardList, label: 'Minimum Order Qty', value: 'Confirmed on enquiry' },
                  { icon: Handshake, label: 'Wholesale Pricing', value: 'Direct from store' },
                  { icon: Phone, label: 'Direct Contact', value: businessConfig.phone },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-ivory-50/15 p-6 transition-colors hover:border-champagne-400/50"
                  >
                    <item.icon className="h-5 w-5 text-champagne-400" />
                    <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ivory-50/50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-ivory-50/90">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <span className="section-label">How It Works</span>
            <h2 className="mt-3 heading-lg">Three Simple Steps</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative border border-ink-200 p-8 transition-colors hover:border-champagne-400">
                  <span className="absolute right-6 top-6 font-serif text-4xl text-ink-100">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center bg-ink-950 text-ivory-50">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 heading-md !text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="container-wide">
          <StoreLocation />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 border border-ink-200 bg-ivory-100 p-10 text-center lg:flex-row lg:p-16 lg:text-left">
              <div className="max-w-xl">
                <span className="section-label">Ready to Order?</span>
                <h2 className="mt-3 heading-lg">
                  Let's stock your shelves with quality apparel
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  Reach out to {businessConfig.name} for wholesale enquiries, product
                  availability, and bulk pricing. We're here to help your retail business.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={buildTelLink()} className="btn-outline">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <Link to="/wholesale-enquiry" className="btn-primary">
                  Submit Enquiry
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
