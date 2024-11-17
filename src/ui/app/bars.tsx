import { Link } from "react-router-dom";
import "./css/ui.css";
import { useState } from "react";

export function PirateBar() {
 return (
  <div className="bar-down">
    <div className="bar-side">
      <button className="button-beri" >100K</button>
      <button className="button-gems" >100K</button>
    </div>
  </div>
 )
}
export function PirateMedal(){
  return (
    <div className="cover">
      <img className="medal-icon" src="https://raw.githubusercontent.com/mhmdghazala/Myvite/refs/heads/main/public/lavapirateslogo%20(350%20x%20350%20px).png" img-size="100px" ></img>
      <div className="medal">
        <div className="medal-title">
        Samurai
        </div>
        <div className="medal-value">
        100K EXP
        </div>
      </div>
    </div>
  )}
  export function PirateNav() {
    //Define Variable
    const [B1, setB1] = useState("nav-icons");
    const [B2, setB2] = useState("nav-icons");
    const [B3, setB3] = useState("nav-icons");
    const [B4, setB4] = useState("nav-icons");
    //Set Functions
    const Nav1 = () => { setB1("nav-icons nav-active"), setB2("nav-icons"), setB3("nav-icons"), setB4("nav-icons")};
    const Nav2 = () => { setB2("nav-icons nav-active"), setB1("nav-icons"), setB3("nav-icons"), setB4("nav-icons")};
    const Nav3 = () => { setB3("nav-icons nav-active"), setB2("nav-icons"), setB1("nav-icons"), setB4("nav-icons")};
    const Nav4 = () => { setB4("nav-icons nav-active"), setB2("nav-icons"), setB3("nav-icons"), setB1("nav-icons")};
    return (
       <div className="nav">
          <Link onClick={Nav1} to="/"> <img className={B1} src="/profile.png" alt="Profile" /> </Link>
          <Link onClick={Nav2} to="/arena"> <img className={B2} src="/arena.png" alt="Arena" /> </Link>
          <Link onClick={Nav3} to="/cards"> <img className={B3} src="/tre.png" alt="Tre" /> </Link>
          <Link onClick={Nav4} to="/board"> <img className={B4} src="/play.png" alt="Play" /> </Link>
       </div>
    )
   }