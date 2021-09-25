import stripHTMLEntities from "./strip-html-entities"
import stripHTMLTags from "./strip-html-tags"

let newsCounter = 0

const today = new Date()

function getNewsSitemapRow(media) {
  const keywords = (media.alternative_sections_mv_s || []).join(', ')

  const noHTML = stripHTMLTags(media.title)
  const title = stripHTMLEntities(noHTML)

  return `
    <url>
      <loc>${media.url.replace('http://', 'https://')}</loc>
      <news:news>
        <news:publication>
          <news:name>R7.COM</news:name>
          <news:language>pt-br</news:language>
        </news:publication>
        <news:publication_date>${media.first_published_at}</news:publication_date>
        <news:title>${title}</news:title>
        <news:keywords>${keywords}</news:keywords>
      </news:news>
    </url>
  `.trim()
}

function getValidNewsForSitemap(media) {
  // exibir até mil notícias
  const lessThenOneThousand = newsCounter < 1000

  // publicado até dois dias atrás
  const publishedAt = new Date(media.first_published_at)
  const difference = Math.abs(publishedAt - today)
  const days = Number.parseInt(difference / (1000 * 3600 * 24), 10)
  const twoDaysOlder = days < 3

  // status marcado como publicado
  const published = `${media.state}`.toLowerCase().trim() === 'published'

  if (lessThenOneThousand && twoDaysOlder && published) {
    newsCounter++;
    return media
  }
}

export default function getNewsSitemapContent(data) {
  newsCounter = 0;

  const medias = data
    .filter((media) => getValidNewsForSitemap(media))
    .map((media) => getNewsSitemapRow(media))

  return medias.join('')
}