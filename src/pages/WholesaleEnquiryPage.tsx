import { Link } from 'react-router-dom';
import { MessageCircle, ClipboardList, Phone, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import EnquiryForm from '@/components/EnquiryForm';
import { businessConfig } from '@/config/business';
import { defaultWhatsAppLink, buildTelLink } from '@/utils/whatsapp';

export default function WholesaleEnquiryPage() {
  return (
    <>
      <Seo
        title="Wholesale Enquiry | Maaax Wholesaler"
        description="Submit a wholesale enquiry for bulk clothing orders. Tell us your products, quantities, and requirements — we'll confirm availability and pricing."
        path="/wholesale-enquiry"
      />

      {/* Header */}
      <section className="bg-ink-950 py-24 text-ivory-50 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-champagne-400">
              Let's Talk Business
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Wholesale Enquiry
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory-50/70">
              Fill out the form below with your requirements and we'll prepare a wholesale
              enquiry for you. On submission, your details open in WhatsApp, ready to send to
              our team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Sidebar */}
          <Reveal>
            <div className="sticky top-28 space-y-6">
              <div className="border border-ink-200 p-6">
                <h2 className="heading-md !text-lg">How It Works</h2>
                <ol className="mt-4 space-y-4 text-sm text-ink-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-ink-950 text-xs text-ivory-50">1</span>
                    Fill in the enquiry form with your details and requirements.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-ink-950 text-xs text-ivory-50">2</span>
                    Submit — your enquiry opens in WhatsApp with all details pre-filled.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-ink-950 text-xs text-ivory-50">3</span>
                    We confirm availability, pricing, and delivery. You place your order.
                  </li>
                </ol>
              </div>

              <div className="border border-ink-200 p-6">
                <h3 className="text-xs font-medium uppercase tracking-widest text-champagne-600">
                  Quick Contact
                </h3>
                <div className="mt-4 space-y-3">
                  <a href={buildTelLink()} className="flex items-center gap-3 text-sm text-ink-700 transition-colors hover:text-champagne-600">
                    <Phone className="h-4 w-4 text-champagne-500" />
                    {businessConfig.phone}
                  </a>
                  <a
                    href={defaultWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Directly
                  </a>
                </div>
              </div>

              <div className="border border-champagne-200 bg-champagne-50 p-6">
                <ShieldCheck className="h-5 w-5 text-champagne-600" />
                <p className="mt-3 text-xs leading-relaxed text-champagne-700">
                  We respond to enquiries directly. We never list fake prices or availability
                  — all wholesale details are confirmed by our team.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="border border-ink-200 p-6 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-champagne-500" />
                <h2 className="heading-md !text-xl">Enquiry Form</h2>
              </div>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
