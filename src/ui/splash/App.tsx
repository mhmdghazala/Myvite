import './css/App.css'
import { Suspense} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CardsBlock } from '../app/cards_box';
import { Arena } from '../app/arena';
import { PirateBar, PirateMedal } from '../app/bars';
import { Route ,useLocation ,Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  const Location = useLocation();
  return (
<Suspense fallback={"Loading.."}>
<div className="bar"> <PirateBar /> </div>
<div className="app">
  <TransitionGroup component={null}>
    <CSSTransition key={Location.key} classNames="modals" timeout={300}>
      <Routes location={location}>
        <Route path="/cards" element={<CardsBlock />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="*" element={<PirateMedal />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
</div>
<div className='nav'>
          <Link to="/">Home</Link>
          <Link to="/arena">Arena</Link>
          <Link to="/cards">Cards</Link>
</div> 
</Suspense>
  )
}
export default App
