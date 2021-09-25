/**
 * Defini a estrutura base para os News Sitemaps 
 * @param {Object} content Conteúdo do sitemap
 * @returns String com a estrutura do Sitemap
 */
export default function getNewsSitemapStructure(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
    ${content}
  </urlset>`
}