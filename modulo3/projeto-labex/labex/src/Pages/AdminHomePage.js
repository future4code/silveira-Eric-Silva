// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToCreateTripPage, goBack} from '../routes/coordinator'

export default function AdminHomePage() {
  const navigate = useNavigate()

  // const goToCreateTripPage = () =>{
  //   navigate("/admin/trips/:id")  
  // }
  // const goBack = () =>{
  //   navigate(-1)
  // }

  return (
    <div>
      <h1>AdminHomePage</h1>
      <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button>Logout</button>
    </div>
  )
}
