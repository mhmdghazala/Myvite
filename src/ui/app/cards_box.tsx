import "./css/ui.css";

import { CardViewBlock } from "./card_view";

export function CardsBlock() {
  const CardId = "C1" as string;
  const CardBal = 5 as number;
  const CardLvl = 1 as number;
   return (
    <div className="cards-box">
      <div className="cards-box-title">
        Cards
      </div>
      <div className="cards-box-content">
        <div className="bar-side">
          <CardViewBlock Id={CardId} Lvl={CardLvl} Bal={CardBal} />
          <CardViewBlock Id={"E1"} Lvl={2} Bal={5} />
          <CardViewBlock Id={"L1"} Lvl={4} Bal={10}/>
          <CardViewBlock Id={"E1"} Lvl={2} Bal={5}/>
          <CardViewBlock Id={"C1"} Lvl={4} Bal={30}/>
        </div>
      </div>
    </div>
   )
}