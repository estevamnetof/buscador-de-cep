// import React from 'react'
import { IoMdClose } from 'react-icons/io'

import './Modal.scss';

const Modal = () => {
  return (
    <div className="modal-wrapper ">
      <div className="modal card">
        <h2 className="title">
            <IoMdClose className='close' />
            <span>asdasdasdasdasd</span>
        </h2>
      </div>
    </div>
  )
}

export default Modal
