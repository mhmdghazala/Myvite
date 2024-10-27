import { PirateBar } from '../app/bars'
import { CardsBlock }from "../app/cards_box"
import { PirateMedal } from "../app/bars"
import { Arena } from "../app/arena";
import './css/App.css'
import { Suspense } from 'react';

function App() {
  
  return (
  <>
    <div className="app">
      <Suspense fallback={""}>
        <PirateBar/>
        <CardsBlock/>
      </Suspense>
      <div className="spacer"></div>
    </div>
  </>
  )
}
export default App
