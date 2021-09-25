/**
 * Remove todas as entidades HTML do texto, por exemplo: &nbsp;
 * @param {String} text Texto com HTML Entities
 * @returns Texto sem HTML Entities
 */
export default function stripHTMLEntities(text) {
  return text.toString().replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/ig, '')
}