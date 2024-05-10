import './App.css'
import { useState } from 'react'
import MiAPI from './components/MiApi'
import Buscador from './components/Buscador'

function App() {
  const [search,setSearch] = useState('')
  const appBuscador = (eventoBuscador) =>{
    setSearch(eventoBuscador)
  }
  return (
    <>
    <Buscador aBuscar={appBuscador} />
    <div>
    <MiAPI search={search} />
    </div>
    </>
  )
}

export default App
