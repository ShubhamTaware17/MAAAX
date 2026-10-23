import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Maaax Wholesaler" />
      <section className="flex min-h-[70vh] items-center justify-center py-32">
        <div className="container-wide text-center">
          <p className="font-serif text-7xl text-champagne-400 sm:text-8xl">404</p>
          <h1 className="mt-4 heading-lg">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-sm text-sm text-ink-500">
            The page you're looking for doesn't exist or has moved. Let's get you back on
            track.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link to="/collections" className="btn-outline">
              <ArrowLeft className="h-4 w-4" />
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
