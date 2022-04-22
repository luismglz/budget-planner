import React from "react";


const NewBudget = ({budget, setBudget}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto" 
            type="text" 
            placeholder="Enter your budget"
            value={budget}
            onChange={(e)=> setBudget(e.target.value)}/>
        </div>
        <input type="submit" value="add"></input>
      </form>
    </div>
  )
}

export default NewBudget