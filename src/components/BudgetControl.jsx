
import { useEffect, useState } from "react"
import{CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget
}) => {


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

  const handleResetApp = () =>{
    const result = confirm('Do you want to reset budget and expenses?');

    if(result){
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }

  }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626': '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />

      </div>
      <div className="contenido-presupuesto">
        <button 
        className="reset-app"
        type="button"
        onClick={handleResetApp}>Reset App</button>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
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