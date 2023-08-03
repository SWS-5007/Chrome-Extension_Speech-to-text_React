

/**
 * Verifies that the message sent is from Boundless and comes from the same browser window
 * 
 * @param event MessageEvent sent via sendMessage api
 * @returns boolean - true if message is authentic
 */
function authenticatedMessage(event: MessageEvent) {
  const source_check = event.source === window
  const data_source_check = event.data.source === 'boundlessdigital_com'
  const origin_check = event.origin === window.location.origin // or matches a meraki domain?
  const isAuthenticated = source_check && data_source_check && origin_check;
  return isAuthenticated
}


export { authenticatedMessage }
