import browser from 'webextension-polyfill'
import { injectScript } from '@/modules/injection'

console.log("initialize")

window.addEventListener('unhandledrejection', (event) => {
  // Sentry.captureEvent(event.reason)

})

try {
} catch (error) {}





