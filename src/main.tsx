
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/dashboard.css'
import { trackPageView } from './utils/facebookPixel'
import { trackRedditPageView } from './utils/redditPixel'

// Track PageView on app initialization for both Facebook and Reddit
trackPageView();
trackRedditPageView();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
