import { useState } from "react";

function Buscador({aBuscar}){
    const [search,setSearch] = useState('')

    const funcionBuscador = (e)=>{
        setSearch(e.target.value)
    }
    const enviarBuscador = (e)=>{
        e.preventDefault()
        aBuscar(search)
    }
    return(
        <>
        <form onSubmit={enviarBuscador}>
        <input type="text" className="input" value={search} onChange={funcionBuscador} placeholder="Buscar Dia Festivo..." />
        </form>
        </>
    )
}
export default Buscador;