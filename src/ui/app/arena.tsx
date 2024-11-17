import "./css/ui.css";
import { Link } from "react-router-dom";

export function Arena() {
  return (
    <div className="board-classic">
    <img className="board-header" src="/header.png"/>
    <div className="board-content">
      <Link to="/blue-sea" className="arena">
        <img className="arena-cover" src="/bluesea.png"/>
        <div className="arena-header">Blue Sea
          <div className="arena-sub-header">Arena Description and prize</div>
        </div>
      </Link>
      <Link to="/grand-line" className="arena">
        <img className="arena-cover" src="/grandline.png"/>
        <div className="arena-header">Grand Line
          <div className="arena-sub-header">Arena Description and prize</div>
        </div>
      </Link>
      <Link to="/new-world" className="arena">
        <img className="arena-cover" src="/newworld.png"/>
        <div className="arena-header">New World
          <div className="arena-sub-header">Arena Description</div>
        </div>
      </Link>
    </div>
    </div>
  )
}
