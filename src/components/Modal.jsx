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
      </form>
    </div>
  )
}

export default Modal