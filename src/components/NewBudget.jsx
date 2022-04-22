import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget }) => {

  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();

    console.log('sending form');
    if (!Number(budget) || Number(budget) < 0) {
      setMessage('Invalid budget');
    } else {
      console.log('Valid budget');
    }
  }



  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)} />
        </div>
        <input type="submit" value="add"></input>
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  )
}

export default NewBudget