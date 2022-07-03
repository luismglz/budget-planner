import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { generateID } from './helpers'
import IconNewExpense from './img/new_expense.svg'

function App() {

  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editExpense, setEditExpense] = useState({});

  useEffect(()=>{
    if(Object.keys(editExpense).length > 0){
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true)
      }, 500);
    }
  }, [editExpense])
  

  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  const deleteExpense = id => {
    const updatedExpensesList = expenses.filter( expense => expense.id !== id);
    setExpenses(updatedExpensesList);
  }


  const saveExpense = expense => {
    if (expense.id) {
      //edit expense
      const updatedExpenses = expenses.map(expenseState => 
        expenseState.id === expense.id ? expense : expenseState
      );

      setExpenses(updatedExpenses);
      setEditExpense({});
    } else {
      //new expense
      expense.id = generateID();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }


    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }



  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
        <main>
          <ExpensesList
            expenses={expenses}
            setEditExpense={setEditExpense}
            deleteExpense={deleteExpense}
            />
        </main>
        <div className='nuevo-gasto'>
          <img
            src={IconNewExpense}
            alt="icon new expense" 
            onClick={handleNewExpense}/>
        </div>
        </>
      )}

      {modal && 
      <Modal 
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        editExpense={editExpense}
        setEditExpense={setEditExpense}
        />
      }

    </div>
  )
}

export default App
