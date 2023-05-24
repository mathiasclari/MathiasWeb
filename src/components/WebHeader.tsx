import '../App.css'
import matimg from '../assets/mathias.svg'

export default function WebHeader() {
  return (

    <div className="header">
        <img src={matimg} alt="Mathias Clari Drenik" />
        <h1>Mathias Clari Drenik</h1>
    </div>
  );
}