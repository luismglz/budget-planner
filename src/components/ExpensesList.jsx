import React from "react";
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses
}) => {
  return (
    <div className="listado-gastos contenedor">


      {
        filter ? (
          <>
            <h2>{filteredExpenses.length 
            ? 
            `${filter.charAt(0).toUpperCase()+filter.slice(1)} expenses` 
            : 
            `No ${filter} expenses`}
            </h2>
            {filteredExpenses.map(expense => (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            ))
            }
          </>
        ) : (
          <>
            <h2>{expenses.length ? 'Expenses' : 'No expenses yet'}</h2>
            {expenses.map(expense => (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            )
            )}
          </>
        )
      }
    </div>
  )
}


export default ExpensesList