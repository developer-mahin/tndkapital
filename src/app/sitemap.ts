import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tndkapital.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/about-us',
    '/our-products',
    '/how-it-works',
    '/contact-us',
    '/faqs',
    '/apply-now',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
