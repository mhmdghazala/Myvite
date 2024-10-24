import "./ui.css";

export function Arena() {
  return (
  <div className="bar-down">
    <div className="bar-side">
      <a href="#page-1">1</a>
      <a href="#page-2">2</a>
      <a href="#page-3">3</a>
    </div>
    <div className="arena-box">
      <div className="arena-view" id="page-1">1</div>
      <div className="arena-view" id="page-2">2</div>
      <div className="arena-view" id="page-3">3</div>
    </div>
  </div>
  )
}
