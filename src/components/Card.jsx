/* eslint-disable react/prop-types */
// import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './Card.scss';

const Card = ({ input, setInput, searchCep }) => {

  return (
    <div className='container'>
        <div className="card">
          <h1 className='title'>Buscador de CEP</h1>
          <input id='input-cep' type="text" placeholder='00000-000' value={input} onChange={setInput} />
          <button className='search-cep' onClick={searchCep}>
              Buscar
              <BsArrowRight />
          </button>
        </div>
    </div>
  )
}

export default Card
