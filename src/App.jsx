import { useState } from 'react'

import AlertError from "./components/AlertError"
import Card from "./components/Card"
import Modal from "./components/Modal"

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const [isActive, setIsActive] = useState(false);

  function searchCep() {
    fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then(response => response.json()
    .then(cep => {

      setCep(cep);
      setIsActive(!isActive);
    }))
  }

  const handleCloseModal = () => {
    setIsActive(false);
  }


  return (
    <div>
      <AlertError />
      <Card value={input} setInput={({target}) => setInput(target.value)} searchCep={searchCep} />
      <Modal cep={cep} isActive={isActive} closeModal={handleCloseModal} />
    </div>
  )
}

export default App
