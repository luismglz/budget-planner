import { useState, useEffect } from "react";


const Filters = ({filter, setFilter}) => {
return(
  <div className="filtros sombra contenedor">
    <form>
      <div className="campo">
        <label>Filter expenses</label>
        <select 
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="" disabled defaultValue={"-- Select --"}>-- Select --</option>
          <option value="saving">Saving</option>
          <option value="food">Food</option>
          <option value="miscellaneous">Miscellaneous</option>
          <option value="leisure">Leisure</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
        </select>
      </div>
    </form>
  </div>
)
}


export default Filters