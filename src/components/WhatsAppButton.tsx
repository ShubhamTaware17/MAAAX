import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { defaultWhatsAppLink } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={defaultWhatsAppLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:scale-110 hover:bg-[#1ebe57] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
