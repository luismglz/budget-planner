
import { useEffect, useState } from "react"

const BudgetControl = ({budget, expenses}) => {

  const [available, setAvailable] = useState(0);
  const [spentBudget, setSpentBudget] = useState(0);


  useEffect(()=>{
    const totalSpent = expenses.reduce((accumulated, expense)=> expense.amount + accumulated, 0);
    console.log(totalSpent);
    setSpentBudget(totalSpent);
  },[expenses])



  const formatAmount = (amount) =>{
    return amount.toLocaleString('en-US',
    {
      style:'currency',
      currency: 'USD'
    })
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Chart</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p>
          <span>Available: </span> {formatAmount(available)}
        </p>
        <p>
          <span>Spent: </span> {formatAmount(spentBudget)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl