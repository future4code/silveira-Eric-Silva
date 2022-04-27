// Para vermos todas as viagens
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToApplicationFormPage, goBack} from '../routes/coordinator'

export default function ListTripsPage() {
  const navigate = useNavigate()

  // const goToApplicationFormPage = () =>{
  //   navigate("/trips/application") 
  // }
  // const goBack = () =>{
  //   navigate(-1)
  // }
  return (
    <div>
      <h1>ListTripsPage</h1>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Inscreva-se</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
