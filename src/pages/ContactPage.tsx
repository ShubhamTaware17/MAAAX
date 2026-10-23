import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, MessageCircle, Navigation, Mail } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import StoreLocation from '@/components/StoreLocation';
import EnquiryForm from '@/components/EnquiryForm';
import { businessConfig } from '@/config/business';
import {
  buildTelLink,
  buildMapsDirectionsUrl,
  defaultWhatsAppLink,
} from '@/utils/whatsapp';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Store Location | Maaax Wholesaler"
        description="Visit Maaax Wholesaler in Hadapsar, Pune. Call, WhatsApp, or get directions to our store. Opening hours, address, and enquiry form."
        path="/contact"
      />

      {/* Header */}
      <section className="bg-ink-950 py-24 text-ivory-50 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Get in Touch
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory-50/70">
              Reach out for wholesale enquiries, product availability, or store visits. We're
              located in Hadapsar, Pune and ready to help your retail business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 lg:py-20">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <a
                href={buildTelLink()}
                className="group flex h-full flex-col border border-ink-200 p-6 transition-colors hover:border-champagne-400"
              >
                <Phone className="h-5 w-5 text-champagne-500" />
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-400">
                  Call Us
                </p>
                <p className="mt-1 text-sm text-ink-800 group-hover:text-champagne-600">
                  {businessConfig.phone}
                </p>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-ink-200 p-6 transition-colors hover:border-champagne-400"
              >
                <MessageCircle className="h-5 w-5 text-champagne-500" />
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-400">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm text-ink-800 group-hover:text-champagne-600">
                  Chat with our team
                </p>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a
                href={buildMapsDirectionsUrl()}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-ink-200 p-6 transition-colors hover:border-champagne-400"
              >
                <Navigation className="h-5 w-5 text-champagne-500" />
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-400">
                  Directions
                </p>
                <p className="mt-1 text-sm text-ink-800 group-hover:text-champagne-600">
                  Get directions on Google Maps
                </p>
              </a>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex h-full flex-col border border-ink-200 p-6">
                <Clock className="h-5 w-5 text-champagne-500" />
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-ink-400">
                  Opening Hours
                </p>
                <p className="mt-1 text-sm text-ink-800">{businessConfig.hours.display}</p>
                <p className="mt-0.5 text-xs text-ink-400">{businessConfig.hours.days}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Store location */}
      <section className="bg-ivory-100 py-16 lg:py-24">
        <div className="container-wide">
          <StoreLocation />
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="section-label">Send a Message</span>
                <h2 className="mt-3 heading-lg">Customer Enquiry</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
                  Have a question about products, availability, or wholesale pricing? Fill
                  in the form and your enquiry opens in WhatsApp, ready to send.
                </p>

                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                    <span className="text-ink-600">{businessConfig.address.full}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                    <a href={buildTelLink()} className="text-ink-600 hover:text-champagne-600">
                      {businessConfig.phone}
                    </a>
                  </div>
                  {businessConfig.email && (
                    <div className="flex gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                      <a href={`mailto:${businessConfig.email}`} className="text-ink-600 hover:text-champagne-600">
                        {businessConfig.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link to="/collections" className="btn-outline">
                    Browse Collections
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-ink-200 p-6 lg:p-8">
                <EnquiryForm compact />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
