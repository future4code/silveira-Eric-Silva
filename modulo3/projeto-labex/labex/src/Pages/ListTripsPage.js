// Para vermos todas as viagens
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToApplicationFormPage, goBack} from '../routes/coordinator'

export default function ListTripsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>LISTA DE VIAGENS</h1>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Inscreva-se</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
