import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { businessConfig } from '@/config/business';
import { buildTelLink, buildMapsDirectionsUrl, defaultWhatsAppLink } from '@/utils/whatsapp';

export default function StoreLocation({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center">
        <span className="section-label">Visit Our Store</span>
        <h2 className="mt-3 heading-md">Located in Hadapsar, Pune</h2>
        {!compact && (
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
            Visit our wholesale store to browse the collection in person and discuss your bulk
            requirements directly with our team.
          </p>
        )}

        <div className="mt-8 space-y-5">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-champagne-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink-400">Address</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">
                {businessConfig.address.full}
              </p>
              <p className="mt-1 text-xs text-ink-400">
                Plus Code: {businessConfig.address.plusCode}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-champagne-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
                Opening Hours
              </p>
              <p className="mt-1 text-sm text-ink-700">
                {businessConfig.hours.days} · {businessConfig.hours.display}
              </p>
              <p className="mt-0.5 text-xs text-ink-400">{businessConfig.hours.note}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-champagne-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink-400">Phone</p>
              <a
                href={buildTelLink()}
                className="mt-1 block text-sm text-ink-700 transition-colors hover:text-champagne-600"
              >
                {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={buildMapsDirectionsUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden border border-ink-200 bg-ivory-100">
        <iframe
          title="Maaax Wholesaler store location map"
          src={businessConfig.maps.embedUrl}
          className="h-full min-h-[320px] w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
