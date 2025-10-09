export interface PageMeta {
  title: string;
  description?: string;
  favicon?: string;
}

export const pagesMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Mari — Front-End Developer',
    description:
      'Building elegant, performant, and user-focused web experiences.',
    favicon: '/favicontree.png',
  },
  '/about': {
    title: 'About Me | Mari',
    description:
      'Learn more about my journey and passion for front-end development.',
    favicon: '/favicontree.png',
  },
  '/projects': {
    title: 'Projects | Mari',
    description: 'A showcase of my favorite projects.',
    favicon: '/favicontree.png',
  },
};
