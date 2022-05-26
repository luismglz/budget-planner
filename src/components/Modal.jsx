import React from "react";
import { useState } from "react";
import CloseModalBtn from '../img/close.svg';
import Message from "./Message";

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense}) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const hideModal = () => {
    
    setAnimateModal(false)

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

    saveExpense({name, amount, category});
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
        <legend>New Expense</legend>
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
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}/>
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select 
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}>
            <option value="" disabled selected>-- Select --</option>
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
          value="Add Expense"/>
      </form>
    </div>
  )
}

export default Modal