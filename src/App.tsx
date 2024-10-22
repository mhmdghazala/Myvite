import { PirateBar } from './ui/bars'
import { CardsBlock }from "./ui/cards_box"
import { PirateMedal } from "./ui/bars"
import { Arena } from "./ui/arena";
import './App.css'

function App() {
  
  return (
  <>
    <div className="stars">
      <div className="twinkling"></div>
    </div>

    <div className="ocean">
      <div className="app">
        <PirateBar/>
        <CardsBlock/>
        <div className="spacer"></div>
      </div>
      <div className="wave wave1"></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div>
    </div>
    <div className="nav">
      <button className="button">play</button>
      <button className="button">Tre</button>
      <button className="button">pongs</button>
      <button className="button">shop</button>
    </div>
  </>
  )
}

export default App
