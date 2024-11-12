import "./css/index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Ship from "./ui/splash/ship.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> <Ship/> </BrowserRouter>
  </StrictMode>,
)
