import "./css/ui.css"
import { CardViewBlock } from "./card_view"
export function CardsBlock() {
    const CardId = "C1" as string;
    const CardBal = 5 as number;
    const CardLvl = 1 as number;
    return (
        <div className="board-classic">
            <img className="board-header" src="/header.png"/>
            <div className="board-content">
               <CardViewBlock Id={CardId} Lvl={CardLvl} Bal={CardBal} />
               <CardViewBlock Id={"E1"} Lvl={2} Bal={5} />
               <CardViewBlock Id={"L1"} Lvl={4} Bal={200}/>
               <CardViewBlock Id={"E1"} Lvl={2} Bal={50}/>
               <CardViewBlock Id={"C1"} Lvl={4} Bal={30}/>
               <CardViewBlock Id={"L1"} Lvl={3} Bal={100}/>
               <CardViewBlock Id={"L1"} Lvl={4} Bal={300}/>
               <CardViewBlock Id={"C1"} Lvl={2} Bal={300}/>
               <CardViewBlock Id={"C1"} Lvl={1} Bal={30}/>
               </div>
            </div>
    )
}