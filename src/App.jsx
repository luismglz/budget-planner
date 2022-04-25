import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNewExpense from './img/new_expense.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true)
  }



  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img
            src={IconNewExpense}
            alt="icon new expense" 
            onClick={handleNewExpense}/>
        </div>
      )}

      {modal && <Modal setModal={setModal}/>}

    </div>
  )
}

export default App
