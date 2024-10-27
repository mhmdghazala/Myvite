import "./css/stars.css"
import App from "./App"

export default function Stars () {
    return (
<>
        <div className="stars">
        <div className="twinkling"></div>
      </div>
  
      <div className="ocean">
        <App />
        <div className="wave wave1"></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </div>
</>  
    )
}