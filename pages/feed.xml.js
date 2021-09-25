import { SECTION_ID } from "./configs/section-id"
import setNewsSitemapRes from "./helpers/set-news-sitemap-res"
import getMediasData from "./services/get-medias-data"

export default function FeedXML() {}

export async function getServerSideProps({ res, query }) {
  const { type } = query
  const sectionType = `${type}`.toUpperCase()
  const sectionId = SECTION_ID[sectionType] || SECTION_ID.NOTICIAS

  const data = await getMediasData(sectionId)

  if (!data) {
    return { notFound: true }
  }

  setNewsSitemapRes(res, data)

  return { props: {} }
};
