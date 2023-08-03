import React from 'react'
import { createRoot } from 'react-dom/client'

import './options.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>This is the option <menu></menu></h1>
      <img src="icons/icon-48.png" />
    </div>
  )
}

const element = document.createElement('div')
document.body.appendChild(element)
const root = createRoot(element)
root.render(<React.StrictMode> <App /> </React.StrictMode>)
