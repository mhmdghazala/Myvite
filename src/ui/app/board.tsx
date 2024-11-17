import "./css/ui.css"
import { CardViewBlock } from "./card_view"
export function KingsBoard() {
    const CardId = "C1" as string;
    const CardBal = 5 as number;
    const CardLvl = 1 as number;
    return (
        <div className="board-classic">
            <img className="board-header" src="/header.png"/>
            <div className="board-content">
              KingsBoard
            </div>
        </div>
    )
}