import { BASE_URL } from "../configs/base-url"
import { SECTION_ID } from "../configs/section-id"

export default function HomeXML() {}

export async function getServerSideProps({ res }) {
  const originReq = BASE_URL

  const sitemapIds = Object.keys(SECTION_ID).map((id) => id.toLowerCase())
  const feedsItems = sitemapIds.map((id) => `${originReq}/feed.xml?type=${id}`)

  const today = new Date().toISOString().substring(0, 10)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${feedsItems
      .map((item) => (
        `
        <sitemap>
          <loc>${item}</loc>
          <lastmod>${today}</lastmod>
        </sitemap>
        `.trim()
      ))
      .join('')
    }
    </sitemapindex>
  `.trim()

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
};
