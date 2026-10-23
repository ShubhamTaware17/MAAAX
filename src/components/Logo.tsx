import { Link } from 'react-router-dom';
import { businessConfig } from '@/config/business';

export default function Logo({
  variant = 'dark',
  showMarathi = true,
  className = '',
}: {
  variant?: 'dark' | 'light';
  showMarathi?: boolean;
  className?: string;
}) {
  const textColor = variant === 'dark' ? 'text-ink-950' : 'text-ivory-50';
  const subColor = variant === 'dark' ? 'text-champagne-600' : 'text-champagne-300';

  return (
    <Link
      to="/"
      aria-label={`${businessConfig.name} — home`}
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span className={`flex items-baseline gap-1 ${textColor}`}>
        <span className="font-serif text-2xl font-bold tracking-tightest sm:text-[1.7rem]">
          MAAAX
        </span>
        <span className="hidden text-xs font-medium uppercase tracking-widest sm:inline">
          Wholesaler
        </span>
      </span>
      {showMarathi && (
        <span className={`mt-0.5 text-[0.65rem] font-medium tracking-widest ${subColor}`}>
          {businessConfig.marathiName}
        </span>
      )}
    </Link>
  );
}
