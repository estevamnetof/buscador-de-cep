/* eslint-disable react/prop-types */
import { IoMdClose } from 'react-icons/io'

import './Modal.scss';

const Modal = ({ cep, isActive, closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  }

  return (
    <div className={`modal-wrapper ${isActive ? 'open' : ''}`}>
      <div className="modal card">
        <h2 className="title">
            <IoMdClose className='close' onClick={handleCloseModal} />
            <p>{cep.logradouro} </p>
            <p>Complemento: {cep.complemento}</p>
            <p>Bairro: {cep.bairro}</p>
            <p>Cidade: {cep.localidade}</p>
            <p>DDD: {cep.ddd}</p>
        </h2>
      </div>
    </div>
  )
}

export default Modal
