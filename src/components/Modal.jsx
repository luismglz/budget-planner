import React from "react";

import CloseModalBtn from '../img/close.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {


  const hideModal = () => {
    
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseModalBtn}
          alt="close modal"
          onClick={hideModal}/>
      </div>
      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>
        <div className="campo">
          <label htmlFor="name">Expense name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter expense name"/>
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount: e.g. 300" />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select id="category">
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