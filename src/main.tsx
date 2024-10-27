import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ocean from "./ui/splash/ocean.tsx"
import "./css/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ocean/>
  </StrictMode>,
)
