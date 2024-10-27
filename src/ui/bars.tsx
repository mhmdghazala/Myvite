import "./ui.css";
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