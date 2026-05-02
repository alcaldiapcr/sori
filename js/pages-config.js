const PAGES = [
  { url: '/index.html', priority: '1.0', changefreq: 'weekly' },
  { url: '/pages/predial.html', priority: '0.8', changefreq: 'weekly' },
  { url: '/pages/ingresos.html', priority: '0.8', changefreq: 'weekly' }
];

const BASE_URL = 'https://sori.puertocarreno.gov.co';

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  PAGES.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
}

export { PAGES, BASE_URL, generateSitemap };