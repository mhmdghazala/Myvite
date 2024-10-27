import { PirateBar } from './ui/bars'
import { CardsBlock }from "./ui/cards_box"
import { PirateMedal } from "./ui/bars"
import { Arena } from "./ui/arena";
import './App.css'

function App() {
  
  return (
    <>
    <div className="app">
      <PirateBar/>
      <CardsBlock/>
      <div className="spacer"></div>
    </div>
    </>
  )
}
export default App
