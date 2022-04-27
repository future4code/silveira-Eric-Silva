// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToListTripPage, goToLoginPage} from '../routes/coordinator'


export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={()=>goToListTripPage(navigate)}>Lista de Viagem</button>
      <button onClick={()=>goToLoginPage(navigate)}>Área de Admin</button>
    </div>
  )
}
