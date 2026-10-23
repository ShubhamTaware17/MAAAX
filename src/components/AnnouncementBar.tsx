import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { businessConfig } from '@/config/business';

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('announcement-dismissed');
      if (stored === '1') setDismissed(true);
    } catch {
      // ignore
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem('announcement-dismissed', '1');
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (dismissed) return null;

  return (
    <div
      className={`relative z-[55] overflow-hidden bg-ink-950 text-ivory-50 transition-all duration-500 ${
        show ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="container-wide flex items-center justify-center gap-3 py-2.5 text-center">
        <Sparkles className="hidden h-3.5 w-3.5 shrink-0 text-champagne-400 sm:block" />
        <p className="truncate text-[0.7rem] font-medium uppercase tracking-widest text-ivory-50/90">
          {businessConfig.announcement}
        </p>
        <button
          onClick={dismiss}
          className="absolute right-4 flex h-6 w-6 items-center justify-center text-ivory-50/60 transition-colors hover:text-ivory-50 sm:right-8"
          aria-label="Dismiss announcement"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
