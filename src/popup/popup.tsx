import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {} from 'styled-components/cssprop'
import { createGlobalStyle } from 'styled-components'
// import { getToken, clearToken } from '@/modules/token'

import LoginPopup from './LoginPopup'
import OrganizationSelectPopup from './OrganizationSelectPopup'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after { box-sizing: border-box }
`
/*global chrome*/
const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // getToken().then((token) => {
    //   if (token) {
    //     setAuthenticated(true)
    //     console.log('we should be loggedIn')
    //   } else {
    //     console.log('we should be logged out')
    //   }
    // })
  }, [])

  const Page = authenticated ? OrganizationSelectPopup : LoginPopup
  console.log("test popup");
  function handleAuthChange(command: string) {
    if (command === 'login') {
      setAuthenticated(true)
      console.log(`Login sent:  authenticated: ${authenticated}`)
    }

    if (command === 'logout') {
      setAuthenticated(false)
      console.log(`Logout sent:  authenticated: ${authenticated}`)
      // clearToken()
    }

   
  }
  const recordHandler = () => {
    
    test();
   
  }
  function test() {
    
    const extensionId = 'test';
    const session = "record data";

    chrome.runtime.sendMessage(extensionId, session,
          function(response) {
             console.log(response);
          });
  }
 
  return (
    <React.Fragment>
       
      <GlobalStyle />
      <div>
         <h5>This is the speech text chrome extension</h5>
         <button onClick={recordHandler}>record speech</button>
       </div>
      {/* <Page handleAuthChange={handleAuthChange} /> */}
    </React.Fragment>
  )
}

const element = document.createElement('div')
document.body.appendChild(element)
const root = createRoot(element)
root.render(<React.StrictMode> <App /> </React.StrictMode>)
