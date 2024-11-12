import './css/App.css'
import { Suspense} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CardsBlock } from '../app/cards_box';
import { Arena } from '../app/arena';
import { PirateBar, PirateMedal, PirateNav } from '../app/bars';
import { Route ,useLocation ,Routes } from "react-router-dom";
import { Board } from '../app/board';

function App() {
  const Location = useLocation();
  return (
<Suspense fallback={"Loading.."}>
<div className="bar"> <PirateBar /> </div>
<div className="app">
  <TransitionGroup component={null}>
    <CSSTransition key={Location.key} classNames="modals" timeout={300}>
      <Routes location={location}>
      <Route path="/board" element={<Board />} />
        <Route path="/cards" element={<CardsBlock />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="*" element={<PirateMedal />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
</div>
<div className='nav'>
  <PirateNav/>
</div> 
</Suspense>
  )
}
export default App
