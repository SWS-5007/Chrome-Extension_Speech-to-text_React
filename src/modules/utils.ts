import kebabCase from 'lodash/kebabCase'

// # XPath Cheatsheet: https://devhints.io/xpath

/**
 * Generic helper function to return an element who's attrbute matches the given
 * string pattern
 * @param
 */
export function findElementWithAttribute(element: string, attribute: string, match: string) {
    const xpath = `//${element}[contains(@${attribute}, '${match}')]`
    const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as Element
    return matchingElement
}

/**
 * Returns the HTML element of the specified tag type which contains the specified string
 * @param element string describing the tag name of the element to find
 * @param text string of content that should be contained in the element
 * @returns Element of the specified tag containing the specified text
 */
export function findElementContainingText(element: string, text: string) {
    const xpath = `//${element}[text()='${text}']`
    const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as Element
    return matchingElement
}

/**
 * Returns the input element of containing the specified placeholder text
 * @param text placeholder text that should be contained in the element
 * @returns Input element containing the specified text
 */
export function findElementContainingPlaceholder(text: string) {
    const xpath = `//input[@placeholder='${text}']`
    const searchInput = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as Element
    return searchInput
}

/**
 * Returns the anchor element containing the specified text somewhere in its href
 * @param text text string that should appear in the href
 * @returns Anchor element who's href contains the specified text
 */
export function findLinkContainingHref(text: string) {
    const xpath = `//a[contains(@href,'${text}')]`
    const searchInput = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as Element
    return searchInput
}


/** Utility function to fix errors used if we simple return a kebab case
 * for submenu matching.  The result doesn't match the Meraki dashboard
 */
export function specialKebabCase(text: string) {
    console.log(`Special kebabing ${text}`)
    if (text === 'SSIDs') {
        return 'ssids'
    }

    return kebabCase(text)
}
