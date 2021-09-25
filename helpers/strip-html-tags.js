/**
 * Remove os HTML do texto informado
 * @param {String} text Texto com HTML
 * @returns Texto sem HTML
 */
export default function stripHTMLTags(text) {
  return text.toString().replace(/(<([^>]+)>)/ig, '');
}