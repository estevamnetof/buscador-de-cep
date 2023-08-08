import { useState } from 'react'

import AlertError from "./components/AlertError"
import Card from "./components/Card"
import Modal from "./components/Modal"

function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <AlertError />
      <Card value={input} setInput={({target}) => setInput(target.value)} />
      <Modal />
      {input}
    </div>
  )
}

export default App
