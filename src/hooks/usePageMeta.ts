import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pagesMeta, type PageMeta } from '../config/pages';

export function usePageMeta(metaOverrides?: Partial<PageMeta>) {
  const location = useLocation();

  useEffect(() => {
    const config = pagesMeta[location.pathname] || {};

    const title = metaOverrides?.title || config.title || 'Mari — Portfolio';
    const description =
      metaOverrides?.description ||
      config.description ||
      'Portfolio of Mari, Front-End Developer.';
    const faviconUrl =
      metaOverrides?.favicon || config.favicon || '/favicontree.png';
    document.title = title;

    if (description) {
      let metaDesc = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    if (faviconUrl) {
      let favicon = document.getElementById('favicon') as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.id = 'favicon';
        document.head.appendChild(favicon);
      }
      favicon.href = faviconUrl;
    }
  }, [location.pathname, metaOverrides]);
}
