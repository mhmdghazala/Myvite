import { PirateBar } from '../app/bars'
import { CardsBlock }from "../app/cards_box"
import { PirateMedal } from "../app/bars"
import { Arena } from "../app/arena";
import './css/App.css'
import { Suspense, useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";


function App() {
  const [Tre, setTre] = useState(true);
  const [Play, setPlay] = useState(false);
  const [Home, setHome] = useState(false);
  const ModalsRef = useRef(null);

  return (
<Suspense fallback={""}>
  <div className="app">
    <PirateBar />
      <CSSTransition Ref={ModalsRef} in={Home} timeout={100} classNames="modals" unmountOnExit 
      >
        <div className='screen' ref={ModalsRef}>
          <CardsBlock/>
        </div>
      </CSSTransition>
      <CSSTransition Ref={ModalsRef} in={Play} timeout={1000} classNames="modals" unmountOnExit 
      >
        <div className="screen" ref={ModalsRef}>
          <img src="/bluesea.png" />
        </div>
      </CSSTransition>
      <CSSTransition Ref={ModalsRef} in={Tre} timeout={1000} classNames="modals" unmountOnExit 
    >
      <div className='screen' ref={ModalsRef}>
        <img src="/grandline.png" />
      </div>
      </CSSTransition>
  </div>
  <div className="nav">
    <button onClick={()=> (setPlay(false), setTre(false), setHome(true))}> Home </button>
    <button onClick={()=> (setHome(false), setTre(false), setPlay(true))}> Arena </button>
    <button onClick={()=> (setPlay(false), setHome(false), setTre(true))}> Tre </button>
  </div>
</Suspense>
  )
}
export default App
