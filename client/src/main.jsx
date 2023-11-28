import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SanityProvider } from './context/SanityContext.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SanityProvider>
      <App />
    </SanityProvider>
  </BrowserRouter>
)
