import { CardViewBlock } from "./card_view"
import "./css/ui.css"

export function Board() {
    const CardId = "C1" as string;
    const CardBal = 5 as number;
    const CardLvl = 1 as number;
    return (
        <>
        <img src="/header.png"/>
        <div className="board-classic">
            <div className="bar-side">
          <CardViewBlock Id={CardId} Lvl={CardLvl} Bal={CardBal} />
          <CardViewBlock Id={"E1"} Lvl={2} Bal={5} />
          <CardViewBlock Id={"L1"} Lvl={4} Bal={10}/>
          <CardViewBlock Id={"E1"} Lvl={2} Bal={5}/>
          <CardViewBlock Id={"C1"} Lvl={4} Bal={30}/>
            </div>
        </div>
        </>
    )
}