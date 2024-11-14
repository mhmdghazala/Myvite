import "./css/ship.css"
import App from './App';
export default function Ship() {
    return (
    <>
    <div className="stars">
      <div className="twinkling"></div>
    </div>
    <App/>   
    <img className='board' src="/ship.png" alt="Board" />
    </>
    )
}