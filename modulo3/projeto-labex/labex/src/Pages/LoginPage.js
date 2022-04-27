// Para fazermos login como administrador
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToHomePage, goBack} from '../routes/coordinator'

export default function LoginPage() {
  const navigate = useNavigate()

  // const goToHomePage = () =>{
  //   navigate("/admin/trips/list")
  // }

  // const goBack = () =>{
  //   navigate(-1)
  // }

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToHomePage(navigate)}>Entrar</button>
    </div>
  )
}
