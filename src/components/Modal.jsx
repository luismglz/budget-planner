import React from "react";

import CloseModalBtn from '../img/close.svg'

const Modal = ({setModal}) => {


  const hideModal = () => {
    setModal(false)
  }


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseModalBtn}
          alt="close modal"
          onClick={hideModal}/>
      </div>
    </div>
  )
}

export default Modal