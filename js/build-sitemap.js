import { generateSitemap, BASE_URL, PAGES } from './pages-config.js';
import { writeFileSync } from 'fs';

function buildSitemap() {
  const sitemap = generateSitemap();
  
  writeFileSync('./sitemap.xml', sitemap);
  console.log(`✅ Sitemap generado: ${PAGES.length} páginas`);
  console.log(`   URL base: ${BASE_URL}`);
}

buildSitemap();