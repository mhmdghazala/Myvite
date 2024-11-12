import { Link } from "react-router-dom";
import "./css/ui.css";

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
    return (
       <div className="nav-bar">
          <Link to="/"> <img className="nav-icons" src="/profile.png" alt="Profile" /> <div className="nav-text">Profile</div> </Link>
          <Link to="/arena"> <img className="nav-icons" src="/arena.png" alt="Arena" /> <div className="nav-text">Arena</div> </Link>
          <Link to="/cards"> <img className="nav-icons" src="/tre.png" alt="Tre" /> <div className="nav-text">Cards</div> </Link>
          <Link to="/cards"> <img className="nav-icons" src="/play.png" alt="Play" /> <div className="nav-text">play</div> </Link>
       </div>
    )
   }