import { useState } from 'react'

import AlertError from "./components/AlertError"
import Card from "./components/Card"
import Modal from "./components/Modal"


function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <AlertError />
      <Card />
      <Modal value={input} onChange={({target}) => setInput(target.value)} />
    </div>
  )
}

export default App
