// Para fazermos login como administrador
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const goToHomePage = () =>{
    navigate("/admin/trips/list")
  }

  const goBack = () =>{
    navigate(-1)
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToHomePage} >Entrar</button>
    </div>
  )
}
