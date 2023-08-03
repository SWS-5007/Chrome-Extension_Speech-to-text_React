/** @module injection  */


/**
 * 
 * Create a script HTML element in the page, setting its source to the URL
 * Appends this element to element specified by CSS selector, or if not found, the head, or document root
 * document root element
 * 
 * @param {string} file_path Url of the javascript file to include
 * @param {string} selector CSS selector to append the new script tag to
 * 
 */
function injectScript(file_path: string, selector: string): void {
  const node =
    document.querySelector(selector) ||
    document.head ||
    document.documentElement
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', file_path)
  node.append(script)
}


/**
 * Using a Settings type here to make it more explicit in the calling code
 * What all of the inputs a re. Otherwise, its quickly hard to understand
 * 
 * @typedef StyleElementSettings
 * @property {string} id Specifies the id to assign to the newly created style element
 * @property {string} content CSS content to insert in the style element
 */
interface StyleElementSettings {
  id?: string
  content: string
}


/**
 * Takes in a content string and optionally an id
 * Creates a style HTML element in the page, assigning it the content
 * and id.  Appends this element to the head as lastChild, or
 * to the document root element
 * 
 * @param {StyleElementSettings} Settings element to insert as a style 
 */
function injectCSS({ id, content }: StyleElementSettings): void {
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  if (id) {
    style.setAttribute('id', id)
  }
  style.innerHTML = content
  const root = document.head || document.documentElement
  root.appendChild(style)
}
export { injectScript, injectCSS }
