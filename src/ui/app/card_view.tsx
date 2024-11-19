import "./css/ui.css";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface CardDetails {
  Id: string;
  Lvl: number;
  Bal: number;
};

export function CardViewBlock(props: CardDetails) {
  const { Id, Lvl, Bal } = props;
  let Title = "Pirate";
  let Img = "https://raw.githubusercontent.com/mhmdghazala/Myvite/refs/heads/main/public/lavapirateslogo%20(350%20x%20350%20px).png"; // Declare Img as a string
  if (Lvl <= 5) { Img = "https://raw.githubusercontent.com/mhmdghazala/Myvite/refs/heads/main/public/lavapirateslogo%20(350%20x%20350%20px).png"};
  if (Lvl >= 5 && Lvl < 10) { Img = ""};
  if (Lvl >= 10 && Lvl < 15) { Img = ""};
  if (Lvl >= 15 && Lvl < 20) { Img = ""};
  if (Lvl >= 25 && Lvl < 30) { Img = ""};
  if (Lvl >= 30) { Img = ""};
// set card Rareity
  let CardClass = "card common";
  let TagClass = "tag-body common";
  let Rarity = "Common";
  if (Id == "E1" || Id == "E2" || Id == "E3") {CardClass ="card epic", TagClass="tag-body epic", Rarity="Epic"};
  if (Id == "L1" || Id == "L2" || Id == "L3") {CardClass="card legend", TagClass= "tag-body legend ", Rarity="Legendary"};
  // set CardsUI
  const [Info, setInfo] = useState(false);
  const CSSRef = useRef(null);
  return (
  <div>
    <div className={CardClass} onClick={() => setInfo(true)}>
      <img className="card-icon" src={Img}/>
      <div className="card-lvl">Level {Lvl} </div>
      <div className="card-bal"> {Bal}/500 </div>
    </div>
    <CSSTransition in={Info} nodeRef={CSSRef} timeout={300} classNames="fade" unmountOnExit>
    <div className="card-info" ref={CSSRef}>
      <img className="card-cover" src={Img}/>
      <div className="tag-bar">
        <div className="tag">
          <div className={TagClass}> x{Bal} </div>
        </div>
        <div className="tag">
          <div className={TagClass}> LvL {Lvl}  </div>
        </div>
        <div className="tag">
          <div className={TagClass}> {Rarity} </div>
        </div>
      </div>
      <div className="card-spacer"></div>
      <div className="card-title"> {Title} </div>
      <div className="ability-bar">
        <div className="ability-icon">
          <img className="tag-icon" src="/profile.png"/>
          <div>Def</div>
        </div>
        <div className="ability-icon">
          <img className="tag-icon" src="/profile.png"/>
          <div> Atk </div>
        </div>
        <div className="ability-icon">
          <img className="tag-icon" src="/profile.png"/>
          <div> Exp </div>
        </div>
        <div className="ability-icon">
          <img className="tag-icon" src="/profile.png"/>
          <div> $ </div>
        </div>
      </div>
      <div className="card-tools">
        <div className="button-1ry" > Up </div>
        <div className="button-2ry"> Send </div>
        <div className="button-2ry" onClick={() => setInfo(false)}> Exit </div>
      </div>
    </div>
    </CSSTransition>
  </div>
  )};