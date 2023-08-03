import browser from 'webextension-polyfill'


/**
 * Helper function which grabs the current tab object for the browser tab that the user has opn
 * This is used for Chrome extension specific function calls which required the current tab as an
 * input parameter
 *  */
async function getCurrentTab() {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  return tab
}

export default getCurrentTab
