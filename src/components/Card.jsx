// import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './Card.scss';

const Card = ({ input, setInput }) => {
  return (
    <div className='container'>
        <div className="card">
          <form>
              <h1 className='title'>Buscador de CEP</h1>
              <input id='input-cep' type="text" placeholder='00000-000' value={input} onChange={console.log(setInput)} />
              <button className='search-cep' type='submit'>
                  Buscar
                  <BsArrowRight />
              </button>
          </form>
        </div>
    </div>
  )
}

export default Card
