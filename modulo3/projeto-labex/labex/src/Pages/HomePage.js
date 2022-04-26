// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomePage() {
  const navigate = useNavigate()

  const goToListTripPage = () => {
    navigate("/trips/list")
  }
  const goToLoginPage = () =>{
    navigate("/login")
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={goToListTripPage}>Lista de Viagem</button>
      <button onClick={goToLoginPage}>Área de Admin</button>
    </div>
  )
}
