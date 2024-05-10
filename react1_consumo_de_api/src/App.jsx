import { useState } from 'react'
import './App.css'
import MiAPI from './components/MiApi'
import Buscador from './components/Buscador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Buscador/>
    <div>
    <MiAPI/>
    </div>
    </>
  )
}

export default App
