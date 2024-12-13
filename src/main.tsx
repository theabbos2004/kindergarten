import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import MainContext from './contexts/MainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContext>
  </StrictMode>,
)
