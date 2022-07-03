import React from "react";
import { useState, useEffect } from "react";
import CloseModalBtn from '../img/close.svg';
import Message from "./Message";

const Modal = ({
  setModal, 
  animateModal, 
  setAnimateModal, 
  saveExpense,
  editExpense,
  setEditExpense
}) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  useEffect(()=>{
    if (isUpdatingExpense(editExpense)) {
      setName(editExpense.name);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setDate(editExpense.date);
      setId(editExpense.id);
      
    }
  },[])

  const isUpdatingExpense = (editExpense) =>{
    return Object.keys(editExpense).length > 0 ? true : false;
  }

  const hideModal = () => {

    setAnimateModal(false);

    setEditExpense({});

    setTimeout(() => {
      setModal(false)
    }, 500);

  }

  const handleSubmit = e => {
    e.preventDefault();

    if([name, amount, category].includes('')){
      setMessage('All fields are required');

      setTimeout(()=>{
        setMessage('');
      },3000)
      
      return;
    }

    saveExpense({name, amount, category, id, date});
  }


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseModalBtn}
          alt="close modal"
          onClick={hideModal}/>
      </div>
      <form
      onSubmit={handleSubmit}
       className={`formulario ${animateModal ? "animar" : "cerrar"}`}
       >
        <legend>{isUpdatingExpense(editExpense) ? "Edit Expense": "New Expense"}</legend>
        {message && <Message type="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Expense name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter expense name"
            value={name}
            onChange={e => setName(e.target.value)}/>
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount: e.g. 300" 
            value={amount === 0 ? "" : amount}
            onChange={e => setAmount(Number(e.target.value))}/>
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select 
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}>
            <option value="" disabled defaultValue={"-- Select --"}>-- Select --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input
          type="submit"
          value={isUpdatingExpense(editExpense) ? "Update changes" : "Add Expense"}/>
      </form>
    </div>
  )
}

export default Modal