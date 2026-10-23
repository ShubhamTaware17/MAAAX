import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, attr: 'name' | 'property' = 'name') => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${name}"]`,
      );
      return el;
    };

    if (description) {
      let desc = ensureMeta('description');
      if (!desc) {
        desc = document.createElement('meta');
        desc.name = 'description';
        document.head.appendChild(desc);
      }
      desc.content = description;

      let ogDesc = ensureMeta('og:description', 'property');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = description;
    }

    let ogTitle = ensureMeta('og:title', 'property');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    if (path) {
      let ogUrl = ensureMeta('og:url', 'property');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.content = path;
    }
  }, [title, description, path]);

  return null;
}
