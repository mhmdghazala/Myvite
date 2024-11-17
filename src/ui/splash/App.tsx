import './css/App.css'
import { Suspense} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CardsBlock } from '../app/cards_box';
import { Arena } from '../app/arena';
import { PirateBar, PirateMedal, PirateNav } from '../app/bars';
import { Route ,useLocation ,Routes } from "react-router-dom";
import { KingsBoard } from '../app/board';

function App() {
  const Location = useLocation();
  return (
<Suspense fallback={"Loading.."}>
<div className='bar'>
      <Routes>
        <Route path="/board" element={<div>KingsBoard</div>} />
        <Route path="/cards" element={<div>Cards</div>} />
        <Route path="/arena" element={<div>Arena </div>} />
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<div> Game </div>} />
      </Routes>
</div>
<div className="app">
  <TransitionGroup component={null}>
    <CSSTransition key={Location.key} classNames="modals" timeout={300}>
      <Routes location={location}>
        <Route path="/board" element={<KingsBoard />} />
        <Route path="/cards" element={<CardsBlock />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/blue-sea" element={<div> Blue Sea </div>} />
        <Route path="/grand-line" element={<div> Grand Line </div>} />
        <Route path="/new-world" element={<div> New World </div>} />
        <Route path="/" element={<PirateMedal />} />
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
