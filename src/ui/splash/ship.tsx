import Board from '../../assets/ship.svg';
import App from './App';
import "./css/ship.css"
export default function Ship() {
    return (
    <>
      <App/>    
      <img className='board' src="/ship.png" alt="Board" />
    </>
    )
}