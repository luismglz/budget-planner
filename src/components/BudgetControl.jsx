
import { useEffect, useState } from "react"
import{CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({budget, expenses}) => {


  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spentBudget, setSpentBudget] = useState(0);
 


  useEffect(()=>{
    const totalSpent = expenses.reduce((accumulated, expense)=> expense.amount + accumulated, 0);

    const totalAvailable = budget - totalSpent;

    //calculate spent percentage
    const newPercentage =(((budget - totalAvailable) / budget) * 100).toFixed(2);

    setSpentBudget(totalSpent);
    setAvailable(totalAvailable);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1200);


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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6',
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />

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