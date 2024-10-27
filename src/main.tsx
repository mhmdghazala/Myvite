import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UnderWater } from './ui/underwater.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnderWater />
  </StrictMode>,
)
