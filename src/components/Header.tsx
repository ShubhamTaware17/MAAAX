import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { businessConfig } from '@/config/business';
import { buildTelLink } from '@/utils/whatsapp';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Wholesale Enquiry', to: '/wholesale-enquiry' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-200/60 bg-ivory-50/95 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between py-4 lg:py-5">
          <Logo variant={scrolled ? 'dark' : 'dark'} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const active =
                l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`link-underline text-xs font-medium uppercase tracking-widest transition-colors ${
                    active ? 'text-champagne-600' : 'text-ink-700 hover:text-ink-950'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={buildTelLink()}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-700 transition-colors hover:text-champagne-600"
            >
              <Phone className="h-3.5 w-3.5" />
              {businessConfig.phone}
            </a>
            <Link to="/wholesale-enquiry" className="btn-primary !py-3 !px-6">
              Enquire Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink-950 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`absolute inset-0 bg-ink-950/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory-50 shadow-2xl transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-200 px-6 py-5">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink-950"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-6 py-6" aria-label="Mobile">
            {navLinks.map((l) => {
              const active =
                l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`border-b border-ink-100 py-4 text-lg font-medium transition-colors ${
                    active ? 'text-champagne-600' : 'text-ink-800 hover:text-ink-950'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 border-t border-ink-200 px-6 py-6">
            <a href={buildTelLink()} className="btn-outline">
              <Phone className="h-4 w-4" /> Call {businessConfig.phone}
            </a>
            <Link to="/wholesale-enquiry" className="btn-primary">
              Enquire on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
