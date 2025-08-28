import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n.jsx";
import Section from './components/Section.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section />
  </StrictMode>,
)
