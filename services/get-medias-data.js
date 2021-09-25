import { SECTION_ID } from '../configs/section-id'

/**
 * Busca pelas íntegras (matérias) de uma section 
 * @param {String} section ID da section (vida /pages/configs/section-id.js)
 * @returns Lista com as últimas íntegras da section requisitada 
 */
export default async function getMediasData(section) {
  const sectionId = section || SECTION_ID.NOTICIAS
  const sectionParam = `?section[]=${sectionId}`

  const url = [
    'https://cms-media-api.r7.com/',
    sectionParam,
    '&hierarchy=true',
    '&external_media=false',
    '&cover_image=true',
    '&page=1',
    '&per_page=2000',
  ].join('');

  const medias = await fetch(url)
  return await medias.json()
}