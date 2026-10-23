import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { businessConfig } from '@/config/business';
import { buildTelLink, buildMapsDirectionsUrl, defaultWhatsAppLink } from '@/utils/whatsapp';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Wholesale Enquiry', to: '/wholesale-enquiry' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ivory-100">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-100/70">
              Premium clothing wholesale for retailers, resellers, boutique owners and bulk
              buyers in Hadapsar, Pune.
            </p>
            <div className="mt-6 flex gap-3">
              {businessConfig.social.instagram && (
                <a
                  href={businessConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-ivory-100/20 text-ivory-100/80 transition-colors hover:border-champagne-400 hover:text-champagne-400"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {businessConfig.social.facebook && (
                <a
                  href={businessConfig.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-ivory-100/20 text-ivory-100/80 transition-colors hover:border-champagne-400 hover:text-champagne-400"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ivory-100/70 transition-colors hover:text-champagne-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory-100/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-400" />
                <span>{businessConfig.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-400" />
                <a href={buildTelLink()} className="transition-colors hover:text-champagne-400">
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-champagne-400" />
                <span>
                  {businessConfig.hours.days}
                  <br />
                  {businessConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Get in Touch
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Us
              </a>
              <a
                href={buildMapsDirectionsUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-2 border border-ivory-100/20 px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-ivory-100/80 transition-colors hover:border-champagne-400 hover:text-champagne-400"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory-100/10 pt-8 text-xs text-ivory-100/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </p>
          <p className="text-ivory-100/40">
            {businessConfig.marathiName} · {businessConfig.category} · Hadapsar, Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
