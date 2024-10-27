import "./css/ui.css";

interface CardDetails {
  Id: string;
  Lvl: number;
  Bal: number;
};

export function CardViewBlock(props: CardDetails) {
  const { Id, Lvl, Bal } = props;
  let Img = "https://raw.githubusercontent.com/mhmdghazala/Myvite/refs/heads/main/public/lavapirateslogo%20(350%20x%20350%20px).png"; // Declare Img as a string
  if (Lvl <= 5) { Img = "https://raw.githubusercontent.com/mhmdghazala/Myvite/refs/heads/main/public/lavapirateslogo%20(350%20x%20350%20px).png"};
  if (Lvl >= 5 && Lvl < 10) { Img = ""};
  if (Lvl >= 10 && Lvl < 15) { Img = ""};
  if (Lvl >= 15 && Lvl < 20) { Img = ""};
  if (Lvl >= 25 && Lvl < 30) { Img = ""};
  if (Lvl >= 30) { Img = ""};
// set card Rareity
  let CardClass = "card-common"
  if (Id == "E1" || Id == "E2" || Id == "E3") {CardClass ="card-epic"};
  if (Id == "L1" || Id == "L2" || Id == "L3") {CardClass="card-legend"};
  return (
    <div className={CardClass}>
      <div className="card-bar">
          <div className="card-lvl">{Lvl} 
          </div>
          <div className="card-bal"> x{Bal}
          </div>
      </div>
      <img className="card-cover" src={Img}/>
      <button className="card-button">
        UP
      </button>
    </div>
  )};
    

