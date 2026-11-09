import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_KEYWORDS } from '../config/seoConfig';

interface PageMetaProps {
  title: string;
  description: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function PageMeta({ title, description, structuredData }: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    document.title = title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', description);

    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', SEO_KEYWORDS.join(', '));
  }, [title, description]);

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}
