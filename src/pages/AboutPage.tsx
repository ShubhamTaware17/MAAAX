import { Link } from 'react-router-dom';
import {
  Handshake,
  Layers,
  Store,
  Truck,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { businessConfig } from '@/config/business';
import { defaultWhatsAppLink } from '@/utils/whatsapp';

const values = [
  {
    icon: Layers,
    title: 'Curated Selection',
    desc: 'We help retailers discover suitable apparel across shirts, t-shirts, trousers, and more — without making inflated claims about inventory or scale.',
  },
  {
    icon: Handshake,
    title: 'Direct Communication',
    desc: 'No middlemen. You speak directly with our store team for availability, sizes, and wholesale pricing.',
  },
  {
    icon: Truck,
    title: 'Flexible Quantities',
    desc: 'We serve retailers, resellers, boutique owners, and bulk buyers. Quantities and minimum orders are confirmed on enquiry.',
  },
  {
    icon: Store,
    title: 'In-Store Visits',
    desc: 'Located in Hadapsar, Pune. Retailers are welcome to visit, browse, and discuss requirements in person.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Maaax Wholesaler"
        description="Learn about Maaax Wholesaler (मास होलसेलर) — a clothing wholesaler in Hadapsar, Pune serving retailers, resellers, and bulk buyers."
        path="/about"
      />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8387127/pexels-photo-8387127.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Clothing store interior with neatly arranged apparel"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-ink-950/70" />
        </div>
        <div className="container-wide relative z-10 py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-champagne-300">
              {businessConfig.marathiName} · {businessConfig.category}
            </span>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-ivory-50 sm:text-5xl lg:text-6xl">
              About {businessConfig.name}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory-50/70">
              A clothing wholesale business based in Hadapsar, Pune — helping retailers,
              resellers, and bulk buyers find the right apparel for their shelves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8306368/pexels-photo-8306368.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Neatly arranged clothing on hangers in a boutique"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="mt-3 heading-lg">
                A wholesaler built for retailers
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600">
                <p>
                  {businessConfig.name} ({businessConfig.marathiName}) is a clothing wholesale
                  business located in {businessConfig.address.line2}, {businessConfig.address.city},
                  {businessConfig.address.state}. We work with clothing retailers, resellers,
                  boutique owners, and bulk purchasers to supply quality apparel across
                  multiple categories.
                </p>
                <p>
                  Our focus is on helping retail businesses discover suitable products for
                  their shelves — and connecting them directly with our team for
                  availability, sizes, and wholesale pricing. We believe in honest, direct
                  communication over inflated promises.
                </p>
                <p>
                  This website showcases our wholesale catalogue and provides an easy way to
                  enquire about products. Product details listed here are demonstration data
                  and will be updated with the actual inventory by the store owner.
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <Link to="/collections" className="btn-primary">
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
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <span className="section-label">What We Stand For</span>
            <h2 className="mt-3 heading-lg">Our Approach</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full border border-ink-200 bg-ivory-50 p-8 transition-colors hover:border-champagne-400">
                  <div className="flex h-12 w-12 items-center justify-center bg-ink-950 text-ivory-50">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 heading-md !text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner note */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl border-l-2 border-champagne-500 bg-ivory-100 px-8 py-10 lg:px-12">
              <ShieldCheck className="h-6 w-6 text-champagne-500" />
              <p className="mt-4 font-serif text-xl leading-relaxed text-ink-800">
                "We don't believe in making claims we can't back. Every wholesale enquiry is
                handled personally — with real availability, real pricing, and honest
                advice for your retail business."
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-400">
                — {businessConfig.name}, {businessConfig.address.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-16 text-center text-ivory-50 lg:py-24">
        <div className="container-wide">
          <Reveal>
            <h2 className="heading-lg text-ivory-50">Ready to work together?</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-ivory-50/70">
              Whether you're stocking a new shop or expanding your range, we're here to help
              with wholesale apparel.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link to="/wholesale-enquiry" className="btn-gold">
                Submit Enquiry
              </Link>
              <Link to="/contact" className="btn-outline !border-ivory-50/30 !text-ivory-50 hover:!bg-ivory-50 hover:!text-ink-950">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
