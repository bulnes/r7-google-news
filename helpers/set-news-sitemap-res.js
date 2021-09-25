import getNewsSitemapContent from "./get-news-sitemap-content"
import getNewsSitemapStructure from "./get-news-sitemap-structure"

export default function setNewsSitemapRes(res, data) {
  const sitemapContent = getNewsSitemapContent(data)
  const sitemap = getNewsSitemapStructure(sitemapContent)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}