import React from "react";
import NewBudget from "./NewBudget";

const Header = ({budget, setBudget}) => {

  return (
    <header>
      <h1>Budget Planner</h1>
      <NewBudget
        budget={budget}
        setBudget={setBudget}
      />
    </header>
  )
}

export default Header